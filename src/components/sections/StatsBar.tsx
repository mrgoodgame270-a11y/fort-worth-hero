import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 1000, suffix: "+", label: "Jobs Completed" },
  { value: 4.6, suffix: "★", label: "Google Rating", isDecimal: true },
  { value: 30, suffix: " Min", label: "Response Time" },
  { value: 24, suffix: "/7", label: "Emergency Available" },
];

const Counter = ({ value, suffix, isDecimal }: { value: number; suffix: string; isDecimal?: boolean }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = Date.now();
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * value);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black text-plumb-deep">
      {isDecimal ? count.toFixed(1) : Math.floor(count).toLocaleString()}{suffix}
    </span>
  );
};

const StatsBar = () => (
  <section className="bg-plumb-yellow py-6 md:py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-0 md:divide-x md:divide-plumb-deep/20">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            className="flex flex-col items-center px-8 md:px-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Counter value={s.value} suffix={s.suffix} isDecimal={s.isDecimal} />
            <span className="text-plumb-deep/70 text-xs md:text-sm font-semibold uppercase tracking-[0.1em] mt-1">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
