import { motion } from "framer-motion";
import { Zap, Search, Droplets, Thermometer, GitBranch, Wrench } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const iconMap = { Zap, Search, Droplets, Thermometer, GitBranch, Wrench } as const;
type IconKey = keyof typeof iconMap;

const ServicesSection = () => (
  <section id="services" className="bg-plumb-soft py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
        <motion.span variants={fadeUp} className="text-plumb-yellow text-sm font-bold uppercase tracking-[0.15em]">Our Services</motion.span>
        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-plumb-deep tracking-tight mt-3">
          Everything Your Home or Business Needs
        </motion.h2>
        <motion.p variants={fadeUp} className="text-plumb-deep/60 text-lg max-w-2xl mx-auto mt-4">
          From emergency repairs to full installations — licensed plumbers ready 24/7.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {SERVICES.map((s) => {
          const Icon = iconMap[s.icon as IconKey];
          return (
            <motion.div
              key={s.title}
              variants={fadeUp}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(10,37,64,0.15)] hover:-translate-y-1.5 hover:border-plumb-yellow/30 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 bg-plumb-deep rounded-xl flex items-center justify-center mb-6 group-hover:bg-plumb-yellow transition-colors duration-200">
                <Icon size={28} className="text-plumb-yellow group-hover:text-plumb-deep transition-colors duration-200" />
              </div>
              <h3 className="text-xl font-bold text-plumb-deep mb-3">{s.title}</h3>
              <p className="text-plumb-deep/60 text-sm leading-relaxed mb-6">{s.desc}</p>
              <span className="text-plumb-yellow text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all duration-200">
                Learn More <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
