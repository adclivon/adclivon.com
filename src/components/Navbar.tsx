import React, { useState } from "react";
import { BRAND_CONFIG } from "../config/siteConfig";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleLinkClick("/")}
            className="text-left group cursor-pointer whitespace-nowrap shrink-0 focus:outline-none"
            aria-label={`${BRAND_CONFIG.brandName} Homepage`}
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors font-display">
              {BRAND_CONFIG.shortName}<span className="text-blue-500 group-hover:text-blue-400 transition-colors">.com</span>
            </span>
          </button>

          {/* Zone 2: Concise single-line navigation links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300"
          >
            <button
              onClick={() => handleLinkClick("/")}
              className={`hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1 border-b-2 ${
                isActive("/") ? "text-white border-blue-500 font-semibold" : "border-transparent"
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleLinkClick("/about")}
              className={`hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1 border-b-2 ${
                isActive("/about") ? "text-white border-blue-500 font-semibold" : "border-transparent"
              }`}
            >
              About
            </button>

            {/* Services with Hover/Click Flyout */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => handleLinkClick("/services")}
                className={`flex items-center gap-1 hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  currentPath.startsWith("/services") ||
                  currentPath === "/technical-seo" ||
                  currentPath === "/local-seo"
                    ? "text-white border-blue-500 font-semibold"
                    : "border-transparent"
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-64 z-50">
                  <div className="bg-slate-900 border border-slate-800 rounded-lg shadow-2xl p-2 space-y-1">
                    <button
                      onClick={() => handleLinkClick("/services")}
                      className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/70 rounded transition-colors"
                    >
                      All 12 SEO Services
                    </button>
                    <button
                      onClick={() => handleLinkClick("/guest-posting")}
                      className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/70 rounded transition-colors"
                    >
                      Guest Posting Services
                    </button>
                    <button
                      onClick={() => handleLinkClick("/link-insertion")}
                      className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/70 rounded transition-colors"
                    >
                      Link Insertion Services
                    </button>
                    <button
                      onClick={() => handleLinkClick("/link-building")}
                      className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/70 rounded transition-colors"
                    >
                      Quality Link Building
                    </button>
                    <button
                      onClick={() => handleLinkClick("/technical-seo")}
                      className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/70 rounded transition-colors"
                    >
                      Technical SEO
                    </button>
                    <button
                      onClick={() => handleLinkClick("/local-seo")}
                      className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/70 rounded transition-colors"
                    >
                      Local SEO
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick("/guest-posting")}
              className={`hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1 border-b-2 ${
                isActive("/guest-posting") ? "text-white border-blue-500 font-semibold" : "border-transparent"
              }`}
            >
              Guest Posting
            </button>

            <button
              onClick={() => handleLinkClick("/link-building")}
              className={`hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1 border-b-2 ${
                isActive("/link-building") ? "text-white border-blue-500 font-semibold" : "border-transparent"
              }`}
            >
              Link Building
            </button>

            <button
              onClick={() => handleLinkClick("/link-insertion")}
              className={`hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1 border-b-2 ${
                isActive("/link-insertion") ? "text-white border-blue-500 font-semibold" : "border-transparent"
              }`}
            >
              Link Insertion
            </button>

            <button
              onClick={() => handleLinkClick("/blog")}
              className={`hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1 border-b-2 ${
                isActive("/blog") ? "text-white border-blue-500 font-semibold" : "border-transparent"
              }`}
            >
              Blog
            </button>

            <button
              onClick={() => handleLinkClick("/contact")}
              className={`hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1 border-b-2 ${
                isActive("/contact") ? "text-white border-blue-500 font-semibold" : "border-transparent"
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-colors rounded-lg shadow-sm whitespace-nowrap shrink-0 cursor-pointer focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              Get a Free SEO Consultation
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
          <button
            onClick={() => handleLinkClick("/")}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded"
          >
            Home
          </button>
          <button
            onClick={() => handleLinkClick("/about")}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded"
          >
            About Us
          </button>
          <button
            onClick={() => handleLinkClick("/services")}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded"
          >
            All 12 SEO Services
          </button>
          <button
            onClick={() => handleLinkClick("/guest-posting")}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded pl-6"
          >
            Guest Posting Services
          </button>
          <button
            onClick={() => handleLinkClick("/link-insertion")}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded pl-6"
          >
            Link Insertion Services
          </button>
          <button
            onClick={() => handleLinkClick("/link-building")}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded pl-6"
          >
            Quality Link Building
          </button>
          <button
            onClick={() => handleLinkClick("/technical-seo")}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded pl-6"
          >
            Technical SEO
          </button>
          <button
            onClick={() => handleLinkClick("/local-seo")}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded pl-6"
          >
            Local SEO
          </button>
          <button
            onClick={() => handleLinkClick("/blog")}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded"
          >
            Blog & Strategy Insights
          </button>
          <button
            onClick={() => handleLinkClick("/contact")}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded"
          >
            Contact Us
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg"
            >
              Get a Free SEO Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
