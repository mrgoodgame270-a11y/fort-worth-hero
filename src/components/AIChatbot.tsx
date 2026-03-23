import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { COMPANY } from "@/lib/constants";

type Message = { role: "user" | "assistant"; content: string };

const INITIAL_MSG: Message = {
  role: "assistant",
  content: `Hey! 👋 I'm PlumbHero's emergency assistant. Got a plumbing problem? Tell me what's going on and I'll help you get it fixed ASAP, or call us at ${COMPANY.phone}.`,
};

const AIChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MSG]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Simple auto-response (no API needed for MVP)
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: `I understand you're dealing with a plumbing issue. For the fastest help, call us right now at ${COMPANY.phone} — we respond in 30 minutes or less! You can also book online at the form above. 🚨`,
        },
      ]);
    }, 800);
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[9999] w-16 h-16 rounded-full bg-plumb-yellow shadow-[0_4px_20px_rgba(255,184,0,0.5),0_0_0_4px_rgba(255,184,0,0.15)] flex items-center justify-center hover:scale-110 transition-transform"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        aria-label="Open emergency chat"
      >
        {open ? <X size={26} className="text-plumb-deep" /> : <MessageCircle size={26} className="text-plumb-deep" />}
        {!open && <span className="absolute inset-0 rounded-full border-2 border-plumb-yellow animate-ping-ring" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="fixed bottom-24 right-6 z-[9999] w-[360px] max-w-[calc(100vw-3rem)] h-[480px] bg-plumb-deep rounded-3xl border border-plumb-yellow/30 shadow-[0_20px_80px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-plumb-yellow px-5 py-4 flex items-center gap-3">
              <img src="/logo.png" alt="PlumbHero" className="w-8 h-8" />
              <div>
                <span className="text-plumb-deep font-bold text-sm">PlumbHero</span>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-600 rounded-full" />
                  <span className="text-plumb-deep/70 text-xs">Online Now — 24/7</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-plumb-yellow text-plumb-deep rounded-br-sm"
                      : "bg-white/10 text-white rounded-bl-sm"
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-white/10 px-4 py-3 flex gap-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSend()}
                placeholder="Describe your issue..."
                className="flex-1 bg-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-white/40 outline-none focus:ring-1 focus:ring-plumb-yellow/50"
              />
              <button onClick={handleSend} className="bg-plumb-yellow p-2.5 rounded-lg hover:bg-yellow-400 transition-colors" aria-label="Send message">
                <Send size={16} className="text-plumb-deep" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
