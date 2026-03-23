import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const Footer = () => (
  <footer className="bg-plumb-dark">
    <div className="h-[3px] bg-plumb-yellow" />
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="PlumbHero" className="w-14 h-14" />
            <span className="text-2xl font-bold"><span className="text-white">Plumb</span><span className="text-plumb-yellow">Hero</span></span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed">{COMPANY.tagline}</p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-plumb-yellow font-bold uppercase text-sm mb-4">Our Services</h4>
          {["Emergency Repairs", "Leak Detection", "Drain Cleaning", "Water Heaters", "Sewer Lines", "Pipe Repiping"].map(s => (
            <a key={s} href="#services" className="block text-white/60 text-sm hover:text-plumb-yellow transition-colors py-1">{s}</a>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-plumb-yellow font-bold uppercase text-sm mb-4">Contact</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2"><Phone size={14} className="text-plumb-yellow" /><a href={COMPANY.phoneTel} className="text-white/60 hover:text-plumb-yellow transition-colors">{COMPANY.phone}</a></div>
            <div className="flex items-center gap-2"><Mail size={14} className="text-plumb-yellow" /><span className="text-white/60">{COMPANY.email}</span></div>
            <div className="flex items-start gap-2"><MapPin size={14} className="text-plumb-yellow mt-0.5" /><span className="text-white/60">{COMPANY.address}</span></div>
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="bg-plumb-yellow/10 border border-plumb-yellow/20 rounded-2xl p-6">
          <h4 className="text-white font-bold text-lg mb-2">24/7 Emergency Plumbing</h4>
          <p className="text-white/60 text-sm mb-4">Plumbing emergency? Don't wait.</p>
          <a href={COMPANY.phoneTel} className="block text-plumb-yellow text-2xl font-black mb-4">{COMPANY.phone}</a>
          <a href="#booking" className="block bg-plumb-yellow text-plumb-deep font-bold text-center py-3 rounded-xl hover:bg-yellow-400 transition-colors">
            Book Now
          </a>
          <p className="text-white/40 text-xs mt-3 text-center">Available 24/7/365</p>
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="border-t border-white/10">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-white/30 text-xs gap-2">
        <span>© 2025 PlumbHero LLC. All rights reserved. Licensed & Insured in Texas.</span>
        <span>Made in Fort Worth, TX 🤠</span>
      </div>
    </div>
  </footer>
);

export default Footer;
