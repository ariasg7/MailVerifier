"use client";

import Link from "next/link";
import { Shield, Terminal, Activity } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0A192F]/90 backdrop-blur-xl border-b border-white/10 z-[100] font-inter">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-[#0070F3] p-1.5 rounded-sm">
            <Shield className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-lg tracking-tighter uppercase leading-none">
              MailVerifier<span className="text-[#0070F3]">.net</span>
            </span>
            <span className="text-[8px] font-mono text-slate-500 uppercase tracking-[0.2em] mt-1">
              // SYS_AUTH_ACTIVE
            </span>
          </div>
        </Link>

        {/* Navigation Links - Monospace Style */}
        <div className="hidden md:flex items-center gap-10">
          {["Features", "Steps", "Pricing", "FAQ"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-400 hover:text-white transition-all text-[11px] font-black uppercase tracking-widest flex items-center gap-1.5 group"
            >
              <span className="text-[#0070F3] opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                &gt;
              </span>
              {item}
            </Link>
          ))}
        </div>

        {/* Action Section */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 px-4 py-2 border-l border-white/5 font-mono text-[9px] text-slate-500 uppercase">
            <Activity size={12} className="text-emerald-500 animate-pulse" />
            Node: US-EAST-1
          </div>
          
          <Link
            href="/signup"
            className="bg-[#0070F3] text-white px-6 py-2.5 hover:bg-white hover:text-[#0A192F] transition-all text-xs font-black uppercase tracking-widest rounded-sm flex items-center gap-2 group"
          >
            <Terminal size={14} className="group-hover:animate-bounce" />
            Initialize Free
          </Link>
        </div>
      </div>
    </nav>
  );
}