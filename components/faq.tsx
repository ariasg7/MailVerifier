"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What happens to my unused email verifications? Do they roll over?",
    answer: "Yes! Your unused verifications never go to waste. We automatically roll over your credits each month, so you always have up to three months' worth of your plan available to use. Most email verification services force you into a use-it-or-lose-it model where credits disappear at the end of the month. We don't think that's fair. With us, if your plan includes 100,000 verifications per month, you can build up to 300,000 credits in your account and use them whenever you need them. Verify on your schedule, not ours.",
  },
  {
    question: "How accurate is your email verification tool, and how do you test it?",
    answer: "Our email verification tool delivers 99%+ accuracy across all major email providers. We run every address through a multi-step process that includes syntax checking, domain and MX record validation, mailbox-level verification, and catch-all address detection. We continuously test our accuracy against live datasets of known-valid and known-invalid email addresses and benchmark our results against industry standards on a weekly basis. We also monitor deliverability outcomes from real-world sends to make sure our results hold up where it matters most: your inbox placement rate.",
  },
  {
    question: "How fast is your email validation tool compared to others on the market?",
    answer: "We process around 200,000 emails per hour, putting us among the fastest email verification tools on the market. But speed is only part of the story. Where we really stand out is delivering that performance at a price point that most competitors can't match without sacrificing accuracy. Our proprietary validation model is built from the ground up for both speed and precision, so you're not choosing between a fast tool and an accurate one. Whether you're verifying a list of 500 or 5 million, you get results back quickly, with 99%+ accuracy, at a cost that makes sense for your business.",
  },
  {
    question: "What is email validation, and why does my business need it?",
    answer: "Our API is optimized for low latency, typically returning a full validation payload in under 200ms. Check our technical documentation for the Node.js and Python SDKs.",
  },
  {
    question: "Can I verify my email list in bulk?",
    answer: "Bulk verification is what we're built for. Our entire platform is designed around processing large lists quickly and accurately. Upload your list as a CSV or TXT file, and our system will validate every address and return a clear status for each one: valid, invalid, risky, or unknown. Whether you're cleaning a database of 100,000 contacts before a campaign, onboarding a new client's list at your agency, or running regular hygiene across millions of records, our tool handles it without slowing down. That's where we make the most sense. If you're working at volume, we built this for you.",
  },
  {
    question: "Do you offer an email validation API?",
    answer: "Yes. Our email validation API lets you integrate real-time email verification directly into your applications, signup forms, CRM, or any custom workflow. The API supports both single-address lookups and batch processing, returns detailed response codes for each result, and is built for low-latency, high-volume use. We provide complete documentation, code samples in all major languages, and dedicated developer support to help you get up and running quickly. You can explore the full API documentation and get started at mailverifier.net/docs.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-[#0A192F] font-inter relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0070F3]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#0070F3] font-mono text-[10px] uppercase tracking-[0.4em] font-bold mb-4"
          >
            // KNOWLEDGE_BASE_v1.0
          </motion.p>
          <h2 className="text-5xl font-black text-white tracking-tighter uppercase">
            Common <span className="text-slate-500 text-outline">Queries.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`border border-white/5 transition-all duration-300 ${
                  isOpen ? "bg-white/5 border-[#0070F3]/30" : "bg-[#112240]/40"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[#0070F3] text-xs">0{index + 1}</span>
                    <span className="text-white font-bold text-lg tracking-tight uppercase">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1 rounded-sm border ${isOpen ? "border-[#0070F3] bg-[#0070F3]" : "border-slate-700"}`}>
                    {isOpen ? <Minus size={14} className="text-white" /> : <Plus size={14} className="text-slate-400" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 ml-10 border-l border-[#0070F3]/20">
                        <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                        <div className="mt-4 flex items-center gap-2">
                          <div className="w-1 h-1 bg-[#0070F3] rounded-full animate-pulse" />
                          <span className="font-mono text-[8px] text-slate-500 uppercase tracking-widest">End_of_Response</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-16 p-8 border border-white/5 bg-[#112240]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <HelpCircle className="text-[#0070F3]" size={32} />
            <div>
              <p className="text-white font-black uppercase text-xs tracking-widest">Still have questions?</p>
              <p className="text-slate-500 text-[11px] font-mono mt-1">Direct access to engineering available 24/7</p>
            </div>
          </div>
          <button className="bg-[#0070F3] text-white px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#0A192F] transition-all rounded-sm">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}