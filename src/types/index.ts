export interface CompanyConfig {
  name: string;
  legalName?: string;
  tagline: string;
  founder: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  emailDomainNote?: string;
  address: {
    street: string;
    landmark: string;
    road: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    formatted: string;
  };
  businessStage: {
    status: string;
    description: string;
    confirmedTargetMarket: string;
    futureTargetMarkets: string[];
  };
  social: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
  legal?: {
    gstNotice?: string;
    iecNotice?: string;
  };
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  iconName: string;
  image: string;
  popularItems: string[];
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  fullOverview: string;
  origin: string;
  availableVariants: string[];
  samplePackaging: string[];
  highlights: string[];
  exportSuitability: string;
  buyerNote: string;
  image: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  authorRole: string;
  image: string;
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'sourcing' | 'quotation' | 'shipping' | 'general';
}

export interface TradeStep {
  stepNumber: string;
  title: string;
  description: string;
  detail: string;
  icon: string;
}

export interface MarketDestination {
  id: string;
  region: string;
  country: string;
  status: 'confirmed_target' | 'future_opportunity';
  highlight: string;
  description: string;
  portsOrHubs: string[];
}
