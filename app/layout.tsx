import { AcrClient } from './acr-client';
import Script from 'next/script';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://offshorebookkeepers.com'),
  title: { default: 'Offshore Bookkeepers | Plan an offshore bookkeeping role', template: '%s | Offshore Bookkeepers' },
  description: 'Plan offshore bookkeeping support for monthly close, AP, AR, reconciliations, reporting, access, and controller review.',
  openGraph: { title: 'Offshore Bookkeepers', description: 'Practical guides for planning and reviewing offshore bookkeeping work.', url: 'https://offshorebookkeepers.com', siteName: 'Offshore Bookkeepers', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}<AcrClient /><Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'offshore-bookkeepers',endpoint:'/ingest/track',debug:false,funnelSteps:[{path:'/contact-us',step:1,label:'Form Page',event:'funnel_form_page'}]};`}</Script></body></html>;
}
