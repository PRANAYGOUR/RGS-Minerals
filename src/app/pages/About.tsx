import { motion } from "motion/react";
import { DARK, SILVER, VL, ROSE, DARK2 } from "../components/constants";

export default function About() {
  const headerText = "Over 20 Years of Excellence.";

  return (
    <section style={{
      background: DARK, padding: "120px 24px", minHeight: "100vh",
    }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <p style={{ color: VL, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>
            Our Legacy
          </p>
          <h2 style={{
            fontFamily: '"Instrument Serif", serif',
            fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 400,
            color: "#fff", margin: 0, lineHeight: 1.1,
            display: "flex", justifyContent: "center", gap: "0.2em", flexWrap: "wrap"
          }}>
            {headerText.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                style={{
                  color: word.includes("Excellence") ? VL : "#fff",
                  fontStyle: word.includes("Excellence") ? "italic" : "normal"
                }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{
          background: DARK2, border: "1px solid rgba(22,163,74,0.15)",
          borderRadius: 24, padding: "48px", marginBottom: 60,
        }}>
          <h3 style={{
            fontFamily: '"Instrument Serif", serif', fontSize: 28, color: "#fff",
            marginBottom: 24, fontWeight: 400
          }}>Leading Mica Product Manufacturer</h3>
          <p style={{ color: SILVER, fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
            With over 20 years of industry experience, RGS Minerals Private Limited stands as a premier manufacturer
            and exporter of high-quality mica products. Our state-of-the-art facility in Jharkhand, India's mineral-rich
            heartland, enables us to deliver superior quality products to industries worldwide.
          </p>
          <p style={{ color: SILVER, fontSize: 16, lineHeight: 1.8 }}>
            Our two decades of expertise, combined with advanced processing technology and unwavering commitment to
            quality, have established us as a trusted partner for businesses seeking reliable mica product solutions.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          style={{
          display: "flex", gap: 0, justifyContent: "center", flexWrap: "wrap",
          border: `1px solid rgba(22,163,74,0.15)`, borderRadius: 20, overflow: "hidden",
          background: "rgba(6,26,14,0.7)", backdropFilter: "blur(10px)",
        }}>
          {[
            { n: "30+", label: "Countries Served" },
            { n: "25yr", label: "Experience" },
            { n: "50K+", label: "MT Capacity" },
            { n: "ISO", label: "9001 Certified" },
          ].map(({ n, label }, i) => (
            <motion.div 
              key={label}
              whileHover={{ backgroundColor: "rgba(22,163,74,0.1)" }}
              style={{
              flex: 1, minWidth: 140, textAlign: "center", padding: "28px 20px",
              borderRight: i < 3 ? "1px solid rgba(22,163,74,0.12)" : "none",
            }}>
              <div style={{
                fontFamily: '"Instrument Serif", serif', fontSize: 34,
                background: `linear-gradient(135deg, ${VL}, ${ROSE})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                lineHeight: 1.1,
              }}>{n}</div>
              <div style={{ color: "#3D6B4F", fontSize: 11, letterSpacing: "0.1em", marginTop: 5 }}>
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
