import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";
import * as Icons from "lucide-react";
import { useState } from "react";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&q=80";

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const Icon = (Icons as any)[service.icon] || Icons.Wrench;
  const [imgSrc, setImgSrc] = useState(service.img);

  return (
    <motion.div
      variants={fadeUp}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={imgSrc}
          alt={`${service.title} - Plumber in Fort Worth`}
          onError={() => setImgSrc(FALLBACK_IMAGE)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-plumb-deep/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        <div className="absolute bottom-4 left-6 bg-plumb-yellow p-3 rounded-2xl shadow-lg">
          <Icon className="text-plumb-deep" size={24} />
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-black text-plumb-deep mb-3 tracking-tight">
          {service.title}
        </h3>
        <p className="text-plumb-deep/60 leading-relaxed mb-6 font-medium">
          {service.desc}
        </p>
        <a 
          href="#booking" 
          className="inline-flex items-center gap-2 text-plumb-deep font-bold hover:text-plumb-yellow transition-colors group/link"
        >
          Book Service 
          <Icons.ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => (
  <section id="services" className="bg-white py-20 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div 
        className="text-center mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.span variants={fadeUp} className="text-plumb-yellow text-sm font-bold uppercase tracking-[0.2em]">Our Specializations</motion.span>
        <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black text-plumb-deep tracking-tight mt-4 mb-6">
          Expert Plumbing Services <br className="hidden md:block" /> in Fort Worth, Texas
        </motion.h2>
        <p className="text-plumb-deep/60 text-lg max-w-2xl mx-auto font-medium">
          From emergency leaks to full system installs, PlumbHero provides reliable, 24/7 solutions for every plumbing need.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {SERVICES.map((service, i) => (
          <ServiceCard key={i} service={service} index={i} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
