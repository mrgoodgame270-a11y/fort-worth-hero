import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { COMPANY } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = COMPANY.phone.replace(/\D/g, ""); // Clean the phone number

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]">
      <div className="relative group">
        {/* Tooltip - Hidden on small mobile */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#0A0F1E] text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap shadow-xl border border-white/10 hidden sm:block"
            >
              Chat with us on WhatsApp
              {/* Arrow */}
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-[#0A0F1E]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulsing Rings */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 scale-125" />

        {/* Main Button */}
        <motion.a
          href={`https://wa.me/1${phoneNumber}?text=Hello%2C%20I%20need%20a%20plumber`}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative flex items-center justify-center w-12 h-12 sm:w-[60px] sm:h-[60px] bg-[#25D366] rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all"
        >
          <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />

          {/* Red Notification Dot */}
          <div className="absolute -top-1 -right-1 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-red-600 text-[10px] font-black text-white border-2 border-[#25D366]">
            1
          </div>
        </motion.a>
      </div>
    </div>
  );
};

export default WhatsAppButton;

export default WhatsAppButton;
