import { motion } from "framer-motion";
import { Shield, Star, Clock, Check, ChevronDown } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const badges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Star, label: `${COMPANY.googleRating}★ Google (${COMPANY.reviewCount} reviews)` },
  { icon: Clock, label: "30-Min Response" },
  { icon: Check, label: "Fixed Pricing" },
];

const particles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: `${Math.random() * 6}s`,
  duration: `${4 + Math.random() * 4}s`,
}));

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* BG Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url(/hero-van.jpg)" }}
    />
    {/* Overlay */}
    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,37,64,0.95) 0%, rgba(10,37,64,0.85) 50%, rgba(10,37,64,0.92) 100%)" }} />
    {/* Bottom yellow line */}
    <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(90deg, transparent, #FFB800, transparent)" }} />

    {/* Particles */}
    {particles.map((p) => (
      <div
        key={p.id}
        className="absolute w-0.5 h-0.5 bg-plumb-yellow rounded-full particle"
        style={{ left: p.left, top: p.top, animationDelay: p.delay, animationDuration: p.duration }}
      />
    ))}

    {/* Content */}
    <motion.div
      className="relative z-10 text-center max-w-5xl mx-auto px-6 py-20"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Logo */}
      <motion.div variants={fadeUp}>
        <img
          src="/logo.png"
          alt="PlumbHero"
          className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-6 animate-pulse-glow"
        />
      </motion.div>

      {/* Emergency Badge */}
      <motion.div variants={fadeUp} className="mb-6">
        <span className="inline-flex items-center gap-2 bg-plumb-yellow/15 border border-plumb-yellow/40 rounded-full px-4 py-1.5">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-plumb-yellow text-sm font-semibold tracking-[0.08em] uppercase">
            🚨 24/7 Emergency Service — Fort Worth, TX
          </span>
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-[6.5rem] font-black text-white leading-[0.95] tracking-[-0.04em] mb-6" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
        24/7 Emergency<br />
        Plumbing in<br />
        <span className="text-plumb-yellow">Fort Worth, TX</span>
      </motion.h1>

      {/* Sub-headline */}
      <motion.p variants={fadeUp} className="text-plumb-yellow text-3xl md:text-5xl font-bold tracking-tight mb-6" style={{ textShadow: "0 0 40px rgba(255,184,0,0.4)" }}>
        ⚡ 30 Minute Response Guaranteed!
      </motion.p>

      {/* Description */}
      <motion.p variants={fadeUp} className="text-white/85 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light mb-8">
        Burst pipes? No hot water? Clogged drains? Our certified plumbers arrive in 30 minutes or less — upfront pricing, zero surprises, no overtime charges.
      </motion.p>

      {/* Trust Badges */}
      <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mb-8">
        {badges.map((b) => (
          <span
            key={b.label}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium hover:border-plumb-yellow/60 hover:bg-plumb-yellow/10 hover:scale-105 transition-all duration-200 cursor-default"
          >
            <b.icon size={16} className="text-plumb-yellow" />
            {b.label}
          </span>
        ))}
      </motion.div>

      {/* CTAs */}
      <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <motion.a
          href="#booking"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          className="bg-plumb-yellow text-plumb-deep font-black text-lg px-10 py-5 rounded-xl hover:bg-yellow-400 hover:shadow-[0_0_40px_rgba(255,184,0,0.6),0_8px_32px_rgba(255,184,0,0.3)] transition-all duration-200"
        >
          🚨 Book Emergency Now
        </motion.a>
        <a
          href="#booking"
          className="border-2 border-white/70 text-white font-bold text-lg px-10 py-5 rounded-xl hover:border-plumb-yellow hover:text-plumb-yellow hover:bg-plumb-yellow/10 hover:scale-105 transition-all duration-200"
        >
          Get Instant Quote →
        </a>
      </motion.div>

      {/* Phone */}
      <motion.div variants={fadeUp}>
        <a href={COMPANY.phoneTel} className="text-white text-3xl md:text-4xl font-black tracking-wide hover:text-plumb-yellow transition-colors">
          📞 {COMPANY.phone}
        </a>
        <p className="text-white/50 text-sm mt-2">Tap to call — Available 24/7/365</p>
      </motion.div>
    </motion.div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
      <ChevronDown size={24} className="text-white/40" />
    </div>
  </section>
);

export default HeroSection;
