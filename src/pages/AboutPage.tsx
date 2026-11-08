import React from "react";
import { BRAND_CONFIG, IMAGES } from "../config/siteConfig";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ShieldCheck, Target, Globe, Users, ArrowRight, CheckCircle2, Sparkles, Award } from "lucide-react";

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="pb-20 sm:pb-24 overflow-hidden">
      <Breadcrumbs items={[{ label: "About Us" }]} onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-14 sm:space-y-20">
        {/* Hero Section */}
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-400/30">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>About {BRAND_CONFIG.brandName}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            A Scientific, Trust-First Approach to Search Engine Optimization
          </h1>
          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed">
            Founded to eliminate the opacity and short-term risks prevalent in the SEO agency landscape, {BRAND_CONFIG.brandName} delivers bespoke, data-driven organic search strategies, editorial guest posting, and contextual link insertions to high-performing businesses worldwide.
          </p>
        </div>

        {/* Agency Image & Core Ethos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight font-display">
              Built on Quality, Transparency, and Measurable Intent
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We operate exclusively in the realm of high-intent search acquisition. We reject automated link-generation software, spun content, and dubious network schemes. Instead, we invest in deep technical site analysis, high-value editorial relationships, and rigorous publisher quality vetting.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Whether you are a Series B SaaS scale-up looking to capture commercial buyer queries, an established e-commerce retailer fixing crawl budget inefficiencies, or a marketing agency requiring dependable white-label link fulfillment, our senior team executes with precision.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs">
              <div className="rounded-2xl bg-[#0A122C] border border-white/10 p-4 sm:p-5">
                <span className="font-semibold text-white block mb-1 text-sm font-display">Global Client Base</span>
                <span className="text-slate-400">Serving companies in the US, UK, Canada, Australia, and worldwide.</span>
              </div>
              <div className="rounded-2xl bg-[#0A122C] border border-white/10 p-4 sm:p-5">
                <span className="font-semibold text-white block mb-1 text-sm font-display">100% Manual Outreach</span>
                <span className="text-slate-400">Human relationships and bespoke editorial pitch drafting.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 w-full">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#060B18] aspect-16/10 relative">
              <img
                src={IMAGES.agencyWorkspace}
                alt="Agency team collaborating in executive conference space"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060B18]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-[#0A122C]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">Strategic Search Directors</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono">10+ Years Combined Enterprise Experience</div>
                </div>
                <Award className="w-5 h-5 text-cyan-400 shrink-0 ml-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="border-t border-white/[0.08] pt-12 sm:pt-16">
          <div className="max-w-2xl mb-8 sm:mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block mb-1 font-mono">
              Our Creed
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight font-display">
              Our Core Agency Tenets
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1.5">
              The fundamental standards that guide every campaign, outreach pitch, and client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            <div className="rounded-2xl bg-[#0A122C]/80 border border-white/10 p-5 sm:p-7 space-y-3 hover:border-cyan-400/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">1. Commercial Relevance First</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                We do not pursue traffic for the sake of inflating graphs. We target keywords and placement context that bring prospective buyers with high transactional and commercial intent.
              </p>
            </div>

            <div className="rounded-2xl bg-[#0A122C]/80 border border-white/10 p-5 sm:p-7 space-y-3 hover:border-cyan-400/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">2. Zero Algorithmic Shortcuts</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Shortcuts lead to penalties. We adhere strictly to search engine quality guidelines, protecting your domain's brand equity against Core Update fluctuations.
              </p>
            </div>

            <div className="rounded-2xl bg-[#0A122C]/80 border border-white/10 p-5 sm:p-7 space-y-3 hover:border-cyan-400/40 transition-all sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">3. Transparent Accountability</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                No hidden sheets or mysterious invoices. Every link placement, anchor text, host domain metric, and live URL is fully documented and provided in monthly deliverables.
              </p>
            </div>
          </div>
        </div>

        {/* International Capabilities Banner */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-[#070D1E] border border-cyan-500/20 p-5 sm:p-8 lg:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
                Global Operations
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-white font-display">
                Dedicated to International Client Markets
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our outreach specialists and native English content writers support businesses across North America, the United Kingdom, and Australasia. We understand regional search vernacular, currency nuances, and localized top-level domain dynamics.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto min-h-[48px] px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-[0.99] rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer shrink-0 text-center flex items-center justify-center"
            >
              Get a Free SEO Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
