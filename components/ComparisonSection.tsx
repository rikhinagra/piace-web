"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STAGE_DURATION = 5000;

type Activity = { dot: string; text: string; sub: string };
type CardData = {
  title: string;
  stage: string;
  rows: { k: string; v: string; green?: boolean }[];
  progressLabel: string;
  progressValue: string;
  progressPct: number;
  activities: Activity[];
};
type Stage = { n: string; label: string; heading: string; desc: string; card: CardData };

const stages: Stage[] = [
  {
    n: "01", label: "INTAKE",
    heading: "Every lead becomes a file before you open your day.",
    desc: "Leads are parsed instantly. Reports, authorizations, and records are validated and formatted for attorney review.",
    card: {
      title: "Miller v. Sacramento Auto", stage: "Stage 01",
      rows: [
        { k: "Case",  v: "Miller v. Sacramento Auto" },
        { k: "Agent", v: "DEMAND_COMPILER_03" },
        { k: "Value", v: "$100,000", green: true },
      ],
      progressLabel: "Package Review", progressValue: "3/5 approvals", progressPct: 60,
      activities: [
        { dot: "#22c55e", text: "Pol. report parsed & indexed",   sub: "File created: John Miller · 2m ago" },
        { dot: "#22c55e", text: "Medical authorization validated", sub: "Mercy Hospital records · 8m ago" },
        { dot: "#f59e0b", text: "Treatment gap flagged",          sub: "14-day gap detected · 1h ago" },
      ],
    },
  },
  {
    n: "02", label: "TREATMENT",
    heading: "You review the chronology. You don't build it.",
    desc: "Incoming medical bills and treatment sheets are processed on receipt. Piace automatically logs codes, flags treatment gaps, and monitors your client's therapeutic progress.",
    card: {
      title: "Medical Chronology", stage: "Stage 02",
      rows: [
        { k: "Case",    v: "Miller v. Sacramento Auto" },
        { k: "Agent",   v: "MEDICAL_CHRONO_02" },
        { k: "Records", v: "14 pages indexed" },
      ],
      progressLabel: "Treatment Timeline", progressValue: "8/12 sessions", progressPct: 67,
      activities: [
        { dot: "#22c55e", text: "Chronology indexed",               sub: "Records aligned and ready for review" },
        { dot: "#f59e0b", text: "Treatment gap flagged: 14 days",   sub: "Follow-up with provider requested" },
        { dot: "#a484e0", text: "Mercy Hospital records processed", sub: "All pages verified and attached" },
      ],
    },
  },
  {
    n: "03", label: "DEMAND",
    heading: "You edit a draft. You don't start from blank.",
    desc: "Once treatment is complete, Piace drafts a comprehensive policy-limit demand package. Your special damages, medical narratives, and lost-wage logs are ready for review.",
    card: {
      title: "Demand Package", stage: "Stage 03",
      rows: [
        { k: "Case",  v: "Miller v. Sacramento Auto" },
        { k: "Agent", v: "DEMAND_COMPILER_03" },
        { k: "Value", v: "$100,000", green: true },
      ],
      progressLabel: "Package Review", progressValue: "3/5 approvals", progressPct: 60,
      activities: [
        { dot: "#22c55e", text: "Demand package drafted",         sub: "Initial draft submitted to counsel" },
        { dot: "#f59e0b", text: "Under review by Senior Counsel", sub: "Awaiting final approval" },
        { dot: "#a484e0", text: "Evidence compilation complete",  sub: "Exhibits finalized" },
      ],
    },
  },
  {
    n: "04", label: "NEGOTIATION",
    heading: "Every date stays watched while you work the offer.",
    desc: "Negotiations are kept fully transparent. All insurance offers, liens, subrogation, and statutory deadlines are tracked so you work with the best-possible math on hand.",
    card: {
      title: "Negotiation Tracker", stage: "Stage 04",
      rows: [
        { k: "Case",     v: "Miller v. Sacramento Auto" },
        { k: "Agent",    v: "DEADLINE_TRACKER_04" },
        { k: "Deadline", v: "124 days" },
      ],
      progressLabel: "Negotiation Rounds", progressValue: "2/4 completed", progressPct: 50,
      activities: [
        { dot: "#22c55e", text: "Offer received: $45,000",         sub: "Initial offer logged and reviewed" },
        { dot: "#f59e0b", text: "Statute of Limitations tracking", sub: "Deadline countdown active" },
        { dot: "#555",    text: "Counter-offer analysis pending",  sub: "Counsel review in progress" },
      ],
    },
  },
  {
    n: "05", label: "SETTLEMENT",
    heading: "The money side stays simple, start to finish.",
    desc: "Lien reductions are calculated automatically. Instant closing statements and disbursement sheets ensure your clients understand exactly what they walk away with.",
    card: {
      title: "Settlement Closer", stage: "Stage 05",
      rows: [
        { k: "Case",  v: "Miller v. ABC Transport" },
        { k: "Agent", v: "SETTLEMENT_CLOSER_05" },
        { k: "Net",   v: "$27,450", green: true },
      ],
      progressLabel: "Settlement Steps", progressValue: "4/5 completed", progressPct: 80,
      activities: [
        { dot: "#22c55e", text: "Lien reductions agreed",        sub: "Final lien amounts confirmed" },
        { dot: "#22c55e", text: "Disbursement sheet ready",      sub: "Net-to-client calculation finalized" },
        { dot: "#f59e0b", text: "Final client approval pending", sub: "Awaiting signature on settlement release" },
      ],
    },
  },
];

