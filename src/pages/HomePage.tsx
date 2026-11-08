import React, { useState } from "react";
import { BRAND_CONFIG, IMAGES } from "../config/siteConfig";
import { SERVICES_DATA } from "../data/servicesData";
import { FAQ_DATA } from "../data/faqData";
import { INDUSTRIES_DATA } from "../data/industriesData";
import { BacklinkEstimator } from "../components/BacklinkEstimator";
import { HeroAnalyticsDashboard } from "../components/HeroAnalyticsDashboard";
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
  ChevronDown,
  Sparkles,
  BarChart3,
  Compass,
  Workflow,
  Check,
  Shield,
  Clock,
  Target,
  Users,
  Award,
  Zap,
} from "lucide-react";

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenConsultationWithParams: (service?: string, budget?: string, details?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultationWithParams,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES_DATA[0]);

  // Icon mapping helper
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

  const handleApplyPlanner = (service: string, budget: string, details: string) => {
    onOpenConsultationWithParams(service, budget, details);
  };

  return (
    <div className="space-y-16 sm:space-y-28 lg:space-y-36 pb-20 sm:pb-24 overflow-hidden">
      {/* SECTION B: HERO SECTION */}
      <section className="relative pt-8 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-10 items-center">
            {/* Left Column: Proposition */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-7 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-950/60 border border-blue-500/25 text-cyan-300 shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-mono uppercase tracking-wider text-[10px] sm:text-[11px]">
                  International SEO & Link Outreach Agency
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-[3.4rem] font-bold text-white tracking-tight leading-[1.18] sm:leading-[1.12] text-balance font-display">
                Grow Your Business with Powerful{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-300">
                  SEO & Link Building
                </span>{" "}
                Strategies
              </h1>

              <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                We help businesses improve organic visibility, strengthen their backlink profiles, and attract qualified traffic through strategic SEO, guest posting, and link-building solutions.
              </p>

              {/* Two prominent CTAs (Full width on mobile, auto on sm+) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
                <button
                  onClick={() => onOpenConsultationWithParams()}
                  className="w-full sm:w-auto min-h-[48px] px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 active:scale-[0.99] rounded-xl shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/25 transition-all duration-300 text-center cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Get a Free SEO Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate("/services")}
                  className="w-full sm:w-auto min-h-[48px] px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-slate-200 bg-[#0B1430]/80 hover:bg-[#0F1D45] active:scale-[0.99] border border-white/10 hover:border-cyan-400/40 rounded-xl transition-all duration-200 text-center cursor-pointer flex items-center justify-center"
                >
                  Explore Our Services
                </button>
              </div>

              {/* Target Markets Bar */}
              <div className="pt-4 sm:pt-6 border-t border-white/[0.08]">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-2.5 font-mono">
                  Serving Global Clients Across Core Markets:
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5">
                    <span>🇺🇸</span> United States
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5">
                    <span>🇬🇧</span> United Kingdom
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5">
                    <span>🇨🇦</span> Canada
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5">
                    <span>🇦🇺</span> Australia
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset (Interactive SEO Analytics Dashboard) */}
            <div className="lg:col-span-6 w-full min-w-0">
              <HeroAnalyticsDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: TRUST AND VALUE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0A122C]/80 to-[#060B18]/90 border border-white/10 p-5 sm:p-10 lg:p-14 shadow-2xl backdrop-blur-xl overflow-hidden">
          <div className="max-w-3xl mb-8 sm:mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block mb-2 font-mono">
              Our Core Principles
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
              Why Discerning Companies Choose Our SEO Partnership
            </h2>
            <p className="text-slate-300 text-xs sm:text-base mt-2 leading-relaxed">
              We focus on measurable, sustainable organic foundation building rather than vanity metrics or high-risk automated schemes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all space-y-3 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">
                Data-Driven SEO Strategies
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Every action is rooted in verified SERP intent, crawl log forensics, and commercial relevance rather than guesswork or generic templates.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all space-y-3 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                <Link2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">
                Relevant Link-Building Opportunities
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Placements are strictly vetted for thematic relevance, authentic editorial moderation, and active organic search visibility.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all space-y-3 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">
                Customized Campaigns
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Tailored execution built around your sector, competitive gap, geographic target, and commercial unit economics.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all space-y-3 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">
                Transparent Communication
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Full pre-approval of prospective publisher URLs, detailed monthly placement documentation, and clear roadmaps.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all space-y-3 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">
                Quality-Focused Execution
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Zero private blog networks (PBNs), spam networks, or automated scrapers. 100% manual outreach and original writing.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all space-y-3 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">
                Long-Term Organic Growth
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Building enduring authority assets that compound month-over-month and survive major search algorithm adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: SERVICES SECTION (12 Services Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block mb-2 font-mono">
              Full-Spectrum Search Capabilities
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
              Comprehensive SEO & Link Acquisition Services
            </h2>
            <p className="text-slate-400 text-xs sm:text-base mt-2 max-w-2xl leading-relaxed">
              Specialized search marketing solutions designed for SaaS companies, e-commerce stores, affiliate marketers, and agency partners.
            </p>
          </div>
          <button
            onClick={() => onNavigate("/services")}
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap px-4 py-2.5 rounded-xl bg-blue-950/40 border border-blue-500/20 cursor-pointer"
          >
            <span>View detailed service catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-gradient-to-b from-[#0A122C]/90 to-[#070D1E]/95 border border-white/10 hover:border-cyan-400/40 p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-xl hover:shadow-cyan-950/20 min-w-0"
            >
              <div className="space-y-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-950/60 border border-blue-500/20 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-blue-900/30 transition-all shrink-0">
                  {getIcon(service.iconName)}
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-1">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2 font-mono">
                    Key Benefits:
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
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 transition-colors cursor-pointer py-1.5 min-h-[36px]"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenConsultationWithParams(service.title)}
                  className="px-3.5 py-1.5 text-xs text-slate-300 hover:text-white bg-white/[0.03] hover:bg-blue-600/30 border border-white/5 rounded-lg transition-colors cursor-pointer min-h-[36px]"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION E: GUEST POSTING SPOTLIGHT (Prominent offering) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0B1533] via-[#09112A] to-[#070D1E] border border-blue-500/25 p-5 sm:p-10 lg:p-14 overflow-hidden shadow-2xl">
          {/* Ambient accent light */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-400/30">
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                <span>Featured Business Offering</span>
              </div>

              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
                Build Authority with Strategic Guest Posting
              </h2>

              <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
                Reach relevant audiences and strengthen your website's backlink profile through carefully selected guest posting opportunities on relevant websites.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Niche Relevance:</strong>
                    Direct vertical alignment to protect search footprint.
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Website Quality Assessment:</strong>
                    Spam-free backlink profiles and domain trust vetting.
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Organic Traffic Evaluation:</strong>
                    Minimum 5,000+ verified monthly organic search visits.
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Editorial Placement:</strong>
                    Native English writers and strict publisher standards.
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Transparent Requirements:</strong>
                    Pre-approval workflows before outreach begins.
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Customized Campaigns:</strong>
                    Built specifically for your commercial target pages.
                  </div>
                </div>
              </div>

              {/* Action buttons (Full width on mobile) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={() => onOpenConsultationWithParams("Guest Posting Services")}
                  className="w-full sm:w-auto min-h-[48px] px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-[0.99] rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer text-center flex items-center justify-center"
                >
                  Request Guest Post Opportunities
                </button>
                <button
                  onClick={() => onNavigate("/guest-posting")}
                  className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-[#060B18]/80 hover:bg-[#0A122C] active:scale-[0.99] border border-white/10 rounded-xl transition-colors cursor-pointer text-center flex items-center justify-center"
                >
                  Learn More About Guest Posting
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#060B18] aspect-16/10 sm:aspect-4/3 relative">
                <img
                  src={IMAGES.editorialWorkspace}
                  alt="Editorial publication workspace for guest posting outreach"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-3.5 bg-[#0A122C]/90 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-200 font-medium truncate">Editorial Acceptance Rate</span>
                  <span className="text-xs font-mono font-bold text-cyan-400 shrink-0 ml-2">92.4%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: LINK INSERTION SPOTLIGHT (Prominent offering) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#09112A] via-[#070D1E] to-[#0A122C] border border-white/10 p-5 sm:p-10 lg:p-14 shadow-2xl">
          <div className="max-w-3xl mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-400/30 mb-3">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Contextual Authority Acceleration</span>
            </div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
              Strengthen Your SEO with Relevant Link Insertions
            </h2>
            <p className="text-slate-300 text-xs sm:text-base mt-2 leading-relaxed">
              Discover relevant contextual link insertion opportunities within existing content to support your link-building and SEO campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div className="bg-[#060B18]/80 border border-white/10 p-5 sm:p-6 rounded-2xl space-y-2 hover:border-cyan-400/30 transition-all">
              <div className="text-cyan-400 font-semibold text-sm font-display flex items-center gap-2">
                <Link2 className="w-4 h-4" />
                <span>Contextual Relevance</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Links are inserted inside topically coherent paragraphs that add genuine factual value to the reader.
              </p>
            </div>

            <div className="bg-[#060B18]/80 border border-white/10 p-5 sm:p-6 rounded-2xl space-y-2 hover:border-cyan-400/30 transition-all">
              <div className="text-cyan-400 font-semibold text-sm font-display flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Existing Content Placements</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Leverages pages with established historical authority and active search crawler visitation.
              </p>
            </div>

            <div className="bg-[#060B18]/80 border border-white/10 p-5 sm:p-6 rounded-2xl space-y-2 hover:border-cyan-400/30 transition-all sm:col-span-2 lg:col-span-1">
              <div className="text-cyan-400 font-semibold text-sm font-display flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Website Quality Evaluation</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rigorous evaluation of hosting URL ranking stability, index status, and anchor safety.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              onClick={() => onOpenConsultationWithParams("Link Insertion Services")}
              className="w-full sm:w-auto min-h-[48px] px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-[0.99] rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer text-center flex items-center justify-center"
            >
              Request Link Insertion Opportunities
            </button>
            <button
              onClick={() => onNavigate("/link-insertion")}
              className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-[#060B18]/80 hover:bg-[#0A122C] active:scale-[0.99] border border-white/10 rounded-xl transition-colors text-center cursor-pointer flex items-center justify-center"
            >
              Read Link Insertion Guidelines
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6: INTERACTIVE ESTIMATOR TOOL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BacklinkEstimator onApplyPlan={handleApplyPlanner} />
      </section>

      {/* SECTION G: WHY CHOOSE US? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block font-mono">
              Agency Differentiation
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
              Why Partner with {BRAND_CONFIG.brandName}?
            </h2>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              We operate as an extension of your growth team. Our methodologies are built for businesses that cannot afford algorithmic penalties or wasted marketing capital.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="p-2 bg-blue-950/80 border border-blue-500/30 rounded-lg text-cyan-400 shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Client-Focused Approach</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Direct access to senior strategists, not junior account coordinators.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="p-2 bg-blue-950/80 border border-blue-500/30 rounded-lg text-cyan-400 shrink-0 mt-0.5">
                  <Workflow className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Customized SEO Campaigns</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    No cookie-cutter tiers; strategies designed around your market position and competition.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="p-2 bg-blue-950/80 border border-blue-500/30 rounded-lg text-cyan-400 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Quality Over Quantity</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    5 high-authority, relevant backlinks will consistently outperform 50 low-grade directory links.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="p-2 bg-blue-950/80 border border-blue-500/30 rounded-lg text-cyan-400 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Transparent Processes</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    You know where every link is placed, what anchor is used, and why that publisher was chosen.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <div className="p-3.5 sm:p-4 bg-blue-950/30 border border-blue-900/40 rounded-xl text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-medium">Clear Expectations: </strong>
                  We do not promise guaranteed rankings or guaranteed traffic numbers. Organic search relies on numerous dynamic signals. We guarantee rigorous execution, vetted publishers, and clean white-hat compliance.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#060B18] aspect-16/10">
              <img
                src={IMAGES.agencyWorkspace}
                alt="Digital marketing strategy specialists reviewing technical SEO architecture"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060B18]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-[#0A122C]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">Global Campaign Directors</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono">Dedicated strategist assigned to every account</div>
                </div>
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-400/30 shrink-0 ml-2">
                  Pre-Approval Flow
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION H: OUR WORKING PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block mb-2 font-mono">
            Systematic Methodology
          </span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
            Our Four-Step Working Process
          </h2>
          <p className="text-slate-400 text-xs sm:text-base mt-2">
            A structured, repeatable framework engineered for accountability and compounding organic results.
          </p>
        </div>

        {/* 1 col on mobile, 2 cols on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          <div className="rounded-2xl bg-gradient-to-b from-[#0A122C] to-[#070D1E] border border-white/10 p-5 sm:p-6 space-y-3 sm:space-y-4 hover:border-cyan-400/40 transition-all">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">01</div>
            <h3 className="text-base sm:text-lg font-bold text-white font-display">Understand Client Goals</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We align on your primary revenue streams, target customer profiles, high-margin services, and regional priority markets (US, UK, CA, AU).
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-b from-[#0A122C] to-[#070D1E] border border-white/10 p-5 sm:p-6 space-y-3 sm:space-y-4 hover:border-cyan-400/40 transition-all">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">02</div>
            <h3 className="text-base sm:text-lg font-bold text-white font-display">Analyze Site & Requirements</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We audit your existing backlink profile, identify indexation obstacles, analyze top competitors, and map out topical keyword opportunities.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-b from-[#0A122C] to-[#070D1E] border border-white/10 p-5 sm:p-6 space-y-3 sm:space-y-4 hover:border-cyan-400/40 transition-all">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">03</div>
            <h3 className="text-base sm:text-lg font-bold text-white font-display">Develop Custom SEO Strategy</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We construct a tailored monthly roadmap specifying link velocity, anchor text targets, guest posting editorial pitches, and technical fixes.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-b from-[#0A122C] to-[#070D1E] border border-white/10 p-5 sm:p-6 space-y-3 sm:space-y-4 hover:border-cyan-400/40 transition-all">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">04</div>
            <h3 className="text-base sm:text-lg font-bold text-white font-display">Execute & Provide Updates</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We execute manual outreach, submit content, verify live URLs, monitor crawl responses, and provide transparent monthly performance updates.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION I: INDUSTRIES WE SERVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block mb-2 font-mono">
            Target Vertical Expertise
          </span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
            Industries We Serve
          </h2>
          <p className="text-slate-400 text-xs sm:text-base mt-2">
            SEO strategies and placement suitability depend heavily on the unique regulatory, competitive, and intent nuances of each industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Vertical Selector List */}
          <div className="lg:col-span-5 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-2.5">
            {INDUSTRIES_DATA.map((ind) => (
              <button
                key={ind.slug}
                onClick={() => setSelectedIndustry(ind)}
                className={`p-3 sm:p-3.5 rounded-xl border text-left transition-all cursor-pointer min-h-[48px] flex items-center ${
                  selectedIndustry.slug === ind.slug
                    ? "bg-[#0B1533] border-cyan-400 text-white font-semibold shadow-lg shadow-cyan-950/40"
                    : "bg-[#070D1E]/80 border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/10"
                }`}
              >
                <div className="text-xs font-medium truncate">{ind.name}</div>
              </button>
            ))}
          </div>

          {/* Vertical Details Box */}
          <div className="lg:col-span-7 bg-gradient-to-b from-[#0A122C] to-[#070D1E] border border-white/10 p-5 sm:p-8 rounded-2xl space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] flex-wrap gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                {selectedIndustry.name} SEO Framework
              </h3>
              <span className="text-xs text-cyan-400 font-mono">Industry Strategy</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedIndustry.description}
            </p>

            <div className="space-y-2.5 pt-1 text-xs">
              <div className="bg-[#060B18] p-3 sm:p-3.5 rounded-xl border border-white/5">
                <span className="text-slate-400 block mb-1 font-semibold uppercase tracking-wider text-[10px] sm:text-[11px] font-mono">
                  Key Vertical Challenge:
                </span>
                <span className="text-slate-300 leading-relaxed">{selectedIndustry.challenges}</span>
              </div>
              <div className="bg-[#060B18] p-3 sm:p-3.5 rounded-xl border border-white/5">
                <span className="text-slate-400 block mb-1 font-semibold uppercase tracking-wider text-[10px] sm:text-[11px] font-mono">
                  Strategic Search Focus:
                </span>
                <span className="text-slate-300 leading-relaxed">{selectedIndustry.strategyFocus}</span>
              </div>
              <div className="bg-[#060B18] p-3 sm:p-3.5 rounded-xl border border-white/5">
                <span className="text-slate-400 block mb-1 font-semibold uppercase tracking-wider text-[10px] sm:text-[11px] font-mono">
                  Placement Suitability:
                </span>
                <span className="text-slate-300 leading-relaxed">{selectedIndustry.placementSuitability}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() =>
                  onOpenConsultationWithParams(
                    "Search Engine Optimization (Full-Service)",
                    undefined,
                    `Industry Focus: ${selectedIndustry.name}`
                  )
                }
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer py-2"
              >
                <span>Request {selectedIndustry.name} Campaign Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION J: FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block mb-2 font-mono">
            Answers & Clarity
          </span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-xs sm:text-base mt-2">
            Transparent answers to help you evaluate our services and off-page outreach standards.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-3.5">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? "border-cyan-400/40 bg-[#0A122C]"
                    : "border-white/10 bg-[#070D1E]/80 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none min-h-[52px]"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-base font-semibold text-white font-display">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.06] bg-[#060B18]/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION K: FINAL CALL-TO-ACTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-[#070D1E] border border-cyan-500/30 p-6 sm:p-12 lg:p-16 text-center overflow-hidden shadow-2xl">
          {/* Ambient background glow */}
          <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5 sm:space-y-6">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
              Ready to Improve Your Website's SEO Performance?
            </h2>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Let's discuss your goals and build an SEO strategy tailored to your business.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate("/contact")}
                className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-[0.99] rounded-xl shadow-xl shadow-blue-600/30 transition-all cursor-pointer flex items-center justify-center"
              >
                Contact Our Team
              </button>
              <button
                onClick={() => onOpenConsultationWithParams()}
                className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-slate-200 bg-[#060B18]/80 hover:bg-[#0A122C] active:scale-[0.99] border border-white/10 rounded-xl transition-colors cursor-pointer flex items-center justify-center"
              >
                Request Free SEO Consultation
              </button>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-400 pt-1 font-mono">
              Confidential consultation · Inquiries answered within 24 business hours
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
