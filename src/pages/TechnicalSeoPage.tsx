import React, { useState } from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import {
  Cpu,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Code,
  Gauge,
  Layers,
  Terminal,
  Check,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface TechnicalSeoPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultationWithParams: (service?: string, budget?: string, details?: string) => void;
}

export const TechnicalSeoPage: React.FC<TechnicalSeoPageProps> = ({
  onNavigate,
  onOpenConsultationWithParams,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do you test and resolve Core Web Vitals issues?",
      answer:
        "We audit real user field data (Chrome User Experience Report) combined with synthetic lab tests (Lighthouse / WebPageTest). We pinpoint render-blocking scripts, unoptimized CSS, non-composited layout shifts, and long JavaScript execution tasks causing high Interaction to Next Paint (INP).",
    },
    {
      question: "Do you deliver code directly or work with our internal engineers?",
      answer:
        "We are full-stack capable. We produce actionable engineering tickets complete with code diffs, configuration adjustments (e.g. Next.js, Vite, Nginx, Cloudflare), and before/after verification criteria, and can liaise directly with your engineering leads.",
    },
    {
      question: "How does JavaScript rendering impact Google search bot indexation?",
      answer:
        "Search engine bots use a two-wave indexing system. Client-side heavy JavaScript often delays rendering and indexing by days or weeks, or fails completely if critical metadata or links are rendered post-hydration. We audit SSR, SSG, and hydration architectures to ensure instant crawler discovery.",
    },
  ];

  return (
    <div className="pb-20 sm:pb-24 overflow-hidden">
      <Breadcrumbs items={[{ label: "Technical SEO Services" }]} onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-14 sm:space-y-20">
        {/* Hero */}
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-400/30">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Infrastructure & Crawl Engineering</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            Technical SEO Architecture & Core Web Vitals Optimization
          </h1>

          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed">
            Ensure search engine crawlers can discover, render, and index your entire URL inventory without friction. We resolve parameter duplication, crawl traps, rendering hurdles, and latency bottlenecks.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
            <button
              onClick={() => onOpenConsultationWithParams("Technical SEO Audit & Remediation")}
              className="w-full sm:w-auto min-h-[48px] px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-[0.99] rounded-xl shadow-xl shadow-blue-600/30 transition-all cursor-pointer text-center flex items-center justify-center gap-2"
            >
              <span>Request a Technical Architecture Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate("/services")}
              className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-[#0B1430]/80 hover:bg-[#0F1D45] active:scale-[0.99] border border-white/10 rounded-xl transition-colors cursor-pointer text-center flex items-center justify-center"
            >
              Explore All Services
            </button>
          </div>
        </div>

        {/* 4 Technical Focus Areas (1 on mobile, 2 on tablet, 4 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="rounded-2xl bg-gradient-to-b from-[#0A122C] to-[#070D1E] border border-white/10 p-5 sm:p-6 space-y-2.5 hover:border-cyan-400/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center text-cyan-400">
              <Gauge className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">Core Web Vitals</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sub-second Largest Contentful Paint (LCP), rock-solid Cumulative Layout Shift (CLS), and responsive Interaction to Next Paint (INP).
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-b from-[#0A122C] to-[#070D1E] border border-white/10 p-5 sm:p-6 space-y-2.5 hover:border-cyan-400/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center text-cyan-400">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">Schema & JSON-LD</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Comprehensive structured data for Organization, Product, Article, FAQ, SoftwareApplication, and rich SERP badges.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-b from-[#0A122C] to-[#070D1E] border border-white/10 p-5 sm:p-6 space-y-2.5 hover:border-cyan-400/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center text-cyan-400">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">Crawl Efficiency</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Robots.txt directive auditing, XML sitemap validation, canonical tags, and parameter handling to prevent index bloat.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-b from-[#0A122C] to-[#070D1E] border border-white/10 p-5 sm:p-6 space-y-2.5 hover:border-cyan-400/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center text-cyan-400">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">International Hreflang</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Flawless geo-targeting configuration between US, UK, CA, and AU locales to prevent multi-regional keyword cannibalization.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">Technical SEO FAQs</h3>
            <p className="text-xs text-slate-400 mt-1 font-mono">Infrastructure questions answered</p>
          </div>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                openFaq === index
                  ? "border-cyan-400/40 bg-[#0A122C]"
                  : "border-white/10 bg-[#070D1E]/80 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer min-h-[52px]"
              >
                <span className="text-xs sm:text-sm font-semibold text-white font-display">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                    openFaq === index ? "rotate-180 text-cyan-400" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.06] bg-[#060B18]/60">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-[#070D1E] border border-cyan-500/20 p-6 sm:p-12 lg:p-14 text-center shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
            Eliminate Technical Crawl Bottlenecks
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
            Get an in-depth audit of your crawl logs, Core Web Vitals, and rendering architecture with developer-ready tickets.
          </p>
          <button
            onClick={() => onOpenConsultationWithParams("Technical SEO Audit & Remediation")}
            className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-[0.99] rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer flex items-center justify-center mx-auto"
          >
            Schedule Technical Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
