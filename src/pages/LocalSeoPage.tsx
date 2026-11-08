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
  Search,
  Star,
  Check,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
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

  const pillars = [
    {
      icon: MapPin,
      title: "Google Business Profile Optimization",
      desc: "Complete GBP hardening: primary & secondary category mapping, geo-tagged photography, localized service menus, product catalogs, and review generation frameworks.",
      bullets: [
        "Primary category and secondary attribute calibration",
        "Geocoded image optimization and store assets",
        "Weekly local post updates and offer syndication",
      ],
    },
    {
      icon: Building2,
      title: "Localized Landing Page Architecture",
      desc: "Scalable city, state, and suburb-level URL hierarchies featuring unique localized copy, customer case studies, regional FAQs, and validated schema markup.",
      bullets: [
        "LocalBusiness, PostalAddress & GeoCoordinates JSON-LD",
        "Custom service area page creation without duplication",
        "Localized internal linking and proximity signals",
      ],
    },
    {
      icon: Globe2,
      title: "Authoritative Citation Syndication",
      desc: "Manual citation cleanup and distribution across 50+ tier-1 business directories in the US, UK, Canada, and Australia to lock in flawless NAP consistency.",
      bullets: [
        "Aggregator distribution (Data Axle, Neustar, Foursquare)",
        "Niche industry & regional chamber submissions",
        "Duplicate suppression and historical NAP reconciliation",
      ],
    },
  ];

  const marketRegions = [
    { name: "United States (US)", cities: "New York, Los Angeles, Chicago, Dallas, Miami" },
    { name: "United Kingdom (UK)", cities: "London, Manchester, Birmingham, Edinburgh" },
    { name: "Canada (CA)", cities: "Toronto, Vancouver, Montreal, Calgary" },
    { name: "Australia (AU)", cities: "Sydney, Melbourne, Brisbane, Perth" },
  ];

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
    {
      question: "How long does it take to see traction in Google Maps rankings?",
      answer:
        "Initial verification, citation synchronization, and on-page geo-relevance adjustments typically produce noticeable local impressions within 4 to 8 weeks, with durable map pack placements consolidating over 3 to 6 months as review signals and local backlinks accrue.",
    },
  ];

  return (
    <div className="pb-20 sm:pb-24 overflow-hidden">
      <Breadcrumbs items={[{ label: "Local SEO Services" }]} onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-14 sm:space-y-20">
        {/* Hero */}
        <div className="relative">
          <div className="absolute -top-12 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-5 sm:space-y-6 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-medium tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Regional & Map Pack Visibility</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display leading-[1.18] sm:leading-[1.15]">
              Local SEO & Multi-Location{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
                Search Dominance
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-lg leading-relaxed">
              Capture high-intent regional buyers in the Google Maps 3-Pack and localized organic search results. We optimize Google Business Profiles, standardize citations, build multi-location landing pages, and earn authentic local backlinks across the US, UK, Canada, and Australia.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <button
                onClick={() => onOpenConsultationWithParams("Local SEO & Multi-Location Strategy")}
                className="w-full sm:w-auto min-h-[48px] px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 active:scale-[0.99] rounded-xl shadow-lg shadow-cyan-950/40 transition-all cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <span>Request a Local Search Assessment</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate("/services")}
                className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-850 active:scale-[0.99] border border-slate-800 hover:border-slate-700 rounded-xl transition-colors cursor-pointer text-center flex items-center justify-center"
              >
                Explore All Services
              </button>
            </div>
          </div>
        </div>

        {/* Local SERP Mockup Showcase */}
        <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-5 space-y-3 sm:space-y-4">
              <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold font-mono">
                The 3-Pack Advantage
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                Capturing High-Conversion "Near Me" Searches
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Over 46% of all Google queries carry local intent, and 78% of local mobile searches result in an offline or telephone conversion within 24 hours. We position your brand squarely where purchasing decisions happen.
              </p>
              <div className="space-y-2 pt-1">
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Proximity, relevance, and prominence signals dialed in</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>100% manual directory cleanup with no recurring lock-in fees</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Complete audit of duplicate listings and rogue pin drops</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#060B18] border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3 sm:space-y-4 min-w-0">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5 sm:pb-3 gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shrink-0" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 shrink-0" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80 shrink-0" />
                  <span className="text-[11px] sm:text-xs text-slate-400 font-mono ml-1 truncate">Google Maps 3-Pack Preview</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono text-cyan-400 shrink-0">Position #1 Target</span>
              </div>

              {/* Local pack item 1 (Highlighted) */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-blue-950/30 border border-cyan-500/40 relative">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs sm:text-sm font-bold text-white truncate">Your Brand (Optimized)</span>
                      <span className="px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800 shrink-0">
                        Rank #1
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-amber-400 flex-wrap">
                      <span className="font-semibold">4.9</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-slate-400 text-[11px]">(148 reviews)</span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-300">Full-Service Solutions · Open 24/7</p>
                    <p className="text-[11px] sm:text-xs text-cyan-300 font-mono">Website · Directions · Call</p>
                  </div>
                  <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 shrink-0">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>

              {/* Local pack item 2 */}
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 opacity-70">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-0.5 min-w-0">
                    <div className="text-xs font-semibold text-slate-300 truncate">Competitor A (Incomplete)</div>
                    <div className="text-[11px] text-slate-400 truncate">4.1 ★ · 34 reviews · Inconsistent NAP</div>
                  </div>
                  <span className="text-xs text-slate-500 font-mono shrink-0">Rank #2</span>
                </div>
              </div>

              {/* Local pack item 3 */}
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 opacity-60">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-0.5 min-w-0">
                    <div className="text-xs font-semibold text-slate-300 truncate">Competitor B (Missing Schema)</div>
                    <div className="text-[11px] text-slate-400 truncate">3.8 ★ · 12 reviews · No local landing page</div>
                  </div>
                  <span className="text-xs text-slate-500 font-mono shrink-0">Rank #3</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars (1 on mobile, 2 on tablet, 3 on desktop) */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Methodology
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-white font-display">
              Three Pillars of High-Conversion Local SEO
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`glass-panel p-5 sm:p-7 rounded-2xl border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-between ${
                    idx === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="space-y-3 sm:space-y-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-950/30">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-display">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{pillar.desc}</p>
                    <ul className="space-y-1.5 pt-2 border-t border-slate-800/60">
                      {pillar.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Regional Market Coverage (1 on mobile, 2 on tablet, 4 on desktop) */}
        <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800/80 space-y-5 sm:space-y-6">
          <div className="max-w-2xl space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              International Footprint
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              Targeted Geographic Support
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              We deploy localized strategies tailored to individual municipal search behavior and national directory ecosystems across all primary English-speaking markets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {marketRegions.map((region, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-sm font-bold text-white">{region.name}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Key Metro Focus: {region.cities}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block mb-1">
              Common Inquiries
            </span>
            <h3 className="text-xl sm:text-3xl font-bold text-white font-display">
              Local SEO Frequently Asked Questions
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Transparent answers regarding multi-location and regional campaigns
            </p>
          </div>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-800/80 bg-slate-900/60 rounded-2xl overflow-hidden"
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
                <div className="px-4 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-cyan-950/80 border border-cyan-500/30 p-6 sm:p-12 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-xl sm:text-3xl font-bold text-white font-display">
              Dominate Regional Search & Map Packs
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Let's evaluate your regional footprint, audit local citation discrepancies, and construct an aggressive map pack dominance roadmap for your target service areas.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenConsultationWithParams("Local SEO & Multi-Location Strategy")}
                className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 active:scale-[0.99] rounded-xl shadow-lg shadow-cyan-950/40 transition-all cursor-pointer flex items-center justify-center mx-auto"
              >
                Request Free Local Search Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
