import React from "react";
import { BRAND_CONFIG, IMAGES } from "../config/siteConfig";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ShieldCheck, Target, Globe, Users, ArrowRight, CheckCircle2 } from "lucide-react";

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: "About Us" }]} onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-20">
        {/* Hero Section */}
        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block">
            About {BRAND_CONFIG.brandName}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            A Scientific, Trust-First Approach to Search Engine Optimization
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Founded to eliminate the opacity and short-term risks prevalent in the SEO agency landscape, {BRAND_CONFIG.brandName} delivers bespoke, data-driven organic search strategies, editorial guest posting, and contextual link insertions to high-performing businesses worldwide.
          </p>
        </div>

        {/* Agency Image & Core Ethos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
              Built on Quality, Transparency, and Measurable Intent
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We operate exclusively in the realm of high-intent search acquisition. We reject automated link-generation software, spun content, and dubious network schemes. Instead, we invest in deep technical site analysis, high-value editorial relationships, and rigorous publisher quality vetting.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Whether you are a Series B SaaS scale-up looking to capture commercial buyer queries, an established e-commerce retailer fixing crawl budget inefficiencies, or a marketing agency requiring dependable white-label link fulfillment, our senior team executes with precision.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
                <span className="font-semibold text-white block mb-1">Global Client Base</span>
                <span className="text-slate-400">Serving companies in the US, UK, Canada, Australia, and worldwide.</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
                <span className="font-semibold text-white block mb-1">100% Manual Outreach</span>
                <span className="text-slate-400">Human relationships and bespoke editorial pitch drafting.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950 aspect-16/10">
              <img
                src={IMAGES.agencyWorkspace}
                alt="Agency team collaborating in executive conference space"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="border-t border-slate-800 pt-16">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
              Our Core Agency Tenets
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              The fundamental standards that guide every campaign, outreach pitch, and client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl space-y-3">
              <div className="p-2.5 bg-blue-950 border border-blue-900 rounded-lg text-blue-400 w-fit">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">1. Commercial Relevance First</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                We do not pursue traffic for the sake of inflating graphs. We target keywords and placement context that bring prospective buyers with high transactional and commercial intent.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl space-y-3">
              <div className="p-2.5 bg-blue-950 border border-blue-900 rounded-lg text-blue-400 w-fit">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">2. Zero Algorithmic Shortcuts</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Shortcuts lead to penalties. We adhere strictly to search engine quality guidelines, protecting your domain's brand equity against Core Update fluctuations.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl space-y-3">
              <div className="p-2.5 bg-blue-950 border border-blue-900 rounded-lg text-blue-400 w-fit">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">3. Transparent Accountability</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                No hidden sheets or mysterious invoices. Every link placement, anchor text, host domain metric, and live URL is fully documented and provided in monthly deliverables.
              </p>
            </div>
          </div>
        </div>

        {/* International Capabilities */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-8 sm:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Global Operations
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Dedicated to International Client Markets
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our outreach specialists and native English content writers support businesses across North America, the United Kingdom, and Australasia. We understand regional search vernacular, currency nuances, and localized top-level domain dynamics.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer shrink-0"
            >
              Get a Free SEO Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
