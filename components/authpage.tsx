"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Mail, User, ChevronRight } from "lucide-react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A192F] flex flex-col items-center justify-center px-6 py-24 font-inter relative overflow-hidden">
      {/* Background Technical Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

    {/* --- PART 1: TOP HEADING --- */}
    <div className="text-center mb-12 z-10">
      <p className="text-[#94A3B8] text-sm font-medium mb-3 tracking-tight">
        Start for free
      </p>
      <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
        Create your Mail<span className="text-[#0070F3]">Verifier</span>.net account
      </h1>
      <p className="text-[#94A3B8] text-sm font-medium mt-3 tracking-tight">
        No credit card required.
      </p>
    </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full relative z-10"
      >
        {/* --- PART 2 & 3: THE WHITE CARD --- */}
        <div className="bg-white rounded-2xl shadow-2xl w-full p-10 overflow-hidden relative">
          
          {/* Bento-style background accent inside the card */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#0070F3]/5 rounded-full blur-[90px] pointer-events-none" />

          {/* Logo Branding - FIX: Added a darker 'spotlight' so the white 'Mail' text is visible */}
          <div className="flex justify-center mb-10 relative">
             <div className="absolute inset-0 w-32 h-20 bg-slate-900/10 rounded-full blur-2xl left-1/2 -translate-x-1/2 -top-4 pointer-events-none" />
             
             <img 
              src="/img/logo/MailVerifier_Horizontal.png" 
              alt="MailVerifier" 
              className="h-8 w-auto object-contain relative z-10 drop-shadow-sm" 
            />
          </div>

          {/* Card Internal Header */}
          <div className="text-center mb-8 relative z-10">
            <h2 className="text-2xl font-bold text-black mb-2">Create your account</h2>
            <p className="text-slate-500 text-sm">Welcome! Please fill in the details to get started.</p>
          </div>

          {/* Social SSO Buttons - FIX: Darkened hover border for visibility */}
          <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
            <button className="flex items-center justify-center gap-2.5 bg-white border border-slate-200 py-3 rounded-xl transition-all duration-300 shadow-sm hover:border-slate-400 hover:bg-slate-50 group">
              <img src="/img/sso/facebook.webp" alt="Facebook" className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
              <span className="text-sm font-semibold text-slate-700">Facebook</span>
            </button>
            <button className="flex items-center justify-center gap-2.5 bg-white border border-slate-200 py-3 rounded-xl transition-all duration-300 shadow-sm hover:border-slate-400 hover:bg-slate-50 group">
              <img src="/img/sso/google.webp" alt="Google" className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
              <span className="text-sm font-semibold text-slate-700">Google</span>
            </button>
          </div>

          <div className="relative my-8 z-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-[11px]">
              <span className="bg-white px-3 text-slate-400 font-mono tracking-wider">[OR]</span>
            </div>
          </div>

          <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1.5"
                >
                  <label className="text-sm font-bold text-black ml-1">Full name</label>
                  <div className="relative group">
                    <input 
                      type="text" 
                      placeholder="Enter your full name" 
                      // FIX: border-slate-200 to border-slate-300 for better visibility
                      className="w-full bg-white border border-slate-300 rounded-xl py-3.5 px-4 text-black text-sm focus:outline-none focus:border-[#0070F3] transition-all placeholder:text-slate-400"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-black ml-1">Email address</label>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-white border border-slate-300 rounded-xl py-3.5 px-4 text-black text-sm focus:outline-none focus:border-[#0070F3] transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-black ml-1">Password</label>
              </div>
              <div className="relative group">
                <input 
                  type="password" 
                  placeholder="Enter your password" 
                  className="w-full bg-white border border-slate-300 rounded-xl py-3.5 px-4 text-black text-sm focus:outline-none focus:border-[#0070F3] transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Main CTA - FIX: Added a visible border on hover to show clickability */}
            <button className="w-full bg-[#334155] text-white py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 transition-all duration-300 hover:bg-[#1e293b] hover:ring-2 hover:ring-slate-400 hover:shadow-2xl group mt-10">
              Continue
              <ChevronRight size={18} className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          {/* Bottom Link */}
          <div className="text-center mt-12 pt-8 border-t border-slate-100 relative z-10">
            <p className="text-sm text-slate-500 font-medium">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="font-bold text-black hover:underline"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>

        {/* Security Footer */}
        <div className="mt-8 text-center opacity-40">
          <p className="text-[#718096] text-[10px] font-mono tracking-widest uppercase">
            Secured by @clerk // SOC2_COMPLIANT
          </p>
        </div>
      </motion.div>
    </div>
  );
}