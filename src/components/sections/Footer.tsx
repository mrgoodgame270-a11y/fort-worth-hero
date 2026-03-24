import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { Phone, Mail, MapPin, ShieldCheck, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-plumb-deep text-white pt-20 pb-10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.png" alt="PlumbHero Footer Logo" className="h-12 w-auto" />
            <span className="font-heading text-2xl tracking-wider">PLUMBHERO</span>
          </a>
          <p className="text-white/50 leading-relaxed font-medium">
            Fort Worth's most trusted emergency plumbers. Licensed, insured, and available 24/7 to keep your home safe.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-plumb-yellow hover:text-plumb-deep transition-all"><Facebook size={20} /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-plumb-yellow hover:text-plumb-deep transition-all"><Instagram size={20} /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-plumb-yellow hover:text-plumb-deep transition-all"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-plumb-yellow uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-4">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <a href={link.href} className="text-white/60 hover:text-plumb-yellow transition-colors font-medium flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-plumb-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-plumb-yellow uppercase tracking-widest">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-plumb-yellow shrink-0" size={20} />
              <span className="text-white/60 font-medium">{COMPANY.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-plumb-yellow shrink-0" size={20} />
              <a href={COMPANY.phoneTel} className="text-white/60 hover:text-plumb-yellow transition-colors font-medium">{COMPANY.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-plumb-yellow shrink-0" size="20" />
              <a href={`mailto:${COMPANY.email}`} className="text-white/60 hover:text-plumb-yellow transition-colors font-medium">{COMPANY.email}</a>
            </li>
          </ul>
        </div>

        {/* Trust */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-plumb-yellow uppercase tracking-widest">Trust & Safety</h4>
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-4">
              <ShieldCheck className="text-plumb-yellow" size={32} />
              <div>
                <p className="font-bold text-sm">Licensed & Insured</p>
                <p className="text-xs text-white/40">Registered in Texas</p>
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-4">
              <Clock className="text-plumb-yellow" size={32} />
              <div>
                <p className="font-bold text-sm">24/7 Response</p>
                <p className="text-xs text-white/40">Always available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 border-t border-white/5 text-center">
        <p className="text-white/30 text-sm font-medium">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved. Designed for excellence.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
