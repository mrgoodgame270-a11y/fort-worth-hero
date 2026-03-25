import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const BookingSection = () => {
  useEffect(() => {
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // @ts-ignore
    if (window.Cal) {
      try {
        // @ts-ignore
        window.Cal("init", "15-min-meeting", { origin: "https://app.cal.com" });

        // @ts-ignore
        window.Cal.ns["15-min-meeting"]("inline", {
          elementOrSelector: "#my-cal-inline-15-min-meeting",
          config: { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" },
          calLink: "alitheplumber/15-min-meeting",
        });

        // @ts-ignore
        window.Cal.ns["15-min-meeting"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
      } catch (e) {
        console.warn("Cal.com initialization failed", e);
      }
    }
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
                style={{ width: "100%", height: "700px", overflow: "hidden" }} 
                id="my-cal-inline-15-min-meeting"
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
                <div className="flex items-start gap-3"><MapPin size={18} className="text-plumb-yellow mt-0.5" /><span className="text-plumb-deep/70">{COMPANY.address}</span></div>
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
