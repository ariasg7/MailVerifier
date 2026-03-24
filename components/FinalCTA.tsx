"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, Cpu } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden font-inter border-t border-slate-100">
      {/* Subtle Technical Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '50px 50px' }} 
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Technical Messaging */}
          <div className="space-y-8">
            <div>
              <motion.p 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[#0070F3] font-mono text-[10px] uppercase tracking-[0.4em] font-bold mb-4"
              >
                // SYSTEM_READY_FOR_DEPLOYMENT
              </motion.p>
              <h2 className="text-[#0A192F] text-5xl md:text-6xl font-black tracking-tighter leading-[0.95] uppercase">
                Zero Bounce. <br />
                <span className="text-slate-300">Total Reach.</span>
              </h2>
            </div>

            <p className="text-slate-500 text-lg max-w-md leading-relaxed border-l-2 border-slate-100 pl-6">
              Stop guessing your deliverability. Deploy the same verification engine used by high-scale outreach teams.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                <ShieldCheck size={14} className="text-[#0070F3]" /> SOC2 Compliant
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                <Cpu size={14} className="text-[#0070F3]" /> 99.9% Uptime
              </div>
            </div>
          </div>

          {/* Right Side: The Action Card */}
          <div className="relative">
            {/* Geometric Accent Lines */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-slate-200 hidden md:block" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-slate-200 hidden md:block" />

            <div className="bg-[#0A192F] p-10 md:p-12 shadow-2xl relative">
              {/* Corner Bracket from your earlier design */}
              <div className="absolute top-0 right-0 p-3 font-mono text-[9px] text-slate-500 border-l border-b border-white/10">
                v4.1_FINAL
              </div>

              <h3 className="text-white text-2xl font-black mb-8 tracking-tight">
                Get your first 1,000 <br /> credits <span className="text-[#0070F3]">on us.</span>
              </h3>

              <div className="space-y-4">
                <button className="w-full bg-[#0070F3] hover:bg-white hover:text-[#0A192F] text-white py-5 flex items-center justify-center gap-3 transition-all duration-300 group">
                  <span className="font-black text-xs uppercase tracking-[0.2em]">Initialize Account</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-center text-slate-500 font-mono text-[9px] uppercase tracking-widest mt-6">
                  * No credit card required to start.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Status Bar */}
        <div className="mt-24 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">Verification Node: Active</span>
          </div>
          <div className="flex gap-8">
            <span className="font-mono text-[10px] text-slate-300 uppercase hover:text-[#0070F3] cursor-pointer transition-colors tracking-widest underline underline-offset-4">Privacy_Policy</span>
            <span className="font-mono text-[10px] text-slate-300 uppercase hover:text-[#0070F3] cursor-pointer transition-colors tracking-widest underline underline-offset-4">Terms_of_Srv</span>
          </div>
        </div>
      </div>
    </section>
  );
}