import { useParams, Link } from "react-router";
import { useReveal } from "../components/Layout";
import { DARK, DARK2, VL, SILVER, ROSE, icons } from "../components/constants";
import { prods } from "./Products";

export default function ProductDetail() {
  useReveal();
  const { productId } = useParams();
  
  const product = prods.find(p => p.id === productId) || prods[0];

  return (
    <section style={{
      background: DARK, minHeight: "100vh", padding: "120px 24px",
    }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div className="reveal" style={{ marginBottom: 40 }}>
          <Link to="/products" style={{
            color: SILVER, textDecoration: "none", fontSize: 14,
            display: "inline-flex", alignItems: "center", gap: 6,
          }}>
            ← Back to Products
          </Link>
        </div>

        <div className="reveal d1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          {/* Image */}
          <div style={{
            borderRadius: 24, overflow: "hidden", position: "relative",
            border: `1px solid rgba(22,163,74,0.15)`, boxShadow: "0 20px 60px rgba(0,0,0,0.6)"
          }}>
            <img src={product.img} alt={product.name} style={{ width: "100%", display: "block" }} />
            <div style={{
              position: "absolute", top: 20, left: 20,
              background: "rgba(12,11,21,0.75)", backdropFilter: "blur(8px)",
              border: `1px solid ${product.accent}55`, borderRadius: 99, padding: "6px 16px",
              fontSize: 11, color: product.accent, letterSpacing: "0.12em", textTransform: "uppercase",
            }}>
              {product.grade}
            </div>
          </div>

          {/* Details */}
          <div>
            <h1 style={{
              fontFamily: '"Instrument Serif", serif', fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 400, color: "#fff", margin: "0 0 20px", lineHeight: 1.1
            }}>{product.name}</h1>
            
            <p style={{ color: SILVER, fontSize: 16, lineHeight: 1.8, margin: "0 0 32px" }}>
              {product.desc}
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
              {product.tags.map(t => (
                <span key={t} style={{
                  background: "rgba(22,163,74,0.08)", border: "1px solid rgba(22,163,74,0.18)",
                  borderRadius: 99, padding: "6px 16px", fontSize: 12, color: "#4A7C59", letterSpacing: "0.04em"
                }}>{t}</span>
              ))}
            </div>

            <Link to="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: `linear-gradient(135deg, ${VL} 0%, ${ROSE} 100%)`,
              color: "#fff", borderRadius: 99, padding: "14px 34px",
              fontWeight: 600, fontSize: 14, textDecoration: "none",
              boxShadow: `0 0 36px rgba(22,163,74,0.4)`,
              letterSpacing: "0.02em", transition: "transform 0.25s, box-shadow 0.25s",
            }}>
              Request a Quote
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2">
                <path d={icons.arrow} />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
