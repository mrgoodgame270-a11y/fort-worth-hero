import { motion } from "framer-motion";
import { ShieldCheck, Star, Clock, CircleDollarSign, Zap, Phone, CheckCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const badges = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Star, label: `${COMPANY.googleRating}★ Google · ${COMPANY.reviewCount} Reviews` },
  { icon: Clock, label: "30-Min Response" },
  { icon: CircleDollarSign, label: "Fixed Pricing" },
];

const floatAnim = (duration: number, delay: number) => ({
  y: [0, -8, 0],
  transition: { duration, delay, repeat: Infinity, ease: "easeInOut" as const },
});

const HeroSection = () => (
  <section className="relative min-h-screen overflow-hidden bg-plumb-deep">
    {/* Layer 1 — Van image visible */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-40"
      style={{ backgroundImage: "url(/hero-van.jpg)" }}
    />

    {/* Layer 2 — Directional gradient: dark left, transparent right */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(105deg, rgba(10,37,64,0.98) 0%, rgba(10,37,64,0.92) 35%, rgba(10,37,64,0.55) 65%, rgba(10,37,64,0.15) 100%)",
      }}
    />
    {/* Mobile: full dark overlay */}
    <div className="absolute inset-0 bg-plumb-deep/[0.94] md:hidden" />

    {/* Layer 3 — Vertical yellow accent line */}
    <div
      className="absolute top-0 bottom-0 right-[45%] w-[3px] opacity-40 hidden lg:block"
      style={{
        background: "linear-gradient(to bottom, transparent 0%, #FFB800 30%, #FFB800 70%, transparent 100%)",
      }}
    />

    {/* Layer 4 — Bottom yellow strip */}
    <div
      className="absolute bottom-0 left-0 right-0 h-1"
      style={{ background: "linear-gradient(90deg, #FFB800, #FFD700, #FFB800)" }}
    />

    {/* === LEFT CONTENT === */}
    <motion.div
      className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex flex-col justify-center pt-24 pb-16"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-[680px] text-center md:text-left">
        {/* [1] Emergency Badge */}
        <motion.div variants={fadeUp} className="inline-flex items-center gap-3 rounded-full px-5 py-2.5 border border-plumb-yellow/50 bg-plumb-yellow/[0.12]">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping-ring-dot flex-shrink-0" />
          <span className="text-plumb-yellow text-[11px] font-bold tracking-[0.18em] uppercase">
            🚨 Fort Worth's #1 Emergency Plumber — Available Now
          </span>
        </motion.div>

        {/* [2] Headline */}
        <motion.h1
          variants={fadeUp}
          className="mt-7 font-black leading-[0.93] tracking-[-0.04em]"
        >
          <span className="block text-white" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
            24/7 Emergency
          </span>
          <span className="block text-white" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
            Plumbing in
          </span>
          <span
            className="relative block text-plumb-yellow"
            style={{
              fontSize: "clamp(3.2rem, 7.5vw, 6.5rem)",
              textShadow: "0 0 60px rgba(255,184,0,0.35), 0 2px 0 rgba(0,0,0,0.3)",
            }}
          >
            Fort Worth, TX
            <span className="absolute bottom-[-8px] left-0 md:left-0 w-[120px] h-1 rounded-sm bg-gradient-to-r from-plumb-yellow to-transparent" />
          </span>
        </motion.h1>

        {/* [3] Sub-headline */}
        <motion.div variants={fadeUp} className="mt-7 flex items-center gap-3 justify-center md:justify-start">
          <Zap
            size={36}
            className="text-plumb-yellow flex-shrink-0"
            style={{ filter: "drop-shadow(0 0 12px rgba(255,184,0,0.6))" }}
          />
          <span
            className="font-extrabold text-plumb-yellow"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              textShadow: "0 0 30px rgba(255,184,0,0.3)",
            }}
          >
            30 Minute Response Guaranteed!
          </span>
        </motion.div>

        {/* [4] Description */}
        <motion.p variants={fadeUp} className="mt-5 max-w-[560px] text-white/[0.82] text-lg font-normal leading-[1.65] mx-auto md:mx-0">
          Burst pipes? No hot water? Clogged drains? Certified plumbers arrive in 30 minutes or less — upfront pricing, zero surprises, no overtime charges.
        </motion.p>

        {/* [5] Trust Badges */}
        <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3 justify-center md:justify-start">
          {badges.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-2 rounded-full px-[18px] py-2.5 text-white text-[13px] font-medium bg-white/[0.07] backdrop-blur-sm border border-white/[0.15] hover:border-plumb-yellow/60 hover:bg-plumb-yellow/10 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              <b.icon size={15} className="text-plumb-yellow flex-shrink-0" />
              {b.label}
            </span>
          ))}
        </motion.div>

        {/* [6] CTAs */}
        <motion.div variants={fadeUp} className="mt-9 flex gap-4 flex-wrap justify-center md:justify-start">
          <motion.a
            href="#booking"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97, y: 2 }}
            className="bg-plumb-yellow text-plumb-deep font-extrabold text-[17px] px-9 py-[18px] rounded-[14px] transition-all duration-150 w-full sm:w-auto text-center"
            style={{
              boxShadow:
                "0 4px 0px rgba(180,130,0,0.8), 0 8px 32px rgba(255,184,0,0.35), inset 0 1px 0 rgba(255,255,255,0.25)",
            }}
          >
            🚨 Book Emergency Now
          </motion.a>
          <a
            href="#booking"
            className="border-2 border-white/35 text-white font-bold text-[17px] px-9 py-[18px] rounded-[14px] hover:border-plumb-yellow hover:text-plumb-yellow hover:bg-plumb-yellow/[0.08] hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto text-center"
          >
            Get Instant Quote →
          </a>
        </motion.div>

        {/* [7] Phone */}
        <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3 justify-center md:justify-start">
          <div className="w-11 h-11 rounded-full bg-plumb-yellow/[0.15] border border-plumb-yellow/30 flex items-center justify-center animate-ring-shake">
            <Phone size={20} className="text-plumb-yellow" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/45">
              Call Now — We Answer 24/7
            </p>
            <a
              href={COMPANY.phoneTel}
              className="text-[28px] font-black text-white hover:text-plumb-yellow transition-colors duration-150 tracking-[0.02em]"
            >
              {COMPANY.phone}
            </a>
          </div>
        </motion.div>

        {/* [8] Social Proof Strip */}
        <motion.div variants={fadeUp} className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 justify-center md:justify-start">
          {/* Google G */}
          <svg width="28" height="28" viewBox="0 0 48 48" className="flex-shrink-0">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59A14.5 14.5 0 019.5 24c0-1.59.28-3.14.76-4.59l-7.98-6.19A23.99 23.99 0 000 24c0 3.77.9 7.35 2.56 10.52l7.97-5.93z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 5.93C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          {/* Stars */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-plumb-yellow fill-plumb-yellow" />
              ))}
            </div>
            <span className="text-white/60 text-sm">4.6 out of 5 on Google</span>
          </div>
          <div className="h-[30px] w-px bg-white/15 hidden sm:block" />
          <span className="text-white/50 text-sm font-medium">1,000+ Emergency Jobs Completed</span>
        </motion.div>
      </div>
    </motion.div>

    {/* === RIGHT FLOATING CARDS (desktop only) === */}
    <motion.div
      className="hidden lg:block absolute top-[15%] right-[6%] z-20 bg-plumb-deep/80 backdrop-blur-md border border-plumb-yellow/30 rounded-2xl px-5 py-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, ...floatAnim(3, 0) }}
      transition={{ delay: 1.2, type: "spring", stiffness: 150 }}
    >
      <div className="flex items-center gap-2 text-white/60 text-xs font-medium">
        <Zap size={22} className="text-plumb-yellow" /> Response Time
      </div>
      <p className="text-plumb-yellow font-black text-3xl mt-1">&lt; 30 MIN</p>
      <p className="text-white/50 text-xs mt-0.5">Guaranteed or discounted</p>
    </motion.div>

    <motion.div
      className="hidden lg:block absolute top-[45%] right-[3%] z-20 bg-plumb-yellow rounded-[14px] px-[18px] py-3.5"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, ...floatAnim(3.5, 0.5) }}
      transition={{ delay: 1.5, type: "spring", stiffness: 150 }}
    >
      <div className="flex items-center gap-2">
        <CheckCircle size={18} className="text-plumb-deep" />
        <span className="text-plumb-deep font-bold text-sm">Just Arrived</span>
      </div>
      <p className="text-plumb-deep/70 text-xs mt-0.5">Plumber en route · Fort Worth, TX</p>
    </motion.div>

    <motion.div
      className="hidden lg:block absolute bottom-[22%] right-[8%] z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-[14px] px-[18px] py-3.5"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, ...floatAnim(4, 1) }}
      transition={{ delay: 1.8, type: "spring", stiffness: 150 }}
    >
      <div className="flex gap-0.5 mb-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="text-plumb-yellow fill-plumb-yellow" />
        ))}
      </div>
      <p className="text-white font-semibold text-sm">4.6★ — 27 Google Reviews</p>
    </motion.div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-[30%] hidden md:flex flex-col items-center gap-2">
      <span className="text-white/25 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
      <div className="w-6 h-9 rounded-xl border-2 border-white/20 flex justify-center pt-2">
        <span className="w-1 h-1 rounded-full bg-plumb-yellow animate-scroll-dot" />
      </div>
    </div>
  </section>
);

export default HeroSection;
