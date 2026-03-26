import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Bell, User, PhoneCall, Zap, X } from "lucide-react";

const notifications = [
  { id: 1, text: "Someone in Fort Worth just booked an emergency repair!", icon: Zap, color: "text-red-500" },
  { id: 2, text: "New customer just called from North Richland Hills", icon: PhoneCall, color: "text-green-500" },
  { id: 3, text: "Plumber dispatched to a leak detection job in Fort Worth", icon: User, color: "text-blue-500" },
  { id: 4, text: "5-star review just received for drain cleaning service!", icon: Bell, color: "text-yellow-500" },
];

const UrgencyPopup = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const showTimerRef = useRef<number | null>(null);
  const hideTimerRef = useRef<number | null>(null);

  const clearTimers = useCallback(() => {
    if (showTimerRef.current) {
      window.clearTimeout(showTimerRef.current);
      showTimerRef.current = null;
    }
    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  const scheduleNextPopup = useCallback(() => {
    if (window.innerWidth < 1024) return;
    const randomDelay = Math.floor(Math.random() * (120000 - 60000 + 1)) + 60000; // 60-120 seconds

    showTimerRef.current = window.setTimeout(() => {
      const state = window as Window & { __desktopPopupVisible?: boolean };
      if (state.__desktopPopupVisible) {
        scheduleNextPopup();
        return;
      }

      state.__desktopPopupVisible = true;
      setIndex((prev) => (prev + 1) % notifications.length);
      setVisible(true);

      hideTimerRef.current = window.setTimeout(() => {
        setVisible(false);
        state.__desktopPopupVisible = false;
        window.dispatchEvent(new CustomEvent("desktop-popup-closed"));
        scheduleNextPopup();
      }, 4000);
    }, randomDelay);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) return;
    const onPopupClosed = () => {
      if (!showTimerRef.current) {
        scheduleNextPopup();
      }
    };

    window.addEventListener("desktop-popup-closed", onPopupClosed);
    scheduleNextPopup();

    return () => {
      clearTimers();
      window.removeEventListener("desktop-popup-closed", onPopupClosed);
      (window as Window & { __desktopPopupVisible?: boolean }).__desktopPopupVisible = false;
    };
  }, [clearTimers, scheduleNextPopup]);

  const current = notifications[index];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          className="fixed bottom-6 left-6 z-[9998] max-w-[320px] bg-white border border-gray-100 shadow-2xl rounded-2xl p-4 hidden lg:flex items-center gap-4"
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
            onClick={() => {
              setVisible(false);
              clearTimers();
              (window as Window & { __desktopPopupVisible?: boolean }).__desktopPopupVisible = false;
              window.dispatchEvent(new CustomEvent("desktop-popup-closed"));
              scheduleNextPopup();
            }}
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
