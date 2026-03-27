import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const features = [
  { title: "⚡ 30-Minute Response Guaranteed", desc: "Our dispatchers send the nearest certified technician immediately. If we exceed 30 minutes, your service call is discounted — no questions asked.", highlight: true },
  { title: "Upfront, Fixed Pricing — No Surprises", desc: "You approve every cost before any work begins. No overtime charges, no hidden fees, no pressure." },
  { title: "Licensed, Insured & Background-Checked", desc: "Every PlumbHero technician is Texas-licensed, fully insured, and has passed a thorough background check for your safety." },
  { title: "Satisfaction Guarantee or We Come Back", desc: "If your issue isn't fully resolved, we return at zero additional cost. Our job isn't done until you're happy." },
];

const WhyUsSection = () => (
  <section id="why-us" className="bg-plumb-deep py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Left */}
        <motion.div className="lg:col-span-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px 0px 220px 0px" }}>
          <motion.span variants={fadeUp} className="text-plumb-yellow text-sm font-bold uppercase tracking-[0.15em]">Why PlumbHero</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mt-3 mb-4">
            Fort Worth Trusts Us Because We Show Up — Every Single Time.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/60 text-lg leading-relaxed mb-8">
            When you have a plumbing emergency, you need a team that answers the phone, shows up fast, and fixes it right the first time.
          </motion.p>

          <div className="space-y-0">
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className={`flex gap-5 py-5 border-b border-white/10 ${f.highlight ? "bg-plumb-yellow/10 border border-plumb-yellow/30 rounded-xl px-5 -mx-5" : ""}`}
              >
                <div className="w-12 h-12 min-w-[48px] rounded-full bg-plumb-yellow flex items-center justify-center">
                  <Check size={20} className="text-plumb-deep" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{f.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mt-1">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Floating Card */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px 220px 0px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-[0_24px_80px_rgba(0,0,0,0.4)] hover:rotate-0 transition-transform duration-300" style={{ transform: "rotate(-2deg)" }}>
            <img src="/logo.png" alt="PlumbHero" className="w-20 h-20 mx-auto mb-4" />
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-lg font-bold text-plumb-deep">{COMPANY.googleRating} out of 5</span>
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="text-plumb-yellow text-lg">★</span>
                ))}
              </div>
            </div>
            <p className="text-center text-plumb-deep/50 text-sm mb-6">({COMPANY.reviewCount} Google Reviews)</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { num: "30 Min", label: "Avg. Response" },
                { num: "1,000+", label: "Jobs Completed" },
                { num: "100%", label: "Licensed Plumbers" },
                { num: "24/7", label: "Available Always" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-plumb-yellow text-2xl font-black">{s.num}</div>
                  <div className="text-plumb-deep/60 text-xs">{s.label}</div>
                </div>
              ))}
            </div>

            <a href="#booking" className="block bg-plumb-yellow text-plumb-deep font-black text-center py-4 rounded-xl hover:bg-yellow-400 transition-colors">
              Get a Free Estimate
            </a>
            <p className="text-center text-plumb-deep/50 text-sm mt-3">
              Or call <a href={COMPANY.phoneTel} className="text-plumb-yellow font-semibold">{COMPANY.phone}</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyUsSection;
