import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import ts from 'typescript';

const root = process.cwd();

function loadRedirectModule() {
  const source = fs.readFileSync(path.join(root, 'canonical-redirect.ts'), 'utf8');
  const js = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const module = { exports: {} };
  Function('exports', 'module', 'require', js)(module.exports, module, () => ({}));
  return module.exports;
}

const request = (overrides = {}) => ({
  host: 'offshorebookkeepers.com',
  cfVisitor: '{"scheme":"https"}',
  forwardedProto: 'https',
  urlProtocol: 'http:',
  pathname: '/services/month-end-close-support',
  search: '?source=redirect-test',
  ...overrides,
});

test('canonical redirect honors original visitor scheme and preserves path and query', () => {
  const { canonicalRedirect } = loadRedirectModule();
  assert.equal(
    canonicalRedirect(request({ cfVisitor: '{"scheme":"http"}' })),
    'https://offshorebookkeepers.com/services/month-end-close-support?source=redirect-test',
  );
  assert.equal(
    canonicalRedirect(request({ cfVisitor: null, forwardedProto: 'http, https' })),
    'https://offshorebookkeepers.com/services/month-end-close-support?source=redirect-test',
  );
  assert.equal(
    canonicalRedirect(request({ cfVisitor: '{malformed', forwardedProto: 'http' })),
    'https://offshorebookkeepers.com/services/month-end-close-support?source=redirect-test',
  );
});

test('canonical redirect sends exact www host to HTTPS apex without redirecting canonical HTTPS', () => {
  const { canonicalRedirect } = loadRedirectModule();
  assert.equal(
    canonicalRedirect(request({ host: 'www.offshorebookkeepers.com' })),
    'https://offshorebookkeepers.com/services/month-end-close-support?source=redirect-test',
  );
  assert.equal(canonicalRedirect(request()), null);
});

test('canonical redirect ignores lookalike, preview, internal, and unsupported proxy values', () => {
  const { canonicalRedirect } = loadRedirectModule();
  for (const host of ['eviloffshorebookkeepers.com', 'preview.offshorebookkeepers.com', 'offshorebookkeepers.com.internal', '127.0.0.1:4317']) {
    assert.equal(canonicalRedirect(request({ host, cfVisitor: '{"scheme":"http"}' })), null, host);
  }
  assert.equal(
    canonicalRedirect(request({ cfVisitor: '{"scheme":"ftp"}', forwardedProto: 'ftp', urlProtocol: 'https:' })),
    null,
  );
});

test('Next proxy delegates to the canonical redirect policy with a permanent response', () => {
  const source = fs.readFileSync(path.join(root, 'proxy.ts'), 'utf8');
  assert.match(source, /canonicalRedirect/);
  assert.match(source, /NextResponse\.redirect\(destination, 308\)/);
});
