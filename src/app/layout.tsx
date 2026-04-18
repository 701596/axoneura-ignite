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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness", "SoftwareApplication"],
              "name": "Axoneura",
              "url": "https://axoneura.in",
              "logo": "https://axoneura.in/favicon.png",
              "description": "Axoneura builds school management ERP, fee management software, websites, and digital marketing systems for schools and businesses across India.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lucknow",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "226001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 26.8467,
                "longitude": 80.9462
              },
              "telephone": "+917015964277",
              "email": "axoneura@gmail.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web, Windows, iOS, Android"
            })
          }}
        />
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