// Slow, smooth card swap — same feel as the carousel spring
const CARD_TRANSITION = { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };
const STAGE_TRANSITION = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };

export default function ComparisonSection() {
  const [active, setActive] = useState(0);
  const [breakpoint, setBreakpoint] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive(s => (s + 1) % stages.length);
    }, STAGE_DURATION);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setBreakpoint(w < 640 ? "mobile" : w < 900 ? "tablet" : "desktop");
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const goTo = (i: number) => {
    setActive(i);
    startTimer();
  };

  const card = stages[active].card;
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
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400, fontSize: "clamp(14px, 2.22vw, 32px)", color: "#9eaebb", lineHeight: 1.38, maxWidth: "780px", margin: 0 }}>
            Piace tracks your personal injury files from first contact to settlement check, actively
            processing medical records, organizing evidence and drafting required documents.
          </p>
        </div>

        {/* ── Body grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1.2fr" : "1fr 1.35fr",
          gap: isMobile ? "32px" : isTablet ? "32px" : "clamp(36px, 5vw, 80px)",
          alignItems: "start",
        }}>

          {/* ── Left: stage list ── order 2 on mobile so card shows first ── */}
          <div style={{ display: "flex", flexDirection: "column", order: isMobile ? 2 : 1 }}>
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
                    paddingBottom: "24px",
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

                  {/* Heading — size animates between active/inactive */}
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

          {/* ── Right: animated card — order 1 on mobile so it appears above stages ── */}
          <div style={{ position: isMobile ? "relative" : "sticky", top: isMobile ? "auto" : "90px", order: isMobile ? 1 : 2 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={CARD_TRANSITION}
                style={{
                  background: "#0d0d16",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: "18px",
                  padding: isMobile ? "20px" : isTablet ? "24px" : "clamp(24px, 2.8vw, 36px)",
                  fontFamily: "var(--font-inter), sans-serif",
                  boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
                }}
              >
                {/* Card header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <motion.div
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                      style={{ width: "7px", height: "7px", background: "#22c55e", borderRadius: "50%", flexShrink: 0 }}
                    />
                    <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666" }}>
                      Active Case
                    </span>
                  </div>
                  <span style={{ background: "rgba(123,95,224,0.18)", color: "#c4b5f7", padding: "4px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 600 }}>
                    {card.stage}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 800, fontSize: isMobile ? "20px" : "clamp(20px, 2vw, 28px)", color: "#f4f4f5", margin: "0 0 20px", lineHeight: 1.2 }}>
                  {card.title}
                </h3>

                {/* Metadata rows */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px", paddingBottom: "18px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  {card.rows.map(r => (
                    <div key={r.k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                      <span style={{ fontSize: "12px", color: "#555", flexShrink: 0 }}>{r.k}</span>
                      <span style={{ fontSize: "12px", color: r.green ? "#22c55e" : "#c9c9d8", fontWeight: r.green ? 700 : 400, textAlign: "right", wordBreak: "break-word" }}>{r.v}</span>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div style={{ marginBottom: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#c9c9d8" }}>{card.progressLabel}</span>
                    <span style={{ fontSize: "12px", color: "#666" }}>{card.progressValue}</span>
                  </div>
                  <div style={{ height: "4px", background: "rgba(255,255,255,0.07)", borderRadius: "3px", overflow: "hidden" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${card.progressPct}%` }}
                      transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
                      style={{ height: "100%", background: "linear-gradient(90deg, #6d44d4, #a484e0)", borderRadius: "3px" }}
                    />
                  </div>
                </div>

                {/* Agent activity */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                    <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666" }}>
                      Agent Activity
                    </span>
                    <span style={{ background: "#ef4444", color: "#fff", padding: "2px 7px", borderRadius: "4px", fontSize: "9px", fontWeight: 700, letterSpacing: "0.06em" }}>
                      LIVE
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {card.activities.map((a, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + idx * 0.12 }}
                        style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}
                      >
                        {/* Dot — marginTop centers it with the first text line (13px * 1.35 / 2 − 3.5 ≈ 5px) */}
                        <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: a.dot, flexShrink: 0, marginTop: "5px" }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: "13px", fontWeight: 600, color: "#f4f4f5", lineHeight: 1.35 }}>{a.text}</div>
                          <div style={{ fontSize: "11px", color: "#555", lineHeight: 1.4, marginTop: "2px" }}>{a.sub}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
