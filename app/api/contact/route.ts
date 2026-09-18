import { after, type NextRequest, NextResponse } from 'next/server';
import { sendLeadFallbackToMattermost } from '../../lib/lead-fallback-mattermost';

const MAX_BODY_BYTES = 64_000;
const MAX_FIELD_LENGTH = 4_000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WINDOW_MS = 15 * 60_000;
const MAX_RATE_KEYS = 1_000;
const attempts = new Map<string, { count: number; resetAt: number }>();
const personalEmailDomains = new Set([
  'gmail.com', 'googlemail.com', 'yahoo.com', 'hotmail.com', 'outlook.com',
  'live.com', 'icloud.com', 'aol.com', 'proton.me', 'protonmail.com',
]);

function text(form: URLSearchParams, key: string, max = MAX_FIELD_LENGTH) {
  return (form.get(key) || '').trim().slice(0, max);
}

function errorPage(status: number, message = 'Please go back and try again.') {
  return new Response(`<!doctype html><html lang="en"><meta charset="utf-8"><title>Submission problem</title><main><h1>We could not send your request.</h1><p>${message}</p><a href="/contact-us">Return to the contact form</a></main>`, {
    status,
    headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' },
  });
}

function ip(request: NextRequest) {
  const value = request.headers.get('cf-connecting-ip')?.trim() || '';
  return value.length <= 64 && /^[0-9a-f:.]+$/i.test(value) ? value : 'unknown';
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
  const contentType = request.headers.get('content-type') || '';
  const declaredLength = Number(request.headers.get('content-length') || 0);
  const origin = request.headers.get('origin');
  if (!acceptedOrigin(request, origin)
    || !Number.isFinite(declaredLength)
    || declaredLength > MAX_BODY_BYTES
    || !contentType.includes('application/x-www-form-urlencoded')) {
    return errorPage(400);
  }
  if (limited(`ip:${ip(request)}`, 10)) return errorPage(429);

  let raw = '';
  try {
    const bounded = await readBoundedBody(request);
    if (bounded === null) return errorPage(413);
    raw = bounded;
  } catch {
    return errorPage(400);
  }

  const form = new URLSearchParams(raw);

  if (text(form, 'f0') || text(form, 'websiteConfirm') || text(form, 'website_confirm') || text(form, 'website_url') || text(form, 'company_homepage')) {
    return errorPage(400);
  }

  const first = text(form, 'firstName', 100);
  const last = text(form, 'lastName', 100);
  const name = `${first} ${last}`.trim() || text(form, 'name', 200);
  const email = text(form, 'email', 320).toLowerCase();
  const emailDomain = email.split('@').pop() || '';
  const countryCode = text(form, 'countryCode', 8);
  const phoneLocal = text(form, 'phoneLocal', 100);
  const phone = text(form, 'phone', 100) || `${countryCode} ${phoneLocal}`.trim();
  const business = text(form, 'company', 300) || text(form, 'companyName', 300);
  const companySize = text(form, 'companySize', 100);
  const positions = text(form, 'positions', 100) || text(form, 'role', 100);
  const referral = text(form, 'referral', 300) || text(form, 'source', 300);
  const referralSpecify = text(form, 'referralSpecify', 300);
  const formMessage = text(form, 'message');

  if (!name || !email || !EMAIL_RE.test(email) || personalEmailDomains.has(emailDomain)) {
    return errorPage(422, 'Please use a valid business email address and try again.');
  }
  if (!phoneLocal || !business || !companySize || !positions || !referral || !formMessage || (referral === 'Other' && !referralSpecify)) {
    return errorPage(422, 'Please complete every required field and try again.');
  }
  if (limited(`email:${email}`, 3)) return errorPage(429);
  if (limited('global', 300)) return errorPage(429);

  const pageUrl = request.headers.get('referer') || new URL('/contact-us', request.url).toString();
  const message = [
    formMessage,
    text(form, 'needs'),
    text(form, 'details'),
    `Positions: ${positions}`,
    `Company size: ${companySize}`,
    text(form, 'website') ? `Website: ${text(form, 'website')}` : '',
    referralSpecify ? `Referral detail: ${referralSpecify}` : '',
  ].filter(Boolean).join('\n');
  const payload = {
    full_name: name,
    email,
    phone,
    company_name: business,
    message,
    how_they_heard: referral,
    client_event_id: crypto.randomUUID(),
    attribution: {
      source_page: pageUrl,
      landing_page: pageUrl,
      referrer: request.headers.get('referer') || '',
      page_journey: ['Contact form'],
    },
  };

  const token = process.env.LEAD_AUTH_TOKEN;
  const endpoint = process.env.LEAD_INGEST_URL || 'https://leads.stealthagents.com/api/leads';
  if (!token) return errorPage(503);

  try {
    const upstream = await fetch(endpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-lead-token': token },
      body: JSON.stringify(payload),
      cache: 'no-store',
      signal: AbortSignal.timeout(12_000),
    });
    const result = await upstream.json().catch(() => null) as { ok?: boolean } | null;
    if (!upstream.ok || result?.ok !== true) return errorPage(502);
  } catch {
    return errorPage(502);
  }

  after(() => sendLeadFallbackToMattermost({
    name, email, phone, business, message, companySize, positions, referral, pageUrl,
    userAgent: request.headers.get('user-agent') || '',
  }));

  const wantsJson = request.headers.get('accept')?.includes('application/json') ?? false;
  const response = wantsJson
    ? NextResponse.json({ ok: true })
    : NextResponse.redirect(new URL('/thank-you', origin!), 303);
  response.cookies.set('ob_lead_accepted', '1', {
    httpOnly: true,
    sameSite: 'lax',
    secure: request.nextUrl.protocol === 'https:',
    path: '/thank-you',
    maxAge: 300,
  });
  return response;
}
