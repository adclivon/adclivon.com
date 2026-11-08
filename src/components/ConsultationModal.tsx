import React, { useEffect } from "react";
import { ContactForm } from "./ContactForm";
import { X } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedBudget?: string;
  preselectedDetails?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  preselectedBudget,
  preselectedDetails,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#040814]/90 backdrop-blur-md flex items-start sm:items-center justify-center p-2.5 sm:p-6 overscroll-contain"
    >
      {/* Background backdrop click to close */}
      <div
        className="fixed inset-0 -z-10"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl bg-[#080E24] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/60 overflow-hidden my-auto sm:my-8 max-h-[92vh] flex flex-col">
        {/* Top cyan gradient accent line */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-teal-400 shrink-0" />

        {/* Close Button (Touch target >= 44x44px) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer focus:outline-none"
          aria-label="Close consultation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal body with smooth scrolling */}
        <div className="overflow-y-auto p-1 sm:p-2 flex-1">
          <ContactForm
            initialService={preselectedService}
            initialBudget={preselectedBudget}
            initialDetails={preselectedDetails}
            formTitle="Get a Free SEO Consultation"
            formSubtitle="Our senior strategists analyze your domain footprint, competitor gap, and deliver customized recommendations."
            onSuccess={() => {
              // keep modal open to show reference ID
            }}
          />
        </div>
      </div>
    </div>
  );
};
