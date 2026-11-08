import React from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { BRAND_CONFIG } from "../config/siteConfig";
import { Shield, Lock, FileText, CheckCircle2 } from "lucide-react";

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} onNavigate={onNavigate} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">
        <div className="border-b border-slate-800/80 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/60 text-cyan-400 text-xs font-mono font-medium tracking-wide mb-3">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Compliance & Data Protection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            How {BRAND_CONFIG.legalEntityName} collects, protects, and handles your information. Last updated October 2026.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-slate-800/80 prose prose-invert max-w-none text-slate-300 text-xs sm:text-sm leading-relaxed space-y-8">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">01.</span>
              Information We Collect
            </h2>
            <p>
              When you submit a consultation request or communicate with {BRAND_CONFIG.brandName}, we collect the information you voluntarily provide, including your full name, business email address, company website URL, project objectives, and estimated marketing budgets.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">02.</span>
              Use of Information
            </h2>
            <p>
              We use the collected information exclusively to:
            </p>
            <ul className="space-y-1.5 text-slate-400 list-none pl-0">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Prepare and deliver tailored search engine optimization and link-building proposals.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Perform preliminary website crawl and backlink profile diagnostics.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Communicate directly regarding consultation scheduling and campaign execution.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Maintain business records and fulfill contractual obligations.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">03.</span>
              Data Confidentiality & Non-Disclosure
            </h2>
            <p>
              We treat all client data, commercial strategies, target keyword portfolios, and proprietary website metrics with strict confidentiality. We do not sell, rent, or lease your contact information or campaign data to third-party data brokers or marketing aggregators. Mutual non-disclosure agreements are provided upon request.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">04.</span>
              International Data Transfers
            </h2>
            <p>
              Given our international client base across the United States, United Kingdom, Canada, Australia, and other global regions, information may be transferred and processed in jurisdictions with appropriate data protection standards.
            </p>
          </section>

          <section className="space-y-2 border-t border-slate-800/80 pt-6">
            <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">05.</span>
              Contact & Privacy Inquiries
            </h2>
            <p>
              If you have any questions regarding our privacy practices or wish to request data deletion, contact our privacy compliance team directly at:
            </p>
            <p className="font-mono text-cyan-400 text-sm">
              <a href={`mailto:${BRAND_CONFIG.contactEmail}`} className="hover:underline">
                {BRAND_CONFIG.contactEmail}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
