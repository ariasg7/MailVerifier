"use client";

import { Target, ShieldCheck, TrendingUp, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Benefits() {
  const benefits = [
    {
      title: "Improve Engagement.",
      body: "Reach real inboxes and keep reply rates climbing by removing dead data.",
      icon: Target,
      color: "text-emerald-400",
      bg: "from-emerald-500/10 to-transparent",
    },
    {
      title: "Boost Deliverability.",
      body: "Protect your domain health. Lower bounces mean providers trust your IPs more.",
      icon: ShieldCheck,
      color: "text-[#0070F3]",
      bg: "from-blue-500/10 to-transparent",
    },
    {
      title: "Increase ROI.",
      body: "Stop paying your ESP for invalid leads. Spend less on waste and more on real conversations.",
      icon: TrendingUp,
      color: "text-purple-400",
      bg: "from-purple-500/10 to-transparent",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0A192F] relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-white text-5xl font-black font-inter tracking-tighter"
          >
            Why Choose <span className="text-[#0070F3]">OmniVerifier?</span>
          </motion.h2>
          <div className="h-1 w-20 bg-[#0070F3] mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/[0.03] backdrop-blur-xl p-1 rounded-[32px] border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                {/* Subtle Gradient Inlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]`} />

                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`p-4 rounded-2xl bg-white/5 border border-white/5 ${benefit.color} group-hover:scale-110 transition-transform duration-500`}>
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <ArrowUpRight className="text-white/10 group-hover:text-[#0070F3] transition-colors duration-500" size={24} />
                  </div>

                  <h3 className="text-white text-2xl font-bold mb-4 font-inter">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-400 text-lg leading-relaxed font-inter group-hover:text-slate-200 transition-colors">
                    {benefit.body}
                  </p>

                  {/* Decorative Progress Bar */}
                  <div className="mt-auto pt-8">
                    <div className="h-px w-full bg-white/5" />
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.5 + (index * 0.2) }}
                        className={`h-px bg-gradient-to-r ${benefit.bg.replace('/10', '/40')} to-transparent`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}