"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "The Physics of SMTP: Why your emails bounce",
    excerpt: "Deep dive into the handshake process and how server-level latencies affect your deliverability scores.",
    author: "Eng_Lead",
    date: "MAR 24, 2026",
    readTime: "6 min",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Catch-all Domains: The Silent ROI Killer",
    excerpt: "Identifying and segmenting risky domains that pass standard validation but fail at the point of delivery.",
    author: "Data_Audit",
    date: "MAR 18, 2026",
    readTime: "4 min",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "SOC2 Compliance in Email Infrastructure",
    excerpt: "How we architecture data handling to meet the most rigorous enterprise security requirements.",
    author: "Sec_Ops",
    date: "MAR 10, 2026",
    readTime: "8 min",
    category: "Security",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  }
];

export function Blog() {
  return (
    <section className="bg-[#0A192F] py-32 px-6 font-inter relative overflow-hidden">
      {/* Background Technical Watermark */}
      <div className="absolute top-20 right-10 opacity-[0.02] font-mono text-[120px] font-black select-none pointer-events-none uppercase">
        Knowledge_Base
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-12 gap-8">
          <div className="max-w-2xl">
            <p className="text-[#0070F3] font-mono text-[10px] mb-4 tracking-[0.4em] uppercase font-bold">
              // ENGINEERING_REPORTS
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Inside the <span className="text-slate-500 italic">Machine</span>
            </h1>
          </div>
          <div className="flex gap-4">
             <div className="h-12 w-[1px] bg-white/10 hidden md:block" />
             <p className="text-slate-400 text-xs font-mono max-w-[200px] text-right uppercase tracking-widest leading-relaxed">
               Documentation and insights from the front lines of deliverability.
             </p>
          </div>
        </div>

        {/* Featured Post / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#112240] border border-white/10 rounded-sm mb-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#0070F3] text-white font-mono text-[9px] font-bold px-2 py-1 uppercase tracking-widest">
                  {post.category}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-500 font-mono text-[9px] uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#0070F3] transition-colors leading-tight">
                  {post.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 font-medium">
                  {post.excerpt}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-white/5">
                   <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center">
                        <User size={10} className="text-slate-400" />
                      </div>
                      <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">{post.author}</span>
                   </div>
                   <ArrowRight size={16} className="text-slate-700 group-hover:text-[#0070F3] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}