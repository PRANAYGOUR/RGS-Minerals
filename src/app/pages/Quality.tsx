import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { DARK2, VL, V, ROSE, SILVER, ROSEL } from "../components/constants";

export default function Quality() {
  const steps = [
    { num: "01", title: "Raw Material Extraction", desc: "High-grade muscovite and phlogopite mica sourced from certified mines across Jharkhand and Rajasthan, with rigorous geological purity assessments at origin." },
    { num: "02", title: "Splitting & Optical Grading", desc: "Proprietary mechanical splitting lines achieve ±0.01mm thickness tolerance. Automated optical graders sort by brightness, mesh size, and aspect ratio." },
    { num: "03", title: "Thermal & Chemical Treatment", desc: "Controlled calcination at 850°C removes organic impurities while preserving crystalline structure. Surface-coating options for specialty applications." },
    { num: "04", title: "Quality Assurance & Lab Testing", desc: "Every batch undergoes XRF elemental analysis, particle size distribution, and dielectric strength measurement in our ISO-certified laboratory." },
    { num: "05", title: "Packaging & Global Export", desc: "Vacuum-sealed moisture-proof packaging in 25 kg, 50 kg, or bulk-bag formats. Full export documentation and direct FCL/LCL shipping to 30+ nations." },
  ];

  const headerText = "How We Build.";
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="operations" style={{
      background: DARK2, padding: "120px 24px", minHeight: "100vh",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "50%", left: 0,
        transform: "translateY(-50%)",
        width: 400, height: 700,
        background: `radial-gradient(ellipse, rgba(22,163,74,0.06) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "50%", right: 0,
        transform: "translateY(-50%)",
        width: 400, height: 700,
        background: `radial-gradient(ellipse, rgba(5,150,105,0.05) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 920, margin: "0 auto", position: "relative" }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <p style={{ color: VL, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>
            Our Process
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
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <style>
          {`
            @media (max-width: 768px) {
              .timeline-line { left: 24px !important; }
              .timeline-item { justify-content: flex-end !important; }
              .timeline-dot { left: 24px !important; }
              .timeline-content { width: calc(100% - 64px) !important; }
              .timeline-glow { left: 24px !important; }
            }
          `}
        </style>

        <div ref={containerRef} style={{ position: "relative" }}>
          {/* Background line */}
          <motion.div 
            initial={{ height: 0, x: "-50%" }}
            whileInView={{ height: "100%", x: "-50%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="timeline-line" style={{
            position: "absolute", left: "50%", top: 0, width: 1,
            background: `rgba(22,163,74,0.15)`,
          }} />
          
          {/* Scroll progress glow line */}
          <motion.div 
            className="timeline-glow" style={{
            position: "absolute", left: "50%", top: 0, width: 2,
            background: `linear-gradient(to bottom, ${V}, ${VL})`,
            boxShadow: `0 0 16px ${VL}`,
            scaleY: scrollYProgress,
            x: "-50%",
            transformOrigin: "top",
            height: "100%", zIndex: 1
          }} />

          {steps.map((s, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div key={s.num} className="timeline-item"
                initial={{ opacity: 0, x: left ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                style={{
                  display: "flex", justifyContent: left ? "flex-start" : "flex-end",
                  marginBottom: 52, position: "relative",
                }}>
                <motion.div 
                  initial={{ scale: 0, x: "-50%" }}
                  whileInView={{ scale: 1, x: "-50%" }}
                  viewport={{ amount: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="timeline-dot" style={{
                  position: "absolute", left: "50%", top: 30, width: 12, height: 12,
                  borderRadius: "50%", zIndex: 2,
                  background: i % 2 === 0 ? V : ROSE,
                  boxShadow: `0 0 16px ${VL}`,
                  border: `2px solid ${DARK2}`,
                }} />

                <motion.div className="timeline-content" 
                  whileHover={{ 
                    borderColor: `rgba(22,163,74,0.4)`, 
                    boxShadow: `0 0 32px rgba(22,163,74,0.1)`,
                    y: -5
                  }}
                  style={{
                  width: "calc(50% - 44px)",
                  background: "rgba(8,30,16,0.8)",
                  border: `1px solid rgba(22,163,74,0.12)`,
                  borderRadius: 18,
                  padding: "28px",
                }}>
                  <div style={{
                    fontFamily: '"Instrument Serif", serif', fontSize: 48,
                    background: `linear-gradient(135deg, ${VL}, ${ROSEL})`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    lineHeight: 1, marginBottom: 12, letterSpacing: "-0.02em",
                  }}>{s.num}</div>
                  <h3 style={{
                    fontFamily: '"Instrument Serif", serif', fontSize: 19,
                    fontWeight: 400, color: "#fff", margin: "0 0 10px",
                  }}>{s.title}</h3>
                  <p style={{ color: SILVER, fontSize: 14, lineHeight: 1.72, margin: 0 }}>{s.desc}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
