"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const N = 7;
function mod(a: number, b: number) { return ((a % b) + b) % b; }

/* ── Video player — plays when active, pauses when not ── */
function SlideVideo({ src, isActive, onComplete }: { src: string; isActive: boolean; onComplete?: () => void }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (isActive) {
      v.currentTime = 0;
      v.play().catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
    }
  }, [isActive]);

  return (
    <video
      ref={ref}
      src={src}
      muted
      playsInline
      preload="metadata"
      onEnded={onComplete}
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", background: "#07070f" }}
    />
  );
}

const slides = [
  {
    tag: "LEADS",
    heading: "Win more cases faster",
    body: "Turn referrals into leads faster with automated outreach. Compile medical chronologies and standard demands with elite accuracy.",
    note: "Automatically follow up, prioritize the right referrals, and book more appointments.",
    video: "/lg-03-extraction.mp4",
    duration: 21500,
  },
  {
    tag: "DOCUMENTS",
    heading: "Turn patient data into ready-to-use documents",
    body: "Attorney-approved templates with auto-populated patient data. Instantly generate clinical validation profiles with high fidelity.",
    note: "Skip the manual work. Patient details, dates, and treatment summaries are filled in for you.",
    video: "/lg-02-upload.mp4",
    duration: 15600,
  },
  {
    tag: "MEDICAL PACKETS",
    heading: "Medical Packets, ready when you are",
    body: "Organize medical records chronologically. Filter by provider or treatment category to build elite case profiles instantly.",
    note: "Gather treatment summaries, billing records, and diagnostic reports automatically.",
    video: "/lg-04-letter.mp4",
    duration: 13700,
  },
  {
    tag: "INTAKE",
    heading: "Get intake done before the coffee gets cold",
    body: "AI-streamlined forms with pre-filled data and auto-validation in under 4 minutes. Cut operational drag and avoid manual errors instantly.",
    note: "Gather treatment summaries, billing records, and diagnostic reports automatically.",
    video: "/lg-01-intake.mp4",
    duration: 10200,
  },
  {
    tag: "AI AGENT",
    heading: "Your work doesn't have to wait",
    body: "Always on AI that monitors deadlines, auto-generates legal packets, and processes patient updates with 0% latency.",
    note: "Working around the clock, so your team doesn't have to.",
    video: "/lg-05-tasks.mp4",
    duration: 21700,
  },
  {
    tag: "COLLABORATION",
    heading: "Teamwork, built right in",
    body: "Communicate with your team directly inside Piace. Tag cases, share key documents, and coordinate smoothly without switching apps.",
    note: "Chat, share documents, and keep every case moving, all without leaving Piace.",
    video: "/lg-07-team.mp4",
    duration: 3200,
  },
  {
    tag: "TASK MANAGEMENT",
    heading: "Everything your team is working on, all in one view",
    body: "Keep every priority organized. Track file compilations, validation requests, and legal drafting deadlines smoothly in one centralized view.",
    note: "See what needs your attention, all in one place.",
    video: "/lg-06-priority.mp4",
    duration: 39600,
  },
];

