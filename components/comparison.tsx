"use client";

import React from "react";
import { Zap, X, Check } from "lucide-react";

const features = [
  { label: "Free Credits", us: "1,000", comps: ["0", "50", "0"] },
  { label: "Cost per 1M", us: "$317", comps: ["$2,500+", "$450", "$600"] },
  { label: "SMTP Latency", us: "14ms", comps: ["450ms", "200ms", "310ms"] },
  { label: "Support", us: "24/7 Engineer", comps: ["Bot", "Ticket", "Bot"] },
  { label: "SOC2 Type II", us: "Verified", comps: ["No", "Yes", "No"] },
];

const competitors = [
  { logo: "/logos/zerobounce.png", alt: "ZeroBounce" },
  { logo: "/logos/neverbounce.png", alt: "NeverBounce" },
  { logo: "/logos/debounce.png", alt: "DeBounce" },
];

export function Comparison() {
  return (
    <section className="py-24 bg-[#0A192F] font-inter text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-8">
          <div>
            <p className="text-[#0070F3] font-mono text-[10px] mb-2 tracking-[0.3em] uppercase opacity-70">
              // MARKET_ANALYSIS_V4
            </p>
            <h2 className="text-4xl font-black tracking-tighter uppercase">
              The <span className="text-slate-500 text-3xl">Benchmark</span>
            </h2>
          </div>
        </div>

        {/* Matrix Container */}
        <div className="relative border border-white/10 bg-[#0D1E36] rounded-sm overflow-hidden">
          
          {/* VERTICAL DIVIDERS - Fixed positions for 5 columns total */}
          <div className="absolute top-0 bottom-0 left-[20%] w-px bg-white/10 hidden md:block" />
          <div className="absolute top-0 bottom-0 left-[40%] w-px bg-white/10 hidden md:block" />
          <div className="absolute top-0 bottom-0 left-[60%] w-px bg-white/10 hidden md:block" />
          <div className="absolute top-0 bottom-0 left-[80%] w-px bg-white/10 hidden md:block" />

          {/* HIGHLIGHT OVERLAY: This creates the "Full Column Highlight" effect */}
          <div className="absolute top-0 bottom-0 left-[20%] w-[20%] bg-[#0070F3]/5 border-x border-[#0070F3]/30 pointer-events-none z-0" />

          {/* Header Row */}
          <div className="relative flex flex-col md:flex-row border-b border-white/10 z-10">
            <div className="md:w-[20%] p-8 hidden md:block" />
            
            {/* MailVerifier Header */}
            <div className="md:w-[20%] bg-[#0070F3] p-8 flex flex-col items-center justify-center gap-2 shadow-[0_10px_30px_rgba(0,112,243,0.3)]">
              <span className="font-black uppercase tracking-widest text-xs italic">MailVerifier</span>
              <Zap className="fill-white w-4 h-4" />
            </div>

            {/* Competitor Image Headers */}
            {competitors.map((comp, idx) => (
              <div key={idx} className="md:w-[20%] p-8 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-crosshair">
                <img src={comp.logo} alt={comp.alt} className="h-6 object-contain" />
              </div>
            ))}
          </div>

          {/* Data Rows */}
          {features.map((feature, i) => (
            <div 
              key={`row-${i}`} 
              className={`relative flex flex-col md:flex-row border-b border-white/5 last:border-0 z-10`}
            >
              {/* Feature Label */}
              <div className="md:w-[20%] p-6 flex items-center justify-end pr-10 border-r border-white/5 bg-[#0A192F]/30">
                <span className="text-slate-500 font-mono text-[9px] uppercase tracking-[0.2em] text-right leading-tight">
                  {feature.label}
                </span>
              </div>

              {/* Our Value (Highlighted) */}
              <div className="md:w-[20%] p-6 flex flex-col items-center justify-center bg-blue-500/[0.02]">
                <div className="flex items-center gap-2">
                  <Check className="text-[#0070F3] w-4 h-4" />
                  <span className="font-black text-lg tabular-nums">{feature.us}</span>
                </div>
              </div>

              {/* Competitor Values */}
              {feature.comps.map((val, idx) => (
                <div key={idx} className="md:w-[20%] p-6 flex items-center justify-center opacity-30 group hover:opacity-60 transition-opacity">
                  <span className="text-slate-400 font-medium tabular-nums text-sm group-hover:text-white transition-colors">{val}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 opacity-40">
           <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
           <p className="font-mono text-[9px] uppercase tracking-widest">End of Report</p>
           <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}