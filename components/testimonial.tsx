"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah J.",
    role: "Sales Ops Lead",
    text: "MailVerifier reduced our bounce rates to near zero in weeks. Game changer.",
    avatar: "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Mark D.",
    role: "CEO @ DemandDrive",
    text: "Best accuracy and API uptime we've found at this scale. We verify 3M+ monthly.",
    avatar: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Alex L.",
    role: "Marketing Director",
    text: "Stopped wasting budget on dead leads. Automated workflows save us hours daily.",
    avatar: "https://images.unsplash.com/photo-1666113604293-d34734339acb?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "James K.",
    role: "Growth Head",
    text: "The SMTP handshake check is noticeably more accurate than NeverBounce.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
];

// We double the array to create the infinite loop effect
const doubleTestimonials = [...testimonials, ...testimonials];

export function Testimonial() {
  return (
    <section className="py-24 bg-[#0A192F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter mb-4">
          Trusted by <span className="text-[#0070F3]">Outreach Pros.</span>
        </h2>
        <p className="text-slate-400">Join 500+ agencies scaling with confidence.</p>
      </div>

      {/* The Scrolling Container */}
      <div className="relative flex overflow-hidden py-10">
        {/* Left & Right Fades (Makes it look like it vanishes into the edges) */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A192F] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A192F] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 flex-nowrap"
          animate={{
            x: ["0%", "-50%"], // Scroll halfway (the duplicated part)
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, // Adjust speed here (higher = slower)
              ease: "linear",
            },
          }}
        >
          {doubleTestimonials.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[350px] md:w-[450px] bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-[32px] hover:border-[#0070F3]/50 transition-colors group"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#0070F3] text-[#0070F3]" />
                ))}
              </div>
              
              <Quote className="text-white/10 mb-4" size={32} />
              
              <p className="text-white text-lg font-medium leading-relaxed mb-8 font-inter">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all"
                />
                <div className="text-left">
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}