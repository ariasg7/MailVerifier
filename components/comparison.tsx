"use client";

import React from "react";
import { Zap, Check, Minus, Info } from "lucide-react";

const features = [
  { label: "Free Credits", us: "1,000", avg: "50", detail: "Industry leading start" },
  { label: "Cost per 1M", us: "$317", avg: "$1,200", detail: "70% more cost effective" },
  { label: "SMTP Latency", us: "14ms", avg: "350ms", detail: "Near-instant verification" },
  { label: "Support", us: "24/7 Eng", avg: "Bot/Ticket", detail: "Direct engineer access" },
  { label: "Compliance", us: "SOC2 II", avg: "None", detail: "Enterprise grade security" },
];

const competitors = [
  { logo: "/logos/zerobounce.png", alt: "ZeroBounce" },
  { logo: "/logos/neverbounce.png", alt: "NeverBounce" },
  { logo: "/logos/debounce.png", alt: "DeBounce" },
];

export function Comparison() {
  return (
    <section className="py-24 bg-[#0A192F] font-inter text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Centered on Mobile */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 border-b border-white/10 pb-8 gap-6 text-center md:text-left">
          <div>
            <p className="text-[#0070F3] font-mono text-[10px] mb-2 tracking-[0.3em] uppercase opacity-70">
              // MARKET_ANALYSIS_V4
            </p>
            <h2 className="text-4xl font-black tracking-tighter uppercase">
              The <span className="text-slate-500">Benchmark</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Live_Data_Sync</span>
          </div>
        </div>

        {/* --- MOBILE VIEW: Simplified List --- */}
        <div className="md:hidden space-y-4">
          {features.map((feature, i) => (
            <div key={i} className="bg-[#0D1E36] border border-white/10 rounded-2xl p-6 overflow-hidden relative">
              <div className="flex justify-between items-start mb-6">
                <span className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">{feature.label}</span>
                <span className="text-[#0070F3] font-mono text-[9px] uppercase font-bold bg-blue-500/10 px-2 py-1 rounded">Best in Class</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-tighter">MailVerifier</p>
                  <p className="text-2xl font-black text-white flex items-center gap-2">
                    <Zap size={16} className="text-[#0070F3] fill-[#0070F3]" />
                    {feature.us}
                  </p>
                </div>
                <div className="space-y-1 border-l border-white/5 pl-4">
                  <p className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter">Others (Avg)</p>
                  <p className="text-2xl font-black text-slate-600">{feature.avg}</p>
                </div>
              </div>

              {/* Detail tag */}
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2">
                <Info size={12} className="text-[#0070F3]" />
                <p className="text-slate-500 text-[11px] italic">{feature.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- DESKTOP VIEW: The Matrix (Stays exactly as you liked it) --- */}
        <div className="hidden md:block relative border border-white/10 bg-[#0D1E36] rounded-sm overflow-hidden">
          {/* Vertical Dividers */}
          <div className="absolute top-0 bottom-0 left-[20%] w-px bg-white/10" />
          <div className="absolute top-0 bottom-0 left-[40%] w-px bg-white/10" />
          <div className="absolute top-0 bottom-0 left-[60%] w-px bg-white/10" />
          <div className="absolute top-0 bottom-0 left-[80%] w-px bg-white/10" />

          {/* Highlight Overlay */}
          <div className="absolute top-0 bottom-0 left-[20%] w-[20%] bg-[#0070F3]/5 border-x border-[#0070F3]/30 pointer-events-none z-0" />

          <div className="relative flex border-b border-white/10 z-10">
            <div className="w-[20%] p-8" />
            <div className="w-[20%] bg-[#0070F3] p-8 flex flex-col items-center justify-center gap-2 shadow-[0_10px_30px_rgba(0,112,243,0.3)]">
              <span className="font-black uppercase tracking-widest text-xs italic">MailVerifier</span>
              <Zap className="fill-white w-4 h-4" />
            </div>
            {competitors.map((comp, idx) => (
              <div key={idx} className="w-[20%] p-8 flex items-center justify-center grayscale opacity-50">
                <span className="font-black text-xs uppercase text-slate-500">{comp.alt}</span>
              </div>
            ))}
          </div>

          {features.map((feature, i) => (
            <div key={i} className="relative flex border-b border-white/5 last:border-0 z-10 hover:bg-white/[0.02] transition-colors">
              <div className="w-[20%] p-6 flex items-center justify-end pr-10 border-r border-white/5">
                <span className="text-slate-500 font-mono text-[10px] uppercase tracking-widest text-right leading-tight">{feature.label}</span>
              </div>
              <div className="w-[20%] p-6 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <Check className="text-[#0070F3] w-4 h-4" />
                  <span className="font-black text-lg tabular-nums">{feature.us}</span>
                </div>
              </div>
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="w-[20%] p-6 flex items-center justify-center opacity-30">
                  <span className="text-slate-400 font-medium tabular-nums text-sm">{feature.avg}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-4 opacity-30">
           <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
           <p className="font-mono text-[8px] uppercase tracking-[0.3em]">End of Competitive Audit</p>
           <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}