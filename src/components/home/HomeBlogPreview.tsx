import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogData';
import SectionHeading from '@/components/common/SectionHeading';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export default function HomeBlogPreview() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Trade Knowledge"
          title="Insights for Global Buyers"
          subtitle="Explore practical insights on Indian products, sourcing, export processes, packaging, and international trade dynamics."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#071A2B]/85 backdrop-blur-xs text-[#FFD400] text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-3 text-xs text-slate-400 mb-2">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.publishDate}</span>
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-[#07579F] transition-colors line-clamp-2 mb-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-xs font-semibold text-[#07579F] group-hover:text-[#D71925] transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-sm font-semibold transition-colors"
          >
            <span>Browse All 8 Educational Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
