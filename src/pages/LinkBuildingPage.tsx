import React, { useState } from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { BacklinkEstimator } from "../components/BacklinkEstimator";
import {
  ShieldCheck,
  TrendingUp,
  Target,
  ArrowRight,
  ChevronDown,
  Check,
  Compass,
  FileCheck2,
  Workflow,
  Globe,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface LinkBuildingPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultationWithParams: (service?: string, budget?: string, details?: string) => void;
}

export const LinkBuildingPage: React.FC<LinkBuildingPageProps> = ({
  onNavigate,
  onOpenConsultationWithParams,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes your link building safe from Google search penalties?",
      answer:
        "We build links exclusively through manual outreach and genuine human relationships with legitimate website owners. We strictly ban private blog networks (PBNs), automated submission scripts, link farms, Web 2.0 spams, and footer link rental schemes.",
    },
    {
      question: "What is an ideal monthly link velocity for a competitive business?",
      answer:
        "Ideal velocity depends on your competitors' acquisition pace and your domain's current authority. Emerging sites typically begin with 5 to 10 curated links per month, while established enterprise SaaS or e-commerce sites often scale to 15 to 30 quality placements monthly.",
    },
    {
      question: "How do you manage anchor text distribution?",
      answer:
        "We carefully audit your existing anchor text profile and balance new acquisitions across branded anchors, natural URL variations, topical partial-match anchors, and select exact-match commercial keywords to maintain an entirely organic profile.",
    },
  ];

  return (
    <div className="pb-20 sm:pb-24 overflow-hidden">
      <Breadcrumbs items={[{ label: "Quality Link Building Services" }]} onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-14 sm:space-y-20">
        {/* Hero */}
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-400/30">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Enduring Off-Page Authority</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            Quality Link Building Engineered for Long-Term Organic Domination
          </h1>

          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed">
            Acquire high-trust, topically relevant backlinks that strengthen your domain authority, expand keyword footprint, and resist algorithmic Core Updates. 100% white-hat, bespoke manual outreach.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
            <button
              onClick={() => onOpenConsultationWithParams("Quality Link Building Campaigns")}
              className="w-full sm:w-auto min-h-[48px] px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-[0.99] rounded-xl shadow-xl shadow-blue-600/30 transition-all cursor-pointer text-center flex items-center justify-center gap-2"
            >
              <span>Get a Free Link Profile Audit & Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate("/guest-posting")}
              className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-[#0B1430]/80 hover:bg-[#0F1D45] active:scale-[0.99] border border-white/10 rounded-xl transition-colors cursor-pointer text-center flex items-center justify-center"
            >
              Explore Guest Posting
            </button>
          </div>
        </div>

        {/* Interactive Estimator Tool */}
        <BacklinkEstimator
          onApplyPlan={(service, budget, details) => {
            onOpenConsultationWithParams(service, budget, details);
          }}
        />

        {/* Strategic Link Building Tactics */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0A122C] to-[#070D1E] border border-white/10 p-5 sm:p-10 lg:p-14 shadow-2xl">
          <div className="max-w-2xl mb-8 sm:mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block mb-1 font-mono">
              Channels of Impact
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-white font-display">
              Our Multi-Vector Link Acquisition Channels
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              We diversify link sources to construct an authentic, bulletproof backlink profile.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-[#060B18]/80 border border-white/10 p-5 sm:p-6 rounded-2xl space-y-2.5 hover:border-cyan-400/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">Editorial Resource Placements</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Securing inclusions on authoritative industry resource hubs, curated tooling roundups, and professional association repositories.
              </p>
            </div>

            <div className="bg-[#060B18]/80 border border-white/10 p-5 sm:p-6 rounded-2xl space-y-2.5 hover:border-cyan-400/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">Unlinked Brand Reclamation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Scanning the web for existing mentions of your brand, founders, and proprietary products, converting unlinked text into authoritative dofollow backlinks.
              </p>
            </div>

            <div className="bg-[#060B18]/80 border border-white/10 p-5 sm:p-6 rounded-2xl space-y-2.5 hover:border-cyan-400/40 transition-all sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">Digital PR & Expert Commentary</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Positioning your internal executives as quotable experts on prominent news sites, industry podcasts, and journalistic roundups.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">Link Building FAQs</h3>
            <p className="text-xs text-slate-400 mt-1 font-mono">Realistic answers regarding campaign delivery</p>
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

        {/* Bottom CTA */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-[#070D1E] border border-cyan-500/20 p-6 sm:p-12 lg:p-14 text-center shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
            Build a Sustainable Link Moat for Your Website
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
            Get a comprehensive evaluation of your current backlink health and a customized link velocity blueprint.
          </p>
          <button
            onClick={() => onOpenConsultationWithParams("Quality Link Building Campaigns")}
            className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-[0.99] rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer flex items-center justify-center mx-auto"
          >
            Request Link Building Proposal
          </button>
        </div>
      </div>
    </div>
  );
};
