import { NextRequest, NextResponse } from 'next/server';
import { canonicalRedirect } from './canonical-redirect';

export function proxy(request: NextRequest) {
  const destination = canonicalRedirect({
    host: request.headers.get('host'),
    cfVisitor: request.headers.get('cf-visitor'),
    forwardedProto: request.headers.get('x-forwarded-proto'),
    urlProtocol: request.nextUrl.protocol,
    pathname: request.nextUrl.pathname,
    search: request.nextUrl.search,
  });

  return destination
    ? NextResponse.redirect(destination, 308)
    : NextResponse.next();
}
