import { CompanyConfig } from '@/types';

export const siteConfig: CompanyConfig = {
  name: 'MrParthExim',
  legalName: 'MrParthExim',
  tagline: 'Your Trust, Our Promise',
  founder: 'Mr. Rushikesh Pardeshi',
  phone: '9975195895',
  phoneDisplay: '+91 99751 95895',
  whatsappNumber: '919975195895',
  whatsappDisplay: '+91 99751 95895',
  email: 'info@mrparthexim', // Centralized email; domain suffix can be easily appended here
  emailDomainNote: 'Email domain configuration pending final domain registration. Editable in siteConfig.ts.',
  address: {
    street: 'Golwadi, Behind The Golden City Hospital',
    landmark: 'Behind The Golden City Hospital',
    road: 'Paithan Road',
    city: 'Chhatrapati Sambhajinagar (Aurangabad)',
    state: 'Maharashtra',
    pincode: '431001',
    country: 'India',
    formatted: 'Golwadi, Behind The Golden City Hospital, Paithan Road, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra - 431001, India',
  },
  businessStage: {
    status: 'New / Upcoming Export Business',
    description: 'MrParthExim is an emerging Indian export venture preparing to connect verified Indian product suppliers with international buyers, beginning with an initial focus on the UAE market.',
    confirmedTargetMarket: 'UAE',
    futureTargetMarkets: [
      'Saudi Arabia',
      'Middle East',
      'Africa',
      'Europe',
      'Other International Markets',
    ],
  },
  social: {
    linkedin: '#', // Placeholder link
    facebook: '#', // Placeholder link
    instagram: '#', // Placeholder link
    youtube: '#', // Placeholder link
  },
  legal: {
    gstNotice: 'Registration credentials and documentation available upon commercial transaction initiation.',
    iecNotice: 'Export licensing and merchant export documentation aligned with DGFT guidelines.',
  },
};

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Global Reach', href: '/global-reach' },
  { name: 'Why Choose Us', href: '/why-choose-us' },
  { name: 'How We Work', href: '/how-we-work' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const mobileBottomNavLinks = [
  { name: 'Home', href: '/', icon: 'Home' },
  { name: 'Products', href: '/products', icon: 'Package' },
  { name: 'Quote', href: '/quote', icon: 'FileText', isPrimary: true },
  { name: 'Blog', href: '/blog', icon: 'BookOpen' },
  { name: 'Contact', href: '/contact', icon: 'Phone' },
];

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMessage = `Hello MrParthExim, I am interested in exploring export products from India. Please share further details.`;
  const text = encodeURIComponent(customMessage || defaultMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export function getProductWhatsAppUrl(productName: string): string {
  const message = `Hello MrParthExim, I am interested in ${productName} products. Please share product and export details.`;
  return getWhatsAppUrl(message);
}
