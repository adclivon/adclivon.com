import React from "react";
import { ContactForm } from "../components/ContactForm";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { BRAND_CONFIG } from "../config/siteConfig";
import { Mail, Phone, MapPin, Clock, Globe, ShieldCheck } from "lucide-react";

interface ContactPageProps {
  onNavigate: (path: string) => void;
  onOpenLeadsModal?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenLeadsModal }) => {
  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: "Contact Us" }]} onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block">
            Start the Conversation
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            Request an SEO Strategy Consultation & Proposal
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Whether you need a dedicated monthly guest posting campaign, high-authority link insertions, or a full-scale technical SEO roadmap, our senior strategists are ready to review your objectives.
          </p>
        </div>

        {/* 2-Column Layout: Form & Agency Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Agency Details & Expectations */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-5">
              <h3 className="text-lg font-bold text-white font-display">
                Agency Contact & Operating Hours
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs">Direct Client Inquiries</span>
                    <a
                      href={`mailto:${BRAND_CONFIG.contactEmail}`}
                      className="text-white hover:text-blue-400 font-mono transition-colors"
                    >
                      {BRAND_CONFIG.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs">Direct Telephone</span>
                    <span className="text-white font-mono">{BRAND_CONFIG.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs">Headquarters</span>
                    <span className="text-slate-200">{BRAND_CONFIG.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs">Client Availability</span>
                    <span className="text-slate-200">{BRAND_CONFIG.workingHours}</span>
                  </div>
                </div>
              </div>

              {onOpenLeadsModal && (
                <div className="pt-2 border-t border-slate-800">
                  <button
                    onClick={onOpenLeadsModal}
                    className="text-xs text-blue-400 hover:text-blue-300 underline underline-offset-4 cursor-pointer"
                  >
                    View Captured Inquiries Inbox (Testing/Verification)
                  </button>
                </div>
              )}
            </div>

            {/* Response Timeline & Confidentiality Guarantee */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Our Consultation Commitment</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-400 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>We reply to all qualified inquiries within 24 business hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>All website metrics, competitor data, and targets remain strictly confidential.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>No pushy sales calls; you speak directly with senior SEO directors.</span>
                </li>
              </ul>
            </div>

            {/* Target International Regions */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 space-y-3">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block">
                International Coverage
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                We frequently execute cross-border campaigns for clients headquartered in the United States, United Kingdom, Canada, Australia, and New Zealand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
