import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { CheckCircle } from "lucide-react";

const GOOGLE_REVIEW_URL = "https://www.google.com/search?q=10325+Harmon+Rd+Ste+605%2C+Fort+Worth%2C+TX+76177%0D%0A%28817%29+470-8920&sca_esv=5746b10727b3273c&udm=1&biw=1280&bih=593&sxsrf=ANbL-n78fpu5hsUhPDAbKTRZ1lmAcTV_LA%3A1774420770139&ei=IoPDaYCWCNm69u8P9pbGqQc&ved=0ahUKEwiAr769uLqTAxVZnf0HHXaLMXU4KBDh1QMIEQ&uact=5&oq=10325+Harmon+Rd+Ste+605%2C+Fort+Worth%2C+TX+76177%0D%0A%28817%29+470-8920&gs_lp=EhZnd3Mtd2l6LW1vZGVsZXNzLWxvY2FsIjwxMDMyNSBIYXJtb24gUmQgU3RlIDYwNSwgRm9ydCBXb3J0aCwgVFggNzYxNzcKKDgxNykgNDcwLTg5MjBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEDyAEA-AEC-AEBmAIAoAIAmAMAkgcAoAcAsgcAuAcAwgcAyAcAgAgA&sclient=gws-wiz-modeless-local&lqi=Cj0xMDMyNSBIYXJtb24gUmQgU3RlIDYwNSwgRm9ydCBXb3J0aCwgVFggNzYxNzcNCig4MTcpIDQ3MC04OTIwSKPJzJqSr4CACFpSEAkQChALGAAYARgCGAMYBBgFGAYYBxgIIjgxMDMyNSBoYXJtb24gcmQgc3RlIDYwNSBmb3J0IHdvcnRoIHR4IDc2MTc3IDgxNyA0NzAgODkyMHoKRm9ydCBXb3J0aJIBB3BsdW1iZXKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTm9iV0UyVWtaM0VBRfoBBQiBBBAx#lkt=LocalPoiReviews&rlimm=15644598845882971531&lrd=0x864dd920533e47ad:0xd91cc7c2fe57358b,3,,,,";
const WEBHOOK_URL = "https://oingcom.app.n8n.cloud/webhook/google-review";

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    rating: "",
    name: "",
    email: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ratingNum = formData.rating ? parseInt(formData.rating) : 0;
  const isPositive = ratingNum >= 4;

  useEffect(() => {
    if (formData.rating && isPositive) {
      // Send only rating to webhook for positive feedback before redirecting
      const sendRatingOnly = async () => {
        try {
          const data = new FormData();
          data.append("rating", formData.rating);
          await fetch(WEBHOOK_URL, { method: "POST", body: data });
        } catch (e) {
          console.warn("Webhook silent failed", e);
        }
        window.location.href = GOOGLE_REVIEW_URL;
      };
      sendRatingOnly();
    }
  }, [formData.rating]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isPositive) return; // Handled by useEffect redirect

    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("rating", formData.rating);
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("description", formData.description);

      // Send data to production webhook
      await fetch(WEBHOOK_URL, {
        method: "POST",
        body: data,
      });

      setIsSubmitted(true);
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

              {formData.rating && !isPositive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-4"
                >
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

                  <div>
                    <label htmlFor="description" className="block text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Please tell us what went wrong:</label>
                    <textarea 
                      name="description" 
                      id="description" 
                      placeholder="Describe your experience..." 
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className={`${inputClass} min-h-[100px] resize-none`}
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-green-500 hover:bg-green-600 disabled:bg-green-800 text-white font-black rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-95"
                  >
                    {isSubmitting ? "Submitting..." : "SUBMIT FEEDBACK"}
                  </button>
                </motion.div>
              )}
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
              We've received your feedback and will contact you soon to resolve any issues.
            </p>
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ rating: "", name: "", email: "", description: "" });
              }}
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
