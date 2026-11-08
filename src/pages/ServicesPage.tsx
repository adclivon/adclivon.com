import React, { useState } from "react";
import { SERVICES_DATA } from "../data/servicesData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import {
  Globe,
  FileText,
  Cpu,
  Share2,
  BookOpen,
  Link2,
  ShieldCheck,
  Search,
  TrendingUp,
  Layers,
  CheckCircle2,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultationWithParams: (service?: string, budget?: string, details?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenConsultationWithParams,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case "FileText":
        return <FileText className="w-5 h-5 text-cyan-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case "Share2":
        return <Share2 className="w-5 h-5 text-cyan-400" />;
      case "BookOpen":
        return <BookOpen className="w-5 h-5 text-cyan-400" />;
      case "Link2":
        return <Link2 className="w-5 h-5 text-cyan-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case "Search":
        return <Search className="w-5 h-5 text-cyan-400" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-cyan-400" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
      case "MapPin":
        return <MapPin className="w-5 h-5 text-cyan-400" />;
      default:
        return <Globe className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredServices = SERVICES_DATA.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.bestFor.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeCategory === "all") return matchesSearch;
    if (activeCategory === "offpage") {
      return (
        matchesSearch &&
        (s.id === "guest-posting" ||
          s.id === "link-insertion" ||
          s.id === "quality-link-building" ||
          s.id === "off-page-seo")
      );
    }
    if (activeCategory === "technical") {
      return (
        matchesSearch &&
        (s.id === "technical-seo" || s.id === "on-page-seo" || s.id === "seo-audits")
      );
    }
    if (activeCategory === "content_strategy") {
      return (
        matchesSearch &&
        (s.id === "keyword-research" ||
          s.id === "content-marketing" ||
          s.id === "competitor-analysis" ||
          s.id === "seo" ||
          s.id === "local-seo")
      );
    }
    return matchesSearch;
  });

  return (
    <div className="pb-20 sm:pb-24 overflow-hidden">
      <Breadcrumbs items={[{ label: "Services" }]} onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-8 sm:space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-400/30">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>End-To-End Organic Search Capabilities</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            Our 12 Core Search Engine Optimization Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed">
            Every service is engineered for enterprise rigor, white-hat durability, and measurable commercial search intent. Explore our specialized services below.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 p-2.5 bg-[#0A122C]/90 border border-white/10 rounded-2xl backdrop-blur-xl">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3.5 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer min-h-[38px] flex items-center ${
                activeCategory === "all"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-md shadow-blue-600/30"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              All 12 Services
            </button>
            <button
              onClick={() => setActiveCategory("offpage")}
              className={`px-3.5 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer min-h-[38px] flex items-center ${
                activeCategory === "offpage"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-md shadow-blue-600/30"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              Off-Page & Link Outreach
            </button>
            <button
              onClick={() => setActiveCategory("technical")}
              className={`px-3.5 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer min-h-[38px] flex items-center ${
                activeCategory === "technical"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-md shadow-blue-600/30"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              Technical & Audits
            </button>
            <button
              onClick={() => setActiveCategory("content_strategy")}
              className={`px-3.5 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer min-h-[38px] flex items-center ${
                activeCategory === "content_strategy"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-md shadow-blue-600/30"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              Strategy & Content
            </button>
          </div>

          <div className="w-full sm:w-auto">
            <input
              type="text"
              placeholder="Filter services by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 px-3.5 py-2 text-xs bg-[#060B18] border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 min-h-[38px]"
            />
          </div>
        </div>

        {/* Services Grid (1 on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-gradient-to-b from-[#0A122C]/90 to-[#070D1E]/95 border border-white/10 p-5 sm:p-7 flex flex-col justify-between hover:border-cyan-400/40 transition-all duration-300 shadow-xl group hover:-translate-y-1 min-w-0"
            >
              <div className="space-y-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-950/60 border border-blue-500/20 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-blue-900/30 transition-all shrink-0">
                  {getIcon(service.iconName)}
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="text-xs text-slate-300 bg-[#060B18]/70 p-3 sm:p-3.5 rounded-xl border border-white/5">
                  <span className="text-slate-400 block text-[10px] font-semibold uppercase tracking-wider mb-1 font-mono">
                    Recommended For:
                  </span>
                  <span>{service.bestFor}</span>
                </div>

                <div>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2 font-mono">
                    Key Deliverables & Benefits:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {service.keyBenefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-white/[0.08] flex items-center justify-between gap-2">
                <button
                  onClick={() => onNavigate(`/${service.slug}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer min-h-[36px]"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenConsultationWithParams(service.title)}
                  className="px-3.5 py-1.5 text-xs font-medium text-slate-200 bg-white/[0.03] hover:bg-blue-600/30 border border-white/5 rounded-lg transition-colors cursor-pointer min-h-[36px]"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-[#070D1E] border border-cyan-500/20 p-6 sm:p-12 text-center shadow-xl">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
            Need a Multi-Service Custom SEO Retainer?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
            We can combine Technical SEO audits, ongoing high-authority link insertions, and monthly guest posting into a cohesive campaign tailored to your website.
          </p>
          <button
            onClick={() => onOpenConsultationWithParams("Search Engine Optimization (Full-Service)")}
            className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-[0.99] rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer flex items-center justify-center mx-auto"
          >
            Request Custom Multi-Service Proposal
          </button>
        </div>
      </div>
    </div>
  );
};
