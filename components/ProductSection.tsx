import Reveal from "./Reveal";

/* small original SVG visuals for each product card */
function ChronologyVisual() {
  return (
    <svg viewBox="0 0 420 200" style={{ width: "100%", height: "100%" }}>
      <line x1="30" y1="10" x2="30" y2="200" stroke="rgba(255,255,255,0.1)" />
      {[
        { y: 30, w: 230, label: "ER visit: lumbar strain noted", c: "#4c8dff" },
        { y: 75, w: 190, label: "MRI: L4/L5 disc herniation", c: "#e879f9" },
        { y: 120, w: 250, label: "PT sessions 1–8 (gap flagged)", c: "#ff9a3c" },
        { y: 165, w: 170, label: "Ortho consult: injection", c: "#2dd4bf" },
      ].map((r) => (
        <g key={r.y}>
          <circle cx="30" cy={r.y} r="5" fill="#0b0b0e" stroke={r.c} strokeWidth="2" />
          <rect x="48" y={r.y - 14} rx="8" width={r.w} height="28" fill="#141419" stroke="rgba(255,255,255,0.07)" />
          <text x="60" y={r.y + 4} fill="#c9c9d2" fontSize="11">
            {r.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function DemandVisual() {
  return (
    <svg viewBox="0 0 420 200" style={{ width: "100%", height: "100%" }}>
      <rect x="30" y="12" rx="10" width="240" height="188" fill="#141419" stroke="rgba(255,255,255,0.07)" />
      <text x="48" y="40" fill="#f4f4f5" fontSize="13" fontWeight="600">
        Demand: Rear-end MVA
      </text>
      {[58, 76, 94, 112, 130, 148].map((y, i) => (
        <rect key={y} x="48" y={y} rx="3" width={i % 3 === 2 ? 120 : 200} height="7" fill="rgba(255,255,255,0.09)" />
      ))}
      <rect x="48" y="166" rx="6" width="86" height="22" fill="rgba(76,141,255,0.16)" />
      <text x="60" y="181" fill="#4c8dff" fontSize="10.5">
        Firm voice ✓
      </text>
      <rect x="290" y="42" rx="8" width="110" height="34" fill="rgba(255,154,60,0.12)" />
      <text x="302" y="63" fill="#ff9a3c" fontSize="11">
        7 PI types
      </text>
      <rect x="290" y="86" rx="8" width="110" height="34" fill="rgba(45,212,191,0.1)" />
      <text x="302" y="107" fill="#2dd4bf" fontSize="11">
        Facts sourced
      </text>
    </svg>
  );
}

function DeadlineVisual() {
  return (
    <svg viewBox="0 0 420 200" style={{ width: "100%", height: "100%" }}>
      {[
        { y: 24, t: "Statute of limitations: Ramos", d: "142 days", c: "#4ade80" },
        { y: 68, t: "Discovery responses: Chen", d: "12 days", c: "#ff9a3c" },
        { y: 112, t: "UIM notice: Okafor", d: "3 days", c: "#f87171" },
        { y: 156, t: "Lien negotiation follow-up", d: "Tonight", c: "#f87171" },
      ].map((r) => (
        <g key={r.y}>
          <rect x="24" y={r.y - 16} rx="9" width="372" height="36" fill="#141419" stroke="rgba(255,255,255,0.07)" />
          <circle cx="46" cy={r.y + 2} r="4" fill={r.c} />
          <text x="62" y={r.y + 6} fill="#c9c9d2" fontSize="11.5">
            {r.t}
          </text>
          <text x="340" y={r.y + 6} fill={r.c} fontSize="11" fontWeight="600">
            {r.d}
          </text>
        </g>
      ))}
    </svg>
  );
}

function SettlementVisual() {
  return (
    <svg viewBox="0 0 420 200" style={{ width: "100%", height: "100%" }}>
      <path
        d="M210 168 a86 86 0 1 1 0.01 0"
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="14"
      />
      <path
        d="M210 168 a86 86 0 1 1 60 -146"
        fill="none"
        stroke="url(#gaugeGrad)"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e879f9" />
          <stop offset="60%" stopColor="#4c8dff" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      <text x="210" y="96" textAnchor="middle" fill="#f4f4f5" fontSize="26" fontWeight="700">
        $86,400
      </text>
      <text x="210" y="118" textAnchor="middle" fill="#9d9da6" fontSize="11">
        avg. net to client
      </text>
    </svg>
  );
}

const cards = [
  {
    title: "Medical Chronology, Built by AI",
    text: "Drop in hundreds of pages of records and bills; get an annotated, sourced treatment timeline that flags gaps and buried injuries.",
    visual: <ChronologyVisual />,
  },
  {
    title: "Demands That Draft Themselves",
    text: "Drafts demands across the seven PI demand types in your firm's voice, pulling facts straight from the chronology and case file.",
    visual: <DemandVisual />,
  },
  {
    title: "Every Deadline, Watched",
    text: "Every statute of limitations and case deadline tracked automatically, with an always-on watch that surfaces what's at risk tonight.",
    visual: <DeadlineVisual />,
  },
  {
    title: "Settlements, End to End",
    text: "Offers, negotiations, lien resolution, and disbursement: the money side of the case tracked end to end.",
    visual: <SettlementVisual />,
  },
];

export default function ProductSection() {
  return (
    <section id="product">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <span className="pill">Product</span>
            <h2>
              Everything a PI Firm Runs On, With the{" "}
              <span className="serif">AI</span> Already Inside It
            </h2>
            <p>
              The case spine handles the work you&apos;d expect from a PI CMS.
              The agents do the work you used to hire for.
            </p>
          </div>
        </Reveal>

        <div className="prod-grid">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 120}>
              <div className="prod-card">
                <div className="visual">
                  <div className="inner-mock">{c.visual}</div>
                </div>
                <div className="copy">
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
