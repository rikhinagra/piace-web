"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const N = 7;
function mod(a: number, b: number) { return ((a % b) + b) % b; }

type UIProps = { onComplete?: () => void };

/* ── Shared shell — fades in on mount so demo never flashes ── */
function UIShell({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      style={{ width: "100%", height: "100%", background: "#07070f", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column", fontFamily: "var(--font-inter), sans-serif", fontSize: "clamp(9px, 0.78vw, 11.5px)", color: "#c9c9d8", ...style }}
    >
      {children}
    </motion.div>
  );
}
function Chip({ label, color, bg }: { label: string; color: string; bg: string }) {
  return <span style={{ background: bg, color, padding: "2px 8px", borderRadius: "4px", fontWeight: 600, fontSize: "0.85em", whiteSpace: "nowrap" }}>{label}</span>;
}

/* ── Slide 1 — Cases List ───────────────────────────────────
   Total: 900+1400+1400+1400 = 5100ms                        */
function CasesListUI({ onComplete }: UIProps) {
  const [step, setStep] = useState(0);
  const cbRef = useRef(onComplete);
  useEffect(() => { cbRef.current = onComplete; });

  useEffect(() => {
    const delays = [900, 1400, 1400, 1400];
    const isLast = step === delays.length - 1;
    const t = setTimeout(() => {
      if (isLast) { cbRef.current?.(); setStep(0); }
      else setStep(s => s + 1);
    }, delays[step]);
    return () => clearTimeout(t);
  }, [step]);

  const statuses = [
    { label: "Waiting…", color: "#888", bg: "rgba(255,255,255,0.07)" },
    { label: "Processing", color: "#a484e0", bg: "rgba(164,132,224,0.14)" },
    { label: "AI Extracting", color: "#60a5fa", bg: "rgba(96,165,250,0.14)" },
    { label: "✓ Complete", color: "#22c55e", bg: "rgba(34,197,94,0.14)" },
  ];
  const st = statuses[step];

  return (
    <UIShell>
      <div style={{ padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 700, color: "#f4f4f5" }}>Cases <span style={{ color: "#444", fontWeight: 400 }}>(24)</span></span>
        <div style={{ background: "#7b5fe0", color: "#fff", padding: "3px 10px", borderRadius: "6px", fontWeight: 600 }}>+ New case</div>
      </div>
      <div style={{ flex: 1, padding: "8px 12px", display: "flex", flexDirection: "column", gap: "6px", overflow: "hidden" }}>
        {[
          { name: "Amelia Lee", id: "CASE_278", s: "✓ Complete", sc: "#22c55e", sb: "rgba(34,197,94,0.14)" },
          { name: "Marcus T.", id: "CASE_819", s: "Review required", sc: "#f59e0b", sb: "rgba(245,158,11,0.14)" },
        ].map(c => (
          <div key={c.id} style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "8px", padding: "8px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontWeight: 600, color: "#f4f4f5" }}>{c.name}</div>
              <div style={{ color: "#444", fontSize: "0.85em" }}>{c.id}</div>
            </div>
            <Chip label={c.s} color={c.sc} bg={c.sb} />
          </div>
        ))}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div key="new-case" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
              style={{ background: "rgba(123,95,224,0.1)", border: "1px solid rgba(123,95,224,0.3)", borderRadius: "8px", padding: "8px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 600, color: "#f4f4f5" }}>R. Okafor</div>
                <div style={{ color: "#666", fontSize: "0.85em" }}>CASE_512 · Just now</div>
              </div>
              <Chip label={st.label} color={st.color} bg={st.bg} />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {step === 0 && (
            <motion.div key="notif" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.35 }}
              style={{ background: "rgba(164,132,224,0.12)", border: "1px solid rgba(164,132,224,0.25)", borderRadius: "8px", padding: "8px 12px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "1.1em" }}>📥</span>
              <span style={{ color: "#c4b5f7" }}>New intake: R. Okafor · Rear-end MVA</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div style={{ padding: "6px 12px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: "6px" }}>
        <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} style={{ width: "6px", height: "6px", background: "#22c55e", borderRadius: "50%" }} />
        <span style={{ color: "#555" }}>Live · 24 active cases</span>
      </div>
    </UIShell>
  );
}

/* ── Slide 2 — AI Assistant ─────────────────────────────────
   Total: 700+1300+1000+1000+1200 = 5200ms                   */
function AIAssistantUI({ onComplete }: UIProps) {
  const [step, setStep] = useState(0);
  const cbRef = useRef(onComplete);
  useEffect(() => { cbRef.current = onComplete; });

  useEffect(() => {
    const delays = [700, 1300, 1000, 1000, 1200];
    const isLast = step === delays.length - 1;
    const t = setTimeout(() => {
      if (isLast) { cbRef.current?.(); setStep(0); }
      else setStep(s => s + 1);
    }, delays[step]);
    return () => clearTimeout(t);
  }, [step]);

  const lines = [
    "Dear Mr. Halstead, we write on behalf of our client Dami Okafor",
    "regarding the incident of March 10, 2026 on Highway I-80...",
    "Our client sustained injuries including L4/L5 disc herniation.",
  ];

  return (
    <UIShell>
      <div style={{ padding: "9px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "24px", height: "24px", background: "rgba(123,95,224,0.25)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>💬</div>
        <div style={{ color: "#f4f4f5", fontWeight: 600 }}>Legal AI Assistant</div>
        <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.4, repeat: Infinity }} style={{ width: "6px", height: "6px", background: "#22c55e", borderRadius: "50%", marginLeft: "auto" }} />
      </div>
      <div style={{ flex: 1, padding: "12px", display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-end", overflow: "hidden" }}>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
          style={{ background: "rgba(123,95,224,0.2)", borderRadius: "10px 10px 2px 10px", padding: "8px 12px", color: "#c4b5f7", alignSelf: "flex-end", maxWidth: "88%" }}>
          Draft a letter of representation for Okafor v. Halstead
        </motion.div>
        <AnimatePresence>
          {step === 1 && (
            <motion.div key="typing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ background: "rgba(255,255,255,0.05)", borderRadius: "10px 10px 10px 2px", padding: "10px 14px", display: "flex", gap: "5px", alignItems: "center", alignSelf: "flex-start" }}>
              {[0, 1, 2].map(i => (
                <motion.div key={i} animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                  style={{ width: "5px", height: "5px", background: "#a484e0", borderRadius: "50%" }} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {step >= 2 && (
            <motion.div key="draft" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
              style={{ background: "rgba(255,255,255,0.05)", borderRadius: "10px 10px 10px 2px", padding: "10px 12px", alignSelf: "flex-start", maxWidth: "92%", display: "flex", flexDirection: "column", gap: "5px" }}>
              {lines.slice(0, step - 1).map((line, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: i * 0.1 }} style={{ color: "#bbb", lineHeight: 1.5 }}>{line}</motion.div>
              ))}
              {step >= 4 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} style={{ display: "flex", gap: "6px", marginTop: "4px" }}>
                  <Chip label="Firm voice ✓" color="#60a5fa" bg="rgba(96,165,250,0.14)" />
                  <Chip label="Facts sourced ✓" color="#22c55e" bg="rgba(34,197,94,0.14)" />
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div style={{ padding: "8px 12px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: "7px", alignItems: "center" }}>
        <div style={{ flex: 1, background: "#111118", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "5px 10px", color: "#444" }}>Ask AI to draft…</div>
        <div style={{ width: "26px", height: "26px", background: "#7b5fe0", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0 }}>↑</div>
      </div>
    </UIShell>
  );
}

/* ── Slide 3 — Medical Packet ───────────────────────────────
   Total: 800+700+700+700+900 = 3800ms                       */
function MedicalPacketUI({ onComplete }: UIProps) {
  const [step, setStep] = useState(0);
  const cbRef = useRef(onComplete);
  useEffect(() => { cbRef.current = onComplete; });

  useEffect(() => {
    const delays = [800, 700, 700, 700, 900];
    const isLast = step === delays.length - 1;
    const t = setTimeout(() => {
      if (isLast) { cbRef.current?.(); setStep(0); }
      else setStep(s => s + 1);
    }, delays[step]);
    return () => clearTimeout(t);
  }, [step]);

  const records = [
    { date: "03/10", dr: "Dr. Smith", cat: "Orthopedic", color: "#22c55e" },
    { date: "03/15", dr: "City MRI", cat: "Imaging", color: "#60a5fa" },
    { date: "03/22", dr: "Dr. Patel", cat: "Pain Management", color: "#f97316", flag: true },
    { date: "04/01", dr: "Dr. Smith", cat: "Follow-up", color: "#a484e0" },
  ];
  const progress = [0, 40, 65, 82, 100][step] ?? 100;

  return (
    <UIShell style={{ padding: "11px 13px", gap: "7px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 700, color: "#f4f4f5" }}>Miller – Medical Packet</span>
        <AnimatePresence mode="wait">
          {step < 4
            ? <motion.span key="scan" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ color: "#a484e0", display: "flex", alignItems: "center", gap: "5px" }}>
                <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} style={{ display: "inline-block" }}>⟳</motion.span> Scanning…
              </motion.span>
            : <motion.span key="ready" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} style={{ background: "rgba(34,197,94,0.15)", color: "#22c55e", padding: "2px 8px", borderRadius: "4px", fontWeight: 700 }}>READY</motion.span>
          }
        </AnimatePresence>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "5px", overflow: "hidden" }}>
        {records.map((r, i) => (
          <AnimatePresence key={r.date}>
            {step > i && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}
                style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.06)", borderLeft: `3px solid ${r.color}`, borderRadius: "0 7px 7px 0", padding: "5px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 600, color: "#f4f4f5" }}>{r.date}</div>
                  <div style={{ color: "#555" }}>{r.dr}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  {r.flag && step > 2 && <motion.span initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0.6, 1] }} transition={{ duration: 0.5 }} style={{ color: "#f97316", fontSize: "0.85em" }}>⚠ gap</motion.span>}
                  <Chip label={r.cat} color={r.color} bg={`${r.color}22`} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
          <span style={{ color: "#555", textTransform: "uppercase", letterSpacing: "0.05em" }}>Progress</span>
          <span style={{ color: progress === 100 ? "#22c55e" : "#a484e0", fontWeight: 600 }}>{progress}%</span>
        </div>
        <div style={{ height: "4px", background: "rgba(255,255,255,0.07)", borderRadius: "2px" }}>
          <motion.div animate={{ width: `${progress}%` }} transition={{ duration: 0.6 }}
            style={{ height: "100%", background: progress === 100 ? "#22c55e" : "linear-gradient(90deg,#7b5fe0,#a484e0)", borderRadius: "2px" }} />
        </div>
        <div style={{ color: "#444", marginTop: "3px" }}>212 pages processed</div>
      </div>
    </UIShell>
  );
}

/* ── Slide 4 — Intake ───────────────────────────────────────
   Total: 700+900+1000+1200+1400 = 5200ms                    */
function IntakeUI({ onComplete }: UIProps) {
  const [step, setStep] = useState(0);
  const cbRef = useRef(onComplete);
  useEffect(() => { cbRef.current = onComplete; });

  useEffect(() => {
    const delays = [700, 900, 1000, 1200, 1400];
    const isLast = step === delays.length - 1;
    const t = setTimeout(() => {
      if (isLast) { cbRef.current?.(); setStep(0); }
      else setStep(s => s + 1);
    }, delays[step]);
    return () => clearTimeout(t);
  }, [step]);

  const pct = [0, 34, 67, 100, 100][step] ?? 100;

  return (
    <UIShell style={{ padding: "12px 14px", gap: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 700, color: "#f4f4f5" }}>New Intake: J. Martinez</span>
        <AnimatePresence mode="wait">
          {step >= 4
            ? <motion.span key="done" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} style={{ background: "rgba(34,197,94,0.14)", color: "#22c55e", padding: "2px 8px", borderRadius: "4px", fontWeight: 700 }}>Done ✓</motion.span>
            : <motion.span key="prog" style={{ color: "#a484e0" }}>In progress…</motion.span>
          }
        </AnimatePresence>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {[
          { label: "Personal Info", doneAt: 1 },
          { label: "Insurance Details", doneAt: 2 },
          { label: "Incident Report", doneAt: 3, aiAt: 2 },
        ].map((s, i) => {
          const isDone = step >= s.doneAt;
          const isAI = (s as { aiAt?: number }).aiAt !== undefined && step === (s as { aiAt?: number }).aiAt;
          return (
            <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <motion.div animate={{ background: isDone ? "rgba(34,197,94,0.2)" : "rgba(255,255,255,0.04)", borderColor: isDone ? "#22c55e" : "rgba(255,255,255,0.12)" }}
                transition={{ duration: 0.3 }} style={{ width: "18px", height: "18px", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", color: "#22c55e", fontSize: "10px", flexShrink: 0 }}>
                {isDone && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 400 }}>✓</motion.span>}
              </motion.div>
              <span style={{ color: isDone ? "#f4f4f5" : "#555" }}>{s.label}</span>
              {isAI && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: "#a484e0", marginLeft: "auto", fontSize: "0.9em" }}>AI filling…</motion.span>}
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
          <span style={{ color: "#555" }}>Completion</span>
          <span style={{ color: pct === 100 ? "#22c55e" : "#a484e0", fontWeight: 600 }}>{pct}%</span>
        </div>
        <div style={{ height: "5px", background: "rgba(255,255,255,0.07)", borderRadius: "3px" }}>
          <motion.div animate={{ width: `${pct}%` }} transition={{ duration: 0.5 }} style={{ height: "100%", background: pct === 100 ? "#22c55e" : "linear-gradient(90deg,#7b5fe0,#22c55e)", borderRadius: "3px" }} />
        </div>
      </div>
      <AnimatePresence>
        {step >= 4 && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ textAlign: "center", color: "#22c55e", fontWeight: 600 }}>
            ⚡ Completed in under 4 minutes
          </motion.div>
        )}
      </AnimatePresence>
    </UIShell>
  );
}

/* ── Slide 5 — Agent Activity ───────────────────────────────
   Total: 600+900+700+900+700+1300 = 5100ms                  */
function AgentActivityUI({ onComplete }: UIProps) {
  const [step, setStep] = useState(0);
  const cbRef = useRef(onComplete);
  useEffect(() => { cbRef.current = onComplete; });

  useEffect(() => {
    const delays = [600, 900, 700, 900, 700, 1300];
    const isLast = step === delays.length - 1;
    const t = setTimeout(() => {
      if (isLast) { cbRef.current?.(); setStep(0); }
      else setStep(s => s + 1);
    }, delays[step]);
    return () => clearTimeout(t);
  }, [step]);

  const agents = [
    { label: "Verified JM insurance policy", activeAt: 0, doneAt: 1 },
    { label: "Generated LOR for Okafor", activeAt: 2, doneAt: 3 },
    { label: "Extracted medical code #401.9", activeAt: 4, doneAt: 5 },
  ];

  return (
    <UIShell style={{ padding: "13px", gap: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 700, color: "#f4f4f5", textTransform: "uppercase", letterSpacing: "0.05em" }}>Agent Activity</span>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }} style={{ width: "6px", height: "6px", background: "#22c55e", borderRadius: "50%" }} />
          <span style={{ color: "#22c55e", fontWeight: 600 }}>LIVE</span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {agents.map((a, i) => {
          const isActive = step === a.activeAt;
          const isDone = step >= a.doneAt;
          return (
            <motion.div key={i} animate={{ borderColor: isDone ? "rgba(34,197,94,0.3)" : isActive ? "rgba(164,132,224,0.3)" : "rgba(255,255,255,0.06)" }}
              style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "9px", padding: "10px 12px", display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "28px", height: "28px", background: isDone ? "rgba(34,197,94,0.15)" : isActive ? "rgba(164,132,224,0.2)" : "rgba(255,255,255,0.04)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {isDone
                  ? <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 400 }} style={{ color: "#22c55e", fontWeight: 700 }}>✓</motion.span>
                  : isActive
                    ? <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} style={{ color: "#a484e0", display: "inline-block" }}>⟳</motion.span>
                    : <span style={{ color: "#333" }}>·</span>
                }
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ color: isDone ? "#f4f4f5" : isActive ? "#c4b5f7" : "#555", fontWeight: isDone ? 600 : 400 }}>{a.label}</div>
                <div style={{ color: isDone ? "#22c55e" : isActive ? "#a484e0" : "#333", fontSize: "0.88em", marginTop: "2px" }}>
                  {isDone ? "Done" : isActive ? "Working…" : "Queued"}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div style={{ marginTop: "auto", color: "#444", textAlign: "center" }}>Always on · 0% latency</div>
    </UIShell>
  );
}

/* ── Slide 6 — Channels ─────────────────────────────────────
   Total: 600+1200+800+1200+1400 = 5200ms                    */
function ChannelsUI({ onComplete }: UIProps) {
  const [step, setStep] = useState(0);
  const cbRef = useRef(onComplete);
  useEffect(() => { cbRef.current = onComplete; });

  useEffect(() => {
    const delays = [600, 1200, 800, 1200, 1400];
    const isLast = step === delays.length - 1;
    const t = setTimeout(() => {
      if (isLast) { cbRef.current?.(); setStep(0); }
      else setStep(s => s + 1);
    }, delays[step]);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <UIShell style={{ flexDirection: "row" }}>
      <div style={{ width: "38%", borderRight: "1px solid rgba(255,255,255,0.06)", padding: "12px 10px", display: "flex", flexDirection: "column", gap: "4px", flexShrink: 0 }}>
        <div style={{ color: "#555", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px", fontSize: "0.9em" }}>Channels</div>
        {[{ name: "general", active: false }, { name: "updates", active: true }, { name: "urgent", active: false }].map(ch => (
          <div key={ch.name} style={{ padding: "5px 8px", borderRadius: "6px", background: ch.active ? "rgba(123,95,224,0.2)" : "transparent", color: ch.active ? "#c4b5f7" : "#555", fontWeight: ch.active ? 600 : 400 }}># {ch.name}</div>
        ))}
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <div style={{ padding: "9px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ color: "#f4f4f5", fontWeight: 700 }}># updates</span>
          <span style={{ width: "6px", height: "6px", background: "#22c55e", borderRadius: "50%", display: "inline-block" }} />
        </div>
        <div style={{ flex: 1, padding: "10px 12px", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "8px", overflow: "hidden" }}>
          <AnimatePresence>
            {step === 0 && (
              <motion.div key="t1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{ width: "20px", height: "20px", background: "#7b5fe0", borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8em", color: "#fff", fontWeight: 700 }}>M</div>
                <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "8px", padding: "6px 10px", display: "flex", gap: "4px" }}>
                  {[0, 1, 2].map(i => (<motion.div key={i} animate={{ y: [0, -3, 0] }} transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }} style={{ width: "4px", height: "4px", background: "#888", borderRadius: "50%" }} />))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {step >= 1 && (
              <motion.div key="m1" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
                style={{ display: "flex", gap: "6px", alignItems: "flex-end" }}>
                <div style={{ width: "20px", height: "20px", background: "#7b5fe0", borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8em", color: "#fff", fontWeight: 700 }}>M</div>
                <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "8px", padding: "7px 10px", color: "#ccc", maxWidth: "85%" }}>Demand for Okafor is ready for attorney review</div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {step === 2 && (
              <motion.div key="t2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                style={{ display: "flex", alignItems: "center", gap: "6px", alignSelf: "flex-end" }}>
                <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "8px", padding: "6px 10px", display: "flex", gap: "4px" }}>
                  {[0, 1, 2].map(i => (<motion.div key={i} animate={{ y: [0, -3, 0] }} transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }} style={{ width: "4px", height: "4px", background: "#a484e0", borderRadius: "50%" }} />))}
                </div>
                <div style={{ width: "20px", height: "20px", background: "rgba(164,132,224,0.25)", borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75em", color: "#a484e0" }}>AI</div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {step >= 3 && (
              <motion.div key="r1" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
                style={{ display: "flex", gap: "6px", alignItems: "flex-end", alignSelf: "flex-end", flexDirection: "row-reverse" }}>
                <div style={{ width: "20px", height: "20px", background: "rgba(164,132,224,0.25)", borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75em", color: "#a484e0" }}>AI</div>
                <div style={{ background: "rgba(123,95,224,0.2)", borderRadius: "8px", padding: "7px 10px", color: "#c4b5f7", maxWidth: "85%" }}>Assigned for review. Filing confirmation queued ✓</div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {step >= 4 && (
              <motion.div key="seen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ alignSelf: "flex-end", color: "#22c55e", fontSize: "0.85em" }}>✓✓ Seen</motion.div>
            )}
          </AnimatePresence>
        </div>
        <div style={{ padding: "7px 10px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: "6px", alignItems: "center" }}>
          <div style={{ flex: 1, background: "#111118", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "999px", padding: "5px 10px", color: "#444" }}>Message…</div>
          <div style={{ width: "24px", height: "24px", background: "#7b5fe0", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0 }}>↑</div>
        </div>
      </div>
    </UIShell>
  );
}

/* ── Slide 7 — Tasks ────────────────────────────────────────
   Total: 700+900+900+900+1600 = 5000ms                      */
function TasksUI({ onComplete }: UIProps) {
  const [step, setStep] = useState(0);
  const cbRef = useRef(onComplete);
  useEffect(() => { cbRef.current = onComplete; });

  useEffect(() => {
    const delays = [700, 900, 900, 900, 1600];
    const isLast = step === delays.length - 1;
    const t = setTimeout(() => {
      if (isLast) { cbRef.current?.(); setStep(0); }
      else setStep(s => s + 1);
    }, delays[step]);
    return () => clearTimeout(t);
  }, [step]);

  const tasks = [
    { task: "File demand packet", sub: "Miller v. State", priority: "HIGH", pc: "#ef4444", doneAt: 1 },
    { task: "Review medical bills", sub: "Miller v. State", priority: "MED", pc: "#f59e0b", doneAt: 2 },
    { task: "Validate insurance cert", sub: "Okafor v. Halstead", priority: "LOW", pc: "#22c55e", doneAt: 3 },
  ];
  const done = tasks.filter((t) => step >= t.doneAt).length;

  return (
    <UIShell style={{ padding: "13px", gap: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 700, color: "#f4f4f5" }}>All Tasks</span>
        <motion.span animate={{ color: done === 3 ? "#22c55e" : "#888" }} style={{ fontSize: "0.9em" }}>{done} / {tasks.length} complete</motion.span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
        {tasks.map((item, i) => {
          const isDone = step >= item.doneAt;
          return (
            <motion.div key={i} animate={{ opacity: isDone ? 0.55 : 1, background: isDone ? "rgba(34,197,94,0.05)" : "#111118" }}
              style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: "9px", padding: "10px 12px", display: "flex", alignItems: "center", gap: "10px" }}>
              <motion.div animate={{ background: isDone ? "rgba(34,197,94,0.2)" : "transparent", borderColor: isDone ? "#22c55e" : "rgba(255,255,255,0.2)" }}
                style={{ width: "15px", height: "15px", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "3px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", color: "#22c55e" }}>
                {isDone && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 400 }}>✓</motion.span>}
              </motion.div>
              <div style={{ flex: 1 }}>
                <div style={{ color: isDone ? "#555" : "#f4f4f5", fontWeight: 600, textDecoration: isDone ? "line-through" : "none" }}>{item.task}</div>
                <div style={{ color: "#444" }}>{item.sub}</div>
              </div>
              <Chip label={item.priority} color={item.pc} bg={`${item.pc}22`} />
            </motion.div>
          );
        })}
        <AnimatePresence>
          {step >= 4 && (
            <motion.div key="new-task" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              style={{ background: "rgba(123,95,224,0.1)", border: "1px solid rgba(123,95,224,0.25)", borderRadius: "9px", padding: "10px 12px", display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "15px", height: "15px", border: "1px solid rgba(164,132,224,0.4)", borderRadius: "3px", flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ color: "#c4b5f7", fontWeight: 600 }}>Send demand letter</div>
                <div style={{ color: "#666" }}>Okafor v. Halstead</div>
              </div>
              <Chip label="HIGH" color="#ef4444" bg="rgba(239,68,68,0.14)" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </UIShell>
  );
}

/* ── Slide data (duration = sum of each component's delays) ─ */
const slides = [
  { tag: "LEADS",            heading: "Win more cases faster",                             body: "Turn referrals into leads faster with automated outreach. Compile medical chronologies and standard demands with elite accuracy.",                                                           note: "Automatically follow up, prioritize the right referrals, and book more appointments.",                       UI: CasesListUI,      duration: 5100 },
  { tag: "DOCUMENTS",        heading: "Turn patient data into ready-to-use documents",     body: "Attorney-approved templates with auto-populated patient data. Instantly generate clinical validation profiles with high fidelity.",                                                          note: "Skip the manual work. Patient details, dates, and treatment summaries are filled in for you.",               UI: AIAssistantUI,    duration: 5200 },
  { tag: "MEDICAL PACKETS",  heading: "Medical Packets, ready when you are",               body: "Organize medical records chronologically. Filter by provider or treatment category to build elite case profiles instantly.",                                                                note: "Gather treatment summaries, billing records, and diagnostic reports automatically.",                         UI: MedicalPacketUI,  duration: 3800 },
  { tag: "INTAKE",           heading: "Get intake done before the coffee gets cold",       body: "AI-streamlined forms with pre-filled data and auto-validation in under 4 minutes. Cut operational drag and avoid manual errors instantly.",                                                 note: "Gather treatment summaries, billing records, and diagnostic reports automatically.",                         UI: IntakeUI,         duration: 5200 },
  { tag: "AI AGENT",         heading: "Your work doesn't have to wait",                   body: "Always-on AI that monitors deadlines, auto-generates legal packets, and processes patient updates with 0% latency.",                                                                       note: "Working around the clock, so your team doesn't have to.",                                                    UI: AgentActivityUI,  duration: 5100 },
  { tag: "COLLABORATION",    heading: "Teamwork, built right in",                         body: "Communicate with your team directly inside Piace. Tag cases, share key documents, and coordinate smoothly without switching apps.",                                                          note: "Chat, share documents, and keep every case moving, all without leaving Piace.",                             UI: ChannelsUI,       duration: 5200 },
  { tag: "TASK MANAGEMENT",  heading: "Everything your team is working on, all in one view", body: "Keep every priority organized. Track file compilations, validation requests, and legal drafting deadlines smoothly in one centralized view.",                                              note: "See what needs your attention, all in one place.",                                                           UI: TasksUI,          duration: 5000 },
];

/* ── Main component ─────────────────────────────────────────── */
export default function CarouselSection() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const startRef = useRef(Date.now());
  const dragStartRef = useRef(0);

  /* Advance to next slide — called by the active demo on completion */
  const handleComplete = useCallback(() => {
    setActive(p => mod(p + 1, N));
  }, []);

  /* Progress bar — time-based, synced to each slide's known duration */
  useEffect(() => {
    clearInterval(progressIntervalRef.current);
    setProgress(0);
    startRef.current = Date.now();
    const duration = slides[active].duration;
    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      setProgress(Math.min((elapsed / duration) * 100, 100));
    }, 40);
    return () => clearInterval(progressIntervalRef.current);
  }, [active]);

  /* Mobile detection */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* Swipe */
  const onPointerDown = (e: React.PointerEvent) => { dragStartRef.current = e.clientX; };
  const onPointerUp = (e: React.PointerEvent) => {
    const delta = e.clientX - dragStartRef.current;
    if (Math.abs(delta) > 40) setActive(p => mod(p + (delta < 0 ? 1 : -1), N));
  };

  const ActiveUI = slides[active].UI;

  return (
    <section id="platform" className="carousel-sec">
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(28px, 3.5vw, 52px)" }}>
          <span style={{ display: "inline-block", fontFamily: "var(--font-inter), sans-serif", fontWeight: 600, fontSize: "clamp(10px, 0.85vw, 12px)", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a484e0", marginBottom: "14px" }}>
            Lead Generation
          </span>
          <h2 style={{ fontFamily: "var(--font-jakarta), sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3.2vw, 48px)", color: "#f4f4f5", margin: 0 }}>
            Turn hours of work into <em className="serif-em">seconds</em>
          </h2>
        </div>

        {/* Mobile */}
        {isMobile && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ background: "#0e0e14", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", overflow: "hidden" }}
              onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
              <AnimatePresence mode="wait">
                <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.35, ease: "easeOut" }}
                  style={{ padding: "24px 22px 0" }}>
                  <span style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a484e0" }}>{slides[active].tag}</span>
                  <h3 style={{ fontFamily: "var(--font-jakarta), sans-serif", fontWeight: 800, fontSize: "clamp(20px, 5vw, 28px)", color: "#f4f4f5", lineHeight: 1.15, margin: "8px 0 10px" }}>{slides[active].heading}</h3>
                  <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "clamp(13px, 3.5vw, 15px)", color: "#7a8895", lineHeight: 1.6, margin: "0 0 12px" }}>{slides[active].body}</p>
                  <div style={{ background: "rgba(123,95,224,0.13)", borderLeft: "3px solid #7b5fe0", borderRadius: "0 8px 8px 0", padding: "10px 14px", marginBottom: "16px" }}>
                    <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "clamp(11px, 3vw, 13px)", color: "#c4b5f7", lineHeight: 1.5, margin: 0 }}>{slides[active].note}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              {/* key resets step to 0 each time this card becomes active */}
              <div style={{ height: "240px", padding: "0 16px 16px" }}>
                <ActiveUI key={`m-${active}`} onComplete={handleComplete} />
              </div>
              <div style={{ height: "3px", background: "rgba(255,255,255,0.06)" }}>
                <div style={{ height: "100%", width: `${progress}%`, background: "#7b5fe0", transition: "width 0.04s linear" }} />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "7px", marginTop: "20px" }}>
              {slides.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  style={{ width: active === i ? "22px" : "7px", height: "7px", borderRadius: "999px", background: active === i ? "#a484e0" : "rgba(255,255,255,0.22)", border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }}
                  aria-label={`Slide ${i + 1}`} />
              ))}
            </div>
          </div>
        )}

        {/* Desktop 3D coverflow */}
        {!isMobile && (
          <>
            <div style={{ position: "relative", perspective: "1400px", height: "clamp(280px, 42vw, 470px)", overflow: "hidden" }}
              onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
              {slides.map((slide, i) => {
                const SlideUI = slide.UI;
                const half = Math.floor(N / 2);
                const off = mod(i - active + half, N) - half;
                const abs = Math.abs(off);
                const isActive = abs === 0;
                const scale = isActive ? 1 : abs === 1 ? 0.83 : 0.68;
                const xPct = off * 64;
                const rotateY = off * -14;
                const opacity = isActive ? 1 : abs === 1 ? 0.72 : abs === 2 ? 0.35 : 0;
                const zIndex = 10 - abs;
                return (
                  <motion.div key={i} onClick={() => abs > 0 && setActive(i)}
                    style={{ position: "absolute", top: 0, left: "50%", width: "clamp(300px, 72vw, 860px)", height: "clamp(280px, 42vw, 470px)", marginLeft: "clamp(-430px, -36vw, -150px)", cursor: abs > 0 ? "pointer" : "default", pointerEvents: abs > 2 ? "none" : "auto", transformStyle: "preserve-3d" }}
                    animate={{ x: `${xPct}%`, scale, rotateY, opacity, zIndex }}
                    transition={{ type: "spring", stiffness: 160, damping: 28, mass: 1.1 }}>
                    <div style={{ width: "100%", height: "100%", background: "#0e0e14", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", display: "grid", gridTemplateColumns: "44% 56%", overflow: "hidden" }}>
                      {/* Left: text */}
                      <div style={{ padding: "clamp(18px, 2.5vw, 36px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
                        <span style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 600, fontSize: "clamp(9px, 0.75vw, 11px)", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a484e0" }}>{slide.tag}</span>
                        <h3 style={{ fontFamily: "var(--font-jakarta), sans-serif", fontWeight: 800, fontSize: "clamp(16px, 1.9vw, 26px)", color: "#f4f4f5", lineHeight: 1.15, margin: 0 }}>{slide.heading}</h3>
                        <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "clamp(10px, 0.85vw, 13px)", color: "#7a8895", lineHeight: 1.6, margin: 0 }}>{slide.body}</p>
                        <div style={{ background: "rgba(123,95,224,0.13)", borderLeft: "3px solid #7b5fe0", borderRadius: "0 8px 8px 0", padding: "9px 12px" }}>
                          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "clamp(9px, 0.8vw, 12px)", color: "#c4b5f7", lineHeight: 1.5, margin: 0 }}>{slide.note}</p>
                        </div>
                        {/* Progress bar only on active card */}
                        <div style={{ marginTop: "auto", height: "2px", background: "rgba(255,255,255,0.07)", borderRadius: "2px", overflow: "hidden" }}>
                          {isActive && <div style={{ height: "100%", width: `${progress}%`, background: "#7b5fe0", transition: "width 0.04s linear" }} />}
                        </div>
                      </div>
                      {/* Right: live demo
                          key=`d-${active}-${i}` resets step when this card becomes the active one */}
                      <div style={{ background: "#060609", padding: "14px", overflow: "hidden", display: "flex", alignItems: "stretch" }}>
                        <SlideUI
                          key={isActive ? `d-active-${active}` : `d-idle-${i}`}
                          onComplete={isActive ? handleComplete : undefined}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "clamp(20px, 2.5vw, 36px)" }}>
              {slides.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  style={{ width: active === i ? "22px" : "7px", height: "7px", borderRadius: "999px", background: active === i ? "#a484e0" : "rgba(255,255,255,0.22)", border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }}
                  aria-label={`Slide ${i + 1}`} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
