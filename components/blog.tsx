"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { useRouter } from "next/navigation";

const posts = [
  {
    id: 1,
    slug: "physics-of-smtp",
    title: "The Physics of SMTP: Why your emails bounce",
    excerpt: "Deep dive into the handshake process and how server-level latencies affect your deliverability scores.",
    author: "Eng_Lead",
    date: "MAR 24, 2026",
    readTime: "6 min",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    link: "/blog_page"
  },
  {
    id: 2,
    slug: "catch-all-domains",
    title: "Catch-all Domains: The Silent ROI Killer",
    excerpt: "Identifying and segmenting risky domains that pass standard validation but fail at the point of delivery.",
    author: "Data_Audit",
    date: "MAR 18, 2026",
    readTime: "4 min",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800",
    link: "/blog_page"
  },
  {
    id: 3,
    slug: "soc2-compliance",
    title: "SOC2 Compliance in Email Infrastructure",
    excerpt: "How we architecture data handling to meet the most rigorous enterprise security requirements.",
    author: "Sec_Ops",
    date: "MAR 10, 2026",
    readTime: "8 min",
    category: "Security",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    link: "/blog_page"
  },
  {
    id: 4,
    slug: "zerobounce-alternative",
    title: "MailVerifier vs ZeroBounce",
    excerpt: "A benchmark study on verification speed and credit cost efficiency for high-volume enterprise senders.",
    author: "Growth_Lead",
    date: "APR 02, 2026",
    readTime: "7 min",
    category: "Comparison",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    link: "/blog_page"
  },
  {
    id: 5,
    slug: "neverbounce-alternative",
    title: "MailVerifier vs NeverBounce",
    excerpt: "Why modern sales teams are migrating toward real-time API validation over legacy batch processing.",
    author: "API_Architect",
    date: "MAR 29, 2026",
    readTime: "5 min",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800",
    link: "/blog_page"
  },
  {
    id: 6,
    slug: "millionverifier-alternative",
    title: "MailVerifier vs MillionVerifier",
    excerpt: "Analyzing the delta in accuracy when processing millions of records under aggressive deadlines.",
    author: "Data_Scientist",
    date: "APR 12, 2026",
    readTime: "9 min",
    category: "Scale",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    link: "/blog_page"
  },
  {
    id: 7,
    slug: "omniverifier-alternative",
    title: "MailVerifier vs OmniVerifier",
    excerpt: "Breaking down infrastructure costs: How native cloud architecture reduces verification overhead.",
    author: "Cloud_Ops",
    date: "MAR 05, 2026",
    readTime: "6 min",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    link: "/blog_page"
  },
  {
    id: 8,
    slug: "emaillistverify-alternative",
    title: "MailVerifier vs EmailListVerify",
    excerpt: "Protecting your sender reputation: A side-by-side look at false-positive rates in bulk cleaning.",
    author: "Sec_Analyst",
    date: "APR 15, 2026",
    readTime: "4 min",
    category: "Security",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800",
    link: "/blog_page"
  },
  {
    id: 9,
    slug: "hunter-alternative",
    title: "MailVerifier vs Hunter",
    excerpt: "Finding vs. Verifying: Why specialized validation engines outperform general-purpose discovery tools.",
    author: "SDR_Manager",
    date: "FEB 28, 2026",
    readTime: "10 min",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    link: "/blog_page"
  },
  {
    id: 10,
    slug: "clearout-alternative",
    title: "MailVerifier vs Clearout",
    excerpt: "Exploring the technical requirements for low-latency SMTP handshakes in global verification nodes.",
    author: "Backend_Dev",
    date: "MAR 22, 2026",
    readTime: "5 min",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    link: "/blog_page"
  },
  {
    id: 11,
    slug: "emailhippo-alternative",
    title: "MailVerifier vs EmailHippo",
    excerpt: "Enterprise-grade data sovereignty: Comparing data retention policies and encryption standards.",
    author: "Compliance_Lead",
    date: "APR 08, 2026",
    readTime: "8 min",
    category: "Enterprise",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800",
    link: "/blog_page"
  }
];

export function Blog() {
  const router = useRouter();

  return (
    <section className="bg-[#0A192F] py-32 px-6 font-inter relative overflow-hidden">
      <div className="absolute top-20 right-10 opacity-[0.02] font-mono text-[120px] font-black select-none pointer-events-none uppercase">
        Knowledge_Base
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-12 gap-8">
          <div className="max-w-2xl">
            <p className="text-[#0070F3] font-mono text-[10px] mb-4 tracking-[0.4em] uppercase font-bold">
              // ENGINEERING_REPORTS
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Inside the <span className="text-slate-500 italic">Machine</span>
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-[#112240]/30 border border-white/5 p-6 rounded-sm hover:border-[#0070F3]/50 transition-colors cursor-pointer"
              onClick={() => router.push(post.link)} // Added click handler to the whole card for better UX
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#112240] rounded-sm mb-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#0070F3] text-white font-mono text-[9px] font-bold px-2 py-1 uppercase tracking-widest">
                  {post.category}
                </div>
              </div>

              <div className="flex-grow space-y-4">
                <div className="flex items-center gap-4 text-slate-500 font-mono text-[9px] uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white leading-tight">{post.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 font-medium">{post.excerpt}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center">
                    <User size={10} className="text-slate-400" />
                  </div>
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">{post.author}</span>
                </div>

                <button 
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents double routing since parent div also handles it
                      router.push(post.link);
                    }}
                    className="w-full py-4 bg-[#0070F3] hover:bg-blue-600 text-white font-mono text-[11px] font-black uppercase tracking-[0.25em] flex items-center justify-center gap-3 transition-all rounded-sm"
                    >
                    Read Full Report
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}