import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const GallerySection = () => (
  <section id="gallery" className="bg-plumb-soft py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
        <motion.span variants={fadeUp} className="text-plumb-yellow text-sm font-bold uppercase tracking-[0.15em]">Our Work</motion.span>
        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-plumb-deep tracking-tight mt-3">
          Real Work. Real Results. Fort Worth TX.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-plumb-deep/60 text-lg max-w-2xl mx-auto mt-4">
          Before & after photos from actual PlumbHero jobs in your neighborhood.
        </motion.p>
      </motion.div>

      <div className="masonry-grid">
        {GALLERY_IMAGES.map((img, i) => (
          <motion.div
            key={i}
            className="mb-6 rounded-2xl overflow-hidden relative group cursor-pointer break-inside-avoid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <img
              src={img.src}
              alt={img.caption}
              className={`w-full object-cover ${img.tall ? "h-80" : "h-56"} group-hover:scale-105 transition-transform duration-500`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-plumb-deep/80 opacity-0 group-hover:opacity-100 flex items-end p-5 transition-all duration-300">
              <div>
                <p className="text-white font-semibold text-sm">{img.caption}</p>
                <span className="inline-block mt-2 bg-plumb-yellow/20 text-plumb-yellow text-xs font-semibold px-3 py-1 rounded-full">
                  Fort Worth, TX
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
