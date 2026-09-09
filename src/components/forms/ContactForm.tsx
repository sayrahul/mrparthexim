'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.message.trim()) errs.message = 'Please type your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg text-center space-y-4 animate-in fade-in duration-200">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-display font-bold text-xl text-slate-900">Message Received</h3>
        <p className="text-sm text-slate-600 max-w-sm mx-auto">
          Thank you for contacting MrParthExim. Our trade team will review your message and respond promptly.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
          }}
          className="text-xs font-semibold text-[#07579F] hover:underline pt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-4">
      <div className="border-b border-slate-100 pb-3">
        <h3 className="font-display font-bold text-lg text-slate-900">Send Us a Direct Message</h3>
        <p className="text-xs text-slate-500">Inquiries typically answered within 24 hours.</p>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Your Name *</label>
        <div className="relative">
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Mr. Ahmed / Rajesh"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#07579F] focus:ring-2 focus:ring-blue-100 text-slate-900"
          />
        </div>
        {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Email Address *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="you@company.com"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#07579F] focus:ring-2 focus:ring-blue-100 text-slate-900"
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Phone / WhatsApp</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 / +971..."
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#07579F] focus:ring-2 focus:ring-blue-100 text-slate-900"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Subject</label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="e.g. Export Inquiry for Red Chilli & Spices"
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#07579F] focus:ring-2 focus:ring-blue-100 text-slate-900"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Message *</label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please share details regarding your inquiry..."
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#07579F] focus:ring-2 focus:ring-blue-100 text-slate-900"
        />
        {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 rounded-xl bg-[#07579F] hover:bg-[#054580] text-white font-bold text-sm transition-all duration-150 flex items-center justify-center space-x-2 disabled:opacity-70 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <span>Submit Message</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
