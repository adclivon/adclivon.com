import React, { useState } from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import {
  MapPin,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Building2,
  Navigation,
  Globe2,
  Check,
} from "lucide-react";

interface LocalSeoPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultationWithParams: (service?: string, budget?: string, details?: string) => void;
}

export const LocalSeoPage: React.FC<LocalSeoPageProps> = ({
  onNavigate,
  onOpenConsultationWithParams,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do you optimize Google Business Profiles for competitive local markets?",
      answer:
        "We audit primary and secondary category assignments, verify NAP (Name, Address, Phone) consistency across 50+ tier-1 business directories, optimize service menus, and implement structured review generation strategies.",
    },
    {
      question: "Do you support multi-location businesses and franchise models?",
      answer:
        "Yes. We construct scalable localized landing page architectures with individual LocalBusiness schema for each storefront, state, or metropolitan area.",
    },
    {
      question: "How do local citations influence Google Maps 3-Pack rankings?",
      answer:
        "Accurate, consistent local citations confirm your physical existence and regional service boundaries to search algorithms, directly supporting map pack proximity and prominence factors.",
    },
  ];

  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: "Local SEO Services" }]} onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-20">
        {/* Hero */}
        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block">
            Regional & Map Pack Visibility
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            Local SEO & Multi-Location Search Strategy
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Capture ready-to-buy regional customers in the Google Maps 3-Pack and localized organic search results. We optimize Google Business Profiles, standardize citations, and build high-trust local landing pages.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={() => onOpenConsultationWithParams("Local SEO & Multi-Location Strategy")}
              className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-900/30 transition-colors cursor-pointer text-center"
            >
              Request a Local Search Assessment
            </button>
            <button
              onClick={() => onNavigate("/services")}
              className="px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors cursor-pointer text-center"
            >
              Explore All Services
            </button>
          </div>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl space-y-3">
            <div className="p-2 bg-blue-950 border border-blue-900 rounded-lg text-blue-400 w-fit">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">Google Business Profile Optimization</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Complete profile hardening: category selection, geo-tagged imagery, products, services, Q&A seeding, and weekly updates.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl space-y-3">
            <div className="p-2 bg-blue-950 border border-blue-900 rounded-lg text-blue-400 w-fit">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">Localized Landing Page Architecture</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              City and suburb-specific URL hierarchies featuring localized testimonials, unique service descriptions, and LocalBusiness schema markup.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl space-y-3">
            <div className="p-2 bg-blue-950 border border-blue-900 rounded-lg text-blue-400 w-fit">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">Authoritative Citation Network</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Manual submission to top-tier directories and local chambers across US, UK, Canada, and Australia to establish unbreakable NAP consistency.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white font-display">Local SEO FAQs</h3>
            <p className="text-xs text-slate-400 mt-1">Common questions regarding regional campaigns</p>
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
            Dominate Regional Search & Map Packs
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-6">
            Let's evaluate your local search footprint and develop a multi-location expansion strategy.
          </p>
          <button
            onClick={() => onOpenConsultationWithParams("Local SEO & Multi-Location Strategy")}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
          >
            Request Local SEO Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
