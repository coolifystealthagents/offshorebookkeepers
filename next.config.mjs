/** @type {import("next").NextConfig} */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://acrtracking.stealthagents.us https://static.cloudflareinsights.com",
  "connect-src 'self' https://acrtracking.stealthagents.us https://cloudflareinsights.com",
  "img-src 'self' data: https:",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "frame-src 'self' https://go.oncehub.com https://*.oncehub.com https://*.scheduleonce.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
].join('; ');

const nextConfig = {
  output: 'standalone',
  outputFileTracingRoot: process.cwd(),
  async headers() {
    return [{ source: '/(.*)', headers: [
      { key: 'Content-Security-Policy', value: csp },
      { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ] }];
  },
  async redirects() {
    return [
      { source: '/contact', destination: '/contact-us', permanent: true },
      { source: '/cancellation', destination: '/cancellation-policy', permanent: true },
      { source: '/blog/page/1', destination: '/blog', permanent: true },
      { source: '/services/admin-support', destination: '/services/accounts-payable-processing', permanent: true },
      { source: '/services/operations-support', destination: '/services/month-end-close-support', permanent: true },
      { source: '/services/reporting-and-qa', destination: '/services/management-reporting-support', permanent: true },
      { source: '/blog/multi-entity-consolidation-handoff', destination: '/research/multi-entity-consolidation-handoff-research', permanent: true },
      { source: '/blog/top-25-bookkeeping-finance-outsourcing-companies', destination: '/blog/bookkeeping-outsourcing-due-diligence-checklist', permanent: true },
    ];
  },
};

export default nextConfig;
