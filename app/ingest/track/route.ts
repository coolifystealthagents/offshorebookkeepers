import { type NextRequest } from 'next/server';

const TRACKING_API = 'https://acrtracking.stealthagents.us/api/track';
const SITE_ID = 'offshore-bookkeepers';
const MAX_BODY_BYTES = 256_000;
const MAX_EVENTS = 100;
const WINDOW_MS = 60_000;
const MAX_RATE_KEYS = 1_000;
const attempts = new Map<string, { count: number; resetAt: number }>();
export const runtime = 'nodejs';

type TrackingPayload = {
  site_id?: unknown;
  events?: unknown;
};

function clientIp(request: NextRequest) {
  const value = request.headers.get('cf-connecting-ip')?.trim() || '';
  return value.length <= 64 && /^[0-9a-f:.]+$/i.test(value) ? value : '0.0.0.0';
}

function acceptedOrigin(request: NextRequest, origin: string | null) {
  if (!origin) return false;
  try {
    const parsed = new URL(origin);
    if (parsed.origin === 'https://offshorebookkeepers.com' || parsed.origin === 'https://www.offshorebookkeepers.com') return true;
    const loopback = parsed.hostname === 'localhost' || parsed.hostname === '127.0.0.1' || parsed.hostname === '[::1]';
    return loopback && (parsed.host === request.headers.get('host') || parsed.host === request.nextUrl.host);
  } catch {
    return false;
  }
}

async function readBoundedBody(request: NextRequest) {
  if (!request.body) return '';
  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let body = '';
  let bytes = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    bytes += value.byteLength;
    if (bytes > MAX_BODY_BYTES) {
      await reader.cancel();
      return null;
    }
    body += decoder.decode(value, { stream: true });
  }
  return body + decoder.decode();
}

function limited(key: string, max: number) {
  const now = Date.now();
  const current = attempts.get(key);
  if (current && current.resetAt <= now) attempts.delete(key);
  if (attempts.size >= MAX_RATE_KEYS) {
    for (const [storedKey, bucket] of attempts) if (bucket.resetAt <= now) attempts.delete(storedKey);
  }
  if (!attempts.has(key) && attempts.size >= MAX_RATE_KEYS) return true;
  const bucket = attempts.get(key);
  if (!bucket) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (bucket.count >= max) return true;
  bucket.count += 1;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get('origin');
    const contentType = request.headers.get('content-type') || '';
    const declaredLength = Number(request.headers.get('content-length') || '0');
    if (!acceptedOrigin(request, origin)
      || (!contentType.includes('application/json') && !contentType.includes('text/plain'))
      || !Number.isFinite(declaredLength)
      || declaredLength > MAX_BODY_BYTES) {
      return Response.json({ status: 'error', detail: 'Invalid request' }, { status: 400 });
    }

    const ip = clientIp(request);
    if (limited(ip, 120) || limited('global', 2_000)) return Response.json({ status: 'error', detail: 'Rate limited' }, { status: 429 });

    const body = await readBoundedBody(request);
    if (body === null) {
      return Response.json({ status: 'error', detail: 'Payload too large' }, { status: 413 });
    }

    const payload = JSON.parse(body) as TrackingPayload;
    if (payload.site_id !== SITE_ID
      || !Array.isArray(payload.events)
      || payload.events.length < 1
      || payload.events.length > MAX_EVENTS
      || payload.events.some((event) => !event || typeof event !== 'object' || typeof (event as { event_type?: unknown }).event_type !== 'string')) {
      return Response.json({ status: 'error', detail: 'Invalid tracking payload' }, { status: 422 });
    }

    const upstream = await fetch(TRACKING_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': request.headers.get('user-agent') || '',
        'Accept-Language': request.headers.get('accept-language') || '',
        'X-Forwarded-For': ip,
        'X-ACR-Client-IP': ip,
      },
      body,
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000),
    });
    const upstreamBody = [204, 205, 304].includes(upstream.status) ? null : await upstream.text();
    return new Response(upstreamBody, {
      status: upstream.status,
      headers: {
        'Content-Type': upstream.headers.get('content-type') || 'application/json',
        'Cache-Control': 'no-store',
      },
    });
  } catch {
    return Response.json({ status: 'error' }, { status: 502 });
  }
}
