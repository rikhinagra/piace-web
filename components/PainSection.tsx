"use client";

import { useState, useEffect } from "react";

const pains = [
  "Ugh, I spent all morning reading charts just to figure out what actually happened",
  "Starting from a stale template and rewriting the same paragraphs every time",
  "Manually updating spreadsheets so you don't miss a filing deadline",
  "Chasing money across different ledgers and hoping the math matches",
  "Dreading the switch to a new system (and the manual migration headache)",
];

const gains = [
  "We build the timeline for you: flagged, sourced and ready to review",
  "You get a first draft that's already accurate and specific to this case",
  "We watch the deadlines and flag the priority filings so you don't miss them",
  "One place tracks money from offer to final check. No more ledger juggling.",
  "We handle the migration active cases and history so you can start right away",
];

export default function PainSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="why-piace"
      style={{ padding: "clamp(70px, 9vw, 120px) 0", background: "#080810" }}
    >
      <div className="wrap">

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "clamp(44px, 5.5vw, 72px)" }}>
          <span style={{ display: "block", fontFamily: "var(--font-inter), sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.25vw, 18px)", letterSpacing: "6px", textTransform: "uppercase", color: "#a484e0", marginBottom: "16px" }}>
            AI Handles Repetitive Work
          </span>
          <h2 style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 800, fontSize: "clamp(26px, 3.33vw, 48px)", color: "#f4f4f5", lineHeight: 1.1, letterSpacing: "-1.5px", margin: "0 0 20px" }}>
            What if your team <em className="serif-em" style={{ color: "#eae0fd" }}>never</em> had to chase{!isMobile && <br />} paperwork again?
          </h2>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400, fontSize: "clamp(14px, 2.22vw, 32px)", color: "#9eaebb", lineHeight: 1.38, maxWidth: "760px", margin: "0 auto" }}>
            Here's what happens when you swap hours of manual reading for a pipeline that actually moves.
          </p>
        </div>

        {/* ── Two cards ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: "clamp(14px, 1.8vw, 22px)",
          alignItems: "stretch",
        }}>

          {/* ── Left — Pain points ── */}
          <div style={{
            background: "#0a0a12",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "18px",
            padding: "clamp(22px, 2.8vw, 36px)",
          }}>
            <span style={{ display: "block", fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: "clamp(9px, 0.7vw, 11px)", letterSpacing: "0.13em", textTransform: "uppercase", color: "#ef4444", marginBottom: "10px" }}>
              Sound Familiar?
            </span>
            <h3 style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: "clamp(18px, 1.67vw, 24px)", color: "#f4f4f5", margin: "0 0 22px", lineHeight: 1.25 }}>
              The stuff that slows you down
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {pains.map((text, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "10px",
                    padding: "13px 16px",
                  }}
                >
                  {/* Red ✕ circle */}
                  <div style={{ width: "18px", height: "18px", borderRadius: "50%", border: "1.5px solid rgba(239,68,68,0.45)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                    <span style={{ color: "#ef4444", fontSize: "9px", fontWeight: 800, lineHeight: 1 }}>✕</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "clamp(12px, 0.92vw, 14px)", color: "#4a4a5a", lineHeight: 1.55, textDecoration: "line-through", textDecorationColor: "rgba(239,68,68,0.35)", textDecorationThickness: "1px" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — Gains ── */}
          <div style={{
            background: "#0c0b18",
            border: "1px solid rgba(123,95,224,0.22)",
            borderRadius: "18px",
            padding: "clamp(22px, 2.8vw, 36px)",
          }}>
            <span style={{ display: "block", fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: "clamp(9px, 0.7vw, 11px)", letterSpacing: "0.13em", textTransform: "uppercase", color: "#22c55e", marginBottom: "10px" }}>
              Here's What Changes
            </span>
            <h3 style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: "clamp(18px, 1.67vw, 24px)", color: "#f4f4f5", margin: "0 0 22px", lineHeight: 1.25 }}>
              With PiAce
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {gains.map((text, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "10px",
                    padding: "13px 16px",
                  }}
                >
                  {/* Green ✓ circle */}
                  <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(34,197,94,0.14)", border: "1.5px solid rgba(34,197,94,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                    <span style={{ color: "#22c55e", fontSize: "9px", fontWeight: 800, lineHeight: 1 }}>✓</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "clamp(12px, 0.92vw, 14px)", color: "#c9c9d8", lineHeight: 1.55 }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
