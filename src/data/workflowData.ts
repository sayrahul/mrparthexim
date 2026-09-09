import { TradeStep, MarketDestination } from '@/types';

export const exportWorkflowSteps: TradeStep[] = [
  {
    stepNumber: '01',
    title: 'Share Your Requirement',
    description: 'Submit your product specifications, target volume, packaging preference, and destination port.',
    detail: 'Whether you need raw spices, cotton fabrics, dry fruits, or custom packaged items, our team reviews your RFQ to clarify grade thresholds, delivery timeline, and port requirements.',
    icon: 'FileText',
  },
  {
    stepNumber: '02',
    title: 'Product & Supplier Sourcing',
    description: 'We tap into vetted agricultural mandis and manufacturing clusters across Maharashtra and India.',
    detail: 'Our direct ground access enables us to bypass unnecessary layers of brokers, identifying reliable growers and processors committed to strict export quality benchmarks.',
    icon: 'Search',
  },
  {
    stepNumber: '03',
    title: 'Specification Alignment',
    description: 'Verification of physical samples, moisture levels, lab test parameters, and packaging design.',
    detail: 'Before commercial commitments are finalized, representative product samples or assay reports are reviewed to ensure complete alignment with your buyer standards and importing country regulations.',
    icon: 'CheckCircle2',
  },
  {
    stepNumber: '04',
    title: 'Quotation & Confirmation',
    description: 'Transparent commercial terms, Proforma Invoice (PI), and agreed Incoterms (FOB / CIF).',
    detail: 'We provide structured pricing detailing product costs, export packaging, ocean/air freight estimates, and shipping schedules with no hidden line items.',
    icon: 'CreditCard',
  },
  {
    stepNumber: '05',
    title: 'Export Coordination',
    description: 'Production monitoring, export quality packing, palletization, and container staging.',
    detail: 'We oversee packaging integrity—utilizing moisture barriers, poly-wrap, and heavy-duty corrugated cartons—and coordinate inland transport to container freight stations (CFS).',
    icon: 'PackageCheck',
  },
  {
    stepNumber: '06',
    title: 'Shipment & Delivery Coordination',
    description: 'Customs clearance, Bill of Lading dispatch, and arrival coordination at destination port.',
    detail: 'We manage phytosanitary certificates, certificates of origin, and shipping documents to facilitate rapid customs clearance at Jebel Ali or your designated port of entry.',
    icon: 'Ship',
  },
];

export const targetMarkets: MarketDestination[] = [
  {
    id: 'uae',
    region: 'Middle East',
    country: 'United Arab Emirates (UAE)',
    status: 'confirmed_target',
    highlight: 'Primary Confirmed Focus Market',
    description: 'Our primary international market focus. Supported by fast transit times from western Indian ports (JNPT) to Jebel Ali (3-5 days) and the India-UAE CEPA framework.',
    portsOrHubs: ['Jebel Ali Port, Dubai', 'Port Khalifa, Abu Dhabi', 'Sharjah Container Terminal'],
  },
  {
    id: 'saudi-arabia',
    region: 'Middle East',
    country: 'Saudi Arabia',
    status: 'future_opportunity',
    highlight: 'Future Growth Corridor',
    description: 'Substantial market potential for high-grade Indian spices, dry fruits, and food staples servicing commercial culinary and wholesale retail channels.',
    portsOrHubs: ['Jeddah Islamic Port', 'King Abdul Aziz Port, Dammam'],
  },
  {
    id: 'wider-middle-east',
    region: 'Middle East & GCC',
    country: 'Oman, Qatar, Kuwait & Bahrain',
    status: 'future_opportunity',
    highlight: 'Regional Market Opportunity',
    description: 'Established demand for Indian agricultural products and household commodities across expanding Gulf retail networks.',
    portsOrHubs: ['Port Sultan Qaboos', 'Hamad Port', 'Shuwaikh Port'],
  },
  {
    id: 'africa',
    region: 'East & North Africa',
    country: 'Kenya, Tanzania & Egypt',
    status: 'future_opportunity',
    highlight: 'Emerging Trade Horizon',
    description: 'Strategic opportunities in consumer packaged goods, textile fabrics, and staple grains leveraging direct Indian Ocean maritime corridors.',
    portsOrHubs: ['Mombasa Port', 'Dar es Salaam', 'Alexandria'],
  },
  {
    id: 'europe',
    region: 'European Union & UK',
    country: 'Selected European Hubs',
    status: 'future_opportunity',
    highlight: 'Long-term Quality Horizon',
    description: 'Future avenues for high-curcumin turmeric, certified organic spices, and premium natural cotton textiles meeting European compliance standards.',
    portsOrHubs: ['Rotterdam', 'Antwerp', 'Felixstowe'],
  },
];