/* ── Main component ─────────────────────────────────────────── */
export default function CarouselSection() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const startRef = useRef(Date.now());
  const dragStartRef = useRef(0);

  const handleComplete = useCallback(() => {
    setActive(p => mod(p + 1, N));
  }, []);

  /* Progress bar — synced to each slide's video duration */
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

  return (
    <section id="platform" className="carousel-sec">
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(28px, 3.5vw, 52px)" }}>
          <span style={{ display: "inline-block", fontFamily: "var(--font-inter), sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.25vw, 18px)", letterSpacing: "6px", textTransform: "uppercase", color: "#a484e0", marginBottom: "14px" }}>
            Lead Generation
          </span>
          <h2 style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3.33vw, 48px)", color: "#f4f4f5", margin: 0 }}>
            Turn hours of work into <em className="serif-em" style={{ color: "#eae0fd" }}>seconds</em>
          </h2>
        </div>

        {/* ── Mobile ── */}
        {isMobile && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{ background: "#0e0e14", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", overflow: "hidden" }}
              onPointerDown={onPointerDown} onPointerUp={onPointerUp}
            >
              <AnimatePresence mode="wait">
                <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.35, ease: "easeOut" }}
                  style={{ padding: "24px 22px 0" }}>
                  <span style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a484e0" }}>{slides[active].tag}</span>
                  <h3 style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: "clamp(20px, 5vw, 28px)", color: "#f4f4f5", lineHeight: 1.15, margin: "8px 0 10px" }}>{slides[active].heading}</h3>
                  <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 500, fontSize: "clamp(13px, 3.5vw, 15px)", color: "#7a8895", lineHeight: 1.6, margin: "0 0 12px" }}>{slides[active].body}</p>
                  <div style={{ background: "rgba(123,95,224,0.13)", borderLeft: "3px solid #7b5fe0", borderRadius: "0 8px 8px 0", padding: "10px 14px", marginBottom: "16px" }}>
                    <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 500, fontSize: "clamp(11px, 3vw, 13px)", color: "#c4b5f7", lineHeight: 1.5, margin: 0 }}>{slides[active].note}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div style={{ height: "240px", padding: "0 16px 16px" }}>
                <div style={{ height: "100%", background: "#07070f", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", overflow: "hidden" }}>
                  <SlideVideo key={`m-${active}`} src={slides[active].video} isActive={true} onComplete={handleComplete} />
                </div>
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

        {/* ── Desktop 3D coverflow ── */}
        {!isMobile && (
          <>
            <div
              style={{ position: "relative", perspective: "1400px", height: "clamp(280px, 42vw, 470px)", overflow: "hidden" }}
              onPointerDown={onPointerDown} onPointerUp={onPointerUp}
            >
              {slides.map((slide, i) => {
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
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      width: "clamp(300px, 72vw, 860px)",
                      height: "clamp(280px, 42vw, 470px)",
                      marginLeft: "clamp(-430px, -36vw, -150px)",
                      cursor: abs > 0 ? "pointer" : "default",
                      pointerEvents: abs > 2 ? "none" : "auto",
                      transformStyle: "preserve-3d",
                    }}
                    animate={{ x: `${xPct}%`, scale, rotateY, opacity, zIndex }}
                    transition={{ type: "spring", stiffness: 160, damping: 28, mass: 1.1 }}>

                    <div style={{ width: "100%", height: "100%", background: "#0e0e14", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", display: "grid", gridTemplateColumns: "44% 56%", overflow: "hidden" }}>

                      {/* ── Left: text panel ── */}
                      <div style={{ padding: "clamp(18px, 2.5vw, 36px)", display: "flex", flexDirection: "column", justifyContent: "space-between", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
                        {/* Top: tag + heading + body */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(8px, 1vw, 12px)" }}>
                          <span style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 600, fontSize: "clamp(9px, 0.75vw, 11px)", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a484e0" }}>
                            {slide.tag}
                          </span>
                          <h3 style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: "clamp(17px, 2.5vw, 36px)", color: "#f4f4f5", lineHeight: 1.15, margin: 0, hyphens: "none" as "none" }}>
                            {slide.heading}
                          </h3>
                          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 500, fontSize: "clamp(11px, 1.11vw, 16px)", color: "#7a8895", lineHeight: 1.6, margin: 0, hyphens: "none" as "none" }}>
                            {slide.body}
                          </p>
                        </div>
                        {/* Bottom: note box + progress bar */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                          <div style={{ background: "rgba(123,95,224,0.13)", borderLeft: "3px solid #7b5fe0", borderRadius: "0 8px 8px 0", padding: "9px 12px" }}>
                            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 500, fontSize: "clamp(9px, 0.83vw, 12px)", color: "#c4b5f7", lineHeight: 1.5, margin: 0, hyphens: "none" as "none" }}>
                              {slide.note}
                            </p>
                          </div>
                          <div style={{ height: "2px", background: "rgba(255,255,255,0.07)", borderRadius: "2px", overflow: "hidden" }}>
                            {isActive && <div style={{ height: "100%", width: `${progress}%`, background: "#7b5fe0", transition: "width 0.04s linear" }} />}
                          </div>
                        </div>
                      </div>

                      {/* ── Right: video panel ── */}
                      <div style={{ background: "#060609", padding: "14px", overflow: "hidden", display: "flex", alignItems: "stretch" }}>
                        <div style={{ flex: 1, borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" }}>
                          <SlideVideo
                            key={isActive ? `d-active-${active}` : `d-idle-${i}`}
                            src={slide.video}
                            isActive={isActive}
                            onComplete={isActive ? handleComplete : undefined}
                          />
                        </div>
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
