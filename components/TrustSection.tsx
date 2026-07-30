"use client";

import { useState, useEffect } from "react";

function ShieldCheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(255,255,255,0.88)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: "50%", height: "50%" }}
    >
      <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6L12 2z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function TrustCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      style={{
        background: "rgba(19,19,24,0.5)",
        border: "1px solid #1f1f2e",
        borderRadius: "16px",
        padding: "clamp(20px, 2.2vw, 28px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "16px",
            background: "rgba(48,209,88,0.11)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg
            viewBox="0 0 10 10"
            fill="none"
            stroke="#10b981"
            strokeWidth="1.8"
            strokeLinecap="round"
            style={{ width: "12px", height: "12px" }}
          >
            <path d="M1.5 5l3 3 4-5" />
          </svg>
        </div>
        <h3
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(15px, 1.53vw, 22px)",
            color: "#f4f4f5",
            margin: 0,
          }}
        >
          {title}
        </h3>
      </div>
      <p
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 400,
          fontSize: "clamp(14px, 1.25vw, 18px)",
          color: "#9eaebb",
          lineHeight: 1.78,
          margin: 0,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

function OrbCenter() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        className="trust-orb-wrap"
        style={{
          position: "relative",
          width: "clamp(200px, 26vw, 290px)",
          height: "clamp(200px, 26vw, 290px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Outer diffuse glow */}
        <div
          className="trust-glow-outer"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(110,78,230,0.28) 0%, rgba(90,58,210,0.12) 45%, transparent 70%)",
          }}
        />

        {/* Ring 1 — outermost */}
        <div
          className="trust-ring-1"
          style={{
            position: "absolute",
            width: "86%",
            height: "86%",
            borderRadius: "50%",
            border: "1px solid rgba(123,95,224,0.2)",
          }}
        />

        {/* Ring 2 */}
        <div
          className="trust-ring-2"
          style={{
            position: "absolute",
            width: "67%",
            height: "67%",
            borderRadius: "50%",
            border: "1px solid rgba(123,95,224,0.38)",
            background:
              "radial-gradient(circle, rgba(90,60,210,0.16) 0%, transparent 65%)",
          }}
        />

        {/* Ring 3 — inner */}
        <div
          className="trust-ring-3"
          style={{
            position: "absolute",
            width: "48%",
            height: "48%",
            borderRadius: "50%",
            border: "1px solid rgba(140,108,240,0.55)",
            background: "rgba(80,50,175,0.1)",
          }}
        />

        {/* Center circle */}
        <div
          className="trust-orb-center"
          style={{
            position: "relative",
            zIndex: 2,
            width: "clamp(58px, 7.5vw, 86px)",
            height: "clamp(58px, 7.5vw, 86px)",
            borderRadius: "50%",
            background: "#100c22",
            border: "1.5px solid rgba(150,115,245,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ShieldCheckIcon />
        </div>
      </div>
    </div>
  );
}

export default function TrustSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="trust" style={{ padding: "clamp(80px, 10vw, 130px) 0", background: "#050508" }}>
      <style>{`
        @keyframes trustGlowPulse {
          0%, 100% { opacity: 0.25; transform: scale(0.96); }
          50%       { opacity: 1;    transform: scale(1);    }
        }
        @keyframes trustRing1 {
          0%, 100% { opacity: 0.2; }
          50%       { opacity: 0.7; }
        }
        @keyframes trustRing2 {
          0%, 100% { opacity: 0.35; }
          50%       { opacity: 0.9; }
        }
        @keyframes trustRing3 {
          0%, 100% { opacity: 0.45; }
          50%       { opacity: 1;   }
        }
        @keyframes trustCenterGlow {
          0%, 100% { box-shadow: 0 0 16px rgba(123,95,224,0.2), 0 0 32px rgba(100,70,200,0.1); }
          50%       { box-shadow: 0 0 36px rgba(123,95,224,0.75), 0 0 72px rgba(100,70,200,0.38); }
        }
        .trust-glow-outer  { animation: trustGlowPulse 3.4s ease-in-out infinite; }
        .trust-ring-1      { animation: trustRing1 3.4s ease-in-out infinite; }
        .trust-ring-2      { animation: trustRing2 3.4s ease-in-out infinite; }
        .trust-ring-3      { animation: trustRing3 3.4s ease-in-out infinite; }
        .trust-orb-center  { animation: trustCenterGlow 3.4s ease-in-out infinite; }
      `}</style>

      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(50px, 7vw, 80px)" }}>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(12px, 1.25vw, 18px)",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "#a484e0",
              marginBottom: "20px",
            }}
          >
            Built on Trust
          </span>
          <h2
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(26px, 3.33vw, 48px)",
              color: "#f4f4f5",
              lineHeight: 1.05,
              letterSpacing: "-1.8px",
              margin: 0,
            }}
          >
            Your files. Your firm.{" "}
            <em className="serif-em" style={{ color: "#eae0fd" }}>No exceptions.</em>
          </h2>
        </div>

        {/* Body */}
        {isMobile ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <OrbCenter />
            <TrustCard
              title="Encrypted, always"
              desc="Every case file is encrypted in transit and at rest using bank-grade protocols."
            />
            <TrustCard
              title="Role-based access"
              desc="Your legal team sees exactly what their roles call for with granular access hierarchies."
            />
            <TrustCard
              title="Never used to train"
              desc="Your case files, legal strategies, and data belong to your firm. Never used to train models."
            />
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr clamp(200px, 26vw, 290px) 1fr",
              gap: "clamp(24px, 3vw, 48px)",
              alignItems: "center",
            }}
          >
            {/* Left */}
            <TrustCard
              title="Encrypted, always"
              desc="Every case file is encrypted in transit and at rest using bank-grade protocols."
            />

            {/* Center orb */}
            <OrbCenter />

            {/* Right */}
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 3.33vw, 48px)" }}>
              <TrustCard
                title="Role-based access"
                desc="Your legal team sees exactly what their roles call for with granular access hierarchies."
              />
              <TrustCard
                title="Never used to train"
                desc="Your case files, legal strategies, and data belong to your firm. Never used to train models."
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
