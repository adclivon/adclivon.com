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
    if (isOpen) {
      loadLeads();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-950 border border-blue-800/60 rounded-lg text-blue-400">
              <Inbox className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                Agency Lead Inbox ({leads.length})
              </h3>
              <p className="text-xs text-slate-400">
                Inquiries captured from the consultation form, stored locally and dispatched to /api/contact.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={loadLeads}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Refresh leads"
              aria-label="Refresh leads"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={exportLeadsAsCSV}
              disabled={leads.length === 0}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        {leads.length === 0 ? (
          <div className="p-12 text-center space-y-3">
            <p className="text-slate-400 text-sm">
              No inquiries captured yet. Submit a test consultation through the form to view records here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800 overflow-hidden flex-1">
            {/* List */}
            <div className="overflow-y-auto max-h-[60vh] divide-y divide-slate-800/60">
              {leads.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setSelectedLead(l)}
                  className={`w-full text-left p-4 transition-colors cursor-pointer ${
                    selectedLead?.id === l.id
                      ? "bg-slate-800/80"
                      : "hover:bg-slate-850 bg-slate-900"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-semibold text-xs text-white truncate">{l.fullName}</span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {new Date(l.submittedAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 truncate mb-1">{l.companyWebsite}</div>
                  <div className="text-[11px] text-blue-400 font-medium truncate">
                    {l.serviceRequired}
                  </div>
                </button>
              ))}
            </div>

            {/* Detail */}
            <div className="md:col-span-2 p-6 overflow-y-auto max-h-[60vh] space-y-5 bg-slate-950/40">
              {selectedLead && (
                <>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <span className="text-[10px] uppercase font-mono text-slate-500 block">
                        Reference Number
                      </span>
                      <span className="text-sm font-mono font-bold text-blue-400">
                        {selectedLead.id}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">
                      {new Date(selectedLead.submittedAt).toLocaleString()}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-slate-500 block mb-0.5">Contact Name</span>
                      <span className="text-slate-200 font-medium">{selectedLead.fullName}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block mb-0.5">Business Email</span>
                      <a
                        href={`mailto:${selectedLead.businessEmail}`}
                        className="text-blue-400 hover:underline font-mono"
                      >
                        {selectedLead.businessEmail}
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-500 block mb-0.5">Target Website</span>
                      <span className="text-slate-200 font-mono">{selectedLead.companyWebsite}</span>
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
                    <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
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
