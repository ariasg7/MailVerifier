"use client";

import Link from "next/link";
import { ArrowRight, Mail, Shield, RefreshCw, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  return <span>{count === target ? target : count.toFixed(count < 100 ? 1 : 0)}{suffix}</span>;
}

export function Hero() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white px-6 pt-20">
      {/* Background Accents */}
      <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-[#0070F3]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Massive Typography */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <h1 className="text-[#0A192F] mb-8 font-inter tracking-tighter leading-[1.1] font-[900] text-[42px] sm:text-[64px] lg:text-[84px] pr-4">
            <span className="inline-block whitespace-nowrap">Built for Teams</span> <br/>
            <span className="text-[#0070F3] inline-block">
              That Send <span className="tracking-normal">Millions.</span>
            </span>
          </h1>

          <p className="text-slate-500 mb-10 max-w-lg font-inter text-lg md:text-xl leading-relaxed">
            The fastest bulk email verification tool of 2026, built for agencies and sales teams. 99.7% accurate and a fraction of the cost.
          </p>

          <div className="w-full flex items-center justify-center lg:justify-start gap-6 mb-16">
            <Link 
              href="/authentication"
              className="w-full sm:w-auto bg-[#0A192F] text-white rounded-2xl px-10 py-5 flex items-center justify-center gap-3 hover:bg-[#0070F3] hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group font-bold text-lg font-inter"
            >
              Sign Up Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* MOBILE-ONLY METRICS */}
          <div className="lg:hidden w-full grid grid-cols-2 gap-4 border-t border-slate-100 pt-10">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1.5 mb-1">
                  <Shield size={12} className="text-[#0070F3]" />
                  <p className="text-[#0070F3] font-bold text-[10px] uppercase tracking-widest">Precision</p>
                </div>
                <p className="text-[#0A192F] text-4xl font-black tabular-nums leading-none">
                  {/* Updated Value for Mobile */}
                  <AnimatedCounter target={99.7} suffix="%" />
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center border-l border-slate-50">
              <div className="flex flex-col items-center text-center px-2">
                <div className="flex items-center gap-1.5 mb-1">
                  <Tag size={12} className="text-[#0070F3]" />
                  <p className="text-[#0070F3] font-bold text-[10px] uppercase tracking-widest">Best Value</p>
                </div>
                <p className="text-[#0A192F] text-2xl font-black tabular-nums leading-none">
                  $319 <span className="text-[10px] text-slate-400">/ 1M</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Bento Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative bg-white/40 backdrop-blur-3xl rounded-[48px] p-12 border border-white/60 shadow-[0_32px_64px_-16px_rgba(0,112,243,0.15)]">
            <div className="flex flex-col gap-12">
              
              <div className="flex justify-between items-end border-b border-slate-100 pb-8">
                <div className="space-y-1">
                  <p className="text-[#0070F3] font-bold tracking-[0.2em] text-[10px] uppercase font-inter">Precision Engine</p>
                  <h3 className="text-[#0A192F] text-6xl font-black tracking-tighter font-inter">
                    {/* Updated Value for Desktop Bento Card */}
                    <AnimatedCounter target={99.7} suffix="%" />
                  </h3>
                </div>
                <p className="text-slate-400 font-bold text-xs pb-2 font-inter tracking-widest uppercase">Accuracy</p>
              </div>

              <div className="flex justify-between items-end border-b border-slate-100 pb-8">
                <div className="space-y-2">
                  <p className="text-[#0070F3] font-bold tracking-[0.2em] text-[10px] uppercase font-inter">Global Pricing</p>
                  <div className="flex flex-col">
                    <h3 className="text-[#0A192F] text-5xl font-black tracking-tighter font-inter">
                      $319 <span className="text-xl text-slate-400 font-medium">per 1M</span>
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                       <RefreshCw size={14} className="text-emerald-500 animate-[spin_3s_linear_infinite]" />
                       <p className="text-[#0A192F] font-bold text-sm">3 Month Credit Rollover</p>
                    </div>
                  </div>
                </div>
                <p className="text-slate-400 font-bold text-xs pb-2 font-inter tracking-widest uppercase">Value</p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-center">
                    <p className="text-[#0A192F] font-black text-xl font-inter tracking-tight">Real-time Verification</p>
                    <span className="text-[#0070F3] font-mono font-bold text-lg">{Math.round(progress)}%</span>
                </div>
                <div className="w-full h-5 bg-slate-100 rounded-full overflow-hidden p-1 shadow-inner border border-white/50">
                  <motion.div
                    className="h-full bg-[#0070F3] rounded-full"
                    animate={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -right-4 flex items-center justify-center z-20"
          >
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50">
              <Mail className="w-10 h-10 text-[#0070F3]" strokeWidth={1.5} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}