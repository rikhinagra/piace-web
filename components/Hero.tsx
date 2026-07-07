import Starfield from "./Starfield";
import GlowButton from "./GlowButton";
import Reveal from "./Reveal";

/* --- original PI-themed dashboard mock, drawn with CSS + SVG --- */
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="stat-row">
        {[
          { label: "Active cases", value: "128", chip: "+18.4%", up: true },
          { label: "Demands drafted", value: "342", chip: "+12.6%", up: true },
          { label: "Deadlines tracked", value: "1.2K", chip: "+3.1%", up: true },
          { label: "Avg. settlement", value: "$86K", chip: "+11.3%", up: true },
        ].map((s) => (
          <div className="stat" key={s.label}>
            <div className="label">
              <span>{s.label}</span>
              <span>…</span>
            </div>
            <div className="value">
              {s.value}
              <span className={s.up ? "badge-up" : "badge-down"}>{s.chip}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="dash-main">
        <div className="panel">
          <div className="p-head">
            <div>
              <div className="p-title">Total recovered</div>
              <div className="p-value">
                $2.4M <span className="badge-up">+24.6%</span>
              </div>
            </div>
            <div className="legend">
              <span>
                <i style={{ background: "#e879f9" }} />
                Settlements
              </span>
              <span>
                <i style={{ background: "#38bdf8" }} />
                Demands
              </span>
            </div>
          </div>
          <svg viewBox="0 0 560 200" style={{ width: "100%", height: "auto" }}>
            <defs>
              <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[40, 80, 120, 160].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="560"
                y2={y}
                stroke="rgba(255,255,255,0.05)"
              />
            ))}
            <path
              d="M0,185 C60,175 90,120 140,125 S220,170 270,140 S340,60 400,75 S500,130 560,90 L560,200 L0,200 Z"
              fill="url(#areaFill)"
            />
            <path
              d="M0,185 C60,175 90,120 140,125 S220,170 270,140 S340,60 400,75 S500,130 560,90"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2"
            />
            <path
              d="M0,195 C80,190 130,150 180,140 S260,120 320,105 S440,55 560,35"
              fill="none"
              stroke="#e879f9"
              strokeWidth="2"
            />
            <circle cx="320" cy="105" r="4" fill="#0b0b0e" stroke="#e879f9" strokeWidth="2" />
            <g>
              <rect x="240" y="55" rx="8" width="132" height="40" fill="#17171c" stroke="rgba(255,255,255,0.1)" />
              <text x="254" y="72" fill="#f4f4f5" fontSize="13" fontWeight="700">
                $125.2k
              </text>
              <text x="254" y="88" fill="#9d9da6" fontSize="9">
                June 21, 2025
              </text>
              <rect x="318" y="61" rx="4" width="44" height="14" fill="rgba(45,212,130,0.15)" />
              <text x="324" y="71" fill="#4ade80" fontSize="8.5">
                12.5% ↗
              </text>
            </g>
            {["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map((m, i) => (
              <text key={m} x={10 + i * 100} y="199" fill="#66666e" fontSize="9">
                {m}
              </text>
            ))}
          </svg>
        </div>

        <div className="side-col">
          <div className="panel">
            <div className="p-title">Demand pipeline</div>
            <div className="p-value">
              46 <span className="badge-up">+28.5%</span>
            </div>
            <svg viewBox="0 0 240 90" style={{ width: "100%", height: "auto" }}>
              {Array.from({ length: 24 }).map((_, i) => {
                const h = 12 + ((i * 37) % 58);
                return (
                  <rect
                    key={i}
                    x={i * 10 + 2}
                    y={88 - h}
                    width="4.5"
                    height={h}
                    rx="2"
                    fill={i % 2 ? "#38bdf8" : "#e879f9"}
                  />
                );
              })}
            </svg>
            <div className="p-head" style={{ marginTop: 10, marginBottom: 0 }}>
              <span className="p-title">Last 12 months</span>
              <a className="view-link" href="#book">
                View report
              </a>
            </div>
          </div>

          <div className="panel">
            <div className="p-title">Statutes watched</div>
            <div className="p-value">
              400 <span className="badge-up">+16.8%</span>
            </div>
            <svg viewBox="0 0 240 70" style={{ width: "100%", height: "auto" }}>
              <path
                d="M0,58 L30,48 L55,55 L85,38 L115,52 L145,20 L175,50 L205,32 L240,54"
                fill="none"
                stroke="#e879f9"
                strokeWidth="2"
              />
            </svg>
            <div className="p-head" style={{ marginTop: 10, marginBottom: 0 }}>
              <span className="p-title">
                <span style={{ color: "#4ade80" }}>• Live</span> all deadlines
              </span>
              <a className="view-link" href="#book">
                View report
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <Starfield />
      <div className="wrap" style={{ position: "relative" }}>
        <Reveal>
          <p className="hero-eyebrow">AI-native case management</p>
        </Reveal>

        <Reveal delay={100}>
          <h1>
            Built for PI.{" "}
            <span className="nowrap">
              <span className="serif">Native</span> to{" "}
              <span className="dim">AI.</span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="sub">
            PIace is case management for personal injury firms with AI built
            into every step: intake, medical chronologies, demand letters,
            deadlines. Not a writing assistant taped onto software from 2018.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <GlowButton href="#book">Book A Call</GlowButton>
          <p className="hero-note">
            Already on CASEpeer or SmartAdvocate?{" "}
            <b>We move your cases for you.</b>
          </p>
        </Reveal>

        <Reveal delay={200} className="dash-wrap">
          <div className="dash-glow" aria-hidden="true" />
          <Dashboard />
        </Reveal>
      </div>
    </section>
  );
}
