"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ArrowRight, Terminal, Lock, Mail, User, Cpu } from "lucide-react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#0A192F] flex items-center justify-center px-6 py-24 relative overflow-hidden font-inter">
      {/* Background Technical Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full relative z-10"
      >
        {/* Branding/Status Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 mb-6">
            <Cpu size={12} className="text-[#0070F3] animate-pulse" />
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.2em]">
              Auth_Gateway_v4.1
            </span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tighter uppercase italic">
            {isLogin ? "Initialize_Session" : "Create_ID"}
          </h1>
        </div>

        {/* Auth Card */}
        <div className="bg-[#112240] border border-white/10 rounded-sm shadow-2xl relative">
          {/* Top Decorative Bar */}
          <div className="h-1 w-full bg-gradient-to-r from-[#0070F3] via-blue-400 to-transparent" />
          
          <div className="p-8">
            {/* Toggle Switch */}
            <div className="flex bg-[#0A192F] p-1 rounded-sm mb-8 border border-white/5">
              <button 
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${isLogin ? 'bg-[#0070F3] text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
              >
                Login
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${!isLogin ? 'bg-[#0070F3] text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
              >
                Register
              </button>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2"
                  >
                    <label className="font-mono text-[10px] text-slate-500 uppercase tracking-widest ml-1">Full_Name</label>
                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-[#0070F3] transition-colors" />
                      <input 
                        type="text" 
                        placeholder="Giani Arias" 
                        className="w-full bg-[#0A192F] border border-white/10 rounded-sm py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-[#0070F3] transition-all placeholder:text-slate-700"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <label className="font-mono text-[10px] text-slate-500 uppercase tracking-widest ml-1">Email_Address</label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-[#0070F3] transition-colors" />
                  <input 
                    type="email" 
                    placeholder="operator@domain.com" 
                    className="w-full bg-[#0A192F] border border-white/10 rounded-sm py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-[#0070F3] transition-all placeholder:text-slate-700"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="font-mono text-[10px] text-slate-500 uppercase tracking-widest ml-1">Access_Key</label>
                  {isLogin && (
                    <button className="text-[9px] text-[#0070F3] font-bold uppercase tracking-tighter hover:underline">Lost_Key?</button>
                  )}
                </div>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-[#0070F3] transition-colors" />
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full bg-[#0A192F] border border-white/10 rounded-sm py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-[#0070F3] transition-all placeholder:text-slate-700"
                  />
                </div>
              </div>

              <button className="w-full bg-[#0070F3] hover:bg-white hover:text-[#0A192F] text-white py-4 rounded-sm font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 group mt-8">
                <Terminal size={14} className="group-hover:animate-pulse" />
                {isLogin ? "Execute_Login" : "Authorize_Account"}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Social Auth Divider */}
            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/5"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase">
                <span className="bg-[#112240] px-4 text-slate-600 font-mono tracking-widest italic">Secondary_Protocol</span>
              </div>
            </div>

            <button className="w-full bg-transparent border border-white/10 hover:border-white/30 text-slate-300 py-3 rounded-sm font-bold text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-3">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google_SSO
            </button>
          </div>

          {/* Bottom Security Footer */}
          <div className="bg-[#0A192F]/50 p-4 border-t border-white/5 flex items-center justify-center gap-2">
            <Shield size={12} className="text-emerald-500" />
            <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">
              AES-256_Enforced // SOC2_COMPLIANT
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}