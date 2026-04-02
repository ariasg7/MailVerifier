"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah J.",
    role: "Agency Owner",
    text: "We were burning through inboxes and domains every month until we started verifying our lists. Way more cost-effective and better for us long term.",
    avatar: "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Mark D.",
    role: "Agency Director",
    text: "I was skeptical about switching from our old provider. First batch we ran caught tens of thousands of bad emails they missed. The accuracy is unmatched.",
    avatar: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Alex L.",
    role: "Agency Owner",
    text: "We used to lose 15% of our list to bounces every campaign. Since switching, our bounce rate dropped to under 2%. It's a fundamental part of our stack now.",
    avatar: "https://images.unsplash.com/photo-1666113604293-d34734339acb?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "James K.",
    role: "Outbound Marketing Lead",
    text: "Our deliverability was tanking and we couldn't figure out why. Turned out half our list was dead. Problem solved in one upload. Absolute lifesaver.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Elena R.",
    role: "Marketing Agency Founder",
    text: "We tried three other verification tools before this one. Nothing else came close on accuracy at this price. The sequential audit protocol is elite.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "David W.",
    role: "Marketing Operations Manager",
    text: "The credit rollover alone sold us. Every other tool we tried made us lose what we didn't use that month. Fair value, finally.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Jordan M.",
    role: "Agency Owner",
    text: "We run outbound for 30+ clients. This is the only tool that keeps up with our volume without breaking the budget. Scalability hasn't been an issue once.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Samantha T.",
    role: "Digital Marketing Consultant",
    text: "I recommend this to every client we onboard. Clean data is the foundation of everything we do. Without it, you're just sending into the void.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Marcus P.",
    role: "Cold Outreach Specialist",
    text: "We went from landing in spam to landing in primary. That's not a small thing when you're sending 500K emails a month. Huge ROI on the switch.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Isabella V.",
    role: "Growth Engineer",
    text: "The SMTP handshake check is noticeably more precise than industry standard tools. It catches catch-alls that others simply ignore.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
  }
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
            x: ["0%", "-50%"],
          }}
          /* This line pauses the animation when the user's mouse is over the carousel */
          whileHover={{ animationPlayState: "paused" }} 
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50, // Sweet spot for readability
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