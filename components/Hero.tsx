import Starfield from "./Starfield";
import GlowButton from "./GlowButton";
import Reveal from "./Reveal";

const stats = [
  { value: "14,200+", label: "PAGES READ THIS WEEK" },
  { value: "312", label: "DEMANDS DRAFTED" },
  { value: "0", label: "DEADLINES MISSED" },
  { value: "$2.4M", label: "TRACKED TO SETTLEMENT" },
];

export default function Hero() {
  return (
    <section className="hero">
      <Starfield />
      <div className="wrap" style={{ position: "relative" }}>
        <Reveal>
          <p
            className="hero-eyebrow-new"
            style={{
              background: "linear-gradient(90deg, #4c8dff 0%, #c084fc 50%, #38bdf8 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            AI-NATIVE CASE MANAGEMENT
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="jakarta">
            More time to practice <em className="serif-em">law</em>
            <br />PiAce runs the rest of the file
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="sub-new">
            PiAce reads your records, drafts your demands, and watches your
            deadlines so every case reaches you ready to work, not ready to
            start.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="hero-actions">
            <GlowButton href="#book">Book a Walkthrough</GlowButton>
            <a href="#product" className="btn-purple">See it work</a>
          </div>
          <p className="hero-migration-note">
            FREE MIGRATION  WE MOVE YOUR CASES, YOU KEEP PRACTICING
          </p>
        </Reveal>

        <Reveal delay={340}>
          <div className="hero-video-wrap">
            {/* Video box — all corners rounded, purple corner glow */}
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

            {/* Stats — separate row below video */}
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
                  <div style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(22px, 2.4vw, 36px)",
                    color: "#eef0f3",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}>{s.value}</div>
                  <div style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(9px, 0.75vw, 11px)",
                    color: "#8a95a0",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    lineHeight: 1.4,
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
