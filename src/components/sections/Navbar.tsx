import { useState, useEffect } from "react";
import { Phone, Menu, X, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? "bg-[#0A0F1E]/95 backdrop-blur-md py-3 shadow-xl" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <img src="/logo.png" alt="PlumbHero Logo" className="h-10 w-auto md:h-12 transition-transform group-hover:scale-110" />
            <div className="absolute -top-1 -right-1">
              <ShieldCheck size={16} className="text-plumb-yellow fill-plumb-yellow animate-pulse" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl md:text-2xl leading-none tracking-wider">PLUMBHERO</span>
            <span className="text-plumb-yellow text-[10px] font-bold uppercase tracking-[0.2em] leading-none mt-1">Fort Worth, TX</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-all duration-200 border-b-2 border-transparent hover:border-plumb-yellow pb-1 ${
                "highlight" in link && link.highlight
                  ? "text-plumb-yellow font-semibold"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-4">
          <a href={COMPANY.phoneTel} className="flex items-center gap-2 text-white font-semibold text-sm hover:text-plumb-yellow transition-colors">
            <Phone size={16} className="text-plumb-yellow" />
            {COMPANY.phone}
          </a>
          <div className="h-6 w-px bg-white/20" />
          <a
            href="#booking"
            className="bg-plumb-yellow text-plumb-deep font-bold text-sm px-5 py-2.5 rounded-full hover:bg-yellow-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,184,0,0.5)] transition-all duration-200"
          >
            🚨 Book Emergency Now
          </a>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="lg:hidden text-white p-2">
            <Menu size={24} />
          </SheetTrigger>
          <SheetContent side="right" className="bg-plumb-deep border-plumb-yellow/20 w-full">
            <div className="flex flex-col gap-6 mt-12">
              <a href={COMPANY.phoneTel} className="text-plumb-yellow text-xl font-bold flex items-center gap-2">
                <Phone size={20} /> {COMPANY.phone}
              </a>
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-white text-lg font-medium hover:text-plumb-yellow transition-colors">
                  {link.label}
                </a>
              ))}
              <a href="#booking" className="bg-plumb-yellow text-plumb-deep font-bold text-center py-4 rounded-xl mt-4">
                🚨 Book Emergency Now
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
