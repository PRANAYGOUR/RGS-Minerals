import { useState } from "react";
import { motion } from "motion/react";
import { V, LIGHT2, LIGHT, ROSE } from "../components/constants";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("https://docs.google.com/forms/d/e/1FAIpQLSedka8ZlL8DVW0E8kChaMhyZEjVWTXZcA9uD2ySqj0Dla9o-w/formResponse", {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const headerText = "Exceptional Together.";

  return (
    <section id="contact" style={{
      background: LIGHT2, padding: "120px 24px", minHeight: "100vh",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: -100, right: -100, width: 500, height: 500,
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(22,163,74,0.08) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -80, left: -80, width: 400, height: 400,
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(5,150,105,0.07) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p style={{ color: V, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 18, fontWeight: 600 }}>
            Ready to Partner
          </p>
          <h2 style={{
            fontFamily: '"Instrument Serif", serif',
            fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 400,
            color: "#0D2B1A", margin: "0 0 18px", lineHeight: 1.1,
          }}>
            Let's Build Something<br />
            <span style={{ 
              fontStyle: "italic", color: V, 
              display: "flex", justifyContent: "center", gap: "0.2em", flexWrap: "wrap" 
            }}>
              {headerText.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h2>
          <p style={{ color: "#2D5940", fontSize: 16, lineHeight: 1.75, marginBottom: 48 }}>
            Whether you need bulk orders, custom specifications, or technical consultation — our team responds within 24 hours.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{
          background: "#fff",
          border: `1px solid ${LIGHT2}`,
          borderRadius: 24, padding: "44px 40px",
          boxShadow: "0 8px 60px rgba(90,70,140,0.1)",
        }}>
          {isSubmitted ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: "60px 20px" }}>
              <div style={{
                width: 60, height: 60, borderRadius: "50%",
                background: `linear-gradient(135deg, ${V} 0%, ${ROSE} 100%)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 24px", color: "#fff"
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: "#0D2B1A", marginBottom: 12 }}>Thank you!</h3>
              <p style={{ color: "#2D5940", fontSize: 15 }}>Your inquiry has been successfully submitted. We will get back to you shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 14 }}>
              <div className="mobile-grid-1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <input name="entry.1131438936" required placeholder="Full Name" style={{
                  background: LIGHT, border: `1px solid ${LIGHT2}`,
                  borderRadius: 10, padding: "13px 16px", color: "#0D2B1A",
                  fontSize: 14, outline: "none", transition: "border-color 0.2s",
                  fontFamily: '"Inter", sans-serif',
                }}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = `rgba(22,163,74,0.5)`)}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = LIGHT2)} />
                
                <input name="entry.1914267891" placeholder="Company" style={{
                  background: LIGHT, border: `1px solid ${LIGHT2}`,
                  borderRadius: 10, padding: "13px 16px", color: "#0D2B1A",
                  fontSize: 14, outline: "none", transition: "border-color 0.2s",
                  fontFamily: '"Inter", sans-serif',
                }}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = `rgba(22,163,74,0.5)`)}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = LIGHT2)} />
              </div>
              
              <input type="email" name="entry.501434303" required placeholder="Email Address" style={{
                background: LIGHT, border: `1px solid ${LIGHT2}`,
                borderRadius: 10, padding: "13px 16px", color: "#0D2B1A",
                fontSize: 14, outline: "none", transition: "border-color 0.2s",
                fontFamily: '"Inter", sans-serif',
              }}
                onFocus={(e) => ((e.target as HTMLElement).style.borderColor = `rgba(22,163,74,0.5)`)}
                onBlur={(e) => ((e.target as HTMLElement).style.borderColor = LIGHT2)} />
                
              <textarea name="entry.929395825" required placeholder="Describe your requirements — product type, quantity, destination, timeline..." rows={4} style={{
                background: LIGHT, border: `1px solid ${LIGHT2}`,
                borderRadius: 10, padding: "13px 16px", color: "#0D2B1A",
                fontSize: 14, outline: "none", resize: "vertical",
                fontFamily: '"Inter", sans-serif', transition: "border-color 0.2s",
              }}
                onFocus={(e) => ((e.target as HTMLElement).style.borderColor = `rgba(22,163,74,0.5)`)}
                onBlur={(e) => ((e.target as HTMLElement).style.borderColor = LIGHT2)} />
                
              <motion.button 
                whileHover={{ scale: isSubmitting ? 1 : 1.02, translateY: -2, boxShadow: `0 8px 40px rgba(22,163,74,0.5)` }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit" disabled={isSubmitting} style={{
                background: `linear-gradient(135deg, ${V} 0%, ${ROSE} 100%)`,
                color: "#fff", border: "none", borderRadius: 10, padding: "15px",
                fontWeight: 700, fontSize: 15, cursor: isSubmitting ? "wait" : "pointer",
                boxShadow: `0 0 32px rgba(22,163,74,0.3)`,
                letterSpacing: "0.03em",
                fontFamily: '"Inter", sans-serif', opacity: isSubmitting ? 0.7 : 1
              }}>
                {isSubmitting ? "Sending..." : "Send Inquiry →"}
              </motion.button>
            </form>
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          style={{
          display: "flex", gap: 40, justifyContent: "center", marginTop: 40, flexWrap: "wrap",
        }}>
          {[
            { label: "Email", val: "exports@rgsminerals.com" },
            { label: "Phone", val: "+91 99300 12345" },
            { label: "HQ", val: "Koderma, Jharkhand, India" },
          ].map(({ label, val }) => (
            <motion.div key={label} whileHover={{ y: -2 }} style={{ textAlign: "center" }}>
              <div style={{ color: "#6B9E7A", fontSize: 11, letterSpacing: "0.12em", marginBottom: 4 }}>{label}</div>
              <div style={{ color: "#1A4D2E", fontSize: 13, fontWeight: 500 }}>{val}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
