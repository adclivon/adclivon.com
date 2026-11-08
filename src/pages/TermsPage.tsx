import React from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { BRAND_CONFIG } from "../config/siteConfig";
import { FileText, ShieldAlert, CheckCircle2 } from "lucide-react";

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: "Terms & Conditions" }]} onNavigate={onNavigate} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">
        <div className="border-b border-slate-800/80 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/60 text-cyan-400 text-xs font-mono font-medium tracking-wide mb-3">
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Service Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Agreement governing professional services provided by {BRAND_CONFIG.legalEntityName}. Last updated October 2026.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-slate-800/80 prose prose-invert max-w-none text-slate-300 text-xs sm:text-sm leading-relaxed space-y-8">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">01.</span>
              Professional Scope of Work
            </h2>
            <p>
              {BRAND_CONFIG.brandName} provides search engine optimization advisory, technical website diagnostics, editorial outreach, guest posting services, and contextual link insertion. Specific deliverables, quantities, anchor texts, and review timelines are outlined in individual service level agreements (SLAs) or verified digital work orders.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">02.</span>
              Ethical Outreach & Ranking Disclaimer
            </h2>
            <p>
              Search engine optimization is governed by independent algorithms maintained by third-party search engines (including Google, Microsoft Bing, and regional search engines). {BRAND_CONFIG.brandName} operates strictly within algorithmic best practices and manual outreach guidelines. We do not warrant or guarantee specific ranking positions, fixed keyword placements, or specific organic visitor volumes. We warrant adherence to professional quality standards, manual outreach practices, and agreed publisher quality criteria.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">03.</span>
              Client Pre-Approval & Placement Warranties
            </h2>
            <p>
              Where agreed upon in writing, clients retain the right to pre-approve prospective host publication domains. Link placements are accompanied by a 12-month placement integrity warranty against accidental host editorial deletion or nofollow conversion, providing complimentary replacement outreach should an indexed placement be dropped.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">04.</span>
              Payment & Campaign Invoicing
            </h2>
            <p>
              Retainers and custom outreach campaigns are invoiced in advance of each monthly sprint. Initial campaigns typically run for a 3-month strategic cycle to establish indexing and SERP velocity, transitioning to rolling monthly engagements with 30-day written cancellation notices.
            </p>
          </section>

          <section className="space-y-2 border-t border-slate-800/80 pt-6">
            <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">05.</span>
              Governing Law & Inquiries
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction specified in your individual client service agreement. Inquiries may be directed to:
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
