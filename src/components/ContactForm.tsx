import React, { useState } from "react";
import { submitConsultationRequest, LeadSubmissionPayload } from "../services/leadService";
import { CheckCircle2, AlertCircle, Send, Download, Copy, Check } from "lucide-react";
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
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 sm:p-10 shadow-2xl">
        <div className="flex items-center gap-3 text-emerald-400 mb-4">
          <CheckCircle2 className="w-8 h-8 shrink-0" />
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
            Consultation Request Received
          </h3>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. Your request has been securely recorded and dispatched to our senior SEO strategists.
        </p>

        {/* Lead Reference Card */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-5 mb-6 space-y-3">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
              Consultation Reference ID
            </span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-semibold text-blue-400">
                {submittedLeadId}
              </span>
              <button
                onClick={handleCopyId}
                className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition-colors"
                title="Copy Reference ID"
                aria-label="Copy Reference ID"
              >
                {copiedId ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="text-xs text-slate-400 space-y-1.5 pt-2 border-t border-slate-900">
            <div>
              <span className="text-slate-500">Website:</span>{" "}
              <span className="text-slate-200 font-mono">{formData.companyWebsite}</span>
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

        <div className="bg-blue-950/30 border border-blue-900/40 rounded-lg p-4 text-xs text-blue-300 leading-relaxed mb-6">
          <strong className="text-white block mb-1">What happens next:</strong>
          1. We run preliminary baseline checks (indexation, domain authority, backlink health).<br />
          2. A senior strategist crafts a 3-point opportunity summary tailored to your vertical.<br />
          3. We email our analysis and scheduling availability to{" "}
          <span className="font-mono text-white underline">{formData.businessEmail}</span> within 24 business hours.
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={handleDownloadInquiry}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
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
            className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer underline underline-offset-4"
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  // Active Form State
  return (
    <div className="bg-slate-900/90 border border-slate-800/80 rounded-xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
      <div className="mb-8">
        <h3 className="text-2xl font-bold tracking-tight text-white font-display mb-2">
          {formTitle}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">{formSubtitle}</p>
      </div>

      {errors.general && (
        <div className="mb-6 p-4 bg-rose-950/40 border border-rose-800/60 rounded-lg text-rose-300 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errors.general}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
            >
              Full Name <span className="text-blue-400">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Sarah Jenkins"
              className={`w-full px-4 py-2.5 text-sm bg-slate-950 border rounded-lg text-white placeholder-slate-600 focus:outline-none focus:ring-2 transition-colors ${
                errors.fullName
                  ? "border-rose-500 focus:ring-rose-400"
                  : "border-slate-800 focus:border-blue-500 focus:ring-blue-500/20"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-rose-400">{errors.fullName}</p>
            )}
          </div>

          {/* Business Email */}
          <div>
            <label
              htmlFor="businessEmail"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
            >
              Business Email <span className="text-blue-400">*</span>
            </label>
            <input
              type="email"
              id="businessEmail"
              name="businessEmail"
              value={formData.businessEmail}
              onChange={handleChange}
              placeholder="name@company.com"
              className={`w-full px-4 py-2.5 text-sm bg-slate-950 border rounded-lg text-white placeholder-slate-600 focus:outline-none focus:ring-2 transition-colors ${
                errors.businessEmail
                  ? "border-rose-500 focus:ring-rose-400"
                  : "border-slate-800 focus:border-blue-500 focus:ring-blue-500/20"
              }`}
            />
            {errors.businessEmail && (
              <p className="mt-1 text-xs text-rose-400">{errors.businessEmail}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Company Website */}
          <div>
            <label
              htmlFor="companyWebsite"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
            >
              Company Website <span className="text-blue-400">*</span>
            </label>
            <input
              type="text"
              id="companyWebsite"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              placeholder="e.g. yourcompany.com"
              className={`w-full px-4 py-2.5 text-sm bg-slate-950 border rounded-lg text-white placeholder-slate-600 focus:outline-none focus:ring-2 transition-colors ${
                errors.companyWebsite
                  ? "border-rose-500 focus:ring-rose-400"
                  : "border-slate-800 focus:border-blue-500 focus:ring-blue-500/20"
              }`}
            />
            {errors.companyWebsite && (
              <p className="mt-1 text-xs text-rose-400">{errors.companyWebsite}</p>
            )}
          </div>

          {/* Target Market */}
          <div>
            <label
              htmlFor="targetMarket"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
            >
              Target Geographic Market
            </label>
            <select
              id="targetMarket"
              name="targetMarket"
              value={formData.targetMarket}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
            >
              {targetMarketOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Service Required */}
          <div>
            <label
              htmlFor="serviceRequired"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
            >
              Service Required <span className="text-blue-400">*</span>
            </label>
            <select
              id="serviceRequired"
              name="serviceRequired"
              value={formData.serviceRequired}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 text-sm bg-slate-950 border rounded-lg text-white focus:outline-none focus:ring-2 transition-colors ${
                errors.serviceRequired
                  ? "border-rose-500 focus:ring-rose-400"
                  : "border-slate-800 focus:border-blue-500 focus:ring-blue-500/20"
              }`}
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.serviceRequired && (
              <p className="mt-1 text-xs text-rose-400">{errors.serviceRequired}</p>
            )}
          </div>

          {/* Monthly Budget */}
          <div>
            <label
              htmlFor="monthlyBudget"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
            >
              Estimated Monthly Budget <span className="text-blue-400">*</span>
            </label>
            <select
              id="monthlyBudget"
              name="monthlyBudget"
              value={formData.monthlyBudget}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 text-sm bg-slate-950 border rounded-lg text-white focus:outline-none focus:ring-2 transition-colors ${
                errors.monthlyBudget
                  ? "border-rose-500 focus:ring-rose-400"
                  : "border-slate-800 focus:border-blue-500 focus:ring-blue-500/20"
              }`}
            >
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt}>
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
        <div>
          <label
            htmlFor="projectDetails"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
          >
            Project Details & Current Objectives <span className="text-blue-400">*</span>
          </label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            rows={4}
            value={formData.projectDetails}
            onChange={handleChange}
            placeholder="Share your primary target keywords, key competitor URLs, current organic traffic challenges, or specific link building volume requirements..."
            className={`w-full px-4 py-3 text-sm bg-slate-950 border rounded-lg text-white placeholder-slate-600 focus:outline-none focus:ring-2 transition-colors resize-y ${
              errors.projectDetails
                ? "border-rose-500 focus:ring-rose-400"
                : "border-slate-800 focus:border-blue-500 focus:ring-blue-500/20"
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-lg shadow-blue-900/20 transition-colors cursor-pointer"
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
          <span className="block mt-3 text-xs text-slate-500">
            Strict confidentiality assured. Non-disclosure agreements available upon request.
          </span>
        </div>
      </form>
    </div>
  );
};
