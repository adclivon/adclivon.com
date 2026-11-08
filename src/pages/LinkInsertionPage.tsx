import React, { useState } from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import {
  Link2,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Zap,
  Clock,
  Layers,
  FileCheck,
  ShieldCheck,
  Search,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface LinkInsertionPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultationWithParams: (service?: string, budget?: string, details?: string) => void;
}

export const LinkInsertionPage: React.FC<LinkInsertionPageProps> = ({
  onNavigate,
  onOpenConsultationWithParams,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does contextual link insertion differ from guest posting?",
      answer:
        "Guest posting publishes a brand-new article on a publisher's site, which must be crawled and indexed from scratch. Link insertion integrates your reference into an existing, aged article that already ranks, has search impressions, and has established internal and external link equity.",
    },
    {
      question: "How do you choose where to insert our backlink within the existing article?",
      answer:
        "We identify an appropriate paragraph where your resource, tool, study, or service solves a specific contextual problem. Our team authors supplementary sentences or a short paragraph that adds genuine editorial value to the existing piece.",
    },
    {
      question: "Are the placements safe from Google core updates?",
      answer:
        "Yes, because we strictly avoid link farms, spun content, and irrelevant cross-niche insertions. Placements are made exclusively on thematic, organically performing pages where the citation is natural and helpful to the reader.",
    },
    {
      question: "What happens if a link is accidentally removed by the site owner?",
      answer:
        "We provide a 12-month placement integrity warranty. In the rare event a webmaster modifies the page and removes the link, we replace it with an equivalent or superior placement free of charge.",
    },
  ];

  return (
    <div className="pb-20 sm:pb-24 overflow-hidden">
      <Breadcrumbs items={[{ label: "Link Insertion Services" }]} onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-14 sm:space-y-20">
        {/* Hero Section */}
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-400/30">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Aged Authority & Index Speed</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            Strengthen Your SEO with Relevant Link Insertions
          </h1>

          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed">
            Discover relevant contextual link insertion opportunities within existing content to support your link-building and SEO campaigns. Leverage age-seasoned URLs that search engine crawlers already visit and index regularly.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
            <button
              onClick={() => onOpenConsultationWithParams("Link Insertion Services (Niche Edits)")}
              className="w-full sm:w-auto min-h-[48px] px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-[0.99] rounded-xl shadow-xl shadow-blue-600/30 transition-all cursor-pointer text-center flex items-center justify-center gap-2"
            >
              <span>Request Link Insertion Opportunities</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate("/link-building")}
              className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-[#0B1430]/80 hover:bg-[#0F1D45] active:scale-[0.99] border border-white/10 rounded-xl transition-colors cursor-pointer text-center flex items-center justify-center"
            >
              Explore Full Link Building Campaigns
            </button>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0A122C] to-[#070D1E] border border-white/10 p-5 sm:p-10 lg:p-14 shadow-2xl">
          <div className="max-w-2xl mb-8 sm:mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block mb-1 font-mono">
              Key Advantages
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-white font-display">
              Why Contextual Link Insertions Are Highly Effective
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Capitalize on existing search rankings and PageRank equity without the lag of fresh URL indexation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-[#060B18]/80 border border-white/10 p-5 sm:p-6 rounded-2xl space-y-2 hover:border-cyan-400/30 transition-all">
              <div className="flex items-center gap-2 text-white font-semibold text-sm font-display">
                <Link2 className="w-4 h-4 text-cyan-400" />
                <span>Contextual Relevance</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Placements are engineered within the thematic flow of the article, maintaining strict contextual harmony.
              </p>
            </div>

            <div className="bg-[#060B18]/80 border border-white/10 p-5 sm:p-6 rounded-2xl space-y-2 hover:border-cyan-400/30 transition-all">
              <div className="flex items-center gap-2 text-white font-semibold text-sm font-display">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Existing Content Placements</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Leverages pages with established ranking histories, pre-existing social signals, and historical trust.
              </p>
            </div>

            <div className="bg-[#060B18]/80 border border-white/10 p-5 sm:p-6 rounded-2xl space-y-2 hover:border-cyan-400/30 transition-all">
              <div className="flex items-center gap-2 text-white font-semibold text-sm font-display">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Website Quality Evaluation</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every hosting URL is evaluated for stable impressions, clean anchor text ratios, and active crawl status.
              </p>
            </div>

            <div className="bg-[#060B18]/80 border border-white/10 p-5 sm:p-6 rounded-2xl space-y-2 hover:border-cyan-400/30 transition-all">
              <div className="flex items-center gap-2 text-white font-semibold text-sm font-display">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Rapid Crawl Recognition</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Search engine spiders re-crawl authoritative aged URLs frequently, accelerating the recognition of your backlink.
              </p>
            </div>

            <div className="bg-[#060B18]/80 border border-white/10 p-5 sm:p-6 rounded-2xl space-y-2 hover:border-cyan-400/30 transition-all">
              <div className="flex items-center gap-2 text-white font-semibold text-sm font-display">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Customized Link Campaigns</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                We balance anchor text diversity (exact, partial, branded, and URL) to adhere to natural backlink distributions.
              </p>
            </div>

            <div className="bg-[#060B18]/80 border border-white/10 p-5 sm:p-6 rounded-2xl space-y-2 hover:border-cyan-400/30 transition-all">
              <div className="flex items-center gap-2 text-white font-semibold text-sm font-display">
                <FileCheck className="w-4 h-4 text-cyan-400" />
                <span>Clear Placement Terms</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct communication regarding target URLs, surrounding copy, anchor text, and indexation guarantees.
              </p>
            </div>
          </div>
        </div>

        {/* Insertion Process (2 cols on tablet, 1 on mobile, 4 on desktop) */}
        <div className="space-y-6 sm:space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block mb-1 font-mono">
              Process Roadmap
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-white font-display">
              How We Execute Link Insertions
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              A careful, editorial approach that respects the host website's audience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="rounded-2xl bg-[#0A122C] border border-white/10 p-5 sm:p-6 space-y-2.5">
              <span className="font-mono text-cyan-400 text-lg font-bold">Step 1</span>
              <h4 className="text-sm font-semibold text-white">Target Mapping</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Identify your commercial URLs and determine target anchor text variations.
              </p>
            </div>
            <div className="rounded-2xl bg-[#0A122C] border border-white/10 p-5 sm:p-6 space-y-2.5">
              <span className="font-mono text-cyan-400 text-lg font-bold">Step 2</span>
              <h4 className="text-sm font-semibold text-white">URL Discovery</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Scout aged articles that rank for secondary keywords relevant to your offering.
              </p>
            </div>
            <div className="rounded-2xl bg-[#0A122C] border border-white/10 p-5 sm:p-6 space-y-2.5">
              <span className="font-mono text-cyan-400 text-lg font-bold">Step 3</span>
              <h4 className="text-sm font-semibold text-white">Editorial Editing</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Draft a natural value-add paragraph or citation update and coordinate with site editors.
              </p>
            </div>
            <div className="rounded-2xl bg-[#0A122C] border border-white/10 p-5 sm:p-6 space-y-2.5">
              <span className="font-mono text-cyan-400 text-lg font-bold">Step 4</span>
              <h4 className="text-sm font-semibold text-white">Verification</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Verify live placement, dofollow attribute, and bot re-crawl status in Search Console.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">Link Insertion FAQs</h3>
            <p className="text-xs text-slate-400 mt-1 font-mono">Answers regarding existing content placements</p>
          </div>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                openFaq === index
                  ? "border-cyan-400/40 bg-[#0A122C]"
                  : "border-white/10 bg-[#070D1E]/80 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer min-h-[52px]"
              >
                <span className="text-xs sm:text-sm font-semibold text-white font-display">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                    openFaq === index ? "rotate-180 text-cyan-400" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.06] bg-[#060B18]/60">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-[#070D1E] border border-cyan-500/20 p-6 sm:p-12 lg:p-14 text-center shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
            Accelerate Your Off-Page Equity with Niche Link Insertions
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
            Share your domain and priority pages. We will locate live, index-verified articles ready for contextual insertion.
          </p>
          <button
            onClick={() => onOpenConsultationWithParams("Link Insertion Services (Niche Edits)")}
            className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-[0.99] rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer flex items-center justify-center mx-auto"
          >
            Request Link Insertion Opportunities
          </button>
        </div>
      </div>
    </div>
  );
};
