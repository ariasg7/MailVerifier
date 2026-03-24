"use client";

import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count === target ? target : count.toFixed(count < 100 ? 1 : 0)}
      {suffix}
    </span>
  );
}

export function Hero() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000;
    const steps = 100;
    const increment = 100 / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        setProgress(100);
        clearInterval(timer);
      } else {
        setProgress(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white px-6 pt-20">
      {/* Background Glowing Accents - This gives it that "modern" depth */}
      <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-[#0070F3]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] -right-[5%] w-[500px] h-[500px] bg-[#0A192F]/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Subtle Technical Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#0A192F 1px, transparent 1px), linear-gradient(90deg, #0A192F 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Massive Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[#0A192F] mb-8 font-inter tracking-tighter leading-[1.05]" style={{ fontSize: 'clamp(48px, 5vw, 84px)', fontWeight: 900 }}>
            Accuracy You <br/>
            <span className="text-[#0070F3]">Can Bank On.</span>
          </h1>
          <p className="text-slate-500 mb-10 max-w-lg font-inter text-xl leading-relaxed">
            Built for cold email teams verifying 100k–5M+ contacts monthly. Stop the bounces, save your sender reputation.
          </p>
          <div className="flex items-center gap-6">
            <button className="bg-[#0A192F] text-white rounded-2xl px-10 py-5 flex items-center gap-3 hover:bg-[#0070F3] hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group font-bold text-lg font-inter">
              Sign Up Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Right Side: Frosted Glass Panel (Matching your upload format) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main Card */}
          <div className="relative bg-white/40 backdrop-blur-3xl rounded-[48px] p-12 border border-white/60 shadow-[0_32px_64px_-16px_rgba(0,112,243,0.15)]">
            
            <div className="flex flex-col gap-12">
              
              {/* Metric 1 */}
              <div className="flex justify-between items-end border-b border-slate-100 pb-8">
                <div className="space-y-1">
                  <p className="text-[#0070F3] font-bold tracking-[0.2em] text-[10px] uppercase font-inter">Precision Engine</p>
                  <h3 className="text-[#0A192F] text-6xl font-black tracking-tighter font-inter">
                    <AnimatedCounter target={99.9} suffix="%" />
                  </h3>
                </div>
                <p className="text-slate-400 font-bold text-xs pb-2 font-inter tracking-widest">ACCURACY</p>
              </div>

              {/* Metric 2 */}
              <div className="flex justify-between items-end border-b border-slate-100 pb-8">
                <div className="space-y-1">
                  <p className="text-[#0070F3] font-bold tracking-[0.2em] text-[10px] uppercase font-inter">Network Status</p>
                  <h3 className="text-[#0A192F] text-6xl font-black tracking-tighter font-inter">
                    <AnimatedCounter target={100} suffix="%" />
                  </h3>
                </div>
                <p className="text-slate-400 font-bold text-xs pb-2 font-inter tracking-widest">UPTIME</p>
              </div>

              {/* Animated Scan Progress */}
              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-center">
                   <p className="text-[#0A192F] font-black text-xl font-inter tracking-tight">Real-time Verification</p>
                   <span className="text-[#0070F3] font-mono font-bold text-lg">{Math.round(progress)}%</span>
                </div>
                
                <div className="w-full h-5 bg-slate-100 rounded-full overflow-hidden p-1 shadow-inner border border-white/50">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#0070F3] via-[#40a9ff] to-[#0070F3] rounded-full shadow-[0_0_15px_rgba(0,112,243,0.4)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    style={{ backgroundSize: '200% 100%' }}
                  />
                </div>
                
                <p className="text-slate-400 text-sm font-medium font-inter">Scanning databases at lightspeed...</p>
              </div>

            </div>
          </div>
          
          {/* Floating Aesthetic Bubble */}
          {/* Minimalist Floating Envelope */}
{/* Minimalist Floating Envelope */}
{/* "Flight and Delivery" Envelope Animation */}
<motion.div 
  // 1. Starting State (Off-screen left, invisible)
  initial={{ 
    x: -300,        // Start 300px to the left of its position
    y: 100,         // Slightly lower down
    opacity: 0,     // Invisible
    scale: 0.8      // Slightly smaller
  }}
  
  // 2. The Flight & Arrival (Landing in position)
  animate={{ 
    x: 0,           // Arrive at true x position
    y: [0, -20, 0],  // A gentle arcing path + land
    opacity: 1,     // Fade in
    scale: 1        // Scale up to 100%
  }}
  
  // 3. The Bounce & Settle (After landing)
  transition={{ 
    duration: 1.5,   // Time of flight
    delay: 0.5,      // Wait a half-second after page load
    ease: "easeOut", // Start fast, slow down to land
    // This keyframe controls the bounce *after* it lands
    y: { 
        duration: 0.4, 
        delay: 2.0,            // Start bounce 0.5s after landing
        repeat: 1,             // Repeat once
        repeatType: "reverse"  // This is the new way to do 'yoyo'
        }
  }}
  
  // Final CSS styling
  className="absolute -bottom-4 -right-4 flex items-center justify-center z-20 group"
>
  {/* The "Ping" Effect - Delayed until AFTER delivery */}
  <motion.span 
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.1 }}
    transition={{ delay: 2.5 }} // Start ping 1s after landing
    className="absolute inline-flex h-16 w-16 animate-ping rounded-full bg-[#0070F3]"
  ></motion.span>
  
  <div className="relative bg-white p-5 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 group-hover:shadow-2xl transition-shadow duration-300">
    <Mail 
      className="w-10 h-10 text-[#0070F3] group-hover:scale-110 transition-transform" 
      strokeWidth={1.5} // Thin, professional stroke
    />
    
    {/* Small Blue Notification Dot (Appears upon landing) */}
    <motion.span 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.0 }}
        className="absolute top-4 right-4 flex h-3 w-3"
    >
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0070F3] opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0070F3]"></span>
    </motion.span>
  </div>
</motion.div>
        </motion.div>

      </div>
    </section>
  );
}