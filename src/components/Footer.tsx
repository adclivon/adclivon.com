import React from "react";
import { BRAND_CONFIG } from "../config/siteConfig";
import { Mail, Phone, MapPin, Globe, Shield, ExternalLink, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
  onOpenLeadsModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenLeadsModal,
}) => {
  return (
    <footer className="bg-[#050914] border-t border-white/[0.08] text-slate-400 text-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          {/* Column 1: Agency Brand & Intro */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[1px] shrink-0">
                <div className="w-full h-full bg-[#060B18] rounded-[7px] flex items-center justify-center">
                  <span className="font-display font-bold text-xs text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    A
                  </span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                {BRAND_CONFIG.shortName}<span className="text-cyan-400">.com</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              We engineer custom, data-driven SEO campaigns, strategic guest posting placements, and contextual link insertion solutions for high-growth businesses and agencies internationally.
            </p>

            {/* Target Markets */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block mb-2 font-mono">
                Primary International Client Markets
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                {BRAND_CONFIG.targetMarkets.map((m) => (
                  <span
                    key={m.code}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5"
                  >
                    <span>{m.flag}</span>
                    <span>{m.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 rounded-xl transition-all cursor-pointer shadow-lg shadow-blue-600/20 text-center min-h-[44px]"
              >
                Schedule Strategy Consultation
              </button>
            </div>
          </div>

          {/* Column 2: Core Solutions */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
              Core SEO Services
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate("/services")}
                  className="hover:text-cyan-400 transition-colors text-left py-0.5 cursor-pointer"
                >
                  All 12 SEO Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/guest-posting")}
                  className="hover:text-cyan-400 transition-colors text-left py-0.5 cursor-pointer"
                >
                  Guest Posting Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/link-insertion")}
                  className="hover:text-cyan-400 transition-colors text-left py-0.5 cursor-pointer"
                >
                  Link Insertion Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/link-building")}
                  className="hover:text-cyan-400 transition-colors text-left py-0.5 cursor-pointer"
                >
                  Quality Link Building
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/technical-seo")}
                  className="hover:text-cyan-400 transition-colors text-left py-0.5 cursor-pointer"
                >
                  Technical SEO Audits
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/local-seo")}
                  className="hover:text-cyan-400 transition-colors text-left py-0.5 cursor-pointer"
                >
                  Local SEO & Multi-Location
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Agency Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
              Agency & Resources
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate("/")}
                  className="hover:text-cyan-400 transition-colors text-left py-0.5 cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/about")}
                  className="hover:text-cyan-400 transition-colors text-left py-0.5 cursor-pointer"
                >
                  About Our Agency
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/blog")}
                  className="hover:text-cyan-400 transition-colors text-left py-0.5 cursor-pointer"
                >
                  SEO Insights & Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/contact")}
                  className="hover:text-cyan-400 transition-colors text-left py-0.5 cursor-pointer"
                >
                  Contact & Inquiry
                </button>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1 py-0.5"
                >
                  <span>XML Sitemap</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1 py-0.5"
                >
                  <span>Robots.txt</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Verification */}
          <div className="space-y-3 min-w-0">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
              Contact & Inquiries
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2 min-w-0">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="min-w-0 break-all">
                  <a
                    href={`mailto:${BRAND_CONFIG.contactEmail}`}
                    className="hover:text-cyan-300 transition-colors font-mono"
                  >
                    {BRAND_CONFIG.contactEmail}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2 min-w-0">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="font-mono">
                  <a
                    href={`tel:${BRAND_CONFIG.phone}`}
                    className="hover:text-cyan-300 transition-colors"
                  >
                    {BRAND_CONFIG.phone}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2 min-w-0">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 break-words">{BRAND_CONFIG.address}</span>
              </li>
              <li className="flex items-start gap-2 min-w-0">
                <Globe className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">{BRAND_CONFIG.workingHours}</span>
              </li>
            </ul>

            {onOpenLeadsModal && (
              <div className="pt-2">
                <button
                  onClick={onOpenLeadsModal}
                  className="text-xs text-slate-500 hover:text-cyan-300 underline underline-offset-2 transition-colors cursor-pointer py-1"
                >
                  View Agency Received Inquiries
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Ethical Standards & Compliance Disclaimer */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/[0.08]">
          <div className="flex items-start gap-3 bg-white/[0.02] p-4 sm:p-5 rounded-2xl border border-white/5 text-xs text-slate-400 leading-relaxed">
            <Shield className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-200 font-medium">Compliance & Ranking Disclaimer: </strong>
              {BRAND_CONFIG.brandName} delivers bespoke, data-backed search engine optimization and manual editorial outreach services. We do not provide or promise guaranteed rankings, fixed traffic metrics, or artificial algorithmic shortcuts. All outcomes depend upon search engine indexation algorithms, industry competition, and qualitative implementation.
            </p>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-6 sm:mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {BRAND_CONFIG.brandName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <button
              onClick={() => onNavigate("/privacy")}
              className="hover:text-slate-300 transition-colors cursor-pointer py-1"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <button
              onClick={() => onNavigate("/terms")}
              className="hover:text-slate-300 transition-colors cursor-pointer py-1"
            >
              Terms and Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
