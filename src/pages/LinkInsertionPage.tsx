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
    <div className="pb-24">
      <Breadcrumbs items={[{ label: "Link Insertion Services" }]} onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-20">
        {/* Hero Section */}
        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block">
            Aged Authority & Index Speed
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            Strengthen Your SEO with Relevant Link Insertions
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Discover relevant contextual link insertion opportunities within existing content to support your link-building and SEO campaigns. Leverage age-seasoned URLs that search engine crawlers already visit and index regularly.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={() => onOpenConsultationWithParams("Link Insertion Services (Niche Edits)")}
              className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-900/30 transition-colors cursor-pointer text-center"
            >
              Request Link Insertion Opportunities
            </button>
            <button
              onClick={() => onNavigate("/link-building")}
              className="px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors cursor-pointer text-center"
            >
              Explore Full Link Building Campaigns
            </button>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="border border-slate-800 bg-slate-900/40 rounded-2xl p-8 sm:p-12">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Why Contextual Link Insertions Are Highly Effective
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Capitalize on existing search rankings and PageRank equity without the lag of fresh URL indexation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-950/70 border border-slate-800 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <Link2 className="w-4 h-4 text-blue-400" />
                <span>Contextual Relevance</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Placements are engineered within the thematic flow of the article, maintaining strict contextual harmony.
              </p>
            </div>

            <div className="bg-slate-950/70 border border-slate-800 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Existing Content Placements</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Leverages pages with established ranking histories, pre-existing social signals, and historical trust.
              </p>
            </div>

            <div className="bg-slate-950/70 border border-slate-800 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Website Quality Evaluation</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every hosting URL is evaluated for stable impressions, clean anchor text ratios, and active crawl status.
              </p>
            </div>

            <div className="bg-slate-950/70 border border-slate-800 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <Zap className="w-4 h-4 text-blue-400" />
                <span>Rapid Crawl Recognition</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Search engine spiders re-crawl authoritative aged URLs frequently, accelerating the recognition of your backlink.
              </p>
            </div>

            <div className="bg-slate-950/70 border border-slate-800 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>Customized Link Campaigns</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                We balance anchor text diversity (exact, partial, branded, and URL) to adhere to natural backlink distributions.
              </p>
            </div>

            <div className="bg-slate-950/70 border border-slate-800 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <FileCheck className="w-4 h-4 text-blue-400" />
                <span>Clear Placement Terms</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct communication regarding target URLs, surrounding copy, anchor text, and indexation guarantees.
              </p>
            </div>
          </div>
        </div>

        {/* Insertion Process */}
        <div className="space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              How We Execute Link Insertions
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              A careful, editorial approach that respects the host website's audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-2">
              <span className="font-mono text-blue-400 text-lg font-bold">Step 1</span>
              <h4 className="text-sm font-semibold text-white">Target Mapping</h4>
              <p className="text-xs text-slate-400">
                Identify your commercial URLs and determine target anchor text variations.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-2">
              <span className="font-mono text-blue-400 text-lg font-bold">Step 2</span>
              <h4 className="text-sm font-semibold text-white">URL Discovery</h4>
              <p className="text-xs text-slate-400">
                Scout aged articles that rank for secondary keywords relevant to your offering.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-2">
              <span className="font-mono text-blue-400 text-lg font-bold">Step 3</span>
              <h4 className="text-sm font-semibold text-white">Editorial Editing</h4>
              <p className="text-xs text-slate-400">
                Draft a natural value-add paragraph or citation update and coordinate with site editors.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-2">
              <span className="font-mono text-blue-400 text-lg font-bold">Step 4</span>
              <h4 className="text-sm font-semibold text-white">Verification</h4>
              <p className="text-xs text-slate-400">
                Verify live placement, dofollow attribute, and bot re-crawl status in Search Console.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white font-display">Link Insertion FAQs</h3>
            <p className="text-xs text-slate-400 mt-1">Answers regarding existing content placements</p>
          </div>

          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-800 bg-slate-900/60 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="text-sm font-semibold text-white font-display">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                    openFaq === index ? "rotate-180 text-blue-400" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl font-bold text-white font-display mb-2">
            Accelerate Your Off-Page Equity with Niche Link Insertions
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-6">
            Share your domain and priority pages. We will locate live, index-verified articles ready for contextual insertion.
          </p>
          <button
            onClick={() => onOpenConsultationWithParams("Link Insertion Services (Niche Edits)")}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
          >
            Request Link Insertion Opportunities
          </button>
        </div>
      </div>
    </div>
  );
};
