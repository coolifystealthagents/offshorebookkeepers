export type CanonicalRedirectInput = {
  host: string | null;
  cfVisitor: string | null;
  forwardedProto: string | null;
  urlProtocol: string;
  pathname: string;
  search: string;
};

const APEX_HOST = 'offshorebookkeepers.com';
const WWW_HOST = 'www.offshorebookkeepers.com';
const CANONICAL_ORIGIN = `https://${APEX_HOST}`;

type HttpScheme = 'http' | 'https';

function httpScheme(value: unknown): HttpScheme | undefined {
  if (typeof value !== 'string') return undefined;
  const normalized = value.toLowerCase();
  return normalized === 'http' || normalized === 'https' ? normalized : undefined;
}

function cloudflareScheme(value: string | null): HttpScheme | undefined {
  if (!value) return undefined;
  try {
    const visitor = JSON.parse(value) as { scheme?: unknown } | null;
    return httpScheme(visitor?.scheme);
  } catch {
    return undefined;
  }
}

function normalizedHost(value: string | null): string {
  return (value || '').split(',')[0].trim().toLowerCase().replace(/:\d+$/, '');
}

export function canonicalRedirect(input: CanonicalRedirectInput): string | null {
  const host = normalizedHost(input.host);
  if (host !== APEX_HOST && host !== WWW_HOST) return null;

  const forwardedScheme = httpScheme(input.forwardedProto?.split(',')[0]?.trim());
  const requestScheme = httpScheme(input.urlProtocol.replace(/:$/, ''));
  const scheme = cloudflareScheme(input.cfVisitor) || forwardedScheme || requestScheme || 'https';

  if (host === APEX_HOST && scheme === 'https') return null;

  const destination = new URL(CANONICAL_ORIGIN);
  destination.pathname = input.pathname;
  destination.search = input.search;
  return destination.toString();
}
