import { Link } from "react-router";
import { motion } from "motion/react";
import { VL, ROSEL, DARK, DARK2, SILVER, icons } from "../components/constants";

export const prods = [
  {
    id: "muscovite-flakes",
    name: "Muscovite Mica Flakes",
    grade: "Electronics Grade",
    desc: "Ultra-pure muscovite flakes with dielectric strength >200 kV/mm. Used in capacitors, high-frequency circuits, and aerospace insulation.",
    img: "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Flakes2.jpg",
    tags: ["99.4% Purity", "Mesh 20–200", "K-Feldspar Matrix"],
    accent: VL,
  },
  {
    id: "phlogopite-powder",
    name: "Phlogopite Mica Powder",
    grade: "Industrial Grade",
    desc: "Thermally stable phlogopite powder with high aspect ratio platelets. Ideal for plastics reinforcement, rubber, and fire-resistant coatings.",
    img: "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Powder.jpg",
    tags: ["Aspect Ratio 60:1", "Temp: 1000°C", "D97 < 45μm"],
    accent: ROSEL,
  },
  {
    id: "wet-ground-mica",
    name: "Wet Ground Mica",
    grade: "Cosmetics Grade",
    desc: "Ultrafine wet-ground mica for paints, cosmetics, and specialty coatings. Controlled brightness and uniform platelet morphology.",
    img: "https://www.ratanmica.com/wp-content/uploads/2023/03/Wet-Ground-Mica-Powder.jpeg",
    tags: ["L* > 92", "Non-toxic", "GMP Certified"],
    accent: "#B8A4FF",
  },
];

export default function Products() {
  const headerText = "Our Products.";

  return (
    <section style={{
      background: DARK, padding: "120px 24px", minHeight: "100vh",
      borderTop: "1px solid rgba(22,163,74,0.1)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ marginBottom: 60 }}
        >
          <p style={{ color: VL, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>
            Product Range
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
            <h2 style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 400,
              color: "#fff", margin: 0, lineHeight: 1.1,
              display: "flex", flexWrap: "wrap", gap: "0.2em"
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
            </h2>
            <Link to="/contact" style={{
              color: ROSEL, fontSize: 13, textDecoration: "none",
              display: "flex", alignItems: "center", gap: 8,
              borderBottom: "1px solid rgba(240,168,208,0.3)", paddingBottom: 2,
              letterSpacing: "0.04em",
            }}>
              Request Samples
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ROSEL} strokeWidth="2">
                <path d={icons.arrow} />
              </svg>
            </Link>
          </div>
        </motion.div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20,
        }}>
          {prods.map((p, i) => (
            <motion.div key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ 
                y: -7, 
                borderColor: "rgba(22,163,74,0.3)",
                boxShadow: `0 20px 48px rgba(0,0,0,0.5)`
              }}
              style={{
                background: "rgba(6,30,14,0.8)",
                border: "1px solid rgba(22,163,74,0.1)",
                borderRadius: 20, overflow: "hidden",
                display: "block"
              }}
            >
              <Link to={`/products/${p.id}`} style={{ textDecoration: "none", display: "block" }}>
                <div style={{ height: 210, background: "#071A0E", overflow: "hidden", position: "relative" }}>
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={p.img} alt={p.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.55) saturate(0.7)" }} 
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: `linear-gradient(to top, ${DARK2}cc, transparent)`,
                    pointerEvents: "none"
                  }} />
                  <div style={{
                    position: "absolute", top: 14, left: 14,
                    background: "rgba(12,11,21,0.75)", backdropFilter: "blur(8px)",
                    border: `1px solid ${p.accent}55`,
                    borderRadius: 99, padding: "4px 14px",
                    fontSize: 10, color: p.accent,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                  }}>{p.grade}</div>
                </div>
                <div style={{ padding: "26px 26px 30px" }}>
                  <h3 style={{
                    fontFamily: '"Instrument Serif", serif', fontSize: 21,
                    fontWeight: 400, color: "#fff", margin: "0 0 10px",
                  }}>{p.name}</h3>
                  <p style={{ color: SILVER, fontSize: 14, lineHeight: 1.72, margin: "0 0 18px" }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {p.tags.map((t) => (
                      <span key={t} style={{
                        background: "rgba(22,163,74,0.08)",
                        border: "1px solid rgba(22,163,74,0.18)",
                        borderRadius: 99, padding: "4px 12px",
                        fontSize: 11, color: "#4A7C59", letterSpacing: "0.04em",
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
