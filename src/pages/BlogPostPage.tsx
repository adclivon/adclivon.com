import React from "react";
import { BlogPost } from "../types";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ArrowLeft, ArrowRight, Share2, Calendar, User, Clock, CheckCircle } from "lucide-react";

interface BlogPostPageProps {
  post: BlogPost;
  onNavigate: (path: string) => void;
  onBackToBlog: () => void;
  onOpenConsultationWithParams: (service?: string, budget?: string, details?: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  post,
  onNavigate,
  onBackToBlog,
  onOpenConsultationWithParams,
}) => {
  return (
    <div className="pb-24">
      <Breadcrumbs
        items={[{ label: "Blog", path: "/blog" }, { label: post.title }]}
        onNavigate={onNavigate}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {/* Back Button */}
        <button
          onClick={onBackToBlog}
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </button>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="text-blue-400 font-semibold uppercase tracking-wider">
              {post.category}
            </span>
            <span aria-hidden="true">·</span>
            <span>{post.publishedDate}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight font-display">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
            <div className="w-9 h-9 rounded-full bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400 font-bold font-mono">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <div className="text-white font-medium">{post.author.name}</div>
              <div className="text-slate-500">{post.author.role}</div>
            </div>
          </div>
        </header>

        {/* Key Takeaways Box */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block">
            Executive Summary & Key Takeaways
          </span>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {post.keyTakeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-6">
          {post.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Internal Linking to Services (SEO requirement) */}
        <div className="border-t border-slate-800 pt-8 space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            Related SEO Services & Execution
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            {post.relatedServices.map((slug) => (
              <button
                key={slug}
                onClick={() => onNavigate(`/${slug}`)}
                className="px-4 py-2 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer capitalize"
              >
                {slug.replace(/-/g, " ")} →
              </button>
            ))}
          </div>
        </div>

        {/* Authoritative Consultation CTA */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-xl p-8 sm:p-10 text-center space-y-4">
          <h2 className="text-2xl font-bold text-white font-display">
            Apply These Strategies to Your Website
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Our strategists can review your current organic performance and design a custom link acquisition or technical roadmap.
          </p>
          <button
            onClick={() => onOpenConsultationWithParams("Search Engine Optimization (Full-Service)")}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
          >
            Request Free SEO Strategy Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
