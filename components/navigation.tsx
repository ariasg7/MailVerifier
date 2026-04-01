"use client";

import Link from "next/link";
import { Terminal, Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Features", "How It Works", "Pricing", "Blog", "FAQ"];

  const getHref = (item: string) => {
    const slug = item.toLowerCase().replace(/\s+/g, "-");
    if (item === "FAQ") return "/faq";
    if (item === "Blog") return "/blog";
    return `/#${slug}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0A192F] md:bg-[#0A192F]/90 backdrop-blur-xl border-b border-white/10 z-[999] font-inter">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-[1001]">
        
        {/* LOGO SECTION - Increased size for Brand Authority */}
        <Link href="/" className="flex items-center group py-2">
           <img 
             src="/img/logo/MailVerifier_Horizontal.png" 
             alt="MailVerifier Logo" 
             className="h-10 md:h-14 w-auto object-contain brightness-110 group-hover:scale-[1.03] transition-transform duration-300"
           />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item}
              href={getHref(item)}
              className="text-slate-400 hover:text-white transition-all text-[11px] font-black uppercase tracking-widest flex items-center gap-1.5 group"
            >
              <span className="text-[#0070F3] opacity-0 group-hover:opacity-100 transition-opacity font-mono">&gt;</span>
              {item}
            </Link>
          ))}
        </div>

        {/* Action Section */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/authentication" 
            className="text-slate-400 hover:text-white font-mono text-[11px] uppercase tracking-[0.2em] transition-colors"
          >
            Login
          </Link>

          <Link
            href="/authentication"
            className="bg-[#0070F3] text-white px-6 py-2.5 hover:bg-white hover:text-[#0A192F] hover:shadow-[0_0_20px_rgba(0,112,243,0.4)] transition-all text-xs font-black uppercase tracking-widest rounded-sm flex items-center gap-2 group"
          >
            <Terminal size={14} className="group-hover:rotate-12 transition-transform" />
            Sign Up Free
            <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-[#0A192F] z-[1000] md:hidden flex flex-col pt-28 px-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={getHref(item)}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-3xl font-black uppercase tracking-tighter py-4 border-b border-white/5 flex justify-between items-center"
                >
                  {item}
                  <span className="text-[#0070F3] text-xl">&gt;</span>
                </Link>
              ))}
              
              <div className="mt-8 space-y-4">
                <Link
                  href="/authentication"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#0070F3] text-white w-full py-5 flex items-center justify-center gap-3 text-sm font-black uppercase tracking-widest rounded-sm"
                >
                  Sign Up Free
                  <ArrowRight size={18} />
                </Link>
                
                <Link
                  href="/authentication"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 flex items-center justify-center text-slate-400 font-mono text-xs uppercase tracking-widest"
                >
                  Already have an account? Login
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}