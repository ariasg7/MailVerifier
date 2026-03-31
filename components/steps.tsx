"use client";

import { Upload, Sparkles, BarChart3, Download, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export function Steps() {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload List",
      description: "Securely import via CSV, TXT, or direct API integration.",
    },
    {
      number: "02",
      icon: Sparkles,
      title: "Deep Clean",
      description: "AI-driven syntax validation and real-time server handshakes.",
    },
    {
      number: "03",
      icon: BarChart3,
      title: "Analyze",
      description: "Instant categorization of Safe, Catch-all, and Risky leads.",
    },
    {
      number: "04",
      icon: Download,
      title: "Export & Send",
      description: "One-click download or sync directly to your CRM/ESP.",
    },
  ];

  return (
    <section id="how-it-works" className="py-32 px-6 bg-white relative overflow-hidden font-inter">
      {/* Background Technical Watermark */}
      <div className="absolute top-10 left-10 opacity-[0.02] font-mono text-[150px] font-black select-none pointer-events-none">
        PROCESS_v4
      </div>

      <div className="max-w-7xl mx-auto relative">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-12">
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#0070F3] font-mono text-[10px] uppercase tracking-[0.4em] font-bold mb-4"
            >
              // OPERATIONAL_FLOW
            </motion.p>
            <h2 className="text-5xl font-black text-[#0A192F] tracking-tighter uppercase">
              Sequential <span className="text-slate-400">Audit.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg max-w-xs leading-tight">
            Our multi-layer verification engine executes in four distinct phases.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Progress Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[5%] right-[5%] h-[1px] bg-slate-100">
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="h-full bg-[#0070F3] relative"
            >
              {/* Glowing lead tip */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#0070F3] rounded-full shadow-[0_0_15px_#0070F3]" />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                  className="relative group"
                >
                  {/* Step Number Card */}
                  <div className="mb-8 relative inline-block">
                    <motion.div 
                      // This creates the "Highlight" effect as it comes into view
                      initial={{ scale: 1, borderColor: "#f1f5f9" }}
                      whileInView={{ 
                        scale: [1, 1.05, 1],
                        borderColor: ["#f1f5f9", "#0070F3", "#0070F3"],
                        boxShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 20px rgba(0,112,243,0.2)", "0 0 0px rgba(0,0,0,0)"]
                      }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.3) + 0.5, duration: 0.8 }}
                      className="w-20 h-20 bg-white border border-slate-200 flex items-center justify-center relative group-hover:border-[#0070F3] transition-colors"
                    >
                      <span className="text-2xl font-black text-[#0A192F] group-hover:text-[#0070F3] transition-colors">
                        {step.number}
                      </span>
                      
                      {/* Technical Corner Notches */}
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-300" />
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-300" />
                    </motion.div>
                  </div>

                  {/* Content Area */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#0A192F] rounded-sm">
                        <Icon size={16} className="text-[#0070F3]" />
                      </div>
                      <h3 className="text-sm font-black uppercase tracking-widest text-[#0A192F]">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-500 text-[13px] leading-relaxed font-medium border-l border-slate-100 pl-4 group-hover:border-[#0070F3] transition-colors">
                      {step.description}
                    </p>
                    
                    {/* Status Indicator */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: (index * 0.3) + 0.8 }}
                      className="flex items-center gap-2 pt-2"
                    >
                      <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-tighter">Ready_to_execute</span>
                    </motion.div>
                  </div>

                  {/* Desktop Divider (Chevron) */}
                  {index !== steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-4 text-slate-100">
                      <ChevronRight size={16} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}