'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ACR_TRACKER_SRC = 'https://acrtracking.stealthagents.us/v1/tracker.js';
let trackerLoad: Promise<void> | null = null;

export function loadAcrTracker() {
  const trackerWindow = window as Window & { acrTracker?: unknown };
  if (trackerWindow.acrTracker) return Promise.resolve();
  if (trackerLoad) return trackerLoad;

  trackerLoad = new Promise<void>((resolve, reject) => {
    let script = document.querySelector<HTMLScriptElement>(`script[src="${ACR_TRACKER_SRC}"]`);
    const created = !script;
    script ||= document.createElement('script');

    let timeout = 0;
    const cleanup = () => {
      window.clearTimeout(timeout);
      script.removeEventListener('load', loaded);
      script.removeEventListener('error', failed);
    };
    const loaded = () => {
      cleanup();
      if (trackerWindow.acrTracker) resolve();
      else reject(new Error('ACR tracker did not initialize'));
    };
    const failed = () => {
      cleanup();
      reject(new Error('ACR tracker failed to load'));
    };
    timeout = window.setTimeout(() => {
      cleanup();
      if (created) script.remove();
      reject(new Error('ACR tracker load timed out'));
    }, 3_000);

    script.addEventListener('load', loaded, { once: true });
    script.addEventListener('error', failed, { once: true });
    if (created) {
      script.src = ACR_TRACKER_SRC;
      script.async = true;
      document.head.appendChild(script);
    }
  }).catch((error) => {
    trackerLoad = null;
    throw error;
  });
  return trackerLoad;
}

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48) || 'action';
}

export function AcrClient() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname !== '/contact-us') void loadAcrTracker().catch(() => {});

    const labelCtas = () => {
      const used = new Set<string>();
      document.querySelectorAll<HTMLElement>('a[href],button:not([type="submit"]),[role="button"]').forEach((element) => {
        if (element.closest('form') || element.id.startsWith('cta-')) {
          if (element.id) used.add(element.id);
          return;
        }
        const scope = element.closest('header')
          ? 'global-header'
          : element.closest('footer')
            ? 'global-footer'
            : slug(location.pathname === '/' ? 'home' : location.pathname);
        const raw = slug(element.textContent || element.getAttribute('aria-label') || element.getAttribute('href') || 'action');
        let id = `cta-${scope}-${raw}`;
        let suffix = 2;
        while (used.has(id) || document.getElementById(id)) id = `cta-${scope}-${raw}-${suffix++}`;
        element.id = id;
        used.add(id);
      });
      document.querySelectorAll<HTMLIFrameElement>('iframe[src*="oncehub.com"],iframe[src*="scheduleonce.com"]').forEach((frame) => {
        const wrapper = frame.parentElement;
        if (wrapper && !wrapper.dataset.acrTrack) wrapper.dataset.acrTrack = 'contact-booking-iframe';
      });
    };

    labelCtas();
    const observer = new MutationObserver(labelCtas);
    observer.observe(document.documentElement, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
