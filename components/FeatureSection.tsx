import Reveal from "./Reveal";

const features = [
  {
    title: "Case Management",
    ai: false,
    text: "PI-shaped from intake to disbursement: status stages, providers, injuries, liens, and deadlines as first-class objects, not bolt-ons.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    title: "Lead Intake",
    ai: true,
    text: "Capture and qualify leads 24/7 across web, phone, and text, scored and routed before a human picks up.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Client Texting",
    ai: false,
    text: "Two-way client messaging logged to the case: no personal cell numbers, no lost threads, full history on every matter.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Settlement Tracking",
    ai: false,
    text: "Offers, negotiations, lien resolution, and disbursement: the money side of the case tracked end to end.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "E-Sign & Documents",
    ai: false,
    text: "Retainers and forms generated, sent, and signed inside the case file, with document automation built around PI paperwork.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
        <path d="M9 11l3 3 8-8" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Custom Agents",
    ai: true,
    text: "Spin up an agent for your firm's own routine work, the part a co-built platform does that off-the-shelf software can't.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function FeatureSection() {
  return (
    <section id="feature">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <span className="pill">Feature</span>
            <h2>
              Unique Features That Make a <span className="serif">Difference</span>
            </h2>
            <p>
              Tagged items run on AI by default. The rest is a modern PI CMS,
              engineered to drive meaningful outcomes for your firm.
            </p>
          </div>
        </Reveal>

        <div className="feat-grid">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 100}>
              <div className="feat-card">
                <div className="ico">{f.icon}</div>
                <h3>
                  {f.title}
                  {f.ai && <span className="ai-chip">AI</span>}
                </h3>
                <p>{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
