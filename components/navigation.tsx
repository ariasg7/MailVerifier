"use client";

import Link from "next/link";
import { Shield, Terminal, Activity, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Features", "Steps", "Pricing", "FAQ"];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0A192F] md:bg-[#0A192F]/90 backdrop-blur-xl border-b border-white/10 z-[999] font-inter">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-[1001]">
        
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-400 hover:text-white transition-all text-[11px] font-black uppercase tracking-widest flex items-center gap-1.5 group"
            >
              <span className="text-[#0070F3] opacity-0 group-hover:opacity-100 transition-opacity font-mono">&gt;</span>
              {item}
            </Link>
          ))}
        </div>

        {/* Action Section (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 px-4 py-2 border-l border-white/5 font-mono text-[9px] text-slate-500 uppercase">
            <Activity size={12} className="text-emerald-500 animate-pulse" />
            Node: US-EAST-1
          </div>
          <Link
            href="/authentication"
            className="bg-[#0070F3] text-white px-6 py-2.5 hover:bg-white hover:text-[#0A192F] transition-all text-xs font-black uppercase tracking-widest rounded-sm flex items-center gap-2 group"
          >
            <Terminal size={14} className="group-hover:animate-bounce" />
            Initialize Free
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#0A192F] z-[1000] md:hidden flex flex-col pt-28 px-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-3xl font-black uppercase tracking-tighter py-4 border-b border-white/5 flex justify-between items-center"
                >
                  {item}
                  <span className="text-[#0070F3] text-xl">&gt;</span>
                </Link>
              ))}
              
              <div className="mt-8 space-y-6">
                <Link
                  href="/authentication"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#0070F3] text-white w-full py-5 flex items-center justify-center gap-3 text-sm font-black uppercase tracking-widest rounded-sm"
                >
                  <Terminal size={18} />
                  Initialize Free
                </Link>
                
                <div className="flex items-center justify-center gap-2 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                  <Activity size={14} className="text-emerald-500 animate-pulse" />
                  System Node: US-EAST-1
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}