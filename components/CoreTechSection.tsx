"use client";

import { Calendar, Workflow, Search, Zap, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function CoreTechSection() {
  const features = [
    {
      icon: Search,
      title: "High-accuracy verification.",
      body: "Identify unreachable addresses in milliseconds with our multi-layer SMTP handshake check. We don't just guess; we verify.",
      size: "md:col-span-2", // This makes the tech-heavy card larger
      accent: "from-blue-500/20 to-cyan-500/5"
    },
    {
      icon: Calendar,
      title: "Credit Rollover.",
      body: "Unused credits carry forward. No waste, just fair value.",
      size: "md:col-span-1",
      accent: "from-purple-500/20 to-blue-500/5"
    },
    {
      icon: Workflow,
      title: "Built for Cold Outreach.",
      body: "Designed for high-volume agencies running outbound daily.",
      size: "md:col-span-1",
      accent: "from-emerald-500/20 to-teal-500/5"
    },
    {
      icon: Zap,
      title: "Lightspeed API.",
      body: "Integrate directly into your stack with 200ms response times.",
      size: "md:col-span-2",
      accent: "from-[#0070F3]/20 to-transparent"
    }
  ];

  return (
    <section id="features" className="py-32 px-6 bg-[#0A192F] relative overflow-hidden">
      {/* 1. Animated Tech Grid Background */}
      <div className="absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'00 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0 L30 60 M0 30 L60 30\' fill=\'none\' stroke=\'%230070F3\' stroke-width=\'1\'/%3E%3C/svg%3E")' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.p className="text-[#0070F3] mb-4 uppercase tracking-[0.3em] font-bold text-xs">
              System Architecture
            </motion.p>
            <h2 className="text-white text-5xl font-black tracking-tighter">
              Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Deliverability.</span>
            </h2>
          </div>
          <div className="text-slate-400 font-mono text-sm border-l border-white/10 pl-6 hidden md:block">
            // STATUS: OPTIMIZED <br />
            // LATENCY: 14MS
          </div>
        </div>

        {/* 2. Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden bg-[#112240] border border-white/5 rounded-[32px] p-8 transition-all duration-500 ${feature.size}`}
            >
              {/* Animated Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#0070F3]/50 group-hover:bg-[#0070F3]/10 transition-all">
                  <feature.icon className="w-6 h-6 text-[#0070F3]" />
                </div>
                <h3 className="text-white text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {feature.body}
                </p>
              </div>

              {/* Decorative "Handshake" line for the tech-heavy card */}
              {feature.size.includes("col-span-2") && (
                <div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                  <CheckCircle className="w-32 h-32 text-white" strokeWidth={0.5} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}