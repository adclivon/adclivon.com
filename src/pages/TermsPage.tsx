import React from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { BRAND_CONFIG } from "../config/siteConfig";

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: "Terms & Conditions" }]} onNavigate={onNavigate} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        <div className="border-b border-slate-800 pb-6">
          <span className="text-xs uppercase font-mono text-slate-500 block mb-1">
            Last Updated: October 2026
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Agreement governing professional services provided by {BRAND_CONFIG.legalEntityName}.
          </p>
        </div>

        <div className="prose prose-invert text-slate-300 text-xs sm:text-sm leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white font-display">1. Professional Scope of Work</h2>
            <p>
              {BRAND_CONFIG.brandName} provides search engine optimization advisory, technical website diagnostics, editorial outreach, guest posting services, and contextual link insertion. Specific deliverables, quantities, anchor texts, and review timelines are outlined in individual service level agreements (SLAs).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white font-display">2. Realistic Disclaimer on Search Rankings</h2>
            <p>
              Search engine optimization is subject to independent algorithms maintained by third-party search engines (including Google, Microsoft Bing, and regional providers). {BRAND_CONFIG.brandName} does not warrant or guarantee specific ranking positions, fixed keyword placements, or specific organic visitor volumes. We warrant adherence to professional quality standards, manual outreach practices, and agreed publisher quality criteria.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white font-display">3. Client Pre-Approval & Quality Warranties</h2>
            <p>
              Where agreed upon in writing, clients retain the right to pre-approve prospective host publication domains. Link placements are accompanied by a 12-month placement integrity warranty against accidental host editorial deletion.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white font-display">4. Payment & Cancellation Terms</h2>
            <p>
              Retainers and custom outreach campaigns are invoiced in advance of each monthly sprint. Initial campaigns typically run for a 3-month strategic cycle, transitioning to rolling monthly engagements with 30-day written cancellation notices.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white font-display">5. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction specified in your individual client service agreement.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
