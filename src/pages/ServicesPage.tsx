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
  Check,
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
        return <Globe className="w-5 h-5 text-blue-400" />;
      case "FileText":
        return <FileText className="w-5 h-5 text-blue-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case "Share2":
        return <Share2 className="w-5 h-5 text-blue-400" />;
      case "BookOpen":
        return <BookOpen className="w-5 h-5 text-blue-400" />;
      case "Link2":
        return <Link2 className="w-5 h-5 text-blue-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      case "Search":
        return <Search className="w-5 h-5 text-blue-400" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-blue-400" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-blue-400" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-5 h-5 text-blue-400" />;
      case "MapPin":
        return <MapPin className="w-5 h-5 text-blue-400" />;
      default:
        return <Globe className="w-5 h-5 text-blue-400" />;
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
    <div className="pb-24">
      <Breadcrumbs items={[{ label: "Services" }]} onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block">
            End-To-End Capabilities
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            Our 12 Core Search Engine Optimization Services
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Every service is engineered for enterprise rigor, white-hat durability, and measurable commercial search intent. Explore our specialized services below.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-2 bg-slate-900 border border-slate-800 rounded-xl">
          <div className="flex flex-wrap items-center gap-1">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeCategory === "all"
                  ? "bg-blue-600 text-white font-semibold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All 12 Services
            </button>
            <button
              onClick={() => setActiveCategory("offpage")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeCategory === "offpage"
                  ? "bg-blue-600 text-white font-semibold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Off-Page & Link Outreach
            </button>
            <button
              onClick={() => setActiveCategory("technical")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeCategory === "technical"
                  ? "bg-blue-600 text-white font-semibold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Technical & Audits
            </button>
            <button
              onClick={() => setActiveCategory("content_strategy")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeCategory === "content_strategy"
                  ? "bg-blue-600 text-white font-semibold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Strategy & Content
            </button>
          </div>

          <div className="px-2">
            <input
              type="text"
              placeholder="Filter services by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 px-3 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div className="space-y-4">
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg w-fit">
                  {getIcon(service.iconName)}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-display">{service.title}</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="text-xs text-slate-300 bg-slate-950/60 p-3 rounded-lg border border-slate-900">
                  <span className="text-slate-500 block text-[10px] font-semibold uppercase tracking-wider mb-0.5">
                    Recommended For:
                  </span>
                  <span>{service.bestFor}</span>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Key Deliverables & Benefits:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {service.keyBenefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(`/${service.slug}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <span>Explore Service Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenConsultationWithParams(service.title)}
                  className="px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 sm:p-10 text-center">
          <h2 className="text-2xl font-bold text-white font-display mb-2">
            Need a Multi-Service Custom SEO Retainer?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-6">
            We can combine Technical SEO audits, ongoing high-authority link insertions, and monthly guest posting into a cohesive campaign tailored to your website.
          </p>
          <button
            onClick={() => onOpenConsultationWithParams("Search Engine Optimization (Full-Service)")}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
          >
            Request Custom Multi-Service Proposal
          </button>
        </div>
      </div>
    </div>
  );
};
