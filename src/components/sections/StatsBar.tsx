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
  const inView = useInView(ref, { once: true, margin: "0px 0px 220px 0px", amount: 0.2 });
  const [count, setCount] = useState(0);
  const frameRef = useRef<number | null>(null);
  const hasAnimatedRef = useRef(false);
  const lastDisplayRef = useRef<string>("");

  useEffect(() => {
    if (!inView || hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setCount(value);
      return;
    }

    const duration = 1400;
    const startedAt = performance.now();
    const step = (now: number) => {
      const elapsed = now - startedAt;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = eased * value;
      const nextDisplay = isDecimal ? nextValue.toFixed(1) : Math.floor(nextValue).toString();
      if (nextDisplay !== lastDisplayRef.current) {
        lastDisplayRef.current = nextDisplay;
        setCount(nextValue);
      }
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black text-plumb-deep inline-block min-w-[1.5ch]">
      {isDecimal ? count.toFixed(1) : Math.floor(count).toLocaleString()}{suffix}
    </span>
  );
};

const StatsBar = () => (
  <section className="bg-plumb-yellow py-6 md:py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-0 md:divide-x md:divide-plumb-deep/20">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center px-8 md:px-12">
            <Counter value={s.value} suffix={s.suffix} isDecimal={s.isDecimal} />
            <span className="text-plumb-deep/70 text-xs md:text-sm font-semibold uppercase tracking-[0.1em] mt-1">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
