import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const SERVICE_OPTIONS = [
  "Emergency Repair",
  "Drain Cleaning",
  "Water Heater",
  "Leak Detection",
  "Sewer Line",
  "Other",
];

const BookingSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", date: "", address: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.email.trim() || !form.email.includes("@")) e.email = "Valid email required";
    if (!form.service) e.service = "Select a service";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const inputClass = "w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-plumb-deep placeholder:text-gray-400 focus:border-plumb-yellow focus:ring-2 focus:ring-plumb-yellow/20 outline-none transition-all duration-200";

  return (
    <section id="booking" className="bg-plumb-soft py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.span variants={fadeUp} className="text-plumb-yellow text-sm font-bold uppercase tracking-[0.15em]">Book Now</motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-plumb-deep tracking-tight mt-3 mb-2">
              Book Your Plumber Now — Available 24/7
            </motion.h2>
            <motion.p variants={fadeUp} className="text-plumb-deep/60 text-lg mb-8">
              Fill out the form and we'll confirm within 5 minutes.
            </motion.p>

            {submitted ? (
              <motion.div variants={fadeUp} className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-plumb-deep mb-2">Booking Confirmed!</h3>
                <p className="text-plumb-deep/60">We'll call you shortly to confirm your appointment.</p>
              </motion.div>
            ) : (
              <motion.form variants={fadeUp} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input className={inputClass} placeholder="Full Name *" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input className={inputClass} placeholder="Phone Number *" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <input className={inputClass} type="email" placeholder="Email Address *" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <select className={inputClass} value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                    <option value="">Select Service Type *</option>
                    {SERVICE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input className={inputClass} type="date" placeholder="Preferred Date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
                  <input className={inputClass} placeholder="Address" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
                </div>
                <textarea className={`${inputClass} min-h-[100px]`} placeholder="Describe your issue (optional)" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                <button
                  type="submit"
                  className="w-full bg-plumb-yellow text-plumb-deep font-black text-lg py-5 rounded-xl hover:bg-yellow-400 hover:shadow-[0_0_40px_rgba(255,184,0,0.6)] hover:scale-[1.02] transition-all duration-200"
                >
                  Schedule My Plumber →
                </button>
                <p className="text-center text-plumb-deep/50 text-sm">
                  Or call us now: <a href={COMPANY.phoneTel} className="text-plumb-yellow font-semibold">{COMPANY.phone}</a>
                </p>
              </motion.form>
            )}
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
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

            <div className="rounded-2xl overflow-hidden border-2 border-plumb-yellow/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.6!2d-97.3314257!3d32.9243895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDU1JzI3LjgiTiA5N8KwMTknNTMuMSJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="300"
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
