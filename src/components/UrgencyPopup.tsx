import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Bell, User, PhoneCall, Zap } from "lucide-react";

const notifications = [
  { id: 1, text: "Someone in Fort Worth just booked an emergency repair!", icon: Zap, color: "text-red-500" },
  { id: 2, text: "New customer just called from North Richland Hills", icon: PhoneCall, color: "text-green-500" },
  { id: 3, text: "Plumber dispatched to a leak detection job in Fort Worth", icon: User, color: "text-blue-500" },
  { id: 4, text: "5-star review just received for drain cleaning service!", icon: Bell, color: "text-yellow-500" },
];

const UrgencyPopup = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(true);
      
      const hideTimeout = setTimeout(() => {
        setVisible(false);
        // Move to next after hiding
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % notifications.length);
        }, 500);
      }, 4000); // Show for 4 seconds

      return () => clearTimeout(hideTimeout);
    }, 10000); // Repeat every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const current = notifications[index];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          className="fixed bottom-24 sm:bottom-6 left-4 sm:left-6 z-[9998] w-[calc(100%-32px)] sm:max-w-[320px] bg-white border border-gray-100 shadow-2xl rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4"
        >
          <div className={`p-2 rounded-full bg-gray-50 shrink-0 ${current.color}`}>
            <current.icon size={20} className="sm:w-6 sm:h-6" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] sm:text-sm font-bold text-plumb-deep leading-tight truncate-2-lines">
              {current.text}
            </p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
              Just Now
            </p>
          </div>
          <button 
            onClick={() => setVisible(false)}
            className="shrink-0 p-1 text-gray-300 hover:text-gray-600 transition-colors"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UrgencyPopup;
