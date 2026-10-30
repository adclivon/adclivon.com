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
    <div className="pb-24">
      <Breadcrumbs items={[{ label: "Quality Link Building Services" }]} onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-20">
        {/* Hero */}
        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block">
            Enduring Off-Page Authority
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            Quality Link Building Engineered for Long-Term Organic Domination
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Acquire high-trust, topically relevant backlinks that strengthen your domain authority, expand keyword footprint, and resist algorithmic Core Updates. 100% white-hat, bespoke manual outreach.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={() => onOpenConsultationWithParams("Quality Link Building Campaigns")}
              className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-900/30 transition-colors cursor-pointer text-center"
            >
              Get a Free Link Profile Audit & Quote
            </button>
            <button
              onClick={() => onNavigate("/guest-posting")}
              className="px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors cursor-pointer text-center"
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
        <div className="border border-slate-800 bg-slate-900/40 rounded-2xl p-8 sm:p-12">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Our Multi-Vector Link Acquisition Channels
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              We diversify link sources to construct an authentic, bulletproof backlink profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-950/70 border border-slate-800 p-6 rounded-xl space-y-3">
              <div className="p-2 bg-blue-950 border border-blue-900 rounded-lg text-blue-400 w-fit">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">Editorial Resource Placements</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Securing inclusions on authoritative industry resource hubs, curated tooling roundups, and professional association repositories.
              </p>
            </div>

            <div className="bg-slate-950/70 border border-slate-800 p-6 rounded-xl space-y-3">
              <div className="p-2 bg-blue-950 border border-blue-900 rounded-lg text-blue-400 w-fit">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">Unlinked Brand Reclamation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Scanning the web for existing mentions of your brand, founders, and proprietary products, converting unlinked text into authoritative dofollow backlinks.
              </p>
            </div>

            <div className="bg-slate-950/70 border border-slate-800 p-6 rounded-xl space-y-3">
              <div className="p-2 bg-blue-950 border border-blue-900 rounded-lg text-blue-400 w-fit">
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
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white font-display">Link Building FAQs</h3>
            <p className="text-xs text-slate-400 mt-1">Realistic answers regarding campaign delivery</p>
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

        {/* Bottom CTA */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl font-bold text-white font-display mb-2">
            Build a Sustainable Link Moat for Your Website
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-6">
            Get a comprehensive evaluation of your current backlink health and a customized link velocity blueprint.
          </p>
          <button
            onClick={() => onOpenConsultationWithParams("Quality Link Building Campaigns")}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
          >
            Request Link Building Proposal
          </button>
        </div>
      </div>
    </div>
  );
};
