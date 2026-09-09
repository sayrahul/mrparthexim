import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/common/PageHero';
import { blogPosts } from '@/data/blogData';
import { Clock, Calendar, User, ArrowLeft, ArrowRight, Share2, MessageCircle, FileText, CheckCircle2, Bookmark } from 'lucide-react';
import { getWhatsAppUrl } from '@/config/siteConfig';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Article Not Found' };

  return {
    title: `${post.title} | MrParthExim Trade Insights`,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHero
        badge={post.category}
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article Content */}
          <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8">
            {/* Meta info bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 text-xs text-slate-500">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1.5">
                  <User className="w-4 h-4 text-[#07579F]" />
                  <span className="font-semibold text-slate-800">{post.author}</span>
                  <span className="text-slate-400">({post.authorRole})</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{post.publishDate}</span>
                </div>
              </div>

              <div className="flex items-center space-x-1 text-slate-500 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#D71925]" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Main Featured Image */}
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Key Takeaways Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#07579F] uppercase tracking-wider">
                <Bookmark className="w-4 h-4" />
                <span>Executive Summary for Importers</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Body Paragraphs */}
            <div className="prose prose-slate max-w-none space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">
              {post.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Tags */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase mr-1">Tags:</span>
              {post.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium"
                >
                  #{t}
                </span>
              ))}
            </div>

            {/* Article Footer Actions */}
            <div className="p-6 rounded-2xl bg-[#071A2B] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs font-bold text-[#FFD400] uppercase">
                  Have a Question on this Topic?
                </div>
                <div className="text-sm text-slate-200">
                  Discuss trade specifications directly with our team.
                </div>
              </div>

              <div className="flex items-center space-x-3 shrink-0">
                <Link
                  href="/quote"
                  className="px-4 py-2 rounded-lg bg-[#D71925] hover:bg-[#b5131e] text-white text-xs font-bold transition-colors"
                >
                  Request a Quote
                </Link>
                <a
                  href={getWhatsAppUrl(`Hello MrParthExim, I was reading your article on "${post.title}" and would like to inquire further.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors flex items-center space-x-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Quick Author & Company Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <h3 className="font-display font-bold text-base text-slate-900">
                About MrParthExim
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                An emerging Indian export enterprise based in Chhatrapati Sambhajinagar, Maharashtra,
                connecting international buyers with verified Indian agricultural commodities,
                spices, textiles, and packaged goods.
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs text-slate-500">
                <p>📍 Paithan Road, Chhatrapati Sambhajinagar</p>
                <p className="mt-0.5">🇦🇪 Confirmed Focus: India → UAE</p>
              </div>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-display font-bold text-base text-slate-900">
                Related Trade Guides
              </h3>
              <div className="space-y-4">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/blog/${rel.slug}`}
                    className="block group space-y-1.5 pb-3 border-b border-slate-100 last:border-0 last:pb-0"
                  >
                    <span className="text-[11px] font-semibold text-[#07579F]">
                      {rel.category}
                    </span>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-slate-800 group-hover:text-[#D71925] transition-colors leading-snug line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Back to Blog */}
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-xs font-bold text-[#07579F] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all trade articles</span>
            </Link>
          </aside>

        </div>
      </div>
    </div>
  );
}
