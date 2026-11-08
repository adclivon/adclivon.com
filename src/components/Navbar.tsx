import React, { useState, useEffect } from "react";
import { BRAND_CONFIG } from "../config/siteConfig";
import { Menu, X, ChevronDown, ArrowUpRight, ArrowRight } from "lucide-react";

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
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesExpanded(false);
  };

  const isActive = (path: string) => currentPath === path;

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#060B18]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-blue-950/20"
            : "bg-[#060B18]/85 backdrop-blur-md border-b border-white/[0.05]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Zone 1: Brand Wordmark (Always visible on left) */}
            <button
              onClick={() => handleLinkClick("/")}
              className="flex items-center gap-2.5 sm:gap-3 text-left group cursor-pointer whitespace-nowrap shrink-0 focus:outline-none min-h-[44px]"
              aria-label={`${BRAND_CONFIG.brandName} Homepage`}
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all shrink-0">
                <div className="w-full h-full bg-[#060B18] rounded-[11px] flex items-center justify-center">
                  <span className="font-display font-bold text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    A
                  </span>
                </div>
              </div>
              <span className="text-lg sm:text-2xl font-bold tracking-tight text-white transition-colors font-display">
                {BRAND_CONFIG.shortName}
                <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">.com</span>
              </span>
            </button>

            {/* Zone 2: Desktop Navigation Links (Hidden on mobile) */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-slate-300"
            >
              <button
                onClick={() => handleLinkClick("/")}
                className={`hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  isActive("/") ? "text-white border-cyan-400 font-semibold" : "border-transparent"
                }`}
              >
                Home
              </button>

              <button
                onClick={() => handleLinkClick("/about")}
                className={`hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  isActive("/about") ? "text-white border-cyan-400 font-semibold" : "border-transparent"
                }`}
              >
                About
              </button>

              {/* Services Dropdown */}
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
                      ? "text-white border-cyan-400 font-semibold"
                      : "border-transparent"
                  }`}
                  aria-expanded={servicesDropdownOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 opacity-70 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute left-0 top-full pt-2 w-72 z-50">
                    <div className="bg-[#0B1430] border border-white/10 rounded-xl shadow-2xl p-2 space-y-1 backdrop-blur-xl">
                      <button
                        onClick={() => handleLinkClick("/services")}
                        className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-blue-900/40 rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <span className="font-semibold text-white">All 12 SEO Services</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                      </button>
                      <div className="h-[1px] bg-white/5 my-1" />
                      <button
                        onClick={() => handleLinkClick("/guest-posting")}
                        className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-blue-900/40 rounded-lg transition-colors cursor-pointer"
                      >
                        Guest Posting Services
                      </button>
                      <button
                        onClick={() => handleLinkClick("/link-insertion")}
                        className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-blue-900/40 rounded-lg transition-colors cursor-pointer"
                      >
                        Link Insertion Services
                      </button>
                      <button
                        onClick={() => handleLinkClick("/link-building")}
                        className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-blue-900/40 rounded-lg transition-colors cursor-pointer"
                      >
                        Quality Link Building
                      </button>
                      <button
                        onClick={() => handleLinkClick("/technical-seo")}
                        className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-blue-900/40 rounded-lg transition-colors cursor-pointer"
                      >
                        Technical SEO
                      </button>
                      <button
                        onClick={() => handleLinkClick("/local-seo")}
                        className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-blue-900/40 rounded-lg transition-colors cursor-pointer"
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
                  isActive("/guest-posting") ? "text-white border-cyan-400 font-semibold" : "border-transparent"
                }`}
              >
                Guest Posting
              </button>

              <button
                onClick={() => handleLinkClick("/link-building")}
                className={`hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  isActive("/link-building") ? "text-white border-cyan-400 font-semibold" : "border-transparent"
                }`}
              >
                Link Building
              </button>

              <button
                onClick={() => handleLinkClick("/link-insertion")}
                className={`hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  isActive("/link-insertion") ? "text-white border-cyan-400 font-semibold" : "border-transparent"
                }`}
              >
                Link Insertion
              </button>

              <button
                onClick={() => handleLinkClick("/blog")}
                className={`hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  isActive("/blog") ? "text-white border-cyan-400 font-semibold" : "border-transparent"
                }`}
              >
                Blog
              </button>

              <button
                onClick={() => handleLinkClick("/contact")}
                className={`hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  isActive("/contact") ? "text-white border-cyan-400 font-semibold" : "border-transparent"
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Zone 3: Actions */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Desktop CTA (Hidden on mobile to keep top bar uncluttered and prevent overflow) */}
              <button
                onClick={onOpenConsultation}
                className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer focus:ring-2 focus:ring-cyan-400 focus:outline-none whitespace-nowrap shrink-0"
              >
                <span>Get a Free Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Clean Hamburger Menu Button (Right side on mobile/tablet) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-slate-300 hover:text-white hover:bg-white/10 active:bg-white/15 rounded-xl transition-colors focus:outline-none cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu & Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-[#040814]/80 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="fixed inset-x-0 top-0 max-h-[92vh] overflow-y-auto bg-[#070D1E] border-b border-cyan-500/30 shadow-2xl shadow-blue-950/80 p-4 sm:p-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px]">
                  <div className="w-full h-full bg-[#060B18] rounded-[7px] flex items-center justify-center">
                    <span className="font-display font-bold text-xs text-cyan-400">A</span>
                  </div>
                </div>
                <span className="font-bold text-base text-white font-display">
                  {BRAND_CONFIG.shortName}<span className="text-cyan-400">.com</span>
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="min-w-[40px] min-h-[40px] flex items-center justify-center p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links List */}
            <nav className="space-y-1 text-sm font-medium">
              <button
                onClick={() => handleLinkClick("/")}
                className={`w-full text-left px-3.5 py-3 rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                  isActive("/")
                    ? "bg-blue-600/20 text-cyan-300 font-semibold border border-blue-500/30"
                    : "text-slate-200 hover:bg-white/5"
                }`}
              >
                <span>Home</span>
                {isActive("/") && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
              </button>

              <button
                onClick={() => handleLinkClick("/about")}
                className={`w-full text-left px-3.5 py-3 rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                  isActive("/about")
                    ? "bg-blue-600/20 text-cyan-300 font-semibold border border-blue-500/30"
                    : "text-slate-200 hover:bg-white/5"
                }`}
              >
                <span>About Our Agency</span>
                {isActive("/about") && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
              </button>

              {/* Expandable Services Group */}
              <div className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
                <button
                  onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                  className="w-full text-left px-3.5 py-3 text-slate-200 flex items-center justify-between cursor-pointer"
                >
                  <span className="font-semibold text-cyan-300">Services & Solutions</span>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-400 transition-transform duration-200 ${
                      mobileServicesExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileServicesExpanded && (
                  <div className="px-2 pb-2 space-y-1 border-t border-white/5 pt-1.5 bg-[#050914]/60">
                    <button
                      onClick={() => handleLinkClick("/services")}
                      className="w-full text-left px-3 py-2 text-xs font-semibold text-white hover:text-cyan-300 hover:bg-white/5 rounded-lg flex items-center justify-between"
                    >
                      <span>All 12 SEO Services</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                    </button>
                    <button
                      onClick={() => handleLinkClick("/guest-posting")}
                      className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
                    >
                      Guest Posting Services
                    </button>
                    <button
                      onClick={() => handleLinkClick("/link-insertion")}
                      className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
                    >
                      Link Insertion Services
                    </button>
                    <button
                      onClick={() => handleLinkClick("/link-building")}
                      className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
                    >
                      Quality Link Building
                    </button>
                    <button
                      onClick={() => handleLinkClick("/technical-seo")}
                      className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
                    >
                      Technical SEO
                    </button>
                    <button
                      onClick={() => handleLinkClick("/local-seo")}
                      className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
                    >
                      Local SEO
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleLinkClick("/guest-posting")}
                className={`w-full text-left px-3.5 py-3 rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                  isActive("/guest-posting")
                    ? "bg-blue-600/20 text-cyan-300 font-semibold border border-blue-500/30"
                    : "text-slate-200 hover:bg-white/5"
                }`}
              >
                <span>Guest Posting</span>
                {isActive("/guest-posting") && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
              </button>

              <button
                onClick={() => handleLinkClick("/link-building")}
                className={`w-full text-left px-3.5 py-3 rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                  isActive("/link-building")
                    ? "bg-blue-600/20 text-cyan-300 font-semibold border border-blue-500/30"
                    : "text-slate-200 hover:bg-white/5"
                }`}
              >
                <span>Link Building</span>
                {isActive("/link-building") && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
              </button>

              <button
                onClick={() => handleLinkClick("/link-insertion")}
                className={`w-full text-left px-3.5 py-3 rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                  isActive("/link-insertion")
                    ? "bg-blue-600/20 text-cyan-300 font-semibold border border-blue-500/30"
                    : "text-slate-200 hover:bg-white/5"
                }`}
              >
                <span>Link Insertion</span>
                {isActive("/link-insertion") && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
              </button>

              <button
                onClick={() => handleLinkClick("/blog")}
                className={`w-full text-left px-3.5 py-3 rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                  isActive("/blog")
                    ? "bg-blue-600/20 text-cyan-300 font-semibold border border-blue-500/30"
                    : "text-slate-200 hover:bg-white/5"
                }`}
              >
                <span>Blog & Strategy Insights</span>
                {isActive("/blog") && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
              </button>

              <button
                onClick={() => handleLinkClick("/contact")}
                className={`w-full text-left px-3.5 py-3 rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                  isActive("/contact")
                    ? "bg-blue-600/20 text-cyan-300 font-semibold border border-blue-500/30"
                    : "text-slate-200 hover:bg-white/5"
                }`}
              >
                <span>Contact & Inquiries</span>
                {isActive("/contact") && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
              </button>
            </nav>

            {/* Mobile Call to Action Button inside drawer */}
            <div className="pt-2 pb-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full min-h-[48px] py-3.5 px-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-[0.99] rounded-xl shadow-lg shadow-blue-600/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get a Free SEO Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
