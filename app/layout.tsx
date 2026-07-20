import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://offshorebookkeepers.com'), title: { default: 'Offshore Bookkeepers | Plan an offshore bookkeeping role', template: '%s | Offshore Bookkeepers' }, description: 'Plan offshore bookkeeping support for monthly close, AP, AR, reconciliations, reporting, access, and controller review.', openGraph: { title: 'Offshore Bookkeepers', description: 'Practical guides for planning and reviewing offshore bookkeeping work.', url: 'https://offshorebookkeepers.com', siteName: 'Offshore Bookkeepers', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
