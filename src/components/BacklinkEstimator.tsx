import React, { useState } from "react";
import { Sliders, ArrowRight, ShieldCheck, Check } from "lucide-react";

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

  // Compute breakdown
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
    minPublisherTraffic = "3,000+ to 10,000+ monthly visits";
  } else if (monthlyVelocity <= 12) {
    estimatedBudget = "$3,000 – $5,000 / month";
    minPublisherTraffic = "5,000+ to 25,000+ monthly visits";
  } else {
    estimatedBudget = "$5,000 – $10,000 / month";
    minPublisherTraffic = "10,000+ to 50,000+ monthly visits";
  }

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

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 sm:p-8 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-blue-950 border border-blue-800/60 rounded-lg text-blue-400">
          <Sliders className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white font-display">
            Interactive Link Campaign & Velocity Estimator
          </h3>
          <p className="text-xs text-slate-400">
            Model your monthly backlink velocity and evaluate recommended editorial mix by target region.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controls Column */}
        <div className="space-y-5">
          {/* Market */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              1. Target Geographical Market
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {["United States", "United Kingdom", "Canada", "Australia"].map((market) => (
                <button
                  key={market}
                  type="button"
                  onClick={() => setTargetMarket(market)}
                  className={`px-3 py-2 rounded-lg border text-left transition-colors cursor-pointer ${
                    targetMarket === market
                      ? "border-blue-500 bg-blue-950/40 text-white font-medium"
                      : "border-slate-800 bg-slate-950/50 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {market}
                </button>
              ))}
            </div>
          </div>

          {/* Current DR */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              2. Your Current Domain Rating (DR)
            </label>
            <div className="grid grid-cols-4 gap-2 text-xs text-center font-mono">
              {["0 – 20", "20 – 40", "40 – 60", "60+"].map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setCurrentDR(tier)}
                  className={`py-2 rounded-lg border transition-colors cursor-pointer ${
                    currentDR === tier
                      ? "border-blue-500 bg-blue-950/40 text-white font-semibold"
                      : "border-slate-800 bg-slate-950/50 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>

          {/* Monthly Velocity Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                3. Desired Monthly Link Volume
              </label>
              <span className="font-mono text-sm font-bold text-blue-400 tabular-nums">
                {monthlyVelocity} placements / mo
              </span>
            </div>
            <input
              type="range"
              min={3}
              max={25}
              value={monthlyVelocity}
              onChange={(e) => setMonthlyVelocity(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
              <span>3/mo (Boutique)</span>
              <span>12/mo (Growth)</span>
              <span>25/mo (Enterprise)</span>
            </div>
          </div>

          {/* Strategy Mix */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              4. Service Distribution Preference
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setMixStrategy("balanced")}
                className={`p-2 rounded-lg border text-center transition-colors cursor-pointer ${
                  mixStrategy === "balanced"
                    ? "border-blue-500 bg-blue-950/40 text-white font-medium"
                    : "border-slate-800 bg-slate-950/50 text-slate-400 hover:text-slate-200"
                }`}
              >
                Balanced Mix
              </button>
              <button
                type="button"
                onClick={() => setMixStrategy("guest_posts")}
                className={`p-2 rounded-lg border text-center transition-colors cursor-pointer ${
                  mixStrategy === "guest_posts"
                    ? "border-blue-500 bg-blue-950/40 text-white font-medium"
                    : "border-slate-800 bg-slate-950/50 text-slate-400 hover:text-slate-200"
                }`}
              >
                Guest Posts Only
              </button>
              <button
                type="button"
                onClick={() => setMixStrategy("link_insertions")}
                className={`p-2 rounded-lg border text-center transition-colors cursor-pointer ${
                  mixStrategy === "link_insertions"
                    ? "border-blue-500 bg-blue-950/40 text-white font-medium"
                    : "border-slate-800 bg-slate-950/50 text-slate-400 hover:text-slate-200"
                }`}
              >
                Insertions Only
              </button>
            </div>
          </div>
        </div>

        {/* Output Blueprint Column */}
        <div className="bg-slate-950 border border-slate-800/90 rounded-xl p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block">
              Estimated Monthly Allocation
            </span>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
                <span className="text-xs text-slate-400 block mb-1">Guest Post Articles</span>
                <span className="text-2xl font-bold font-mono text-white tabular-nums">
                  {guestPostsCount}
                </span>
                <span className="text-[11px] text-slate-500 block mt-1">1,200+ wds, byline review</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
                <span className="text-xs text-slate-400 block mb-1">Contextual Insertions</span>
                <span className="text-2xl font-bold font-mono text-white tabular-nums">
                  {insertionsCount}
                </span>
                <span className="text-[11px] text-slate-500 block mt-1">Aged, indexed URLs</span>
              </div>
            </div>

            <div className="space-y-2 text-xs pt-2">
              <div className="flex items-center justify-between text-slate-400 py-1 border-b border-slate-900">
                <span>Vetted Publisher Floor:</span>
                <span className="text-slate-200 font-medium">{minPublisherTraffic}</span>
              </div>
              <div className="flex items-center justify-between text-slate-400 py-1 border-b border-slate-900">
                <span>Geographic Target:</span>
                <span className="text-slate-200 font-medium">{targetMarket}</span>
              </div>
              <div className="flex items-center justify-between text-slate-400 py-1 border-b border-slate-900">
                <span>Estimated Monthly Budget:</span>
                <span className="text-blue-400 font-semibold font-mono">{estimatedBudget}</span>
              </div>
            </div>

            <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800/60 text-xs text-slate-400 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>
                All prospective publisher domains are pre-approved by you before pitching or editorial publication.
              </span>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={handleApply}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
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
