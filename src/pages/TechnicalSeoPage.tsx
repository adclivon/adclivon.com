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
    <div className="pb-24">
      <Breadcrumbs items={[{ label: "Technical SEO Services" }]} onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-20">
        {/* Hero */}
        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block">
            Infrastructure & Crawl Engineering
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            Technical SEO Architecture & Core Web Vitals Optimization
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Ensure search engine crawlers can discover, render, and index your entire URL inventory without friction. We resolve parameter duplication, crawl traps, rendering hurdles, and latency bottlenecks.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={() => onOpenConsultationWithParams("Technical SEO Audit & Remediation")}
              className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-900/30 transition-colors cursor-pointer text-center"
            >
              Request a Technical Architecture Audit
            </button>
            <button
              onClick={() => onNavigate("/services")}
              className="px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors cursor-pointer text-center"
            >
              Explore All Services
            </button>
          </div>
        </div>

        {/* 4 Technical Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl space-y-3">
            <div className="p-2 bg-blue-950 border border-blue-900 rounded-lg text-blue-400 w-fit">
              <Gauge className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">Core Web Vitals</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sub-second Largest Contentful Paint (LCP), rock-solid Cumulative Layout Shift (CLS), and responsive Interaction to Next Paint (INP).
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl space-y-3">
            <div className="p-2 bg-blue-950 border border-blue-900 rounded-lg text-blue-400 w-fit">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">Schema & JSON-LD</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Comprehensive structured data for Organization, Product, Article, FAQ, SoftwareApplication, and rich SERP badges.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl space-y-3">
            <div className="p-2 bg-blue-950 border border-blue-900 rounded-lg text-blue-400 w-fit">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">Crawl Efficiency</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Robots.txt directive auditing, XML sitemap validation, canonical tags, and parameter handling to prevent index bloat.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl space-y-3">
            <div className="p-2 bg-blue-950 border border-blue-900 rounded-lg text-blue-400 w-fit">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">International Hreflang</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Flawless geo-targeting configuration between US, UK, CA, and AU locales to prevent multi-regional keyword cannibalization.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white font-display">Technical SEO FAQs</h3>
            <p className="text-xs text-slate-400 mt-1">Infrastructure questions answered</p>
          </div>

          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-800 bg-slate-900/60 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="text-sm font-semibold text-white font-display">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                    openFaq === index ? "rotate-180 text-blue-400" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl font-bold text-white font-display mb-2">
            Eliminate Technical Crawl Bottlenecks
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-6">
            Get an in-depth audit of your crawl logs, Core Web Vitals, and rendering architecture with developer-ready tickets.
          </p>
          <button
            onClick={() => onOpenConsultationWithParams("Technical SEO Audit & Remediation")}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
          >
            Schedule Technical Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
