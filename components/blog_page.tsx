"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Share2, 
  Bookmark, 
  Clock, 
  Calendar, 
  User, 
  ShieldCheck, 
  Terminal,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

export default function BlogPostTemplate() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-white min-h-screen font-inter selection:bg-[#0070F3] selection:text-white">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#0070F3] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Hero Header */}
      <header className="pt-20 pb-16 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="bg-[#0070F3]/10 text-[#0070F3] font-mono text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full">
              Technical_Report
            </span>
            <span className="text-slate-300 font-mono text-[10px]">VER_2026.04</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#0A192F] text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-8"
          >
            The Physics of SMTP: Why your emails bounce.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-8 text-slate-400 font-mono text-[10px] uppercase tracking-[0.2em]"
          >
            <div className="flex items-center gap-2">
              <User size={14} className="text-[#0070F3]" />
              <span className="text-[#0A192F] font-bold">Auth: Eng_Lead</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span>MAR 24, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span>6 Min Read</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Article Content Area */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 py-20">
        
        {/* Main Content */}
        <article className="prose prose-slate prose-lg max-w-none prose-headings:text-[#0A192F] prose-headings:font-black prose-headings:tracking-tighter prose-strong:text-[#0A192F] prose-a:text-[#0070F3]">
          <p className="lead text-xl text-slate-500 font-medium leading-relaxed mb-12">
            Deep dive into the handshake process and how server-level latencies affect your deliverability scores. Understanding the underlying protocol is the difference between inbox placement and the spam folder.
          </p>

          <figure className="my-12">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
              alt="Server Room" 
              className="rounded-2xl shadow-2xl shadow-blue-500/10 border border-slate-100"
            />
            <figcaption className="text-center text-xs font-mono text-slate-400 mt-4 uppercase tracking-widest">
              Fig 1.0: Visualizing Packet Latency during SMTP Handshakes
            </figcaption>
          </figure>

          <h2>The Initial Handshake</h2>
          <p>
            The SMTP (Simple Mail Transfer Protocol) handshake is a series of commands sent between an email client and an email server. It's not just a digital "hello"; it's a rigorous identity check.
          </p>

          {/* Technical Inset */}
          <div className="bg-[#0A192F] rounded-2xl p-8 my-10 relative overflow-hidden group">
            <Terminal className="absolute top-4 right-4 text-white/10 group-hover:text-[#0070F3]/30 transition-colors" size={60} />
            <h4 className="text-[#0070F3] font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Terminal_Log: Raw_SMTP_Session
            </h4>
            <pre className="text-blue-100/80 font-mono text-sm leading-relaxed overflow-x-auto">
              <code>{`S: 220 smtp.mailverifier.io ESMTP Postfix
C: HELO relay.example.org
S: 250 Hello relay.example.org, pleased to meet you
C: MAIL FROM:<sender@example.org>
S: 250 2.1.0 Ok
C: RCPT TO:<recipient@verify.com>
S: 550 5.1.1 The email account that you tried to reach does not exist.`}</code>
            </pre>
          </div>

          <h2>Why Latency Kills Trust</h2>
          <p>
            When your server takes too long to respond to a HELO command, receiving mail servers interpret this as a sign of a poorly configured relay. <strong>Consistency is the currency of deliverability.</strong>
          </p>

          <div className="bg-slate-50 border-l-4 border-[#0070F3] p-6 my-10 rounded-r-xl">
            <p className="text-[#0A192F] font-bold m-0 flex items-center gap-2">
              <ShieldCheck className="text-[#0070F3]" size={20} />
              Engineering Note
            </p>
            <p className="text-slate-600 italic m-0 text-sm mt-2">
              Always monitor your Round Trip Time (RTT). Anything over 200ms during the handshake is a red flag for modern ISP filters.
            </p>
          </div>
        </article>

        {/* Sidebar Metadata */}
        <aside className="space-y-12">
          {/* Author Card */}
          <div className="border-t-2 border-[#0A192F] pt-6">
            <h5 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#0070F3] font-bold mb-4">Metadata_Inspector</h5>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                <User className="text-[#0A192F]" size={24} />
              </div>
              <div>
                <p className="text-[#0A192F] font-black text-sm uppercase">Eng_Lead</p>
                <p className="text-slate-400 text-[10px] font-mono">Infrastructure Dept.</p>
              </div>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              Specializing in low-latency SMTP protocols and distributed verification clusters.
            </p>
          </div>

          {/* Related Tags */}
          <div>
            <h5 className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold mb-4">Classifiers</h5>
            <div className="flex flex-wrap gap-2">
              {['SMTP', 'Deliverability', 'DevOps', 'Security'].map(tag => (
                <span key={tag} className="border border-slate-200 text-slate-500 font-mono text-[9px] px-2 py-1 rounded hover:border-[#0070F3] hover:text-[#0070F3] cursor-pointer transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-[#0A192F] p-8 rounded-3xl text-white">
            <h4 className="text-xl font-black tracking-tight mb-4 leading-tight">Ready to verify at scale?</h4>
            <p className="text-slate-400 text-xs leading-relaxed mb-6">
              Our infrastructure handles 250k handshakes per hour with 99.7% precision.
            </p>
            <button className="w-full bg-[#0070F3] py-4 rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 group">
              Start Building
              <ArrowLeft size={16} className="rotate-180 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}