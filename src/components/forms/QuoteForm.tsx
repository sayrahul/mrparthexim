'use client';

import React, { useState } from 'react';
import { productCategories } from '@/data/productsData';
import { siteConfig, getWhatsAppUrl } from '@/config/siteConfig';
import { Send, CheckCircle2, MessageCircle, AlertCircle, Loader2, Paperclip, Building, User, Mail, Phone, Globe, Package, MapPin } from 'lucide-react';

interface FormState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  category: string;
  product: string;
  quantity: string;
  packagingPreference: string;
  destinationPort: string;
  message: string;
}

export default function QuoteForm({ defaultProduct = '' }: { defaultProduct?: string }) {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: 'United Arab Emirates (UAE)',
    category: 'spices',
    product: defaultProduct,
    quantity: '',
    packagingPreference: 'Export Standard Bulk',
    destinationPort: 'Jebel Ali Port (Dubai, UAE)',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormState, string>> = {};

    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.companyName.trim()) errs.companyName = 'Company Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone / WhatsApp number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.product.trim()) errs.product = 'Please specify the product or requirement';
    if (!formData.destinationPort.trim()) errs.destinationPort = 'Destination Port is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Realistic mock submission (preparing for future API integration)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const generateWhatsAppInquiryMessage = () => {
    return `Hello MrParthExim, I would like to request a quote:
- Name: ${formData.fullName}
- Company: ${formData.companyName}
- Product: ${formData.product} (${formData.category})
- Quantity: ${formData.quantity || 'To be discussed'}
- Packaging: ${formData.packagingPreference}
- Destination: ${formData.destinationPort}
- Message: ${formData.message || 'Please provide quotation and specifications.'}`;
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h3 className="font-display text-2xl font-bold text-slate-900">
            Thank you for your inquiry.
          </h3>
          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
            Your requirement has been received. Our team will review the details and get back to
            you with initial specification alignment and commercial parameters.
          </p>
        </div>

        <div className="p-4 bg-blue-50/70 rounded-xl text-left border border-blue-100 text-xs text-slate-700 space-y-1.5 max-w-md mx-auto">
          <p className="font-semibold text-[#07579F]">Requirement Summary:</p>
          <p><strong className="text-slate-800">Product:</strong> {formData.product}</p>
          <p><strong className="text-slate-800">Destination:</strong> {formData.destinationPort}</p>
          <p><strong className="text-slate-800">Inquirer:</strong> {formData.fullName} ({formData.companyName})</p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={getWhatsAppUrl(generateWhatsAppInquiryMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            <span>Forward on WhatsApp for Priority</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: '',
                companyName: '',
                email: '',
                phone: '',
                country: 'United Arab Emirates (UAE)',
                category: 'spices',
                product: '',
                quantity: '',
                packagingPreference: 'Export Standard Bulk',
                destinationPort: 'Jebel Ali Port (Dubai, UAE)',
                message: '',
              });
            }}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
          Request an Export Quotation
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Share your product specification, estimated container or bulk volume, and destination port.
        </p>
      </div>

      {/* Row 1: Contact Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center space-x-1">
            <User className="w-3.5 h-3.5 text-slate-400" />
            <span>Full Name *</span>
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Tariq Al Mansoori"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
              errors.fullName
                ? 'border-red-500 focus:ring-red-200 bg-red-50/20'
                : 'border-slate-300 focus:border-[#07579F] focus:ring-blue-100'
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1 flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center space-x-1">
            <Building className="w-3.5 h-3.5 text-slate-400" />
            <span>Company / Trading Name *</span>
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="e.g. Gulf Trading LLC"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
              errors.companyName
                ? 'border-red-500 focus:ring-red-200 bg-red-50/20'
                : 'border-slate-300 focus:border-[#07579F] focus:ring-blue-100'
            }`}
          />
          {errors.companyName && (
            <p className="text-xs text-red-600 mt-1 flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.companyName}</span>
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Communication */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center space-x-1">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>Business Email *</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="buyer@company.com"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
              errors.email
                ? 'border-red-500 focus:ring-red-200 bg-red-50/20'
                : 'border-slate-300 focus:border-[#07579F] focus:ring-blue-100'
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1 flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center space-x-1">
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            <span>Phone / WhatsApp *</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+971 50 123 4567"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
              errors.phone
                ? 'border-red-500 focus:ring-red-200 bg-red-50/20'
                : 'border-slate-300 focus:border-[#07579F] focus:ring-blue-100'
            }`}
          />
          {errors.phone && (
            <p className="text-xs text-red-600 mt-1 flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>
      </div>

      {/* Row 3: Product Category & Product Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center space-x-1">
            <Package className="w-3.5 h-3.5 text-slate-400" />
            <span>Product Category</span>
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-[#07579F] focus:ring-2 focus:ring-blue-100 bg-white"
          >
            {productCategories.map((c) => (
              <option key={c.id} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center space-x-1">
            <span>Product / Item Name *</span>
          </label>
          <input
            type="text"
            value={formData.product}
            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
            placeholder="e.g. Guntur Red Chilli / Cotton Fabric"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
              errors.product
                ? 'border-red-500 focus:ring-red-200 bg-red-50/20'
                : 'border-slate-300 focus:border-[#07579F] focus:ring-blue-100'
            }`}
          />
          {errors.product && (
            <p className="text-xs text-red-600 mt-1 flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.product}</span>
            </p>
          )}
        </div>
      </div>

      {/* Row 4: Quantity & Packaging */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Estimated Quantity
          </label>
          <input
            type="text"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            placeholder="e.g. 1 x 20ft Container / 5 Metric Tons"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#07579F] focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Packaging Preference
          </label>
          <select
            value={formData.packagingPreference}
            onChange={(e) => setFormData({ ...formData, packagingPreference: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-[#07579F] focus:ring-2 focus:ring-blue-100 bg-white"
          >
            <option value="Export Standard Bulk">Export Standard Bulk (PP / Jute Bags)</option>
            <option value="Vacuum Packaging">Vacuum Packaging (for Nuts / Dried Goods)</option>
            <option value="Retail Pouches">Retail Pouches / Pre-packed</option>
            <option value="Private Label Custom">Private Label Custom Branding</option>
            <option value="Open to Recommendation">Open to Recommendation</option>
          </select>
        </div>
      </div>

      {/* Row 5: Country & Destination Port */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center space-x-1">
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <span>Buyer Country</span>
          </label>
          <input
            type="text"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            placeholder="e.g. United Arab Emirates"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-[#07579F] focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center space-x-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>Destination Port *</span>
          </label>
          <input
            type="text"
            value={formData.destinationPort}
            onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
            placeholder="e.g. Jebel Ali Port, Dubai (UAE)"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
              errors.destinationPort
                ? 'border-red-500 focus:ring-red-200 bg-red-50/20'
                : 'border-slate-300 focus:border-[#07579F] focus:ring-blue-100'
            }`}
          />
          {errors.destinationPort && (
            <p className="text-xs text-red-600 mt-1 flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.destinationPort}</span>
            </p>
          )}
        </div>
      </div>

      {/* Row 6: Detailed Message / Spec Sheet */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
          Detailed Specifications / Buyer Notes
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Specify target grade, acceptable moisture threshold, target pricing, or required delivery timelines..."
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#07579F] focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Simulated Attachment Box */}
      <div className="p-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center space-x-2">
          <Paperclip className="w-4 h-4 text-slate-400" />
          <span>Attach RFQ Specification Sheet (PDF, DOC, Images - max 10MB)</span>
        </div>
        <span className="text-[#07579F] font-semibold cursor-pointer hover:underline">
          Browse Files
        </span>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-xl bg-[#D71925] hover:bg-[#b5131e] text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 disabled:opacity-75 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Processing Inquiry...</span>
            </>
          ) : (
            <>
              <span>Request a Quote</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      <div className="text-center text-xs text-slate-400 pt-1">
        Direct commercial desk: +91 {siteConfig.phone} • Chhatrapati Sambhajinagar, Maharashtra, India
      </div>
    </form>
  );
}
