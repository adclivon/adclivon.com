import React from "react";
import { BRAND_CONFIG } from "../config/siteConfig";
import { Mail, Phone, MapPin, Globe, Shield, ExternalLink } from "lucide-react";

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
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Agency Brand & Intro */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xl font-bold tracking-tight text-white font-display">
              {BRAND_CONFIG.shortName}<span className="text-blue-500">.com</span>
            </span>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              We engineer custom, data-driven SEO campaigns, strategic guest posting placements, and contextual link insertion solutions for high-growth businesses and agencies internationally.
            </p>

            {/* Target Markets */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-2">
                Primary International Client Markets
              </span>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
                {BRAND_CONFIG.targetMarkets.map((m) => (
                  <span key={m.code} className="inline-flex items-center gap-1.5">
                    <span>{m.flag}</span>
                    <span>{m.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenConsultation}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
              >
                Schedule Strategy Consultation
              </button>
            </div>
          </div>

          {/* Column 2: Core Solutions */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Core SEO Services
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate("/services")}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  All 12 SEO Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/guest-posting")}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Guest Posting Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/link-insertion")}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Link Insertion Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/link-building")}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Quality Link Building
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/technical-seo")}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Technical SEO Audits
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/local-seo")}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Local SEO & Multi-Location
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Agency Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Agency & Resources
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate("/")}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/about")}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  About Our Agency
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/blog")}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  SEO Insights & Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/contact")}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Contact & Inquiry
                </button>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1"
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
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Robots.txt</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Verification */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Contact & Inquiries
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <a
                    href={`mailto:${BRAND_CONFIG.contactEmail}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {BRAND_CONFIG.contactEmail}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{BRAND_CONFIG.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">{BRAND_CONFIG.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">{BRAND_CONFIG.workingHours}</span>
              </li>
            </ul>

            {onOpenLeadsModal && (
              <div className="pt-2">
                <button
                  onClick={onOpenLeadsModal}
                  className="text-xs text-slate-500 hover:text-slate-300 underline underline-offset-2 transition-colors cursor-pointer"
                >
                  View Agency Received Inquiries
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Ethical Standards & Compliance Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-900/80">
          <div className="flex items-start gap-3 bg-slate-900/50 p-4 rounded-lg border border-slate-800/60 text-xs text-slate-400 leading-relaxed">
            <Shield className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-300 font-medium">Compliance & Ranking Disclaimer: </strong>
              {BRAND_CONFIG.brandName} delivers bespoke, data-backed search engine optimization and manual editorial outreach services. We do not provide or promise guaranteed rankings, fixed traffic metrics, or artificial algorithmic shortcuts. All outcomes depend upon search engine indexation algorithms, industry competition, and qualitative implementation.
            </p>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {BRAND_CONFIG.brandName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate("/privacy")}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <button
              onClick={() => onNavigate("/terms")}
              className="hover:text-slate-300 transition-colors"
            >
              Terms and Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
