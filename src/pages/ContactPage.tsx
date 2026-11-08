import React from "react";
import { ContactForm } from "../components/ContactForm";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { BRAND_CONFIG } from "../config/siteConfig";
import { Mail, Phone, MapPin, Clock, Globe, ShieldCheck, Sparkles } from "lucide-react";

interface ContactPageProps {
  onNavigate: (path: string) => void;
  onOpenLeadsModal?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenLeadsModal }) => {
  return (
    <div className="pb-20 sm:pb-24 overflow-hidden">
      <Breadcrumbs items={[{ label: "Contact Us" }]} onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-400/30">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Start the Conversation</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            Request an SEO Strategy Consultation & Proposal
          </h1>
          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed">
            Whether you need a dedicated monthly guest posting campaign, high-authority link insertions, or a full-scale technical SEO roadmap, our senior strategists are ready to review your objectives.
          </p>
        </div>

        {/* 2-Column Layout: Form & Agency Details (Stacked on mobile, side-by-side on lg) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 w-full min-w-0">
            <ContactForm />
          </div>

          {/* Right Column: Agency Details & Expectations */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 w-full min-w-0">
            <div className="rounded-2xl bg-[#0A122C]/80 border border-white/10 p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-xl">
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                Agency Contact & Operating Hours
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-500/20 text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-slate-400 block text-xs font-mono">Direct Client Inquiries</span>
                    <a
                      href={`mailto:${BRAND_CONFIG.contactEmail}`}
                      className="text-white hover:text-cyan-300 font-mono transition-colors break-all"
                    >
                      {BRAND_CONFIG.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-500/20 text-cyan-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs font-mono">Direct Telephone</span>
                    <a
                      href={`tel:${BRAND_CONFIG.phone}`}
                      className="text-white hover:text-cyan-300 font-mono transition-colors"
                    >
                      {BRAND_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-500/20 text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs font-mono">Headquarters</span>
                    <span className="text-slate-200 break-words">{BRAND_CONFIG.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-500/20 text-cyan-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs font-mono">Client Availability</span>
                    <span className="text-slate-200">{BRAND_CONFIG.workingHours}</span>
                  </div>
                </div>
              </div>

              {onOpenLeadsModal && (
                <div className="pt-2 border-t border-white/[0.08]">
                  <button
                    onClick={onOpenLeadsModal}
                    className="text-xs text-cyan-400 hover:text-cyan-300 underline underline-offset-4 cursor-pointer py-1"
                  >
                    View Captured Inquiries Inbox (Testing/Verification)
                  </button>
                </div>
              )}
            </div>

            {/* Response Timeline & Confidentiality Guarantee */}
            <div className="rounded-2xl bg-[#070D1E]/90 border border-white/10 p-5 sm:p-6 space-y-3.5 shadow-xl">
              <div className="flex items-center gap-2 text-white font-semibold text-sm font-display">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Our Consultation Commitment</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>We reply to all qualified inquiries within 24 business hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>All website metrics, competitor data, and targets remain strictly confidential.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>No pushy sales calls; you speak directly with senior SEO directors.</span>
                </li>
              </ul>
            </div>

            {/* Target International Regions */}
            <div className="rounded-2xl bg-[#070D1E]/90 border border-white/10 p-5 sm:p-6 space-y-2 shadow-xl">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block font-mono">
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
