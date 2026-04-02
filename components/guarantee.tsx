"use client";

import React from "react";
import { ShieldCheck, CheckCircle2, Award, Zap, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Renders the floating 3D currency tokens with fixed style syntax and mapping.
 */
const FloatingTokens = () => (
  <div className="absolute inset-0 z-20 pointer-events-none">
    {[
      { top: "50%", left: "75%", size: 60, delay: 0 },
      { top: "68%", left: "80%", size: 45, delay: 0.2 },
      { top: "75%", left: "68%", size: 70, delay: 0.4 },
    ].map((token, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -20, 0],
          rotate: [i * 5, i * 5 + 10, i * 5],
        }}
        transition={{
          duration: 4 + i,
          repeat: Infinity,
          ease: "easeInOut",
          delay: token.delay,
        }}
        className="absolute flex items-center justify-center bg-white rounded-full border border-white/10 shadow-[0_24px_48px_-10px_rgba(0,112,243,0.3)]"
        style={{
          top: token.top,
          left: token.left,
          width: token.size,
          height: token.size,
        }}
      >
        <div className="absolute inset-0 bg-[#0070F3]/5 rounded-full blur-xl" />
        <DollarSign className="w-1/2 h-1/2 text-emerald-500" strokeWidth={3} />
      </motion.div>
    ))}
  </div>
);

export function Guarantee() {
  return (
    <section id="guarantee" className="relative py-32 bg-[#0A192F] font-inter text-white overflow-hidden">
      {/* Background Accents (Blurred Blue Ovals) */}
      <div className="absolute top-[30%] -right-[10%] w-[600px] h-[600px] bg-[#0070F3]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-[#0070F3]/3 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left Side: Dynamic Isometric Bento Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square md:aspect-[16/10] lg:aspect-square w-full h-full flex items-center justify-center"
        >
          {/* Main Verification Ledger Bento */}
          <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] bg-[#112240]/40 backdrop-blur-3xl rounded-[40px] border border-white/10 shadow-[0_32px_80px_-16px_rgba(0,112,243,0.1)] p-10 flex flex-col gap-8 rotate-[-10deg] hover:rotate-[-5deg] transition-transform duration-500 z-10">
            <div className="flex justify-between items-start border-b border-white/5 pb-6">
              <div className="space-y-1">
                <p className="text-[#0070F3] font-mono text-[10px] tracking-[0.3em] font-black uppercase">
                  // PROTOCOL: REASSURANCE_v4
                </p>
                <h3 className="text-white text-3xl font-black uppercase tracking-tighter">System Ledger</h3>
              </div>
              <ShieldCheck className="w-10 h-10 text-[#0070F3]/60" strokeWidth={1}/>
            </div>
            
            <div className="flex-grow space-y-3 font-mono text-xs text-slate-300 opacity-80">
              <p>&gt; Checking network integrity... [OK]</p>
              <p>&gt; Validating accuracy (99.7%)... [TRUE]</p>
              <p>&gt; Initialize Guarantee Protocol... [ACTIVE]</p>
              <p>&gt; 100% Refund Status... [AUDITABLE]</p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2">
              <Zap size={14} className="text-emerald-500" />
              <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">DEFINITIVE INFRASTRUCTURE</p>
            </div>
          </div>

          <FloatingTokens />
        </motion.div>

        {/* Right Side: Authority Typography */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-12 text-center lg:text-left"
        >
          <div className="space-y-3">
            <p className="text-[#0070F3] font-mono text-[10px] mb-2 tracking-[0.3em] uppercase font-bold">
              // MARKET_REASSURANCE_LEDGER
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[1.05]">
              System <br/>
              <span className="text-[#0070F3]">Refund Status</span>
            </h2>
          </div>

          <p className="text-slate-400 max-w-lg font-inter text-lg md:text-xl leading-relaxed font-medium mx-auto lg:mx-0">
            Definitive accuracy requires definitive assurance. MailVerifier.net provides an auditable 100% money-back guarantee on all verification outcomes. Our commitment to precision infrastructure is why over 70,000 global networks trust us.
          </p>

          <div className="space-y-5 flex flex-col items-center lg:items-start">
            {[
              { icon: DollarSign, text: "Auditable 100% Refund System" },
              { icon: CheckCircle2, text: "Verified Results You Can Direct Audit" },
              { icon: Award, text: "24/7 Direct Engineering Access" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/5 w-fit px-6 py-4 rounded-full border border-white/5 shadow-inner">
                <div className="bg-[#0070F3]/10 p-2 rounded-lg border border-[#0070F3]/20">
                  <item.icon className="w-5 h-5 text-[#0070F3]" />
                </div>
                <span className="text-white font-medium text-sm md:text-base">{item.text}</span>
                <span className="text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-widest pl-3 ml-3 border-l border-white/10">[ACTIVE]</span>
              </div>
            ))}
          </div>

          <div className="w-full flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mt-6">
            <a 
              href="/authentication"
              className="w-full sm:w-auto bg-[#0070F3] text-white rounded-xl px-12 py-5 flex items-center justify-center gap-3 hover:bg-[#0070F3]/80 hover:shadow-3xl hover:shadow-blue-500/20 transition-all duration-300 group font-bold text-lg font-inter"
            >
              Initialize Account
              <Zap className="w-5 h-5 text-white opacity-70 group-hover:rotate-6 transition-transform" />
            </a>
            <p className="text-sm text-slate-500 font-medium">99.7% Verification Precision</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}