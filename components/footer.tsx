"use client";

import { Shield, ArrowUpRight, Cpu, Globe, Terminal } from "lucide-react";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0A192F] border-t-[4px] border-[#0070F3] font-inter text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Top Section: Brand & Status */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 pb-12 border-b border-white/5 gap-8">
          <div className="flex items-center">
            {/* 1. Only the Full Horizontal Logo - Increased size for brand authority */}
            <img 
              src="/img/logo/MailVerifier_Horizontal.png" 
              alt="MailVerifier" 
              className="h-9 md:h-20 w-auto object-contain brightness-125 contrast-110"
            />
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-blue-300 uppercase tracking-widest">
              <Cpu size={14} className="text-[#0070F3]" /> API_v4.1_LIVE
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-blue-300 uppercase tracking-widest border-l border-white/5 pl-6 hidden md:flex">
              <Globe size={14} className="text-[#0070F3]" /> Global_Nodes: 12
            </div>
          </div>
        </div>

        {/* Main Grid: Industrial Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          {/* Product Links */}
          <div className="col-span-1">
            <h3 className="text-white font-mono text-[11px] font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <Terminal size={12} className="text-[#0070F3]" /> Product
            </h3>
            <ul className="space-y-3">
              {["Features", "Process", "Benefits", "Pricing"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-blue-200 hover:text-[#0070F3] text-sm font-medium transition-colors flex items-center gap-1 group">
                    {item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-span-1">
            <h3 className="text-white font-mono text-[11px] font-black uppercase tracking-[0.2em] mb-6">
              Legal_Docs
            </h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "SLA"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-200 hover:text-[#0070F3] text-sm font-medium transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h3 className="text-white font-mono text-[11px] font-black uppercase tracking-[0.2em] mb-6">
              Connect
            </h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#0070F3] hover:border-[#0070F3] transition-all rounded-sm group">
                <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#0070F3] hover:border-[#0070F3] transition-all rounded-sm group">
                <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" /></svg>
              </a>
            </div>
          </div>

          {/* Support CTA */}
          <div className="col-span-2 lg:col-span-2">
            <div className="bg-[#0070F3] p-7 rounded-sm border-l-[6px] border-white/20 shadow-[0_0_50px_rgba(0,112,243,0.2)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity" />
              <h3 className="text-white font-black text-sm uppercase mb-3 tracking-wider">Technical Support</h3>
              <p className="text-blue-100 text-xs leading-relaxed mb-5 font-medium">
                Our engineering team is available 24/7 for integration assistance and deliverability audits.
              </p>
              <a href="mailto:support@mailverifier.net" className="text-white font-black text-sm hover:underline hover:text-blue-150 transition-colors bg-[#0A192F]/20 px-4 py-2 rounded-sm inline-block">
                support@mailverifier.net
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em]">
            © 2026 MailVerifier.net // ALL_RIGHTS_RESERVED
          </p>
          <button 
            onClick={scrollToTop}
            className="text-slate-400 hover:text-white font-mono text-[10px] uppercase tracking-widest flex items-center gap-2 transition-colors py-1 px-3 border border-white/5 hover:border-white/20 rounded-full"
          >
            Back to top [↑]
          </button>
        </div>
      </div>
    </footer>
  );
}