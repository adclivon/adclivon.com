import React from "react";
import { BlogPost } from "../types";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ArrowLeft, ArrowRight, Share2, Calendar, User, Clock, CheckCircle, Sparkles } from "lucide-react";

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
    <div className="pb-20 sm:pb-24 overflow-hidden">
      <Breadcrumbs
        items={[{ label: "Blog", path: "/blog" }, { label: post.title }]}
        onNavigate={onNavigate}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-8 sm:space-y-12">
        {/* Back Button */}
        <button
          onClick={onBackToBlog}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </button>

        {/* Article Header */}
        <header className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
            <span className="text-cyan-400 font-semibold uppercase tracking-wider text-[11px] font-mono">
              {post.category}
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{post.publishedDate}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight font-display">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold font-mono shadow-md shadow-cyan-950/30 shrink-0">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <div className="text-white font-medium">{post.author.name}</div>
              <div className="text-slate-500">{post.author.role}</div>
            </div>
          </div>
        </header>

        {/* Key Takeaways Box */}
        <div className="glass-panel p-5 sm:p-8 rounded-2xl border border-cyan-500/30 space-y-3 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Executive Summary & Key Takeaways</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pt-1">
            {post.keyTakeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-5 sm:space-y-6">
          {post.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Internal Linking to Services (SEO requirement) */}
        <div className="border-t border-slate-800/80 pt-6 sm:pt-8 space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
            Related SEO Services & Execution
          </h3>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {post.relatedServices.map((slug) => (
              <button
                key={slug}
                onClick={() => onNavigate(`/${slug}`)}
                className="px-3.5 py-2 text-xs font-medium text-slate-200 bg-[#080E24] border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 rounded-xl transition-all cursor-pointer capitalize min-h-[36px]"
              >
                {slug.replace(/-/g, " ")} →
              </button>
            ))}
          </div>
        </div>

        {/* Authoritative Consultation CTA */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-cyan-950/80 border border-cyan-500/30 p-6 sm:p-10 text-center space-y-4">
          <h2 className="text-xl sm:text-3xl font-bold text-white font-display">
            Apply These Strategies to Your Website
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Our senior strategists can review your current organic performance and design a custom link acquisition or technical roadmap.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenConsultationWithParams("Search Engine Optimization (Full-Service)")}
              className="w-full sm:w-auto min-h-[48px] px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 active:scale-[0.99] rounded-xl shadow-lg shadow-cyan-950/40 transition-all cursor-pointer flex items-center justify-center mx-auto"
            >
              Request Free SEO Strategy Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
