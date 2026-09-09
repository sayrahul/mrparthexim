import type { Metadata, Viewport } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import MobileBottomNav from '@/components/common/MobileBottomNav';
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp';
import { siteConfig } from '@/config/siteConfig';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#071A2B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mrparthexim.com'),
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline} | Indian Export & Sourcing Business`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'MrParthExim connects international buyers with quality Indian products through a focused, transparent, and buyer-first export approach. Based in Chhatrapati Sambhajinagar, Maharashtra, targeting the UAE and global markets.',
  keywords: [
    'MrParthExim',
    'Indian Exporter',
    'Chhatrapati Sambhajinagar Exporter',
    'Maharashtra Export',
    'UAE Indian Products Import',
    'Spices Exporter India',
    'Red Chilli Export',
    'Cotton Textiles Export',
    'Indian Dry Fruits Cashews',
    'FMCG Sourcing India',
    'Your Trust Our Promise',
  ],
  authors: [{ name: siteConfig.founder }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mrparthexim.com',
    siteName: siteConfig.name,
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description:
      'Connecting quality Indian products with opportunities in international markets. Initial commercial focus: UAE.',
    images: [
      {
        url: '/images/hero/hero-shipping.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - India to UAE Export`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description:
      'Connecting quality Indian products with opportunities in international markets. Initial commercial focus: UAE.',
    images: ['/images/hero/hero-shipping.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    alternateName: 'MrParthExim',
    url: 'https://www.mrparthexim.com',
    logo: 'https://www.mrparthexim.com/images/logo.png',
    slogan: siteConfig.tagline,
    founder: {
      '@type': 'Person',
      name: siteConfig.founder,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${siteConfig.address.street}, ${siteConfig.address.road}`,
      addressLocality: 'Chhatrapati Sambhajinagar',
      addressRegion: 'Maharashtra',
      postalCode: siteConfig.address.pincode,
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+91-${siteConfig.phone}`,
      contactType: 'sales',
      availableLanguage: ['English', 'Hindi', 'Marathi'],
    },
  };

  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white text-slate-800">
        <Header />
        <main className="flex-1 pb-safe-bottom">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <MobileBottomNav />
      </body>
    </html>
  );
}
