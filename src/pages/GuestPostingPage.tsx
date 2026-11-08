import React, { useState } from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { IMAGES, BRAND_CONFIG } from "../config/siteConfig";
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Check,
  FileCheck,
  Search,
  PenTool,
  Send,
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
  BarChart3,
  Award,
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
        "Yes, our guest posting placements secure permanent, indexable, dofollow contextual references within the editorial body of the article, backed by our 12-month placement integrity warranty.",
    },
  ];

  return (
    <div className="pb-20 sm:pb-24 overflow-hidden">
      <Breadcrumbs items={[{ label: "Guest Posting Services" }]} onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-14 sm:space-y-20">
        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-400/30">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>High-Authority Editorial Placements</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
              Strategic Guest Posting on Vetted, High-Traffic Publications
            </h1>

            <p className="text-slate-300 text-sm sm:text-lg leading-relaxed">
              Reach relevant audiences and strengthen your website's backlink profile through carefully selected guest posting opportunities on relevant websites. We deliver 100% manual outreach, zero PBNs, and custom-authored editorial content.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <button
                onClick={() => onOpenConsultationWithParams("Guest Posting Services")}
                className="w-full sm:w-auto min-h-[48px] px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-[0.99] rounded-xl shadow-xl shadow-blue-600/30 transition-all cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <span>Request Guest Post Opportunities</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate("/link-insertion")}
                className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-[#0B1430]/80 hover:bg-[#0F1D45] active:scale-[0.99] border border-white/10 rounded-xl transition-colors cursor-pointer text-center flex items-center justify-center"
              >
                Compare with Link Insertions
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#060B18] aspect-16/10 relative">
              <img
                src={IMAGES.editorialWorkspace}
                alt="Editorial publication desk with typography drafts and outreach notes"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-[#0A122C]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">Manual Editorial Pitching</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono">Zero link networks or automated blast tools</div>
                </div>
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-mono font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 shrink-0 ml-2">
                  100% White-Hat
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Key Pillars */}
        <div>
          <div className="max-w-2xl mb-8 sm:mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block mb-1 font-mono">
              Quality Assurance
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-white font-display">
              The Six Pillars of Our Guest Posting Standard
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Engineered to protect your domain trust while generating high-value referral and organic equity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="rounded-2xl bg-[#0A122C]/80 border border-white/10 p-5 sm:p-6 space-y-2 hover:border-cyan-400/40 transition-all">
              <div className="flex items-center gap-2 text-white font-semibold text-sm font-display">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Niche Relevance</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                We only pitch publications that operate squarely within your sector or immediate adjacent vertical, ensuring strict topical coherence.
              </p>
            </div>

            <div className="rounded-2xl bg-[#0A122C]/80 border border-white/10 p-5 sm:p-6 space-y-2 hover:border-cyan-400/40 transition-all">
              <div className="flex items-center gap-2 text-white font-semibold text-sm font-display">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Website Quality Assessment</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Comprehensive backlink health evaluation to filter out sites with toxic anchor text, spammy link farms, or unnatural outbound link ratios.
              </p>
            </div>

            <div className="rounded-2xl bg-[#0A122C]/80 border border-white/10 p-5 sm:p-6 space-y-2 hover:border-cyan-400/40 transition-all">
              <div className="flex items-center gap-2 text-white font-semibold text-sm font-display">
                <Search className="w-4 h-4 text-cyan-400" />
                <span>Organic Traffic Evaluation</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Verification that every host domain receives consistent, indexable organic traffic from real search engine visitors, not fabricated bot visits.
              </p>
            </div>

            <div className="rounded-2xl bg-[#0A122C]/80 border border-white/10 p-5 sm:p-6 space-y-2 hover:border-cyan-400/40 transition-all">
              <div className="flex items-center gap-2 text-white font-semibold text-sm font-display">
                <PenTool className="w-4 h-4 text-cyan-400" />
                <span>Editorial Placement Opportunities</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Well-written, original 1,200+ word thought-leadership pieces that provide genuine educational value to the host publication's readers.
              </p>
            </div>

            <div className="rounded-2xl bg-[#0A122C]/80 border border-white/10 p-5 sm:p-6 space-y-2 hover:border-cyan-400/40 transition-all">
              <div className="flex items-center gap-2 text-white font-semibold text-sm font-display">
                <FileCheck className="w-4 h-4 text-cyan-400" />
                <span>Transparent Placement Requirements</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Full visibility into target URLs, metrics, and drafts prior to publication, with zero ambiguous placement terms.
              </p>
            </div>

            <div className="rounded-2xl bg-[#0A122C]/80 border border-white/10 p-5 sm:p-6 space-y-2 hover:border-cyan-400/40 transition-all">
              <div className="flex items-center gap-2 text-white font-semibold text-sm font-display">
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Customized Campaigns</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Bespoke outreach strategy adapted specifically to your target geography (United States, United Kingdom, Canada, Australia).
              </p>
            </div>
          </div>
        </div>

        {/* 4-Stage Workflow (2 cols on tablet, 1 on mobile, 4 on desktop) */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0A122C] to-[#070D1E] border border-white/10 p-5 sm:p-10 lg:p-12 shadow-2xl">
          <div className="max-w-2xl mb-8 sm:mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block mb-1 font-mono">
              Transparent Execution
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-white font-display">
              Our 4-Stage Guest Posting Outreach Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            <div className="space-y-2.5">
              <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">01. Discovery</div>
              <h4 className="text-sm font-semibold text-white">Prospect Identification</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We identify 30–50 relevant prospective publications matching your vertical and regional requirements.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">02. Pre-Approval</div>
              <h4 className="text-sm font-semibold text-white">Client Metrics Review</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                You review the proposed publisher list with traffic screenshots and approve the candidates you want us to pitch.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">03. Production</div>
              <h4 className="text-sm font-semibold text-white">Editorial Drafting</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our native English copywriters draft an in-depth article incorporating your target page as a natural contextual citation.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">04. Publication</div>
              <h4 className="text-sm font-semibold text-white">Verification & Reporting</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We track the live article, verify dofollow and indexation status, and deliver your permanent live link report.
              </p>
            </div>
          </div>
        </div>

        {/* Guest Posting FAQs */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">Guest Posting FAQs</h3>
            <p className="text-xs text-slate-400 mt-1 font-mono">Common questions regarding our editorial process</p>
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
            Ready to Build Authority with Editorial Guest Posts?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
            Share your website URL and target keywords. We will generate a complimentary list of relevant guest post prospects for your review.
          </p>
          <button
            onClick={() => onOpenConsultationWithParams("Guest Posting Services")}
            className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-[0.99] rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer flex items-center justify-center mx-auto"
          >
            Request Guest Post Opportunities
          </button>
        </div>
      </div>
    </div>
  );
};
