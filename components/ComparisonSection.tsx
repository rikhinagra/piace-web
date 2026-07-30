"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STAGE_TRANSITION = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };

type Stage = { n: string; label: string; heading: string; desc: string; video: string };

const stages: Stage[] = [
  {
    n: "01", label: "INTAKE",
    heading: "Every lead becomes a file before you open your day.",
    desc: "Leads are parsed instantly. Reports, authorizations, and records are validated and formatted for attorney review.",
    video: "/cj-01-intake.mp4",
  },
  {
    n: "02", label: "TREATMENT",
    heading: "You review the chronology. You don't build it.",
    desc: "Incoming medical bills and treatment sheets are processed on receipt. PiAce automatically logs codes, flags treatment gaps, and monitors your client's therapeutic progress.",
    video: "/cj-02-treatment.mp4",
  },
  {
    n: "03", label: "DEMAND",
    heading: "You edit a draft. You don't start from blank.",
    desc: "Once treatment is complete, PiAce drafts a comprehensive policy-limit demand package. Your special damages, medical narratives, and lost-wage logs are ready for review.",
    video: "/cj-03-demand.mp4",
  },
  {
    n: "04", label: "NEGOTIATION",
    heading: "Every date stays watched while you work the offer.",
    desc: "Negotiations are kept fully transparent. All insurance offers, liens, subrogation, and statutory deadlines are tracked so you work with the best-possible math on hand.",
    video: "/cj-04-negotiation.mp4",
  },
  {
    n: "05", label: "SETTLEMENT",
    heading: "The money side stays simple, start to finish.",
    desc: "Lien reductions are calculated automatically. Instant closing statements and disbursement sheets ensure your clients understand exactly what they walk away with.",
    video: "/cj-05-settlement.mp4",
  },
];

export default function ComparisonSection() {
  const [active, setActive] = useState(0);
  const [breakpoint, setBreakpoint] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setBreakpoint(w < 640 ? "mobile" : w < 900 ? "tablet" : "desktop");
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // When active stage changes, reload and play the new video
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.load();
    vid.play().catch(() => {});
  }, [active]);

  const goTo = (i: number) => setActive(i);

  const handleEnded = () => setActive(s => (s + 1) % stages.length);

  const isMobile = breakpoint === "mobile";
  const isTablet = breakpoint === "tablet";

  return (
    <section
      id="journey"
      style={{ padding: "clamp(70px, 9vw, 130px) 0", background: "#080810", overflowX: "hidden" }}
    >
      <div className="wrap">

        {/* ── Header ── */}
        <div style={{ marginBottom: "clamp(44px, 5.5vw, 72px)" }}>
          <span style={{ display: "block", fontFamily: "var(--font-inter), sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.25vw, 18px)", letterSpacing: "6px", textTransform: "uppercase", color: "#a484e0", marginBottom: "16px" }}>
            The Case Journey
          </span>
          <h2 style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 800, fontSize: "clamp(26px, 3.33vw, 48px)", color: "#f4f4f5", lineHeight: 1.1, margin: "0 0 16px" }}>
            One file, five stages, an agent at{" "}
            <em className="serif-em" style={{ color: "#eae0fd" }}>each stage.</em>
          </h2>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400, fontSize: "clamp(14px, 2.22vw, 32px)", color: "#9eaebb", lineHeight: 1.38, margin: 0 }}>
            Piace tracks your personal injury files from first contact to settlement check, actively
            processing medical records, organizing evidence and drafting required documents.
          </p>
        </div>

        {/* ── Body grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1.2fr" : "1fr 1.35fr",
          gap: isMobile ? "32px" : isTablet ? "32px" : "clamp(36px, 5vw, 80px)",
          alignItems: isMobile ? "start" : "stretch",
        }}>

          {/* ── Left: stage list — order 2 on mobile so video shows first ── */}
          <div style={{ display: "flex", flexDirection: "column", order: isMobile ? 2 : 1, height: isMobile ? "auto" : "100%", justifyContent: isMobile ? "flex-start" : "space-between" }}>
            {stages.map((s, i) => {
              const isActive = i === active;
              return (
                <motion.div
                  key={s.n}
                  onClick={() => goTo(i)}
                  animate={{
                    borderLeftColor: isActive ? "#7b5fe0" : "rgba(255,255,255,0.08)",
                    opacity: isActive ? 1 : 0.44,
                  }}
                  transition={STAGE_TRANSITION}
                  style={{
                    paddingLeft: isMobile ? "16px" : "22px",
                    paddingBottom: isMobile ? "24px" : "0",
                    paddingTop: "2px",
                    cursor: "pointer",
                    borderLeft: "2px solid",
                  }}
                >
                  {/* Number + label */}
                  <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "6px" }}>
                    <span style={{ fontFamily: "var(--font-serif-accent), serif", fontStyle: "italic", fontSize: isMobile ? "18px" : "clamp(16px, 1.4vw, 22px)", color: isActive ? "#a484e0" : "#444", lineHeight: 1 }}>
                      {s.n}
                    </span>
                    <span style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 600, fontSize: isMobile ? "12px" : "clamp(12px, 1.25vw, 18px)", letterSpacing: "6px", textTransform: "uppercase", color: isActive ? "#eae0fd" : "#444" }}>
                      •{s.label}
                    </span>
                  </div>

                  {/* Heading */}
                  <p style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: isActive ? 600 : 400,
                    fontSize: isMobile
                      ? (isActive ? "18px" : "14px")
                      : (isActive ? "clamp(16px, 2.1vw, 30px)" : "clamp(13px, 1.1vw, 16px)"),
                    color: isActive ? "#d5e0ea" : "#777",
                    lineHeight: 1.35,
                    margin: 0,
                    transition: "font-size 0.35s ease, font-weight 0.2s, color 0.35s ease",
                  }}>
                    {s.heading}
                  </p>

                  {/* Description — only when active */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.p
                        key="desc"
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 10 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                        style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 500, fontSize: isMobile ? "13px" : "clamp(13px, 1.11vw, 16px)", color: "#7a8895", lineHeight: 1.7, margin: 0, overflow: "hidden" }}
                      >
                        {s.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* ── Right: video — order 1 on mobile so it appears above stages ── */}
          <div style={{ position: isMobile ? "relative" : "sticky", top: isMobile ? "auto" : "90px", order: isMobile ? 1 : 2 }}>
            <div style={{
              borderRadius: "16px",
              border: "1px solid rgba(123,95,224,0.35)",
              boxShadow: "0 0 0 1px rgba(123,95,224,0.12), 0 8px 60px rgba(100,70,200,0.35), 0 30px 120px rgba(100,70,200,0.18)",
              overflow: "hidden",
              background: "#0d0d16",
            }}>
              <video
                ref={videoRef}
                muted
                playsInline
                autoPlay
                onEnded={handleEnded}
                style={{ width: "100%", display: "block" }}
              >
                <source src={stages[active].video} type="video/mp4" />
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
