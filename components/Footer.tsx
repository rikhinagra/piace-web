"use client";

export default function Footer() {
  return (
    <footer style={{ background: "#050508", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="wrap">

        {/* ── Top row: logo+tagline left | links right ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            padding: "clamp(28px, 3.5vw, 52px) 0 clamp(16px, 2vw, 28px)",
          }}
        >
          {/* Left: logo + tagline */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/piace-logo.png"
              alt="PIace"
              style={{ height: "42px", width: "auto", display: "block", marginBottom: "12px" }}
            />
            <p
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontWeight: 400,
                fontSize: "13px",
                color: "#9d9da6",
                margin: 0,
                whiteSpace: "nowrap",
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
              gap: "24px",
            }}
          >
            {["Privacy Policy", "Terms of Service"].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  fontFamily: "var(--font-jakarta), sans-serif",
                  fontWeight: 400,
                  fontSize: "13px",
                  color: "#9eaebb",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
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
            fontFamily: "var(--font-jakarta), sans-serif",
            fontWeight: 400,
            fontSize: "12px",
            color: "#c5cbd3",
            textAlign: "center",
            margin: 0,
            padding: "clamp(20px, 2.7vw, 40px) 0",
          }}
        >
          © 2026 PiAce, Inc. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
