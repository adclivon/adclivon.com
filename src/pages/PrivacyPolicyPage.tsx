import React from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { BRAND_CONFIG } from "../config/siteConfig";

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} onNavigate={onNavigate} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        <div className="border-b border-slate-800 pb-6">
          <span className="text-xs uppercase font-mono text-slate-500 block mb-1">
            Last Updated: October 2026
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            How {BRAND_CONFIG.legalEntityName} collects, protects, and handles your information.
          </p>
        </div>

        <div className="prose prose-invert text-slate-300 text-xs sm:text-sm leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white font-display">1. Information We Collect</h2>
            <p>
              When you submit a consultation request or communicate with {BRAND_CONFIG.brandName}, we collect the information you voluntarily provide, including your full name, business email address, company website URL, project objectives, and estimated marketing budgets.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white font-display">2. Use of Information</h2>
            <p>
              We use the collected information exclusively to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>Prepare and deliver tailored search engine optimization and link-building proposals.</li>
              <li>Perform preliminary website crawl and backlink profile diagnostics.</li>
              <li>Communicate directly regarding consultation scheduling and campaign execution.</li>
              <li>Maintain business records and fulfill contractual obligations.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white font-display">3. Data Confidentiality & Non-Disclosure</h2>
            <p>
              We treat all client data, commercial strategies, target keyword portfolios, and proprietary website metrics with strict confidentiality. We do not sell, rent, or lease your contact information or campaign data to third-party data brokers or marketing aggregators.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white font-display">4. International Data Transfers</h2>
            <p>
              Given our international client base across the United States, United Kingdom, Canada, Australia, and other global regions, information may be transferred and processed in jurisdictions with appropriate data protection standards.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white font-display">5. Contact Information</h2>
            <p>
              If you have any questions regarding our privacy practices or wish to request data deletion, contact our privacy compliance team at:
            </p>
            <p className="font-mono text-blue-400">
              {BRAND_CONFIG.contactEmail}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
