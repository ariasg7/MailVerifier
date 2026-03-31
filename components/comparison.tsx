"use client";

import React from "react";
import { Zap, Check } from "lucide-react";

const features = [
  { 
    label: "Price per 1M", 
    us: "$319", 
    avg: "$2,049", 
    competitorValues: ["$3,199", "$449", "$2,500"], 
    detail: "Up to 10x cheaper than our competitors" 
  },
  { 
    label: "Accuracy Rate", 
    us: "99.7%", 
    avg: "98.3%", 
    competitorValues: ["99%", "99%", "97%"], 
    detail: "Highest verified accuracy rate" 
  },
  { 
    label: "Speed", 
    us: "250k/hr", 
    avg: "173k/hr", 
    competitorValues: ["180k/hr", "100k/hr", "240k/hr"], 
    detail: "Higher delivery rates" 
  },
  { 
    label: "User Interface", 
    us: "Clean & Intuitive", 
    avg: "Outdated", 
    competitorValues: ["Feature Heavy", "Basic", "Dated"], 
    detail: "Easy to use and efficient" 
  },
  { 
    label: "Max File Size", 
    us: "2GB", 
    avg: "373MB", 
    competitorValues: ["1GB", "100MB", "20MB"], 
    detail: "Enterprise-grade space" 
  },
  { 
    label: "Roll-Over", 
    us: "3 Months", 
    avg: "None", 
    competitorValues: ["None", "None", "None"], 
    detail: "Never lose your credits" 
  },
];

const competitors = [
  { logo: "/img/zerobounce.png", alt: "ZeroBounce" },
  { logo: "/img/millionverifier.png", alt: "MillionVerifier" },
  { logo: "/img/neverbounce.png", alt: "NeverBounce" },
];

export function Comparison() {
  return (
    <section id="features" className="py-24 bg-[#0A192F] font-inter text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 border-b border-white/10 pb-8 gap-6">
          <div className="text-center md:text-left">
            <p className="text-[#0070F3] font-mono text-[10px] mb-2 tracking-[0.3em] uppercase font-bold">
              // MARKET_ANALYSIS_V4
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white">
              The <span className="text-slate-500">Benchmark</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Live_Data_Sync</span>
          </div>
        </div>

        {/* --- DESKTOP VIEW --- */}
        {/* Added solid background and stronger border for readability */}
        <div className="hidden md:block border border-white/10 bg-[#0B1221] rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-5">
            
            {/* Header Row */}
            <div className="p-8 border-b border-white/10 bg-[#0F172A]" /> 
            
            {/* Our Brand Column Header */}
            <div className="bg-[#0070F3] p-8 flex flex-col items-center justify-center gap-2 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] relative z-20">
              <span className="font-black uppercase tracking-widest text-[11px] italic text-white text-center">MailVerifier</span>
              <Zap className="fill-white w-4 h-4 text-white" />
            </div>

            {/* Competitor Brand Headers */}
            {competitors.map((comp, idx) => (
              <div key={idx} className="p-8 flex items-center justify-center grayscale opacity-40 hover:opacity-100 transition-all border-b border-white/10 border-l border-white/10 bg-[#0F172A]/50 group">
                <span className="text-slate-500 font-bold text-[10px] uppercase tracking-tighter text-center group-hover:text-slate-300">
                   {comp.alt}
                </span>
              </div>
            ))}

            {/* Feature Rows */}
            {features.map((feature, i) => (
              <React.Fragment key={i}>
                {/* 1. Label Column (Left) - Subtle alternating background */}
                <div className={`p-7 flex items-center justify-center border-b border-white/10 border-r border-white/10 ${i % 2 === 0 ? 'bg-white/[0.03]' : 'bg-transparent'}`}>
                  <span className="text-slate-300 font-bold text-[11px] uppercase tracking-widest text-center leading-tight">
                    {feature.label}
                  </span>
                </div>
                
                {/* 2. MailVerifier Column */}
                <div className={`p-7 flex items-center justify-center bg-[#0070F3]/5 border-b border-white/10 border-x border-[#0070F3]/20`}>
                  <div className="flex items-center gap-2">
                    <Check className="text-[#0070F3] w-5 h-5" strokeWidth={3} />
                    <span className="font-black text-xl tabular-nums text-white text-center">{feature.us}</span>
                  </div>
                </div>

                {/* 3-5. Competitor Columns */}
                {competitors.map((_, compIdx) => (
                  <div key={compIdx} className={`p-7 flex items-center justify-center opacity-40 border-b border-white/10 border-l border-white/10 ${i % 2 === 0 ? 'bg-white/[0.01]' : 'bg-transparent'}`}>
                    <span className="text-slate-400 font-bold tabular-nums text-sm text-center">
                      {feature.competitorValues[compIdx]}
                    </span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* --- MOBILE VIEW --- */}
        <div className="md:hidden space-y-4">
          {features.map((feature, i) => (
            <div key={i} className="bg-[#112240]/60 border border-white/10 rounded-2xl p-6 overflow-hidden relative">
              <div className="flex justify-between items-start mb-6">
                <span className="text-slate-300 font-mono text-xs uppercase tracking-widest font-bold">{feature.label}</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-tighter">MailVerifier</p>
                  <p className="text-2xl font-black text-white flex items-center gap-2 tabular-nums">
                    <Zap size={16} className="text-[#0070F3] fill-[#0070F3]" />
                    {feature.us}
                  </p>
                </div>
                <div className="space-y-1 border-l border-white/5 pl-4">
                  <p className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter">Others (Avg)</p>
                  <p className="text-2xl font-black text-slate-600 tabular-nums">{feature.avg}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 flex items-center gap-6 opacity-20">
           <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white to-transparent" />
           <p className="font-mono text-[9px] uppercase tracking-[0.4em] whitespace-nowrap">End_of_Comparison_Ledger</p>
           <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>
      </div>
    </section>
  );
}