export const COMPANY = {
  name: "PlumbHero",
  tagline: "Fort Worth's Most Trusted Emergency Plumbers",
  phone: "(817) 470-8920",
  phoneTel: "tel:+18174708920",
  email: "info@plumbhero.com",
  address: "10325 Harmon Rd Ste 605, Fort Worth, TX 76177",
  googleRating: 4.6,
  reviewCount: 27,
  serviceArea: "Fort Worth, TX and surrounding DFW Metroplex",
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
  { icon: "Zap", title: "Emergency Plumbing Repairs", desc: "Burst pipes, flooding, gas leaks — we dispatch certified plumbers to your door in 30 minutes or less, any hour of the day." },
  { icon: "Search", title: "Leak Detection & Repair", desc: "State-of-the-art acoustic and thermal leak detection technology finds hidden leaks behind walls and under slabs without demolition." },
  { icon: "Droplets", title: "Drain Cleaning & Unclogging", desc: "Hydro-jetting, snake, and camera inspection to permanently clear and diagnose slow or completely blocked drains." },
  { icon: "Thermometer", title: "Water Heater Services", desc: "Installation, repair, and replacement of tank and tankless water heaters. Same-day service available — no cold showers." },
  { icon: "GitBranch", title: "Sewer Line Repair", desc: "Full sewer line inspection, repair, and trenchless replacement. We restore flow without tearing up your lawn." },
  { icon: "Wrench", title: "Pipe Installation & Repiping", desc: "Whole-home and commercial repiping using PEX, copper, or CPVC. Increase water pressure and eliminate corroded pipes." },
] as const;

export const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", caption: "Copper Pipe Installation", tall: true },
  { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80", caption: "Burst Pipe Repair", tall: false },
  { src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80", caption: "Drain Cleaning", tall: false },
  { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80", caption: "Water Heater Upgrade", tall: true },
  { src: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&q=80", caption: "Sewer Line Work", tall: false },
  { src: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80", caption: "Under-Sink Repair", tall: true },
  { src: "https://images.unsplash.com/photo-1558618047-f4e60cef0d06?w=600&q=80", caption: "Hydro-Jetting Service", tall: false },
  { src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80", caption: "Bathroom Repiping", tall: false },
] as const;
