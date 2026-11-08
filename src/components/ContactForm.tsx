import React, { useState } from "react";
import { submitConsultationRequest, LeadSubmissionPayload } from "../services/leadService";
import { CheckCircle2, AlertCircle, Send, Download, Copy, Check, ShieldCheck, Sparkles } from "lucide-react";
import { BRAND_CONFIG } from "../config/siteConfig";

interface ContactFormProps {
  initialService?: string;
  initialBudget?: string;
  initialDetails?: string;
  onSuccess?: (leadId: string) => void;
  formTitle?: string;
  formSubtitle?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialService = "",
  initialBudget = "",
  initialDetails = "",
  onSuccess,
  formTitle = "Request a Strategy Consultation",
  formSubtitle = "Tell us about your organic search objectives and current backlink profile. We respond within 24 business hours.",
}) => {
  const [formData, setFormData] = useState<LeadSubmissionPayload>({
    fullName: "",
    businessEmail: "",
    companyWebsite: "",
    serviceRequired: initialService || "Guest Posting Services",
    monthlyBudget: initialBudget || "$3,000 – $5,000 / month",
    projectDetails: initialDetails || "",
    targetMarket: "United States (US)",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  const serviceOptions = [
    "Search Engine Optimization (Full-Service)",
    "Guest Posting Services",
    "Link Insertion Services (Niche Edits)",
    "Quality Link Building Campaigns",
    "Technical SEO Audit & Remediation",
    "On-Page SEO & Content Architecture",
    "Local SEO & Multi-Location Strategy",
    "Competitor Backlink & SERP Analysis",
  ];

  const budgetOptions = [
    "$1,500 – $3,000 / month (Targeted Link Placement)",
    "$3,000 – $5,000 / month (Standard Growth Campaign)",
    "$5,000 – $10,000 / month (Aggressive Multi-Market Authority)",
    "$10,000+ / month (Enterprise & Multi-National Outreach)",
    "Custom / One-Time Technical Audit ($2,500 – $6,000)",
  ];

  const targetMarketOptions = [
    "United States (US)",
    "United Kingdom (UK)",
    "Canada (CA)",
    "Australia (AU)",
    "Multi-Country / Global English",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await submitConsultationRequest(formData);
      if (response.success && response.leadId) {
        setSubmittedLeadId(response.leadId);
        if (onSuccess) onSuccess(response.leadId);
      } else if (response.errors) {
        setErrors(response.errors);
      }
    } catch {
      setErrors({
        general: "An unexpected connection error occurred. Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyId = () => {
    if (submittedLeadId) {
      navigator.clipboard.writeText(submittedLeadId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  const handleDownloadInquiry = () => {
    const inquiryText = `
${BRAND_CONFIG.brandName} - SEO Strategy Consultation Request
Reference ID: ${submittedLeadId}
Date: ${new Date().toLocaleString()}

Client Name: ${formData.fullName}
Business Email: ${formData.businessEmail}
Company Website: ${formData.companyWebsite}
Service Required: ${formData.serviceRequired}
Monthly Budget: ${formData.monthlyBudget}
Target Market: ${formData.targetMarket}

Project Objectives & Background:
${formData.projectDetails}

Next Steps:
Our senior strategy team will review your website metrics and reply within 24 business hours to ${formData.businessEmail}.
Agency Contact: ${BRAND_CONFIG.contactEmail}
    `.trim();

    const blob = new Blob([inquiryText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `consultation-request-${submittedLeadId}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Success Confirmation State
  if (submittedLeadId) {
    return (
      <div className="glass-panel border border-cyan-500/40 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden min-w-0">
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-2.5 sm:gap-3 text-cyan-400 mb-3 sm:mb-4">
          <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 text-cyan-400" />
          <h3 className="text-lg sm:text-2xl font-bold text-white font-display">
            Consultation Request Received
          </h3>
        </div>

        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
          Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. Your request has been securely recorded and dispatched to our senior SEO strategists.
        </p>

        {/* Lead Reference Card */}
        <div className="bg-[#050914] border border-cyan-500/30 rounded-xl p-4 sm:p-5 mb-5 sm:mb-6 space-y-3 min-w-0">
          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 font-semibold font-mono">
              Consultation Reference ID
            </span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs sm:text-sm font-bold text-cyan-400 break-all">
                {submittedLeadId}
              </span>
              <button
                onClick={handleCopyId}
                className="min-w-[36px] min-h-[36px] flex items-center justify-center p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Copy Reference ID"
                aria-label="Copy Reference ID"
              >
                {copiedId ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="text-xs text-slate-400 space-y-1.5 pt-2 border-t border-slate-900 min-w-0">
            <div className="truncate">
              <span className="text-slate-500">Website:</span>{" "}
              <span className="text-slate-200 font-mono break-all">{formData.companyWebsite}</span>
            </div>
            <div>
              <span className="text-slate-500">Service:</span>{" "}
              <span className="text-slate-200">{formData.serviceRequired}</span>
            </div>
            <div>
              <span className="text-slate-500">Target Region:</span>{" "}
              <span className="text-slate-200">{formData.targetMarket}</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-950/40 border border-blue-800/50 rounded-xl p-3.5 sm:p-4 text-xs text-slate-300 leading-relaxed mb-6 space-y-1.5">
          <strong className="text-white block font-display mb-1 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            What happens next:
          </strong>
          <p>1. We run preliminary baseline checks (indexing, current DR, backlink health, and competitor gap).</p>
          <p>2. A senior strategist crafts a 3-point opportunity summary tailored to your vertical.</p>
          <p>
            3. We email our analysis and scheduling availability to{" "}
            <span className="font-mono text-cyan-300 underline break-all">{formData.businessEmail}</span> within 24 business hours.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <button
            onClick={handleDownloadInquiry}
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 hover:text-white rounded-xl transition-colors cursor-pointer border border-slate-700 text-center"
          >
            <Download className="w-4 h-4" />
            <span>Download Inquiry Summary (.txt)</span>
          </button>

          <button
            onClick={() => {
              setSubmittedLeadId(null);
              setFormData({
                fullName: "",
                businessEmail: "",
                companyWebsite: "",
                serviceRequired: "Guest Posting Services",
                monthlyBudget: "$3,000 – $5,000 / month",
                projectDetails: "",
                targetMarket: "United States (US)",
              });
            }}
            className="w-full sm:w-auto min-h-[44px] text-xs text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer underline underline-offset-4 text-center py-2"
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  // Active Form State
  return (
    <div className="glass-panel border border-slate-800/80 rounded-2xl p-4 sm:p-7 lg:p-10 shadow-2xl relative min-w-0">
      <div className="mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-display mb-1.5">
          {formTitle}
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{formSubtitle}</p>
      </div>

      {errors.general && (
        <div className="mb-5 p-3.5 bg-rose-950/40 border border-rose-800/60 rounded-xl text-rose-300 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errors.general}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Full Name */}
          <div className="w-full">
            <label
              htmlFor="fullName"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 font-mono"
            >
              Full Name <span className="text-cyan-400">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Sarah Jenkins"
              className={`w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-[#050914] border rounded-xl text-white placeholder-slate-600 focus:outline-none focus:ring-2 transition-all ${
                errors.fullName
                  ? "border-rose-500 focus:ring-rose-400/20"
                  : "border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/20"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-rose-400">{errors.fullName}</p>
            )}
          </div>

          {/* Business Email */}
          <div className="w-full">
            <label
              htmlFor="businessEmail"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 font-mono"
            >
              Business Email <span className="text-cyan-400">*</span>
            </label>
            <input
              type="email"
              id="businessEmail"
              name="businessEmail"
              value={formData.businessEmail}
              onChange={handleChange}
              placeholder="name@company.com"
              className={`w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-[#050914] border rounded-xl text-white placeholder-slate-600 focus:outline-none focus:ring-2 transition-all ${
                errors.businessEmail
                  ? "border-rose-500 focus:ring-rose-400/20"
                  : "border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/20"
              }`}
            />
            {errors.businessEmail && (
              <p className="mt-1 text-xs text-rose-400">{errors.businessEmail}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Company Website */}
          <div className="w-full">
            <label
              htmlFor="companyWebsite"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 font-mono"
            >
              Company Website <span className="text-cyan-400">*</span>
            </label>
            <input
              type="text"
              id="companyWebsite"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              placeholder="e.g. yourcompany.com"
              className={`w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-[#050914] border rounded-xl text-white placeholder-slate-600 focus:outline-none focus:ring-2 transition-all ${
                errors.companyWebsite
                  ? "border-rose-500 focus:ring-rose-400/20"
                  : "border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/20"
              }`}
            />
            {errors.companyWebsite && (
              <p className="mt-1 text-xs text-rose-400">{errors.companyWebsite}</p>
            )}
          </div>

          {/* Target Market */}
          <div className="w-full">
            <label
              htmlFor="targetMarket"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 font-mono"
            >
              Target Geographic Market
            </label>
            <select
              id="targetMarket"
              name="targetMarket"
              value={formData.targetMarket}
              onChange={handleChange}
              className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-[#050914] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all cursor-pointer"
            >
              {targetMarketOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-slate-900 text-white">
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Service Required */}
          <div className="w-full">
            <label
              htmlFor="serviceRequired"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 font-mono"
            >
              Service Required <span className="text-cyan-400">*</span>
            </label>
            <select
              id="serviceRequired"
              name="serviceRequired"
              value={formData.serviceRequired}
              onChange={handleChange}
              className={`w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-[#050914] border rounded-xl text-white focus:outline-none focus:ring-2 transition-all cursor-pointer ${
                errors.serviceRequired
                  ? "border-rose-500 focus:ring-rose-400/20"
                  : "border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/20"
              }`}
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-slate-900 text-white">
                  {opt}
                </option>
              ))}
            </select>
            {errors.serviceRequired && (
              <p className="mt-1 text-xs text-rose-400">{errors.serviceRequired}</p>
            )}
          </div>

          {/* Monthly Budget */}
          <div className="w-full">
            <label
              htmlFor="monthlyBudget"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 font-mono"
            >
              Estimated Monthly Budget <span className="text-cyan-400">*</span>
            </label>
            <select
              id="monthlyBudget"
              name="monthlyBudget"
              value={formData.monthlyBudget}
              onChange={handleChange}
              className={`w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-[#050914] border rounded-xl text-white focus:outline-none focus:ring-2 transition-all cursor-pointer ${
                errors.monthlyBudget
                  ? "border-rose-500 focus:ring-rose-400/20"
                  : "border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/20"
              }`}
            >
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-slate-900 text-white">
                  {opt}
                </option>
              ))}
            </select>
            {errors.monthlyBudget && (
              <p className="mt-1 text-xs text-rose-400">{errors.monthlyBudget}</p>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="w-full">
          <label
            htmlFor="projectDetails"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 font-mono"
          >
            Project Details & Current Objectives <span className="text-cyan-400">*</span>
          </label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            rows={4}
            value={formData.projectDetails}
            onChange={handleChange}
            placeholder="Share your primary target keywords, key competitor URLs, current organic traffic challenges, or specific link building volume requirements..."
            className={`w-full px-3.5 py-3 text-sm bg-[#050914] border rounded-xl text-white placeholder-slate-600 focus:outline-none focus:ring-2 transition-all resize-y ${
              errors.projectDetails
                ? "border-rose-500 focus:ring-rose-400/20"
                : "border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/20"
            }`}
          />
          {errors.projectDetails && (
            <p className="mt-1 text-xs text-rose-400">{errors.projectDetails}</p>
          )}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-lg shadow-cyan-950/40 transition-all cursor-pointer text-center"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Validating & Recording...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Request a Consultation</span>
              </>
            )}
          </button>
          <div className="flex items-start sm:items-center gap-1.5 mt-3 text-xs text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5 sm:mt-0" />
            <span>Strict confidentiality assured. Mutual non-disclosure agreements available upon request.</span>
          </div>
        </div>
      </form>
    </div>
  );
};
