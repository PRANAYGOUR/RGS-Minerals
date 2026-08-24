import { Outlet, Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { Phone, Menu, X, MapPin, Mail } from "lucide-react";

// Palette reference
const V = "#16A34A";       // forest green
const VL = "#22C55E";      // bright green
const ROSE = "#059669";    // emerald
const ROSEL = "#86EFAC";   // light green
const DARK = "#061A0E";
const DARK2 = "#0C2415";
const LIGHT = "#FFFFFF";
const LIGHT2 = "#F0FAF4";
const SILVER = "#A3B8AC";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

import { motion, useScroll, useMotionValueEvent } from "motion/react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Quality", path: "/quality" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <>
      <motion.nav
        className="mobile-nav-container"
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed", left: "50%", zIndex: 100, 
          width: "min(980px, calc(100vw - 32px))",
          borderRadius: 99,
          border: "1px solid rgba(22,163,74,0.2)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 10,
          background: isScrolled ? "rgba(4,18,8,0.95)" : "rgba(6,26,14,0.5)",
          backdropFilter: isScrolled ? "blur(30px)" : "blur(12px)",
          WebkitBackdropFilter: isScrolled ? "blur(30px)" : "blur(12px)",
          padding: isScrolled ? "8px 16px 8px 24px" : "14px 20px 14px 28px",
          top: isScrolled ? 12 : 24,
          boxShadow: isScrolled 
            ? "0 0 30px rgba(22,163,74,0.15), 0 2px 20px rgba(0,0,0,0.8)" 
            : "0 0 40px rgba(22,163,74,0.05), 0 2px 40px rgba(0,0,0,0.4)",
        }}
      >
        {/* Logo - Always visible */}
        <Link className="mobile-nav-logo" to="/" style={{
          fontFamily: '"Instrument Serif", serif', fontSize: 18, color: "#fff",
          letterSpacing: "0.01em", whiteSpace: "nowrap", textDecoration: "none",
          flexShrink: 0
        }}>
          RGS <span style={{ color: VL }}>Minerals</span>
        </Link>

        {/* Desktop Links - Hidden on mobile */}
        <div style={{ display: "none", gap: 32, alignItems: "center" }} className="sm-flex">
          {links.map((l) => {
            // Check if current path starts with link path, but only for exact matches on Home
            const isActive = l.path === "/" 
              ? location.pathname === "/" 
              : location.pathname.startsWith(l.path);
              
            return (
              <motion.div key={l.label} whileHover={{ y: -2 }}>
                <Link to={l.path} style={{
                  color: isActive ? VL : SILVER, 
                  fontSize: 13, textDecoration: "none",
                  fontWeight: isActive ? 600 : 400,
                  letterSpacing: "0.03em", transition: "color 0.2s",
                }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = isActive ? VL : SILVER)}>
                  {l.label}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Action Button & Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <motion.div whileHover={{ scale: 0.97 }} whileTap={{ scale: 0.95 }}>
            <Link className="mobile-nav-btn" to="/contact" style={{
              background: `linear-gradient(135deg, ${V}, ${ROSE})`,
              color: "#fff", borderRadius: 99, padding: isScrolled ? "8px 20px" : "10px 24px",
              fontSize: 13, fontWeight: 600, textDecoration: "none",
              whiteSpace: "nowrap", letterSpacing: "0.02em",
              boxShadow: "0 20px rgba(22,163,74,0.35)",
              display: "inline-block",
              transition: "padding 0.3s"
            }}>
              Get a Quote
            </Link>
          </motion.div>
          
          <button 
            className="sm-hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: "transparent", border: "none", color: "#fff",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              padding: 4
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="sm-hidden" style={{
          position: "fixed", top: 80, left: 16, right: 16,
          background: "rgba(6,26,14,0.95)",
          backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(22,163,74,0.2)",
          borderRadius: 24, padding: "20px", zIndex: 99,
          display: "flex", flexDirection: "column", gap: 16,
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
        }}>
          {links.map((l) => (
            <Link key={l.label} to={l.path} 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                color: "#fff", fontSize: 16, textDecoration: "none",
                padding: "10px 0", borderBottom: "1px solid rgba(22,163,74,0.1)"
              }}>
              {l.label}
            </Link>
          ))}
        </motion.div>
      )}
    </>
  );
}

function Footer() {
  const qLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Quality & Infrastructure", path: "/quality" },
    { label: "Contact Us", path: "/contact" }
  ];

  return (
    <footer style={{
      background: DARK, borderTop: "1px solid rgba(22,163,74,0.1)",
      padding: "60px 24px 24px", color: SILVER
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: 40, marginBottom: 40,
      }}>
        {/* Col 1 */}
        <div>
          <div style={{ marginBottom: 16 }}>
            <span style={{
              fontFamily: '"Instrument Serif", serif', fontSize: 24, color: "#fff",
              display: "block", lineHeight: 1.1
            }}>
              RGS <span style={{ color: VL }}>Minerals</span>
            </span>
            <span style={{ fontSize: 13, color: SILVER, display: "block" }}>
              Private Limited
            </span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0, color: "#8EAB9B" }}>
            Premium Mica Products for Global Industries. Trusted supplier of high-quality mica products with state-of-the-art manufacturing facilities.
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 style={{ color: "#fff", fontSize: 16, fontWeight: 600, margin: "0 0 20px" }}>Quick Links</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {qLinks.map((l) => (
              <Link key={l.label} to={l.path} style={{
                color: "#8EAB9B", fontSize: 14, textDecoration: "none", transition: "color 0.2s"
              }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = VL)}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#8EAB9B")}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 3 */}
        <div>
          <h4 style={{ color: "#fff", fontSize: 16, fontWeight: 600, margin: "0 0 20px" }}>Contact Us</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, color: "#8EAB9B", fontSize: 14 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <MapPin size={18} color={VL} style={{ flexShrink: 0, marginTop: 2 }} />
              <span>Teynampet, Chennai</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <Phone size={18} color={VL} style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <a href="tel:+918939632702" style={{ color: "inherit", textDecoration: "none" }}>+91 89396 32702</a>
                <div style={{ fontSize: 12, opacity: 0.8, marginTop: 2 }}>WhatsApp Available</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <Mail size={18} color={VL} style={{ flexShrink: 0, marginTop: 2 }} />
              <a href="mailto:rgsmineral@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>rgsmineral@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: 1100, margin: "0 auto",
        borderTop: "1px solid rgba(22,163,74,0.1)",
        paddingTop: 24, textAlign: "center",
      }}>
        <span style={{ color: "#4B6B59", fontSize: 13 }}>
          © 2026 RGS Minerals Private Limited. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  useReveal();
  return (
    <div style={{ background: DARK, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <ScrollToTop />
      <Navbar />
      <div style={{ flex: 1, paddingTop: 80 }}>
        <Outlet />
      </div>
      <Footer />
      
      {/* Floating Phone Button */}
      <a href="tel:+919930012345" style={{
        position: "fixed", bottom: 24, right: 24, zIndex: 90,
        width: 56, height: 56, borderRadius: "50%",
        background: `linear-gradient(135deg, ${V}, ${ROSE})`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#fff", textDecoration: "none",
        boxShadow: "0 10px 30px rgba(22,163,74,0.4)",
        transition: "transform 0.2s",
      }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <Phone size={24} fill="currentColor" />
      </a>
    </div>
  );
}
