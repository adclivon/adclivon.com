import React, { useState } from "react";
import {
  Sliders,
  ArrowRight,
  ShieldCheck,
  Check,
  Globe2,
  Layers,
  Sparkles,
  TrendingUp,
  FileText,
  Link2,
} from "lucide-react";

interface BacklinkEstimatorProps {
  onApplyPlan: (service: string, budget: string, details: string) => void;
}

export const BacklinkEstimator: React.FC<BacklinkEstimatorProps> = ({ onApplyPlan }) => {
  const [targetMarket, setTargetMarket] = useState("United States");
  const [currentDR, setCurrentDR] = useState("20-40");
  const [monthlyVelocity, setMonthlyVelocity] = useState(8);
  const [mixStrategy, setMixStrategy] = useState<"balanced" | "guest_posts" | "link_insertions">(
    "balanced"
  );

  // Exact preserved calculations:
  let guestPostsCount = 0;
  let insertionsCount = 0;
  let estimatedBudget = "$3,000 – $5,000 / month";
  let minPublisherTraffic = "5,000+ monthly visits";

  if (mixStrategy === "balanced") {
    guestPostsCount = Math.round(monthlyVelocity * 0.45);
    insertionsCount = monthlyVelocity - guestPostsCount;
  } else if (mixStrategy === "guest_posts") {
    guestPostsCount = monthlyVelocity;
    insertionsCount = 0;
  } else {
    guestPostsCount = 0;
    insertionsCount = monthlyVelocity;
  }

  if (monthlyVelocity <= 5) {
    estimatedBudget = "$1,500 – $3,000 / month";
    minPublisherTraffic = "3,000+ to 10,000+ visits";
  } else if (monthlyVelocity <= 12) {
    estimatedBudget = "$3,000 – $5,000 / month";
    minPublisherTraffic = "5,000+ to 25,000+ visits";
  } else {
    estimatedBudget = "$5,000 – $10,000 / month";
    minPublisherTraffic = "10,000+ to 50,000+ visits";
  }

  const guestPostPct = Math.round((guestPostsCount / monthlyVelocity) * 100);
  const insertionPct = 100 - guestPostPct;

  const handleApply = () => {
    const details = `Estimated Campaign Plan:
- Target Market: ${targetMarket}
- Current DR Range: ${currentDR}
- Target Monthly Velocity: ${monthlyVelocity} links/month
- Recommended Mix: ${guestPostsCount} Guest Posts + ${insertionsCount} Contextual Link Insertions
- Publisher Standards: ${minPublisherTraffic} with verified organic traffic.`;

    const serviceName =
      mixStrategy === "guest_posts"
        ? "Guest Posting Services"
        : mixStrategy === "link_insertions"
        ? "Link Insertion Services"
        : "Quality Link Building";

    onApplyPlan(serviceName, estimatedBudget, details);
  };

  const countries = [
    { name: "United States", flag: "🇺🇸", code: "US" },
    { name: "United Kingdom", flag: "🇬🇧", code: "UK" },
    { name: "Canada", flag: "🇨🇦", code: "CA" },
    { name: "Australia", flag: "🇦🇺", code: "AU" },
  ];

  return (
    <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0B1533] via-[#09112A] to-[#070D1E] border border-white/10 p-4 sm:p-7 lg:p-10 shadow-2xl overflow-hidden min-w-0">
      {/* Decorative ambient corner glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 sm:mb-10 pb-5 sm:pb-6 border-b border-white/[0.08]">
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 p-[1px] shadow-lg shadow-blue-500/20 shrink-0">
            <div className="w-full h-full bg-[#060B18] rounded-[11px] flex items-center justify-center text-cyan-400">
              <Sliders className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg sm:text-2xl font-bold text-white font-display">
                Link Campaign & Velocity Estimator
              </h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 shrink-0">
                PRO TOOL
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5 leading-relaxed">
              Model your monthly backlink velocity and evaluate recommended editorial mix by target region.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-400 font-mono shrink-0">
          <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Real-time Algorithmic Bounds</span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">
        {/* Controls Column (7 cols on desktop, full width on mobile) */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Target Geographic Market */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2.5 gap-1">
              <span>1. Target Geographical Market</span>
              <span className="text-cyan-400 font-mono text-[11px]">Region: {targetMarket}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 text-xs">
              {countries.map((country) => (
                <button
                  key={country.name}
                  type="button"
                  onClick={() => setTargetMarket(country.name)}
                  className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between h-16 min-h-[56px] ${
                    targetMarket === country.name
                      ? "border-cyan-400 bg-gradient-to-br from-blue-950/80 to-cyan-950/40 text-white shadow-lg shadow-cyan-950/50"
                      : "border-white/5 bg-white/[0.02] text-slate-400 hover:text-slate-200 hover:border-white/10 hover:bg-white/[0.04]"
                  }`}
                >
                  <span className="text-base sm:text-lg">{country.flag}</span>
                  <span className="font-medium truncate text-xs">{country.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Current DR Range (2 cols on mobile, 4 on desktop for easy tapping) */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2.5 gap-1">
              <span>2. Current Domain Rating (DR)</span>
              <span className="text-slate-400 font-mono text-[11px]">Baseline Benchmark</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-center font-mono">
              {["0 – 20", "20 – 40", "40 – 60", "60+"].map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setCurrentDR(tier)}
                  className={`py-3 sm:py-2.5 px-2 rounded-xl border transition-all duration-200 cursor-pointer min-h-[44px] flex items-center justify-center ${
                    currentDR === tier
                      ? "border-cyan-400 bg-cyan-950/50 text-white font-semibold shadow-md shadow-cyan-950/30"
                      : "border-white/5 bg-white/[0.02] text-slate-400 hover:text-slate-200 hover:border-white/10"
                  }`}
                >
                  <span>{tier}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Monthly Velocity Slider */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                3. Desired Monthly Link Volume
              </label>
              <div className="flex items-baseline gap-1.5 bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-lg w-fit">
                <span className="font-mono text-base font-bold text-cyan-300 tabular-nums">
                  {monthlyVelocity}
                </span>
                <span className="text-[11px] text-slate-300 font-mono">placements / month</span>
              </div>
            </div>

            <div className="pt-2">
              <input
                type="range"
                min={3}
                max={25}
                value={monthlyVelocity}
                onChange={(e) => setMonthlyVelocity(Number(e.target.value))}
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 min-h-[36px]"
                aria-label="Monthly link volume slider"
              />
            </div>

            <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 font-mono pt-1">
              <span>
                3 / mo <span className="hidden sm:inline">(Boutique Tier)</span>
              </span>
              <span className="text-cyan-300">
                12 / mo <span className="hidden sm:inline">(High-Growth)</span>
              </span>
              <span>
                25 / mo <span className="hidden sm:inline">(Enterprise)</span>
              </span>
            </div>
          </div>

          {/* 4. Strategy Mix (1 col on mobile for full readability, 3 on sm+) */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2.5">
              4. Service Distribution Preference
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <button
                type="button"
                onClick={() => setMixStrategy("balanced")}
                className={`p-3.5 sm:p-3 rounded-xl border text-left sm:text-center transition-all duration-200 cursor-pointer min-h-[56px] flex flex-col justify-center ${
                  mixStrategy === "balanced"
                    ? "border-cyan-400 bg-gradient-to-br from-blue-950/80 to-cyan-950/40 text-white font-semibold shadow-md shadow-cyan-950/40"
                    : "border-white/5 bg-white/[0.02] text-slate-400 hover:text-slate-200 hover:border-white/10"
                }`}
              >
                <div className="font-medium text-xs sm:text-sm">Balanced Mix</div>
                <div className="text-[11px] sm:text-[10px] text-slate-400 mt-0.5">Guest Posts + Insertions</div>
              </button>

              <button
                type="button"
                onClick={() => setMixStrategy("guest_posts")}
                className={`p-3.5 sm:p-3 rounded-xl border text-left sm:text-center transition-all duration-200 cursor-pointer min-h-[56px] flex flex-col justify-center ${
                  mixStrategy === "guest_posts"
                    ? "border-cyan-400 bg-gradient-to-br from-blue-950/80 to-cyan-950/40 text-white font-semibold shadow-md shadow-cyan-950/40"
                    : "border-white/5 bg-white/[0.02] text-slate-400 hover:text-slate-200 hover:border-white/10"
                }`}
              >
                <div className="font-medium text-xs sm:text-sm">Guest Posts Only</div>
                <div className="text-[11px] sm:text-[10px] text-slate-400 mt-0.5">100% Brand Bylines</div>
              </button>

              <button
                type="button"
                onClick={() => setMixStrategy("link_insertions")}
                className={`p-3.5 sm:p-3 rounded-xl border text-left sm:text-center transition-all duration-200 cursor-pointer min-h-[56px] flex flex-col justify-center ${
                  mixStrategy === "link_insertions"
                    ? "border-cyan-400 bg-gradient-to-br from-blue-950/80 to-cyan-950/40 text-white font-semibold shadow-md shadow-cyan-950/40"
                    : "border-white/5 bg-white/[0.02] text-slate-400 hover:text-slate-200 hover:border-white/10"
                }`}
              >
                <div className="font-medium text-xs sm:text-sm">Insertions Only</div>
                <div className="text-[11px] sm:text-[10px] text-slate-400 mt-0.5">Aged URLs & Fast Crawls</div>
              </button>
            </div>
          </div>
        </div>

        {/* Output Blueprint Column (5 cols on desktop, full width on mobile) */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#060B18]/90 border border-white/10 p-4 sm:p-7 shadow-xl space-y-6">
          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold font-mono">
                Recommended Allocation
              </span>
              <span className="text-[11px] font-mono text-cyan-400">Monthly Model</span>
            </div>

            {/* Split cards */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
              <div className="bg-[#0B1533] border border-blue-500/20 p-3 sm:p-4 rounded-xl relative overflow-hidden">
                <div className="flex items-center gap-1.5 text-xs text-blue-300 font-medium mb-1 truncate">
                  <FileText className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">Guest Articles</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                  {guestPostsCount}
                </div>
                <div className="text-[10px] text-slate-400 mt-1 truncate">1,200+ words · byline</div>
              </div>

              <div className="bg-[#0B1533] border border-indigo-500/20 p-3 sm:p-4 rounded-xl relative overflow-hidden">
                <div className="flex items-center gap-1.5 text-xs text-indigo-300 font-medium mb-1 truncate">
                  <Link2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">Link Insertions</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                  {insertionsCount}
                </div>
                <div className="text-[10px] text-slate-400 mt-1 truncate">Aged indexed URLs</div>
              </div>
            </div>

            {/* Visual ratio bar */}
            <div>
              <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 mb-1.5 font-mono">
                <span>Guest Posts: {guestPostPct}%</span>
                <span>Insertions: {insertionPct}%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden flex">
                <div
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300"
                  style={{ width: `${guestPostPct}%` }}
                />
                <div
                  className="bg-indigo-600 transition-all duration-300"
                  style={{ width: `${insertionPct}%` }}
                />
              </div>
            </div>

            {/* Detail rows (Wrap cleanly so budget text never clips on 320px) */}
            <div className="space-y-2 text-xs pt-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-slate-400 py-1.5 border-b border-white/[0.05] gap-0.5 sm:gap-2">
                <span>Vetted Publisher Floor:</span>
                <span className="text-slate-200 font-medium">{minPublisherTraffic}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-slate-400 py-1.5 border-b border-white/[0.05] gap-0.5 sm:gap-2">
                <span>Target Geography:</span>
                <span className="text-slate-200 font-medium">{targetMarket}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-slate-400 py-1.5 border-b border-white/[0.05] gap-0.5 sm:gap-2">
                <span>Estimated Budget Bracket:</span>
                <span className="text-cyan-300 font-semibold font-mono">{estimatedBudget}</span>
              </div>
            </div>

            {/* Trust callout */}
            <div className="p-3 bg-blue-950/40 rounded-xl border border-blue-900/50 text-xs text-slate-300 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                All host domains are pre-approved by you with full metric disclosure before outreach.
              </span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={handleApply}
              className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer text-center"
            >
              <span>Transfer This Plan to Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
