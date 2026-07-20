import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://offshorebookkeepers.com'), title: { default: 'Offshore Bookkeepers | Offshore outsourcing guides', template: '%s | Offshore Bookkeepers' }, description: 'Stealth Agents-style guides for offshore bookkeepers: services, onboarding, role scope, and provider questions.', openGraph: { title: 'Offshore Bookkeepers', description: 'Practical outsourcing guides for business teams.', url: 'https://offshorebookkeepers.com', siteName: 'Offshore Bookkeepers', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
