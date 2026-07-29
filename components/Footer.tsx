"use client";

export default function Footer() {
  return (
    <footer style={{ background: "#050508", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="wrap">

        {/* ── Top row: logo+tagline left | links right ── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            padding: "clamp(32px, 4vw, 52px) 0 clamp(24px, 3vw, 36px)",
          }}
        >
          {/* Left: logo + tagline */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/piace-logo.png"
              alt="PIace"
              style={{ height: "28px", width: "auto", display: "block", marginBottom: "10px" }}
            />
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "clamp(12px, 1vw, 14px)",
                color: "#6b7a8d",
                margin: 0,
              }}
            >
              AI-native case management for PI firms
            </p>
          </div>

          {/* Right: links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(16px, 2.5vw, 32px)",
              paddingTop: "4px",
            }}
          >
            {["Privacy Policy", "Terms of Service"].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "clamp(12px, 1vw, 14px)",
                  color: "#9eaebb",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f4f4f5")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9eaebb")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />

        {/* ── Copyright ── */}
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "clamp(11px, 0.9vw, 13px)",
            color: "#4a5568",
            textAlign: "center",
            margin: 0,
            padding: "clamp(18px, 2.5vw, 28px) 0",
          }}
        >
          © 2026 PiAce, Inc. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
