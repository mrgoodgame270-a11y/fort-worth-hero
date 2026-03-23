import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-plumb-deep shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-plumb-deep/95 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-20 lg:h-20 md:h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img
            src="/logo.png"
            alt="PlumbHero Logo"
            className="w-12 h-12 transition-transform duration-200 group-hover:scale-105"
            style={{ filter: "drop-shadow(0 0 8px rgba(255,184,0,0.4))" }}
          />
          <span className="text-xl font-bold tracking-tight">
            <span className="text-white">Plumb</span>
            <span className="text-plumb-yellow">Hero</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-all duration-200 border-b-2 border-transparent hover:border-plumb-yellow pb-1 ${
                link.highlight
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
