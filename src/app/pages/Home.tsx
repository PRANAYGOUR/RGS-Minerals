import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { V, VL, ROSE, ROSEL, DARK, DARK2, LIGHT, SILVER, LIGHT2, icons, Ico } from "../components/constants";

export default function Home() {
  const advs = [
    { icon: "star", title: "Premium Quality", desc: "ISO 9001:2015 certified. XRF-verified chemical purity and optical brightness standards exceeding international benchmarks." },
    { icon: "globe", title: "Global Export", desc: "Direct FCL/LCL shipping to 30+ countries with full export documentation, freight partnerships, and customs support." },
    { icon: "factory", title: "Modern Facilities", desc: "50,000 MT annual capacity with automated splitting lines, climate-controlled storage, and thermal treatment chambers." },
    { icon: "shield", title: "Reliable Supply", desc: "Vertically integrated supply chain — mine to port — with guaranteed lead times, buffer inventory, and dedicated account teams." },
  ];

  const heroText = "The Core of Global Industry.";

  return (
    <div>
      {/* Hero */}
      <section style={{
        position: "relative", minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", overflow: "hidden",
        background: DARK,
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1563089145-599997674d42?w=1800&h=1000&fit=crop&auto=format')",
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(0.18) saturate(0.6) hue-rotate(100deg)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 15%, #061A0E 100%)",
        }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 900, padding: "0 24px" }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ marginBottom: 24 }}
          >
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: 11, letterSpacing: "0.18em", color: ROSEL,
              textTransform: "uppercase", fontWeight: 500,
              border: `1px solid rgba(5,150,105,0.3)`,
              borderRadius: 99, padding: "6px 18px",
            }}>
              Global Mica Manufacturer · Est. 1998
            </span>
          </motion.div>

          <h1 style={{
            fontFamily: '"Instrument Serif", serif',
            fontSize: "clamp(50px, 8.5vw, 96px)",
            fontWeight: 400, lineHeight: 1.05, color: "#fff",
            margin: "0 0 24px", letterSpacing: "-0.01em",
            display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.2em"
          }}>
            {heroText.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                style={{
                  background: word.includes("Global") || word.includes("Industry") ? `linear-gradient(120deg, ${VL} 0%, ${ROSEL} 100%)` : "none",
                  WebkitBackgroundClip: word.includes("Global") || word.includes("Industry") ? "text" : "none",
                  WebkitTextFillColor: word.includes("Global") || word.includes("Industry") ? "transparent" : "#fff",
                  fontStyle: word.includes("Global") || word.includes("Industry") ? "italic" : "normal"
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{
              color: SILVER, fontSize: 17, lineHeight: 1.75,
              maxWidth: 580, margin: "0 auto 44px", fontWeight: 300,
          }}>
            RGS Minerals delivers precision-engineered mica products to leading manufacturers
            across 30+ countries. Unmatched purity. Consistent supply. Industrial-grade reliability.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}
          >
            <motion.div whileHover={{ scale: 1.05, boxShadow: `0 0 46px rgba(22,163,74,0.6)` }} whileTap={{ scale: 0.95 }}>
              <Link to="/products" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: `linear-gradient(135deg, ${V} 0%, ${ROSE} 100%)`,
                color: "#fff", borderRadius: 99, padding: "14px 34px",
                fontWeight: 600, fontSize: 14, textDecoration: "none",
                boxShadow: `0 0 36px rgba(22,163,74,0.4)`,
                letterSpacing: "0.02em",
              }}>
                Explore Products
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2">
                  <path d={icons.arrow} />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Gallery */}
      <section style={{ background: "#08130B", padding: "120px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "center", marginBottom: 60 }}
          >
            <h2 style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400,
              color: "#fff", margin: "0 0 16px", lineHeight: 1.1,
            }}>
              Our Materials.
            </h2>
            <p style={{ color: SILVER, fontSize: 16 }}>Premium grade mica extracts for global industries.</p>
          </motion.div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20
          }}>
            {[
              { name: "Mica Flakes", img: "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Flakes2.jpg" },
              { name: "Wet Ground Powder", img: "https://www.ratanmica.com/wp-content/uploads/2023/03/Wet-Ground-Mica-Powder.jpeg" },
              { name: "Ruby Mica", img: "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Blocks2-1.jpg" },
              { name: "Mica Scraps", img: "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Scrap.jpg" },
            ].map((item, i) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                style={{
                  position: "relative", borderRadius: 16, overflow: "hidden", height: 280,
                  border: "1px solid rgba(255,255,255,0.05)"
                }}
              >
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={item.img} 
                  alt={item.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.85) saturate(0.9)" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)",
                  pointerEvents: "none", display: "flex", alignItems: "flex-end", padding: 24
                }}>
                  <h3 style={{
                    fontFamily: '"Instrument Serif", serif', fontSize: 24,
                    color: "#fff", margin: 0, letterSpacing: "0.02em"
                  }}>{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="quality" style={{
        background: LIGHT, padding: "120px 24px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <p style={{ color: ROSE, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>
              Why Choose RGS
            </p>
            <h2 style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 400,
              color: "#0D2B1A", margin: "0 auto 16px", lineHeight: 1.1, maxWidth: 600,
            }}>
              Unfair <span style={{ fontStyle: "italic", color: V }}>Advantages.</span>
            </h2>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.5 }}
              style={{
                background: `linear-gradient(135deg, ${V} 0%, ${ROSE} 100%)`,
                borderRadius: 20, padding: "24px 40px", textAlign: "center",
                boxShadow: `0 0 48px rgba(22,163,74,0.25)`,
                position: "relative", zIndex: 2,
              }}
            >
              <span style={{ fontFamily: '"Instrument Serif", serif', fontSize: 22, color: "#fff", fontStyle: "italic" }}>
                RGS Minerals Private Limited
              </span>
            </motion.div>
            
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: 48 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ width: 1, background: `linear-gradient(to bottom, ${V}, rgba(22,163,74,0.2))` }} 
            />
            
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 18, width: "100%",
            }}>
              {advs.map((a, i) => (
                <motion.div key={a.title} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: `0 8px 40px rgba(22,163,74,0.15)`,
                    borderColor: `rgba(22,163,74,0.35)`
                  }}
                  style={{
                    background: "#fff", border: `1px solid ${LIGHT2}`,
                    borderRadius: 18, padding: "28px",
                    boxShadow: "0 2px 20px rgba(90,70,140,0.07)",
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, marginBottom: 16,
                    background: `linear-gradient(135deg, rgba(22,163,74,0.12), rgba(5,150,105,0.1))`,
                    border: `1px solid rgba(22,163,74,0.2)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Ico d={icons[a.icon as keyof typeof icons]} dark />
                  </div>
                  <h3 style={{
                    fontFamily: '"Instrument Serif", serif', fontSize: 20,
                    fontWeight: 400, color: "#0D2B1A", margin: "0 0 10px",
                  }}>{a.title}</h3>
                  <p style={{ color: "#2D5940", fontSize: 14, lineHeight: 1.72, margin: 0 }}>{a.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section style={{ background: DARK, padding: "100px 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: 40 }}
          >
            <h2 style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400,
              color: "#fff", margin: "0 0 16px", lineHeight: 1.1,
            }}>
              Get a <span style={{ fontStyle: "italic", color: VL }}>Quick Quote.</span>
            </h2>
            <p style={{ color: SILVER, fontSize: 16 }}>Need bulk orders or specific grades? Send us a quick inquiry.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.6 }}
            style={{
              background: "rgba(8,30,16,0.8)",
              border: `1px solid rgba(22,163,74,0.12)`,
              borderRadius: 24, padding: "40px",
            }}
          >
            <HomeQuoteForm />
          </motion.div>
        </div>
      </section>

      {/* Ready to Partner CTA */}
      <section style={{ 
        background: `linear-gradient(135deg, ${DARK2} 0%, rgba(6,30,14,0.9) 100%)`, 
        padding: "100px 24px",
        borderTop: "1px solid rgba(22,163,74,0.1)",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400,
              color: "#fff", margin: "0 0 16px", lineHeight: 1.1,
            }}>
              Ready to <span style={{ fontStyle: "italic", color: VL }}>Partner With Us?</span>
            </h2>
            <p style={{ color: SILVER, fontSize: 18, marginBottom: 48, fontWeight: 300 }}>
              Get in touch with our team to discuss your mica product requirements
            </p>
            
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact" style={{
                background: "#fff", color: DARK,
                padding: "14px 32px", borderRadius: 12,
                fontSize: 15, fontWeight: 600, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 8,
                transition: "transform 0.2s"
              }} onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
                 onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}>
                Contact Us
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              
              <a href="tel:+918939632702" style={{
                background: "transparent", color: "#fff",
                border: `1px solid rgba(22,163,74,0.4)`,
                padding: "14px 32px", borderRadius: 12,
                fontSize: 15, fontWeight: 600, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 8,
                transition: "border-color 0.2s, background 0.2s"
              }} onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = VL;
                  e.currentTarget.style.background = "rgba(22,163,74,0.1)";
                 }}
                 onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(22,163,74,0.4)";
                  e.currentTarget.style.background = "transparent";
                 }}>
                Call: +91 89396 32702
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function HomeQuoteForm() {
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

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        style={{ padding: "40px 20px" }}
      >
        <h3 style={{ fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 12 }}>Request Sent!</h3>
        <p style={{ color: SILVER, fontSize: 15 }}>Our sales team will contact you shortly.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 14 }}>
      <input name="entry.1131438936" required placeholder="Full Name" style={{
        background: "rgba(255,255,255,0.05)", border: `1px solid rgba(255,255,255,0.1)`,
        borderRadius: 10, padding: "13px 16px", color: "#fff",
        fontSize: 14, outline: "none", transition: "border-color 0.2s",
      }}
        onFocus={(e) => ((e.target as HTMLElement).style.borderColor = `rgba(22,163,74,0.5)`)}
        onBlur={(e) => ((e.target as HTMLElement).style.borderColor = `rgba(255,255,255,0.1)`)} />

      <div className="mobile-grid-1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <input name="entry.1914267891" placeholder="Company" style={{
          background: "rgba(255,255,255,0.05)", border: `1px solid rgba(255,255,255,0.1)`,
          borderRadius: 10, padding: "13px 16px", color: "#fff",
          fontSize: 14, outline: "none", transition: "border-color 0.2s",
        }}
          onFocus={(e) => ((e.target as HTMLElement).style.borderColor = `rgba(22,163,74,0.5)`)}
          onBlur={(e) => ((e.target as HTMLElement).style.borderColor = `rgba(255,255,255,0.1)`)} />
        
        <input type="email" name="entry.501434303" required placeholder="Email Address" style={{
          background: "rgba(255,255,255,0.05)", border: `1px solid rgba(255,255,255,0.1)`,
          borderRadius: 10, padding: "13px 16px", color: "#fff",
          fontSize: 14, outline: "none", transition: "border-color 0.2s",
        }}
          onFocus={(e) => ((e.target as HTMLElement).style.borderColor = `rgba(22,163,74,0.5)`)}
          onBlur={(e) => ((e.target as HTMLElement).style.borderColor = `rgba(255,255,255,0.1)`)} />
      </div>

      <textarea name="entry.929395825" required placeholder="Describe your requirement..." rows={3} style={{
        background: "rgba(255,255,255,0.05)", border: `1px solid rgba(255,255,255,0.1)`,
        borderRadius: 10, padding: "13px 16px", color: "#fff",
        fontSize: 14, outline: "none", resize: "vertical", transition: "border-color 0.2s",
      }}
        onFocus={(e) => ((e.target as HTMLElement).style.borderColor = `rgba(22,163,74,0.5)`)}
        onBlur={(e) => ((e.target as HTMLElement).style.borderColor = `rgba(255,255,255,0.1)`)} />

      <motion.button 
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        type="submit" disabled={isSubmitting} style={{
        background: `linear-gradient(135deg, ${V} 0%, ${ROSE} 100%)`,
        color: "#fff", border: "none", borderRadius: 10, padding: "15px",
        fontWeight: 700, fontSize: 15, cursor: isSubmitting ? "wait" : "pointer",
        opacity: isSubmitting ? 0.7 : 1, transition: "opacity 0.2s",
      }}>
        {isSubmitting ? "Sending..." : "Request Quote"}
      </motion.button>
    </form>
  );
}
