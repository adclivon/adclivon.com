import React, { useState } from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { IMAGES, BRAND_CONFIG } from "../config/siteConfig";
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  ShieldAlert,
  ShieldCheck,
  Check,
  FileCheck,
  Search,
  PenTool,
  Send,
} from "lucide-react";

interface GuestPostingPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultationWithParams: (service?: string, budget?: string, details?: string) => void;
}

export const GuestPostingPage: React.FC<GuestPostingPageProps> = ({
  onNavigate,
  onOpenConsultationWithParams,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What are your minimum publisher vetting criteria?",
      answer:
        "Every prospective host website must demonstrate verified organic search traffic (typically 5,000+ monthly visits via Semrush/Ahrefs), a stable 12-month traffic trend, a clean backlink profile free from toxic anchor manipulation, and authentic editorial moderation.",
    },
    {
      question: "Can our team pre-approve host publications before you submit drafts?",
      answer:
        "Yes, absolutely. We share a dedicated approval dossier with live URLs, traffic graphs, domain metrics, and intended article angles. No article is submitted without your explicit written approval.",
    },
    {
      question: "Who writes the guest articles?",
      answer:
        "All guest articles are produced by native English content specialists with subject-matter knowledge in your vertical. Articles range from 1,200 to 2,000 words and adhere to the host publisher's editorial style guide.",
    },
    {
      question: "Are the links dofollow and permanent?",
      answer:
        "Yes, our guest posting placements secure permanent, indexable, dofollow contextual references within the editorial body of the article.",
    },
  ];

  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: "Guest Posting Services" }]} onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-20">
        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block">
              High-Authority Editorial Placements
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
              Strategic Guest Posting on Vetted, High-Traffic Publications
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Reach relevant audiences and strengthen your website's backlink profile through carefully selected guest posting opportunities on relevant websites. We deliver 100% manual outreach, zero PBNs, and custom-authored editorial content.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenConsultationWithParams("Guest Posting Services")}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-900/30 transition-colors cursor-pointer text-center"
              >
                Request Guest Post Opportunities
              </button>
              <button
                onClick={() => onNavigate("/link-insertion")}
                className="px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors cursor-pointer text-center"
              >
                Compare with Link Insertions
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 aspect-16/10">
              <img
                src={IMAGES.editorialWorkspace}
                alt="Editorial publication desk with typography drafts and outreach notes"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 6 Key Highlights */}
        <div>
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              The Six Pillars of Our Guest Posting Standard
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Engineered to protect your domain trust while generating high-value referral and organic equity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/70 border border-slate-800 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Niche Relevance</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                We only pitch publications that operate squarely within your sector or immediate adjacent vertical, ensuring strict topical coherence.
              </p>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Website Quality Assessment</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Comprehensive backlink health evaluation to filter out sites with toxic anchor text, spammy link farms, or unnatural outbound link ratios.
              </p>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <Search className="w-4 h-4 text-blue-400" />
                <span>Organic Traffic Evaluation</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Verification that every host domain receives consistent, indexable organic traffic from real search engine visitors, not fabricated bot visits.
              </p>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <PenTool className="w-4 h-4 text-blue-400" />
                <span>Editorial Placement Opportunities</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Well-written, original 1,200+ word thought-leadership pieces that provide genuine educational value to the host publication's readers.
              </p>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <FileCheck className="w-4 h-4 text-blue-400" />
                <span>Transparent Placement Requirements</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Full visibility into target URLs, metrics, and drafts prior to publication, with zero ambiguous placement terms.
              </p>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <Send className="w-4 h-4 text-blue-400" />
                <span>Customized Campaigns</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Bespoke outreach strategy adapted specifically to your target geography (United States, United Kingdom, Canada, Australia).
              </p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Guest Posting Workflow */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 sm:p-12">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block mb-2">
              Transparent Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Our 4-Stage Guest Posting Outreach Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div className="text-xl font-bold font-mono text-blue-400">01. Discovery</div>
              <h4 className="text-sm font-semibold text-white">Prospect Identification</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We identify 30–50 relevant prospective publications matching your vertical and regional requirements.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xl font-bold font-mono text-blue-400">02. Pre-Approval</div>
              <h4 className="text-sm font-semibold text-white">Client Metrics Review</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                You review the proposed publisher list with traffic screenshots and approve the candidates you want us to pitch.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xl font-bold font-mono text-blue-400">03. Production</div>
              <h4 className="text-sm font-semibold text-white">Editorial Drafting</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our native English copywriters draft an in-depth article incorporating your target page as a natural contextual citation.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xl font-bold font-mono text-blue-400">04. Publication</div>
              <h4 className="text-sm font-semibold text-white">Verification & Reporting</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We track the live article, verify dofollow and indexation status, and deliver your permanent live link report.
              </p>
            </div>
          </div>
        </div>

        {/* Guest Posting FAQs */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white font-display">Guest Posting FAQs</h3>
            <p className="text-xs text-slate-400 mt-1">Common questions regarding our editorial process</p>
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
            Ready to Build Authority with Editorial Guest Posts?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-6">
            Share your website URL and target keywords. We will generate a complimentary list of relevant guest post prospects for your review.
          </p>
          <button
            onClick={() => onOpenConsultationWithParams("Guest Posting Services")}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
          >
            Request Guest Post Opportunities
          </button>
        </div>
      </div>
    </div>
  );
};
