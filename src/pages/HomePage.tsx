import React, { useState } from "react";
import { BRAND_CONFIG, IMAGES } from "../config/siteConfig";
import { SERVICES_DATA } from "../data/servicesData";
import { FAQ_DATA } from "../data/faqData";
import { INDUSTRIES_DATA } from "../data/industriesData";
import { BacklinkEstimator } from "../components/BacklinkEstimator";
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
        return <Globe className="w-6 h-6 text-blue-400" />;
      case "FileText":
        return <FileText className="w-6 h-6 text-blue-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-blue-400" />;
      case "Share2":
        return <Share2 className="w-6 h-6 text-blue-400" />;
      case "BookOpen":
        return <BookOpen className="w-6 h-6 text-blue-400" />;
      case "Link2":
        return <Link2 className="w-6 h-6 text-blue-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-blue-400" />;
      case "Search":
        return <Search className="w-6 h-6 text-blue-400" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-blue-400" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-blue-400" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-6 h-6 text-blue-400" />;
      case "MapPin":
        return <MapPin className="w-6 h-6 text-blue-400" />;
      default:
        return <Globe className="w-6 h-6 text-blue-400" />;
    }
  };

  const handleApplyPlanner = (service: string, budget: string, details: string) => {
    onOpenConsultationWithParams(service, budget, details);
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* SECTION B: HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-400 uppercase tracking-wider">
                <span>International SEO & Link Outreach Agency</span>
                <span aria-hidden="true">·</span>
                <span>US · UK · Canada · Australia</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.15] text-balance font-display">
                Grow Your Business with Powerful SEO & Link Building Strategies
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                We help businesses improve organic visibility, strengthen their backlink profiles, and attract qualified traffic through strategic SEO, guest posting, and link-building solutions.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenConsultationWithParams()}
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-900/30 transition-colors text-center cursor-pointer"
                >
                  Get a Free SEO Consultation
                </button>
                <button
                  onClick={() => onNavigate("/services")}
                  className="px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors text-center cursor-pointer"
                >
                  Explore Our Services
                </button>
              </div>

              {/* Target Markets Bar */}
              <div className="pt-6 border-t border-slate-800/80">
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-2">
                  Serving Global Clients In Key Geographies
                </span>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1.5 text-slate-300">
                    <span>🇺🇸</span> United States
                  </span>
                  <span className="text-slate-700">·</span>
                  <span className="inline-flex items-center gap-1.5 text-slate-300">
                    <span>🇬🇧</span> United Kingdom
                  </span>
                  <span className="text-slate-700">·</span>
                  <span className="inline-flex items-center gap-1.5 text-slate-300">
                    <span>🇨🇦</span> Canada
                  </span>
                  <span className="text-slate-700">·</span>
                  <span className="inline-flex items-center gap-1.5 text-slate-300">
                    <span>🇦🇺</span> Australia
                  </span>
                  <span className="text-slate-700">·</span>
                  <span className="inline-flex items-center gap-1.5 text-slate-300">
                    <span>🌐</span> International Markets
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 aspect-16/10">
                <img
                  src={IMAGES.heroAnalytics}
                  alt="SEO analytics interface showing organic traffic growth and backlink profile analysis"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-950/80 backdrop-blur-md rounded-lg border border-slate-800/80 text-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-blue-400" />
                    <span className="text-slate-200 font-medium">Verified Organic Analytics</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">100% Real Traffic Placements</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: TRUST AND VALUE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-slate-800/80 bg-slate-900/40 rounded-2xl p-8 sm:p-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block mb-2">
              Our Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
              Why Discerning Companies Choose Our SEO Partnership
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              We focus on measurable, sustainable organic foundation building rather than vanity metrics or high-risk automated schemes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-base font-display">
                <Target className="w-5 h-5 text-blue-400 shrink-0" />
                <h3>Data-Driven SEO Strategies</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Every action is rooted in verified SERP intent, crawl log forensics, and commercial relevance rather than guesswork or generic templates.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-base font-display">
                <Link2 className="w-5 h-5 text-blue-400 shrink-0" />
                <h3>Relevant Link-Building Opportunities</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Placements are strictly vetted for thematic relevance, authentic editorial moderation, and active organic search visibility.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-base font-display">
                <Workflow className="w-5 h-5 text-blue-400 shrink-0" />
                <h3>Customized Campaigns</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Tailored execution built around your sector, competitive gap, geographic target, and commercial unit economics.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-base font-display">
                <Compass className="w-5 h-5 text-blue-400 shrink-0" />
                <h3>Transparent Communication</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Full pre-approval of prospective publisher URLs, detailed monthly placement documentation, and clear roadmaps.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-base font-display">
                <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
                <h3>Quality-Focused Execution</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Zero private blog networks (PBNs), spam networks, or automated scrapers. 100% manual outreach and original writing.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-base font-display">
                <TrendingUp className="w-5 h-5 text-blue-400 shrink-0" />
                <h3>Long-Term Organic Growth</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Building enduring authority assets that compound month-over-month and survive major search algorithm adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: SERVICES SECTION (12 Services Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block mb-2">
              Full-Spectrum Search Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
              Comprehensive SEO & Link Acquisition Services
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Specialized search marketing solutions designed for SaaS companies, e-commerce stores, affiliate marketers, and agency partners.
            </p>
          </div>
          <button
            onClick={() => onNavigate("/services")}
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors whitespace-nowrap"
          >
            <span>View detailed service catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900/80 border border-slate-800/80 hover:border-slate-700/80 rounded-xl p-6 flex flex-col justify-between transition-all group"
            >
              <div className="space-y-4">
                <div className="p-3 bg-slate-950 border border-slate-800/80 rounded-lg w-fit group-hover:border-blue-500/50 transition-colors">
                  {getIcon(service.iconName)}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors font-display">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                    Key Benefits:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {service.keyBenefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(`/${service.slug}`)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenConsultationWithParams(service.title)}
                  className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION E: GUEST POSTING SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 sm:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                <span>Specialized Editorial Placements</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
                Build Authority with Strategic Guest Posting
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Reach relevant audiences and strengthen your website's backlink profile through carefully selected guest posting opportunities on relevant websites.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Niche Relevance:</strong>
                    Direct vertical alignment to protect search footprint.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Website Quality Assessment:</strong>
                    Spam-free backlink profiles and domain trust vetting.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Organic Traffic Evaluation:</strong>
                    Minimum 5,000+ verified monthly organic search visits.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Editorial Placement:</strong>
                    Native English writers and strict publisher standards.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Transparent Requirements:</strong>
                    Pre-approval workflows before outreach begins.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Customized Campaigns:</strong>
                    Built specifically for your commercial target pages.
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenConsultationWithParams("Guest Posting Services")}
                  className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
                >
                  Request Guest Post Opportunities
                </button>
                <button
                  onClick={() => onNavigate("/guest-posting")}
                  className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  Learn More About Guest Posting
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950 aspect-4/3">
                <img
                  src={IMAGES.editorialWorkspace}
                  alt="Editorial publication workspace for guest posting outreach"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: LINK INSERTION SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 sm:p-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block mb-2">
              Contextual Authority Acceleration
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
              Strengthen Your SEO with Relevant Link Insertions
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
              Discover relevant contextual link insertion opportunities within existing content to support your link-building and SEO campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-950/70 border border-slate-800/80 p-5 rounded-xl space-y-2">
              <div className="text-blue-400 font-semibold text-sm">Contextual Relevance</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Links are inserted inside topically coherent paragraphs that add genuine factual value to the reader.
              </p>
            </div>

            <div className="bg-slate-950/70 border border-slate-800/80 p-5 rounded-xl space-y-2">
              <div className="text-blue-400 font-semibold text-sm">Existing Content Placements</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Leverages pages with established historical authority and active search crawler visitation.
              </p>
            </div>

            <div className="bg-slate-950/70 border border-slate-800/80 p-5 rounded-xl space-y-2">
              <div className="text-blue-400 font-semibold text-sm">Website Quality Evaluation</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rigorous evaluation of hosting URL ranking stability, index status, and anchor safety.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => onOpenConsultationWithParams("Link Insertion Services")}
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer text-center"
            >
              Request Link Insertion Opportunities
            </button>
            <button
              onClick={() => onNavigate("/link-insertion")}
              className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors text-center cursor-pointer"
            >
              Read Link Insertion Guidelines
            </button>
          </div>
        </div>
      </section>

      {/* INTERACTIVE ESTIMATOR TOOL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BacklinkEstimator onApplyPlan={handleApplyPlanner} />
      </section>

      {/* SECTION G: WHY CHOOSE US? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block">
              Agency Differentiation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
              Why Partner with {BRAND_CONFIG.brandName}?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We operate as an extension of your growth team. Our methodologies are built for businesses that cannot afford algorithmic penalties or wasted marketing capital.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-blue-950 border border-blue-900 rounded-md text-blue-400 shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Client-Focused Approach</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Direct access to senior strategists, not junior account coordinators.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-blue-950 border border-blue-900 rounded-md text-blue-400 shrink-0 mt-0.5">
                  <Workflow className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Customized SEO Campaigns</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    No cookie-cutter tiers; strategies designed around your market position and competition.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-blue-950 border border-blue-900 rounded-md text-blue-400 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Quality Over Quantity</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    5 high-authority, relevant backlinks will consistently outperform 50 low-grade directory links.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-blue-950 border border-blue-900 rounded-md text-blue-400 shrink-0 mt-0.5">
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

            <div className="pt-2">
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-400 leading-relaxed">
                <strong className="text-slate-300 font-medium">Clear Expectations: </strong>
                We do not promise guaranteed rankings or guaranteed traffic numbers. Organic search relies on numerous dynamic signals. We guarantee rigorous execution, vetted publishers, and clean white-hat compliance.
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 aspect-16/10">
              <img
                src={IMAGES.agencyWorkspace}
                alt="Digital marketing strategy specialists reviewing technical SEO architecture"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION H: OUR WORKING PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block mb-2">
            Systematic Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
            Our Four-Step Working Process
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            A structured, repeatable framework engineered for accountability and compounding organic results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl space-y-4">
            <div className="text-2xl font-bold font-mono text-blue-400">01</div>
            <h3 className="text-lg font-bold text-white font-display">Understand Client Goals</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We align on your primary revenue streams, target customer profiles, high-margin services, and regional priority markets (US, UK, CA, AU).
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl space-y-4">
            <div className="text-2xl font-bold font-mono text-blue-400">02</div>
            <h3 className="text-lg font-bold text-white font-display">Analyze Site & Requirements</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We audit your existing backlink profile, identify indexation obstacles, analyze top competitors, and map out topical keyword opportunities.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl space-y-4">
            <div className="text-2xl font-bold font-mono text-blue-400">03</div>
            <h3 className="text-lg font-bold text-white font-display">Develop Custom SEO Strategy</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We construct a tailored monthly roadmap specifying link velocity, anchor text targets, guest posting editorial pitches, and technical fixes.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl space-y-4">
            <div className="text-2xl font-bold font-mono text-blue-400">04</div>
            <h3 className="text-lg font-bold text-white font-display">Execute & Provide Updates</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We execute manual outreach, submit content, verify live URLs, monitor crawl responses, and provide transparent monthly performance updates.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION I: INDUSTRIES WE SERVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block mb-2">
            Target Vertical Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
            Industries We Serve
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            SEO strategies and placement suitability depend heavily on the unique regulatory, competitive, and intent nuances of each industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Vertical Selector List */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-2 gap-2">
            {INDUSTRIES_DATA.map((ind) => (
              <button
                key={ind.slug}
                onClick={() => setSelectedIndustry(ind)}
                className={`p-3.5 rounded-lg border text-left transition-colors cursor-pointer ${
                  selectedIndustry.slug === ind.slug
                    ? "bg-slate-800 border-blue-500 text-white font-semibold"
                    : "bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-slate-200"
                }`}
              >
                <div className="text-xs font-medium truncate">{ind.name}</div>
              </button>
            ))}
          </div>

          {/* Vertical Details Box */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-xl font-bold text-white font-display">
                {selectedIndustry.name} SEO Framework
              </h3>
              <span className="text-xs text-blue-400 font-mono">Industry Strategy</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedIndustry.description}
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80">
                <span className="text-slate-500 block mb-0.5 font-semibold">Key Vertical Challenge:</span>
                <span className="text-slate-300">{selectedIndustry.challenges}</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80">
                <span className="text-slate-500 block mb-0.5 font-semibold">Strategic Search Focus:</span>
                <span className="text-slate-300">{selectedIndustry.strategyFocus}</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80">
                <span className="text-slate-500 block mb-0.5 font-semibold">Placement Suitability:</span>
                <span className="text-slate-300">{selectedIndustry.placementSuitability}</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() =>
                  onOpenConsultationWithParams(
                    "Search Engine Optimization (Full-Service)",
                    undefined,
                    `Industry Focus: ${selectedIndustry.name}`
                  )
                }
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 cursor-pointer"
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
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block mb-2">
            Answers & Clarity
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Transparent answers to help you evaluate our services and off-page outreach standards.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-800 bg-slate-900/60 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white font-display">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/30">
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
        <div className="bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900 border border-blue-800/50 rounded-2xl p-8 sm:p-14 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
              Ready to Improve Your Website's SEO Performance?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Let's discuss your goals and build an SEO strategy tailored to your business.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate("/contact")}
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-900/40 transition-colors cursor-pointer"
              >
                Contact Our Team
              </button>
              <button
                onClick={() => onOpenConsultationWithParams()}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                Request Free SEO Consultation
              </button>
            </div>
            <p className="text-xs text-slate-400 pt-2">
              Confidential consultation · Inquiries answered within 24 business hours
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
