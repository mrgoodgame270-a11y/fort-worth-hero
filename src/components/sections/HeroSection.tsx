import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Star, Clock, CircleDollarSign, Zap, Phone, CheckCircle, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { useEffect, useState } from "react";

const badges = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Star, label: "4.8★ Google" },
  { icon: Clock, label: "30-Min Response" },
  { icon: CircleDollarSign, label: "Fixed Pricing" },
];

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const [ref, setRef] = useState<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = value;
          const duration = 2000;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, value]);

  return <span ref={setRef}>{count.toLocaleString()}+</span>;
};

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0F1E]">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center md:bg-right grayscale-[0.5] scale-105"
          style={{ backgroundImage: "url('/hero-van.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E] via-[#0A0F1E]/95 to-transparent hidden md:block w-full h-full" />
        <div className="absolute inset-0 bg-[#0A0F1E]/80 md:hidden w-full h-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            {/* Available Now Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 self-start bg-white/5 backdrop-blur-sm border border-plumb-yellow/30 px-4 py-2 rounded-full"
            >
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-red-500 animate-ping-ring-dot" />
              </div>
              <span className="text-white font-bold text-xs md:text-sm tracking-wider uppercase">
                <span className="text-plumb-yellow">🚨 Fort Worth's #1 Emergency Plumber</span> — Available Now
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-6xl md:text-8xl lg:text-[100px] leading-[0.9] tracking-tight text-white"
            >
              24/7 <span className="text-plumb-yellow">Emergency</span><br />
              Plumbing in<br />
              <span className="text-plumb-yellow underline decoration-plumb-cyan decoration-4 underline-offset-8">Fort Worth, TX</span>
            </motion.h1>

            {/* Subheadline with Lightning Bolt */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 group"
            >
              <div className="bg-plumb-yellow p-2 rounded-lg group-hover:scale-110 transition-transform">
                <Zap className="text-[#0A0F1E] fill-[#0A0F1E]" size={28} />
              </div>
              <p className="text-plumb-yellow font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight">
                30 Minute Response Guaranteed!
              </p>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed font-medium"
            >
              Burst pipes? No hot water? Clogged drains? Certified plumbers arrive in 30 minutes or less — upfront pricing, zero surprises, no overtime charges.
            </motion.p>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {badges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                  <badge.icon className="text-plumb-yellow" size={16} />
                  <span className="text-white/90 text-sm font-bold">{badge.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-4"
            >
              <a 
                href="#booking" 
                className="w-full sm:w-auto bg-plumb-yellow hover:bg-plumb-yellow/90 text-[#0A0F1E] font-black text-lg md:text-xl px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(245,197,24,0.4)]"
              >
                🚨 Book Emergency Now
              </a>
              <a 
                href="#booking" 
                className="w-full sm:w-auto border-2 border-white/20 hover:border-white/40 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:bg-white/5"
              >
                Get Instant Quote <ArrowRight size={20} className="text-plumb-cyan" />
              </a>
            </motion.div>

            {/* Phone with Animated Ring */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="relative">
                <div className="bg-plumb-yellow p-3 rounded-full animate-ring-shake">
                  <Phone className="text-[#0A0F1E] fill-[#0A0F1E]" size={24} />
                </div>
                <div className="absolute inset-0 bg-plumb-yellow rounded-full animate-ping-ring opacity-50" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Call Now — We Answer 24/7</span>
                <a href={COMPANY.phoneTel} className="text-white text-3xl md:text-4xl font-heading tracking-wider hover:text-plumb-yellow transition-colors">
                  {COMPANY.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 pt-8 border-t border-white/10 flex flex-wrap items-center gap-8 md:gap-16"
        >
          <div className="flex items-center gap-3">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-6 object-contain" />
            <div className="flex flex-col">
              <div className="flex text-plumb-yellow gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-white/60 text-xs font-bold uppercase tracking-tight">4.8 out of 5 on Google</span>
            </div>
          </div>
          <div className="h-10 w-px bg-white/10 hidden md:block" />
          <div className="flex flex-col">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-white text-2xl font-heading tracking-widest"
            >
              <Counter value={1000} />
            </motion.span>
            <span className="text-white/60 text-xs font-bold uppercase tracking-tight">Emergency Jobs Completed</span>
          </div>
        </motion.div>
      </div>

      {/* "Just Arrived" Popup Notification */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            className="fixed bottom-24 right-6 z-50 bg-[#F5C518] text-[#0A0F1E] p-4 rounded-xl shadow-2xl flex items-center gap-4 max-w-[280px]"
          >
            <div className="bg-[#0A0F1E] p-2 rounded-full">
              <CheckCircle size={20} className="text-[#F5C518]" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-sm uppercase leading-none">Just Arrived</span>
              <span className="text-xs font-bold opacity-80 mt-1">Plumber on route — Fort Worth, TX</span>
            </div>
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute -top-2 -right-2 bg-[#0A0F1E] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
