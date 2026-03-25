export const COMPANY = {
  name: "PlumbHero",
  tagline: "Fort Worth's Most Trusted Emergency Plumbers",
  phone: import.meta.env.VITE_PHONE || "(817) 470-8920",
  phoneTel: `tel:${(import.meta.env.VITE_PHONE || "(817) 470-8920").replace(/\D/g, "")}`,
  email: import.meta.env.VITE_EMAIL || "info@plumbhero.com",
  address: import.meta.env.VITE_ADDRESS || "10325 Harmon Rd Ste 605, Fort Worth, TX 76177",
  googleRating: 4.8,
  reviewCount: 150,
  serviceArea: "Fort Worth, Texas",
  usp: "24/7 Emergency Plumbing — 30 Minute Response Guaranteed",
  years: "10+",
  jobsDone: "1,000+",
  responseTime: "30 Min",
} as const;

export const REVIEWS = [
  { stars: 5, text: "Showed up in 25 minutes at 2 AM. Fixed our burst pipe fast and the price was exactly what they quoted. Unreal service.", author: "Marcus T.", tag: "Fort Worth, TX" },
  { stars: 5, text: "Best plumber in Fort Worth. No games, no upsells, just honest work done right the first time.", author: "Jennifer R.", tag: "Local Guide" },
  { stars: 5, text: "Called at midnight with a flooding bathroom. PlumbHero was there in under 30 minutes. Absolute lifesavers.", author: "David K.", tag: "Fort Worth, TX" },
  { stars: 5, text: "Used them twice now. Consistent, professional, and always upfront about pricing. Highly recommend.", author: "Sarah M.", tag: "Fort Worth, TX" },
  { stars: 4, text: "Great technician, explained everything clearly. Took a bit longer than expected but the quality was top-tier.", author: "Robert L.", tag: "Local Guide" },
] as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Book Now", href: "#booking", highlight: true },
] as const;

export const SERVICES = [
  { 
    icon: "Zap", 
    title: "Emergency Plumbing", 
    desc: "24/7 emergency service for burst pipes, flooding, and urgent repairs in Fort Worth.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
  },
  { 
    icon: "Droplets", 
    title: "Drain Cleaning", 
    desc: "Professional drain cleaning and unclogging services to restore your flow instantly.",
    img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
  },
  { 
    icon: "Search", 
    title: "Leak Detection", 
    desc: "Advanced acoustic and thermal leak detection to find hidden issues without demolition.",
    img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80"
  },
  { 
    icon: "Wrench", 
    title: "Pipe Repair", 
    desc: "Expert pipe installation, repair, and repiping using high-quality materials.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
  },
  { 
    icon: "Thermometer", 
    title: "Water Heater Repair", 
    desc: "Installation and repair of tank and tankless water heaters for consistent hot water.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
  },
  { 
    icon: "Waves", 
    title: "Hydro Jetting", 
    desc: "High-pressure water jetting to clear the most stubborn blockages in your sewer lines.",
    img: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&q=80"
  },
] as const;

export const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", caption: "Copper Pipe Installation" },
  { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", caption: "Tools & Equipment" },
  { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80", caption: "Construction Workers" },
  { src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80", caption: "Hydro-Jetting Pipes" },
  { src: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80", caption: "Plumber at Work" },
  { src: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?w=800&q=80", caption: "Modern Bathroom" },
  { src: "https://images.unsplash.com/photo-1504148455328-497c5efdf13a?w=800&q=80", caption: "Welding Work" },
  { src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80", caption: "Luxury House" },
  { src: "https://images.unsplash.com/photo-1516515429572-111831474243?w=800&q=80", caption: "Commercial Building" },
] as const;
