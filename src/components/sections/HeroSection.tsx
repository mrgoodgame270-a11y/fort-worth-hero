import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Star, Clock, CircleDollarSign, Zap, Phone, CheckCircle, ArrowRight, X } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";

const badges = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Star, label: "4.8★ Google" },
  { icon: Clock, label: "30-Min Response" },
  { icon: CircleDollarSign, label: "Fixed Pricing" },
];

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const [ref, setRef] = useState<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (!ref || hasAnimated.current) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        observer.disconnect();

        if (reduceMotion) {
          setCount(value);
          return;
        }

        const duration = 1400;
        const startedAt = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const next = Math.round(eased * value);
          setCount(next >= value ? value : next);

          if (progress < 1) {
            rafId.current = requestAnimationFrame(tick);
          } else {
            setCount(value);
          }
        };

        rafId.current = requestAnimationFrame(tick);
      },
      { threshold: 0.1 }
    );
    observer.observe(ref);
    return () => {
      observer.disconnect();
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [ref, value]);

  return <span ref={setRef}>{count.toLocaleString()}+</span>;
};

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const yellowPopupTimerRef = useRef<number | null>(null);

  const closeYellowPopup = () => {
    setShowPopup(false);
    (window as Window & { __desktopPopupVisible?: boolean }).__desktopPopupVisible = false;
    window.dispatchEvent(new CustomEvent("desktop-popup-closed"));
  };

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const kickoff = window.setTimeout(() => {
      const state = window as Window & { __desktopPopupVisible?: boolean };
      if (state.__desktopPopupVisible) return;

      state.__desktopPopupVisible = true;
      setShowPopup(true);

      yellowPopupTimerRef.current = window.setTimeout(() => {
        closeYellowPopup();
      }, 3000);
    }, 3000);

    return () => {
      window.clearTimeout(kickoff);
      if (yellowPopupTimerRef.current) {
        window.clearTimeout(yellowPopupTimerRef.current);
      }
      (window as Window & { __desktopPopupVisible?: boolean }).__desktopPopupVisible = false;
    };
  }, []);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#0A0F1E] flex flex-col lg:flex-row items-center">
      {/* Background Image / Overlay - Desktop Only */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden hidden lg:block">
        <div 
          className="absolute inset-0 bg-cover bg-[85%_center] grayscale-[0.2] scale-105 transition-transform duration-1000"
          style={{ backgroundImage: "url('/hero-van.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E] via-[#0A0F1E]/95 to-transparent w-full h-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-28 pb-12 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
            {/* Branded Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 self-start bg-white/10 backdrop-blur-md border border-plumb-yellow/30 px-4 py-2 rounded-full"
            >
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-red-500 animate-ping opacity-75" />
              </div>
              <span className="text-white font-bold text-[10px] sm:text-xs md:text-sm tracking-wider uppercase">
                <span className="text-plumb-yellow">🚨 Fort Worth's #1 Emergency Plumber</span> — Available Now
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[110px] leading-[0.85] tracking-tight text-white"
            >
              24/7 <span className="text-plumb-yellow text-glow">Emergency</span><br />
              Plumbing in<br />
              <span className="text-plumb-yellow underline decoration-plumb-cyan decoration-4 underline-offset-8">Fort Worth, TX</span>
            </motion.h1>

            {/* Mobile Hero Visual Block */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:hidden relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl aspect-[16/10] sm:aspect-video"
            >
              <img 
                src="/hero-van.jpg" 
                alt="PlumbHero Service Van" 
                className="w-full h-full object-cover object-[75%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="min-h-[42px] sm:min-h-[46px] flex items-center gap-2 rounded-xl border border-white/15 bg-[#0A0F1E]/85 px-3 py-2 backdrop-blur-md shadow-lg">
                    <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-plumb-yellow shrink-0" />
                    <span className="text-white text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.08em] leading-tight">
                      Licensed & Insured
                    </span>
                  </div>
                  <div className="min-h-[42px] sm:min-h-[46px] flex items-center gap-2 rounded-xl bg-plumb-yellow px-3 py-2 shadow-lg">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-plumb-deep shrink-0" />
                    <span className="text-plumb-deep text-[10px] sm:text-[11px] font-black uppercase tracking-[0.08em] leading-tight">
                      30 Min Arrival
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Subheadline with Lightning Bolt */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 sm:gap-4 group"
            >
              <div className="bg-plumb-yellow p-1.5 sm:p-2 rounded-lg group-hover:scale-110 transition-transform shrink-0">
                <Zap className="text-[#0A0F1E] fill-[#0A0F1E]" size={24} />
              </div>
              <p className="text-plumb-yellow font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight">
                30 Minute Response Guaranteed!
              </p>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed font-medium"
            >
              Burst pipes? No hot water? Clogged drains? Certified plumbers arrive in 30 minutes or less — upfront pricing, zero surprises, no overtime charges.
            </motion.p>

            {/* Desktop Only Trust Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden lg:flex flex-wrap gap-2 sm:gap-3"
            >
              {badges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-1.5 sm:gap-2 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-md backdrop-blur-sm">
                  <badge.icon className="text-plumb-yellow shrink-0" size={14} />
                  <span className="text-white/90 text-[11px] sm:text-sm font-bold whitespace-nowrap">{badge.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 mt-2 sm:mt-4"
            >
              <a 
                href="#booking" 
                className="bg-plumb-yellow hover:bg-plumb-yellow/90 text-[#0A0F1E] font-black text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(245,197,24,0.4)] shadow-xl"
              >
                🚨 Book Emergency Now
              </a>
              <a 
                href="#booking" 
                className="border-2 border-white/20 hover:border-white/40 text-white font-bold text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:bg-white/5"
              >
                Get Instant Quote <ArrowRight size={18} className="text-plumb-cyan" />
              </a>
            </motion.div>

            {/* Phone with Branded Treatment */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4 mt-2"
            >
              <div className="relative shrink-0">
                <div className="bg-plumb-yellow p-2.5 sm:p-3 rounded-full animate-ring-shake">
                  <Phone className="text-[#0A0F1E] fill-[#0A0F1E] w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="absolute inset-0 bg-plumb-yellow rounded-full animate-ping opacity-50" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Call Now — 24/7 Local Experts</span>
                <a href={COMPANY.phoneTel} className="text-white text-2xl sm:text-3xl md:text-4xl font-heading tracking-wider hover:text-plumb-yellow transition-colors leading-none">
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

      {/* "Just Arrived" Popup Notification - Desktop Only & Subtle */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-6 right-24 z-[9998] bg-plumb-yellow text-plumb-deep p-4 rounded-xl shadow-2xl hidden lg:flex items-center gap-4 max-w-[280px] border border-[#0A0F1E]/10"
          >
            <div className="bg-plumb-deep p-2 rounded-full shrink-0">
              <CheckCircle size={20} className="text-plumb-yellow" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-black text-sm uppercase leading-none">Just Arrived</span>
              <span className="text-xs font-bold opacity-80 mt-1 truncate">Plumber on route — Fort Worth, TX</span>
            </div>
            <button
              onClick={() => {
                if (yellowPopupTimerRef.current) {
                  window.clearTimeout(yellowPopupTimerRef.current);
                }
                closeYellowPopup();
              }}
              className="ml-auto p-1 text-plumb-deep/60 hover:text-plumb-deep transition-colors"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
