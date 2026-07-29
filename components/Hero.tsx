import Starfield from "./Starfield";
import GlowButton from "./GlowButton";
import Reveal from "./Reveal";
import ScrollIndicator from "./ScrollIndicator";

const stats = [
  { value: "14,200+", label: "PAGES READ THIS WEEK" },
  { value: "312", label: "DEMANDS DRAFTED" },
  { value: "0", label: "DEADLINES MISSED" },
  { value: "$2.4M", label: "TRACKED TO SETTLEMENT" },
];

export default function Hero() {
  return (
    <section className="hero" style={{ padding: 0, overflow: "visible" }}>
      <Starfield />

      {/* ── Above fold: fills 100vh ── */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          paddingTop: "80px",
          paddingBottom: "90px",
          textAlign: "center",
        }}
      >
        <div className="wrap" style={{ position: "relative" }}>

          {/* Eyebrow */}
          <Reveal>
            <p
              className="hero-eyebrow-new"
              style={{
                background: "linear-gradient(90deg, #4c8dff 0%, #c084fc 50%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                marginBottom: "clamp(24px, 2.5vw, 32px)",
              }}
            >
              AI-NATIVE CASE MANAGEMENT
            </p>
          </Reveal>

          {/* Heading */}
          <Reveal delay={100}>
            <h1
              className="jakarta"
              style={{ marginBottom: "clamp(32px, 3vw, 44px)" }}
            >
              More time to practice <em className="serif-em">law</em>
              <br />PiAce runs the rest of the case
            </h1>
          </Reveal>

          {/* Subtext */}
          <Reveal delay={180}>
            <p
              className="sub-new"
              style={{ marginBottom: "clamp(52px, 5vw, 64px)" }}
            >
              PiAce reads your records, drafts your demands, and watches your
              deadlines so every case reaches you ready to work, not ready to
              start.
            </p>
          </Reveal>

          {/* CTA + migration note */}
          <Reveal delay={260}>
            <div className="hero-actions" style={{ justifyContent: "center", marginBottom: "clamp(24px, 2vw, 28px)" }}>
              <GlowButton href="#book">Book a Walkthrough</GlowButton>
            </div>
            <p className="hero-migration-note" style={{ marginTop: "clamp(12px, 1.5vw, 20px)" }}>
              FREE MIGRATION  WE MOVE YOUR CASES, YOU KEEP PRACTICING
            </p>
          </Reveal>

        </div>

        {/* Scroll indicator pinned to bottom of viewport */}
        <ScrollIndicator />
      </div>

      {/* ── Below fold: video + stats ── */}
      <div
        className="wrap"
        style={{ paddingBottom: "clamp(52px, 6.5vw, 92px)" }}
      >
        <Reveal delay={0}>
          <div className="hero-video-wrap">
            <div
              className="hero-video-box"
              style={{
                borderRadius: "16px",
                border: "1px solid rgba(123,95,224,0.35)",
                boxShadow:
                  "0 0 0 1px rgba(123,95,224,0.12), 0 8px 60px rgba(100,70,200,0.35), 0 0 120px rgba(100,70,200,0.18), 0 0 200px rgba(80,50,180,0.1)",
                overflow: "hidden",
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              >
                <source src="/piace-video.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: "28px",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                paddingTop: "24px",
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    flex: "1 1 22%",
                    minWidth: "130px",
                    textAlign: "center",
                    padding: "10px 12px",
                    borderRight:
                      i < stats.length - 1
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(22px, 2.4vw, 36px)",
                      color: "#eef0f3",
                      lineHeight: 1,
                      marginBottom: "8px",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(9px, 0.75vw, 11px)",
                      color: "#8a95a0",
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      lineHeight: 1.4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
