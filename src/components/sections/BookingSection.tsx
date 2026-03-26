import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const GOOGLE_MAPS_PROFILE_URL = "https://www.google.com/maps/place/United+Plumbing+Solutions/@32.924385,-97.3340297,17z/data=!4m14!1m7!3m6!1s0x864dd920533e47ad:0xd91cc7c2fe57358b!2sUnited+Plumbing+Solutions!8m2!3d32.9243805!4d-97.3314548!16s%2Fg%2F11h4kp6953!3m5!1s0x864dd920533e47ad:0xd91cc7c2fe57358b!8m2!3d32.9243805!4d-97.3314548!16s%2Fg%2F11h4kp6953?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D";

type CalApi = ((...args: unknown[]) => void) & {
  loaded?: boolean;
  q?: unknown[];
  ns?: Record<string, CalApi>;
};

let calBootstrapPromise: Promise<void> | null = null;

const ensureCalBootstrap = () => {
  if (typeof window === "undefined") return Promise.resolve();
  if (calBootstrapPromise) return calBootstrapPromise;

  calBootstrapPromise = new Promise((resolve) => {
    const C = window as Window & { Cal?: CalApi };
    const A = "https://app.cal.com/embed/embed.js";
    const L = "init";
    const p = (a: CalApi, ar: IArguments | unknown[]) => {
      a.q = a.q || [];
      a.q.push(ar);
    };
    const d = document;

    C.Cal = C.Cal || function () {
      const cal = C.Cal as CalApi;
      const ar = arguments;

      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        const script = d.querySelector('script[src="https://app.cal.com/embed/embed.js"]') as HTMLScriptElement | null
          ?? d.createElement("script");
        if (!script.src) {
          script.src = A;
          script.async = true;
          script.onload = () => resolve();
          d.head.appendChild(script);
        } else {
          if ((script as HTMLScriptElement).dataset.calReady === "true") {
            resolve();
          } else {
            script.addEventListener("load", () => resolve(), { once: true });
          }
        }
        script.addEventListener("load", () => {
          script.dataset.calReady = "true";
        }, { once: true });
        cal.loaded = true;
      }

      if (ar[0] === L) {
        const api = function () {
          p(api as CalApi, arguments);
        } as CalApi;
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          cal.ns = cal.ns || {};
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else {
          p(cal, ar);
        }
        return;
      }

      p(cal, ar);
    };

    if (C.Cal.loaded) {
      resolve();
    } else {
      C.Cal(L);
    }
  });

  return calBootstrapPromise;
};

const BookingSection = () => {
  useEffect(() => {
    let isMounted = true;
    const namespace = "quick-website-walkthrough";
    const embedId = "my-cal-inline-quick-website-walkthrough";
    const target = document.getElementById(embedId);
    if (!target) return;
    const alreadyInitialized = target.dataset.calInitialized === "true" && target.childElementCount > 0;
    if (alreadyInitialized) return;

    const initCal = async () => {
      if (typeof window === "undefined") return;
      await ensureCalBootstrap();

      if (window.Cal && isMounted) {
        try {
          target.innerHTML = "";
          window.Cal("init", namespace, { origin: "https://app.cal.com" });
          window.Cal.ns[namespace]("inline", {
            elementOrSelector: `#${embedId}`,
            config: { layout: "month_view", useSlotsViewOnSmallScreen: true },
            calLink: "alitheplumber/quick-website-walkthrough"
          });
          window.Cal.ns[namespace]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
          target.dataset.calInitialized = "true";
        } catch (e) {
          console.warn("Cal.com initialization failed", e);
        }
      }
    };

    initCal();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="booking" className="bg-plumb-soft py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-plumb-yellow text-sm font-bold uppercase tracking-[0.15em]">Book Now</motion.span>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-6xl font-black text-plumb-deep tracking-tight mt-3 mb-2">
            Schedule My Plumber
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-plumb-deep/60 text-lg">
            Choose a time that works for you — We'll confirm instantly.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
          {/* Calendar */}
          <motion.div 
            className="lg:col-span-8 w-full"
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 min-h-[500px] sm:min-h-[700px] w-full">
              <div 
                style={{ width: "100%", minHeight: "700px", overflow: "auto" }}
                id="my-cal-inline-quick-website-walkthrough"
                className="cal-embed-container"
              ></div>
            </div>
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div 
            className="lg:col-span-4 flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.png" alt="PlumbHero" className="w-12 h-12" />
                <div>
                  <span className="font-bold text-plumb-deep text-lg">PlumbHero</span>
                  <p className="text-plumb-deep/50 text-sm">{COMPANY.tagline}</p>
                </div>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-plumb-yellow mt-0.5" />
                  <a
                    href={GOOGLE_MAPS_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-plumb-deep/70 hover:text-plumb-yellow transition-colors"
                  >
                    {COMPANY.address}
                  </a>
                </div>
                <div className="flex items-center gap-3"><Phone size={18} className="text-plumb-yellow" /><a href={COMPANY.phoneTel} className="text-plumb-deep/70 hover:text-plumb-yellow transition-colors">{COMPANY.phone}</a></div>
                <div className="flex items-center gap-3"><Mail size={18} className="text-plumb-yellow" /><span className="text-plumb-deep/70">{COMPANY.email}</span></div>
                <div className="flex items-center gap-3"><Clock size={18} className="text-plumb-yellow" /><span className="text-plumb-deep/70 font-semibold">24/7 — We Never Close</span></div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border-2 border-plumb-yellow/30 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.0082413336436!2d-97.33145479999999!3d32.9243805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dd920533e47ad%3A0xd91cc7c2fe57358b!2sUnited%20Plumbing%20Solutions!5e0!3m2!1sen!2s!4v1774421961288!5m2!1sen!2s"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PlumbHero Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
