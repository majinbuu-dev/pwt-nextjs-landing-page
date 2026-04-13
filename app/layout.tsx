import type { Metadata } from 'next';
import { Newsreader, Inter } from 'next/font/google';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Complete E-commerce & Payment Solutions | PwT Tech Solutions | From $1,999',
  description: 'Launch your e-commerce business in 2 weeks. Complete package includes website development, payment gateway integration (Stripe, PayPal, Airwallex), and marketing support. Starting at $1,999. Save $500 on bundle.',
  keywords: 'e-commerce solutions, payment gateway integration, online store development, Stripe integration, PayPal setup, Airwallex, marketing support, e-commerce USA, startup solutions',
  authors: [{ name: 'PwT Tech Solutions' }],
  robots: 'index, follow',
  alternates: { canonical: 'https://www.pwtsolutions.com/' },
  openGraph: {
    type: 'website',
    url: 'https://www.pwtsolutions.com/',
    title: 'Complete E-commerce & Payment Solutions | PwT Tech Solutions',
    description: 'Launch your e-commerce business in 2 weeks. Complete package includes website, payment gateway, and marketing support. Starting at $1,999.',
    images: ['https://www.pwtsolutions.com/images/hero.png'],
    siteName: 'PwT Tech Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete E-commerce & Payment Solutions | PwT Tech Solutions',
    description: 'Launch your e-commerce business in 2 weeks. Complete package includes website, payment gateway, and marketing support. Starting at $1,999.',
    images: ['https://www.pwtsolutions.com/images/hero.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable}`}>
      <body className="font-neue antialiased bg-gray-50">{children}</body>
    </html>
  );
}
