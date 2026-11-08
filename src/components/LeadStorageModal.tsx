import React, { useState, useEffect } from "react";
import { getStoredLeads, exportLeadsAsCSV } from "../services/leadService";
import { ConsultationLead } from "../types";
import { X, Download, RefreshCw, Inbox, ExternalLink } from "lucide-react";

interface LeadStorageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadStorageModal: React.FC<LeadStorageModalProps> = ({ isOpen, onClose }) => {
  const [leads, setLeads] = useState<ConsultationLead[]>([]);
  const [selectedLead, setSelectedLead] = useState<ConsultationLead | null>(null);

  const loadLeads = () => {
    const list = getStoredLeads();
    setLeads(list);
    if (list.length > 0 && !selectedLead) {
      setSelectedLead(list[0]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      loadLeads();
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-start sm:items-center justify-center p-2.5 sm:p-6 overscroll-contain"
    >
      <div
        className="fixed inset-0 -z-10"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-4xl bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto sm:my-8 max-h-[92vh]">
        {/* Header */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-800 flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="p-2 bg-blue-950 border border-blue-800/60 rounded-lg text-cyan-400 shrink-0">
              <Inbox className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-white font-display truncate">
                Agency Lead Inbox ({leads.length})
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-400 truncate hidden sm:block">
                Inquiries captured and dispatched to /api/contact.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={loadLeads}
              className="min-w-[36px] min-h-[36px] flex items-center justify-center p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Refresh leads"
              aria-label="Refresh leads"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={exportLeadsAsCSV}
              disabled={leads.length === 0}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 rounded-lg transition-colors cursor-pointer min-h-[36px]"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Export CSV</span>
            </button>
            <button
              onClick={onClose}
              className="min-w-[36px] min-h-[36px] flex items-center justify-center p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        {leads.length === 0 ? (
          <div className="p-8 sm:p-12 text-center space-y-3">
            <p className="text-slate-400 text-xs sm:text-sm">
              No inquiries captured yet. Submit a test consultation through the form to view records here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800 overflow-hidden flex-1 min-h-0">
            {/* List */}
            <div className="overflow-y-auto max-h-[35vh] md:max-h-none divide-y divide-slate-800/60">
              {leads.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setSelectedLead(l)}
                  className={`w-full text-left p-3.5 sm:p-4 transition-colors cursor-pointer ${
                    selectedLead?.id === l.id
                      ? "bg-slate-800/80"
                      : "hover:bg-slate-850 bg-slate-900"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-semibold text-xs text-white truncate">{l.fullName}</span>
                    <span className="text-[10px] text-slate-500 font-mono shrink-0">
                      {new Date(l.submittedAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 truncate mb-1">{l.companyWebsite}</div>
                  <div className="text-[11px] text-cyan-400 font-medium truncate">
                    {l.serviceRequired}
                  </div>
                </button>
              ))}
            </div>

            {/* Detail */}
            <div className="md:col-span-2 p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5 bg-slate-950/40">
              {selectedLead && (
                <>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 gap-2 flex-wrap">
                    <div>
                      <span className="text-[10px] uppercase font-mono text-slate-500 block">
                        Reference Number
                      </span>
                      <span className="text-xs sm:text-sm font-mono font-bold text-cyan-400 break-all">
                        {selectedLead.id}
                      </span>
                    </div>
                    <span className="text-[11px] sm:text-xs text-slate-400">
                      {new Date(selectedLead.submittedAt).toLocaleString()}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs">
                    <div>
                      <span className="text-slate-500 block mb-0.5">Contact Name</span>
                      <span className="text-slate-200 font-medium">{selectedLead.fullName}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block mb-0.5">Business Email</span>
                      <a
                        href={`mailto:${selectedLead.businessEmail}`}
                        className="text-cyan-400 hover:underline font-mono break-all"
                      >
                        {selectedLead.businessEmail}
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-500 block mb-0.5">Target Website</span>
                      <span className="text-slate-200 font-mono break-all">{selectedLead.companyWebsite}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block mb-0.5">Monthly Budget</span>
                      <span className="text-slate-200 font-medium">{selectedLead.monthlyBudget}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block mb-0.5">Service Requested</span>
                      <span className="text-slate-200">{selectedLead.serviceRequired}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block mb-0.5">Target Market</span>
                      <span className="text-slate-200">{selectedLead.targetMarket || "US / Global"}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-slate-500 block mb-1.5 font-medium uppercase tracking-wider">
                      Project Objectives & Requirements:
                    </span>
                    <div className="p-3.5 sm:p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                      {selectedLead.projectDetails}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
