"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

type PricingTier = {
  credits: number;
  label: string;
  subscriptionPrice: number;
  onetimePrice: number;
};

const pricingTiers: PricingTier[] = [
  { credits: 10000, label: "10k", subscriptionPrice: 19, onetimePrice: 29 },
  { credits: 25000, label: "25k", subscriptionPrice: 39, onetimePrice: 59 },
  { credits: 50000, label: "50k", subscriptionPrice: 69, onetimePrice: 99 },
  { credits: 100000, label: "100k", subscriptionPrice: 149, onetimePrice: 199 },
  { credits: 500000, label: "500k", subscriptionPrice: 189, onetimePrice: 349 },
  { credits: 1000000, label: "1M", subscriptionPrice: 317, onetimePrice: 599 },
  { credits: 2000000, label: "2M+", subscriptionPrice: 599, onetimePrice: 1099 },
];

export function Pricing() {
  const [isSubscription, setIsSubscription] = useState(true);
  const [selectedTier, setSelectedTier] = useState(3); // Default to 100k
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const currentTier = pricingTiers[selectedTier];
  const currentPrice = isSubscription ? currentTier.subscriptionPrice : currentTier.onetimePrice;

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    const index = Math.round(percentage * (pricingTiers.length - 1));
    setSelectedTier(index);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) updateSliderPosition(e.clientX);
  }, [isDragging, updateSliderPosition]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <section id="pricing" className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#0A192F] tracking-tighter font-inter">
            Pricing
          </h2>
          <p className="text-slate-500 mt-4 font-inter">Best pricing on the market</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-[40px] p-8 md:p-12 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] relative overflow-hidden">
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16" />

          {/* Toggle Switch */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-slate-100 rounded-2xl p-1.5 border border-slate-200">
              <button
                onClick={() => setIsSubscription(true)}
                className={`px-8 py-3 rounded-xl transition-all duration-300 font-bold font-inter ${
                  isSubscription ? "bg-[#0A192F] text-white shadow-lg" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Subscription
              </button>
              <button
                onClick={() => setIsSubscription(false)}
                className={`px-8 py-3 rounded-xl transition-all duration-300 font-bold font-inter ${
                  !isSubscription ? "bg-[#0A192F] text-white shadow-lg" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                One-time
              </button>
            </div>
          </div>

          {/* Price Display */}
          <div className="text-center mb-16">
            <motion.div 
              key={`${selectedTier}-${isSubscription}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#0A192F] font-black font-inter text-7xl md:text-8xl tracking-tighter inline-flex items-baseline"
            >
              <span className="text-4xl md:text-5xl mr-1 text-slate-400 font-bold">$</span>
              {currentPrice}
              {isSubscription && (
                <span className="text-2xl md:text-3xl text-slate-400 ml-2 font-semibold">/mo</span>
              )}
            </motion.div>
            <p className="text-slate-500 font-mono mt-4 text-lg">
              {currentTier.label} high-accuracy verifications
            </p>
          </div>

          {/* Interactive Slider */}
          <div className="mb-20 px-2">
            <div
              ref={sliderRef}
              className="relative h-4 bg-slate-100 rounded-full cursor-pointer border border-slate-200"
              onClick={(e) => updateSliderPosition(e.clientX)}
            >
              {/* Active Track */}
              <div
                className="absolute h-full bg-gradient-to-r from-blue-600 to-[#0070F3] rounded-full transition-all duration-150"
                style={{ width: `${(selectedTier / (pricingTiers.length - 1)) * 100}%` }}
              />

              {/* Handle */}
              <div
                className="absolute top-1/2 w-10 h-10 bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,112,243,0.3)] border-2 border-[#0070F3] cursor-grab active:cursor-grabbing active:scale-95 transition-transform touch-none flex items-center justify-center"
                style={{
                  left: `${(selectedTier / (pricingTiers.length - 1)) * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                onMouseDown={() => setIsDragging(true)}
              >
                <div className="flex gap-0.5">
                    <div className="w-1 h-3 bg-blue-100 rounded-full" />
                    <div className="w-1 h-3 bg-blue-200 rounded-full" />
                    <div className="w-1 h-3 bg-blue-100 rounded-full" />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="flex justify-between mt-8">
              {pricingTiers.map((tier, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTier(index)}
                  className={`text-xs md:text-sm font-mono transition-all duration-300 ${
                    selectedTier === index ? "text-[#0070F3] font-bold scale-110" : "text-slate-300"
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>
          </div>

          {/* Features & CTA */}
          <div className="space-y-10">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "Fair Pricing", color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
                { label: "3-Month Rollover", color: "bg-blue-50 text-blue-700 border-blue-100" },
                { label: "High Accuracy", color: "bg-purple-50 text-purple-700 border-purple-100" }
              ].map((pill) => (
                <div key={pill.label} className={`border rounded-xl px-5 py-2.5 flex items-center gap-2 font-inter font-bold text-sm ${pill.color}`}>
                  <Check className="w-4 h-4" />
                  {pill.label}
                </div>
              ))}
            </div>

            <button className="w-full bg-[#0070F3] text-white rounded-2xl py-5 font-black text-xl font-inter hover:bg-[#0A192F] hover:shadow-2xl hover:shadow-blue-200 transition-all duration-300 transform active:scale-[0.98]">
              Get Started with {currentTier.label}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}