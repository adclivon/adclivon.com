import React, { useState } from "react";
import {
  TrendingUp,
  ShieldCheck,
  Globe,
  ArrowUpRight,
  Search,
  ExternalLink,
  Layers,
  Sparkles,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

export const HeroAnalyticsDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"serp" | "placements" | "health">("serp");

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none min-w-0">
      {/* Ambient background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-indigo-600/20 to-cyan-400/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

      {/* Main Glass Dashboard Card */}
      <div className="relative rounded-2xl bg-[#0A122C]/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(8,16,40,0.8)] overflow-hidden">
        {/* Card Header Bar */}
        <div className="px-3.5 sm:px-5 py-3 sm:py-4 border-b border-white/[0.08] flex items-center justify-between gap-2 bg-white/[0.02]">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="h-3.5 w-[1px] bg-white/10 mx-0.5 sm:mx-1 shrink-0" />
            <div className="flex items-center gap-1 text-[11px] sm:text-xs font-mono text-slate-300 truncate">
              <span className="text-slate-500 hidden sm:inline">domain:</span>
              <span className="text-cyan-300 font-medium truncate">client-enterprise.io</span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Campaign</span>
            </span>
          </div>
        </div>

        {/* Dashboard Top Metric Strips */}
        <div className="grid grid-cols-3 divide-x divide-white/[0.06] border-b border-white/[0.06] bg-white/[0.01]">
          <div className="p-2.5 sm:p-5">
            <div className="text-[9px] sm:text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5 truncate font-mono">
              Domain Rating
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2">
              <span className="text-xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                74
              </span>
              <span className="text-[10px] sm:text-xs text-emerald-400 font-semibold">
                +18 DR
              </span>
            </div>
            <div className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5 truncate hidden sm:block">
              Ahrefs verified rank
            </div>
          </div>

          <div className="p-2.5 sm:p-5">
            <div className="text-[9px] sm:text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5 truncate font-mono">
              Organic Visits
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2">
              <span className="text-xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                128.4K
              </span>
              <span className="text-[10px] sm:text-xs text-emerald-400 font-semibold">
                +62%
              </span>
            </div>
            <div className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5 truncate hidden sm:block">
              High-intent traffic
            </div>
          </div>

          <div className="p-2.5 sm:p-5">
            <div className="text-[9px] sm:text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5 truncate font-mono">
              Top 10 Keywords
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2">
              <span className="text-xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                482
              </span>
              <span className="text-[10px] sm:text-xs text-cyan-400 font-semibold">
                +140
              </span>
            </div>
            <div className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5 truncate hidden sm:block">
              Commercial queries
            </div>
          </div>
        </div>

        {/* Interactive Segmented Tabs */}
        <div className="p-3 sm:p-5 space-y-4">
          <div className="flex items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
            <div className="flex items-center gap-1 p-1 bg-[#060B18]/80 rounded-lg border border-white/5 w-full sm:w-auto overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab("serp")}
                className={`flex-1 sm:flex-none px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap text-center ${
                  activeTab === "serp"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                SERP Growth
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("placements")}
                className={`flex-1 sm:flex-none px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap text-center ${
                  activeTab === "placements"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Placements (34)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("health")}
                className={`flex-1 sm:flex-none px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap text-center ${
                  activeTab === "health"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Quality Vetting
              </button>
            </div>

            <span className="hidden md:inline-block text-[11px] text-slate-400 font-mono shrink-0">
              6-Month Attribution
            </span>
          </div>

          {/* TAB 1: SERP Growth Graphic */}
          {activeTab === "serp" && (
            <div className="space-y-4">
              <div className="h-40 sm:h-52 w-full relative flex items-end pt-2">
                {/* SVG Area Chart */}
                <svg
                  className="w-full h-full overflow-hidden"
                  viewBox="0 0 500 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="serpGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.35" />
                      <stop offset="60%" stopColor="#2563EB" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#06B6D4" />
                      <stop offset="100%" stopColor="#38BDF8" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal grid lines */}
                  <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                  <line x1="0" y1="80" x2="500" y2="80" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                  <line x1="0" y1="130" x2="500" y2="130" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />

                  {/* Area fill */}
                  <path
                    d="M0 160 Q 90 145, 150 120 T 290 70 T 420 30 T 500 15 L 500 180 L 0 180 Z"
                    fill="url(#serpGradient)"
                  />

                  {/* Line stroke */}
                  <path
                    d="M0 160 Q 90 145, 150 120 T 290 70 T 420 30 T 500 15"
                    stroke="url(#strokeGradient)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Interactive Hotspot Points */}
                  <circle cx="150" cy="120" r="4" fill="#3B82F6" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="290" cy="70" r="4" fill="#06B6D4" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="420" cy="30" r="4.5" fill="#38BDF8" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="500" cy="15" r="5" fill="#22D3EE" stroke="#ffffff" strokeWidth="2.5" />
                </svg>

                {/* Floating Insight Pill inside chart */}
                <div className="absolute right-2 sm:right-4 top-1 sm:top-2 bg-[#060B18]/90 backdrop-blur-md border border-cyan-400/30 rounded-lg p-2 sm:p-2.5 shadow-xl text-left max-w-[200px] sm:max-w-none">
                  <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono">Current Run-Rate</div>
                  <div className="text-[11px] sm:text-xs font-bold text-cyan-300 font-mono">
                    +4,280 Daily Impressions
                  </div>
                </div>
              </div>

              {/* Month Markers (Responsive to prevent overlap on small screens) */}
              <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-500 font-mono px-1">
                <span>M1</span>
                <span className="hidden xs:inline sm:inline">M2</span>
                <span className="text-slate-400">M3 (Velocity)</span>
                <span className="hidden xs:inline sm:inline">M4</span>
                <span className="hidden sm:inline">M5</span>
                <span className="text-cyan-400 font-semibold">M6 (Domination)</span>
              </div>
            </div>
          )}

          {/* TAB 2: Recent Verified Editorial Placements */}
          {activeTab === "placements" && (
            <div className="space-y-2.5">
              <div className="space-y-2 text-xs">
                {[
                  {
                    publisher: "TechCrunch",
                    category: "Enterprise",
                    dr: 93,
                    traffic: "6.2M visits",
                    status: "Dofollow · Indexed",
                    anchor: "cloud architecture solutions",
                  },
                  {
                    publisher: "Forbes",
                    category: "Tech Innovation",
                    dr: 94,
                    traffic: "18.4M visits",
                    status: "Dofollow · Indexed",
                    anchor: "enterprise data pipelines",
                  },
                  {
                    publisher: "VentureBeat",
                    category: "AI & SaaS",
                    dr: 91,
                    traffic: "2.8M visits",
                    status: "Dofollow · Indexed",
                    anchor: "automated workflow orchestration",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 rounded-xl flex items-center justify-between gap-2.5 transition-colors"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-semibold text-white truncate text-xs">{item.publisher}</span>
                        <span className="text-[10px] text-slate-400 hidden xs:inline">/ {item.category}</span>
                        <span className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300">
                          DR {item.dr}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 truncate">
                        Anchor: <span className="text-slate-300 italic">"{item.anchor}"</span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-emerald-400 font-mono">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span>Indexed</span>
                      </span>
                      <div className="text-[9px] sm:text-[10px] text-slate-500">{item.traffic}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Quality Vetting Protocol */}
          {activeTab === "health" && (
            <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl space-y-3 text-xs">
              <div className="flex items-center justify-between text-slate-300 pb-2 border-b border-white/5 flex-wrap gap-1">
                <span className="font-semibold text-white">Publisher Standard:</span>
                <span className="font-mono text-cyan-400 text-[11px]">100% White-Hat Verified</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                  <span className="text-slate-400 block mb-0.5">PBN Detection:</span>
                  <span className="text-emerald-400 font-semibold font-mono">0% (Strict Ban)</span>
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                  <span className="text-slate-400 block mb-0.5">Traffic Verification:</span>
                  <span className="text-cyan-400 font-semibold font-mono">Semrush / Ahrefs Real</span>
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                  <span className="text-slate-400 block mb-0.5">Placement Warranty:</span>
                  <span className="text-slate-200 font-semibold">12-Month Guarantee</span>
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                  <span className="text-slate-400 block mb-0.5">Client Pre-Approval:</span>
                  <span className="text-slate-200 font-semibold">100% URL Pre-Screening</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Card Footer Bar */}
        <div className="px-3.5 sm:px-5 py-2.5 sm:py-3 border-t border-white/[0.06] bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-slate-950 flex items-center justify-between text-xs text-slate-400 gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
            <span className="text-slate-300 text-[11px] sm:text-xs truncate">Google Core Update safe</span>
          </div>
          <span className="text-[10px] sm:text-[11px] font-mono text-cyan-400/80 shrink-0">Adclivon Intelligence</span>
        </div>
      </div>
    </div>
  );
};
