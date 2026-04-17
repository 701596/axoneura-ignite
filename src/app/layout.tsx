import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  metadataBase: new URL('https://axoneura.in'),
  title: 'Axoneura - Building Products that Matter',
  description: 'Axoneura is a digital product agency specializing in strategy, design, and engineering.',
  alternates: {
    languages: {
      'en-IN': 'https://axoneura.in',
      'x-default': 'https://axoneura.in',
    },
  },
  openGraph: {
    siteName: 'Axoneura',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="alternate" hrefLang="en-IN" href="https://axoneura.in" />
        <link rel="alternate" hrefLang="x-default" href="https://axoneura.in" />
      </head>
      <body className={`${outfit.variable} font-sans antialiased bg-axn-near-black text-axn-white min-h-screen flex flex-col`}>
        <Providers>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
