import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { CheckCircle, ExternalLink } from "lucide-react";

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    rating: "",
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("rating", formData.rating);
      data.append("name", formData.name);
      data.append("email", formData.email);

      // Send data to n8n
      await fetch("https://oingcom.app.n8n.cloud/webhook-test/google-review", {
        method: "POST",
        body: data,
      });

      const ratingNum = parseInt(formData.rating);

      // Show success state on website
      setIsSubmitted(true);

      // Open Google Review in new tab if rating is 4 or 5
      if (ratingNum >= 4) {
        window.open("https://www.google.com/search?q=usa+texas+plumber&sca_esv=7510c8a0c527f380&sxsrf=ANbL-n5DBQ96UF8jNfFNO5LSe6hqCUwEVw:1774286600113&udm=1&lsack=CHfBaZbQBsvp7M8P2tiM4AQ&sa=X&ved=2ahUKEwiW9J3UxLaTAxXLNPsDHVosA0wQjGp6BAgoEAA&biw=1280&bih=593&dpr=1.5&lqi=ChF1c2EgdGV4YXMgcGx1bWJlckii4N3I1q6AgAhaGRACGAEYAiIRdXNhIHRleGFzIHBsdW1iZXKSAQdwbHVtYmVymgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJwUk5WVlliR3hVVjI4eFZWZGtNbE5FVFRKTlNHaDNUbGRXYlZWc1JSQUL6AQUIyAEQSQ#lkt=LocalPoiReviews&rlimm=14664880650562055822&lrd=0x8651b13e24b898fd:0xcb841f40fa402e8,3,,,,", "_blank");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/30 focus:border-plumb-yellow outline-none transition-all";

  return (
    <motion.section 
      id="review-form"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="max-w-[450px] mx-auto mt-20 p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <h3 className="text-2xl font-heading text-white text-center mb-6 tracking-wide">
              How was our plumbing service?
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="rating" className="block text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Rate us:</label>
                <select 
                  name="rating" 
                  id="rating" 
                  required 
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                  className={inputClass}
                >
                  <option value="" className="bg-plumb-deep text-white">Select rating</option>
                  <option value="5" className="bg-plumb-deep text-white">⭐⭐⭐⭐⭐ Excellent</option>
                  <option value="4" className="bg-plumb-deep text-white">⭐⭐⭐⭐ Good</option>
                  <option value="3" className="bg-plumb-deep text-white">⭐⭐⭐ Average</option>
                  <option value="2" className="bg-plumb-deep text-white">⭐⭐ Poor</option>
                  <option value="1" className="bg-plumb-deep text-white">⭐ Bad</option>
                </select>
              </div>

              <div>
                <label htmlFor="name" className="block text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Name:</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder="Your name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Email:</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Your email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-green-500 hover:bg-green-600 disabled:bg-green-800 text-white font-black rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-95"
              >
                {isSubmitting ? "Submitting..." : "SUBMIT FEEDBACK"}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10"
          >
            <div className="flex justify-center mb-6">
              <CheckCircle className="text-green-500 w-20 h-20" />
            </div>
            <h3 className="text-3xl font-heading text-white mb-4 tracking-wide">
              Thank You!
            </h3>
            <p className="text-white/60 mb-8 font-medium">
              Your feedback helps us provide better service to the Fort Worth community.
            </p>
            {parseInt(formData.rating) >= 4 && (
              <p className="text-plumb-yellow text-sm font-bold flex items-center justify-center gap-2">
                Opening Google Reviews in a new tab... <ExternalLink size={16} />
              </p>
            )}
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-8 text-white/40 hover:text-white text-xs font-bold uppercase tracking-widest underline underline-offset-4"
            >
              Submit another review
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default ReviewForm;
