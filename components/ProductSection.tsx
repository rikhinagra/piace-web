import Reveal from "./Reveal";

const stages = [
  {
    num: "01",
    label: "INTAKE",
    headline: "Every lead becomes a file before you open your day.",
    body: "Leads are parsed instantly. Reports, authorizations, and records are validated and formatted for attorney review.",
  },
  {
    num: "02",
    label: "TREATMENT",
    headline: "You review the chronology. You don't build it.",
    body: "Incoming medical bills and treatment sheets are processed on receipt. Piace automatically logs codes, flags treatment gaps, and builds the timeline.",
  },
  {
    num: "03",
    label: "DEMAND",
    headline: "You edit a draft. You don't start from blank.",
    body: "Once treatment is complete, Piace drafts a comprehensive policy-limit demand package — your special damages, medical narrative, and firm voice already inside.",
  },
  {
    num: "04",
    label: "NEGOTIATION",
    headline: "Every date stays watched while you work the offer.",
    body: "Negotiations are fully transparent. All insurance offers, liens, subrogation, and statutory deadlines are tracked so nothing slips while you negotiate.",
  },
  {
    num: "05",
    label: "SETTLEMENT",
    headline: "The money side stays simple, start to finish.",
    body: "Lien reductions are calculated automatically. Instant closing statements and disbursement sheets ensure your clients understand every dollar.",
  },
];

function CaseMock() {
  return (
    <div className="case-mock">
      <div className="case-mock-header">
        <span className="case-mock-label">ACTIVE CASE</span>
        <span className="case-mock-stage">Stage 02</span>
      </div>
      <div className="case-mock-title">Medical Chronology</div>
      <div className="case-mock-meta">
        <div className="case-mock-row">
          <span className="case-mock-key">Case</span>
          <span className="case-mock-val">Miller v. Sacramento Auto</span>
        </div>
        <div className="case-mock-row">
          <span className="case-mock-key">Agent</span>
          <span className="case-mock-val">MEDICAL_CHRONO_02</span>
        </div>
        <div className="case-mock-row">
          <span className="case-mock-key">Records</span>
          <span className="case-mock-val">14 pages indexed</span>
        </div>
        <div className="case-mock-row">
          <span className="case-mock-key">Timeline</span>
          <span className="case-mock-val">8/12 sessions</span>
        </div>
      </div>
      <div className="case-mock-activity">
        <div className="case-mock-activity-head">
          AGENT ACTIVITY
          <span className="live-dot">LIVE</span>
        </div>
        <div className="case-mock-log">
          <div className="case-mock-log-item">
            Chronology indexed — Records aligned and ready for review
          </div>
          <div className="case-mock-log-item">
            Treatment gap flagged: 14 days — Follow-up with provider requested
          </div>
          <div className="case-mock-log-item">
            Mercy Hospital records processed — All pages verified and attached
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductSection() {
  return (
    <section id="product" className="case-journey-sec">
      <div className="wrap">
        <Reveal>
          <div className="sec-head" style={{ textAlign: "center" }}>
            <span className="sec-pill pill-accent">THE CASE JOURNEY</span>
            <h2>
              One file, five stages, an agent at{" "}
              <em className="serif-em">each stage.</em>
            </h2>
            <p className="sec-sub">
              Piace tracks your personal injury files from first contact to
              settlement check, actively processing medical records, organizing
              evidence and drafting required documents.
            </p>
          </div>
        </Reveal>

        <div className="case-journey-grid">
          <div className="stages-list">
            {stages.map((s, i) => (
              <Reveal key={s.num} delay={i * 60}>
                <div className="stage-row">
                  <div className="stage-num-wrap">
                    <span className="stage-num">{s.num}</span>
                    <span className="stage-label">•{s.label}</span>
                  </div>
                  <div className="stage-copy">
                    <h3>{s.headline}</h3>
                    <p>{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div style={{ position: "sticky", top: 100 }}>
              <CaseMock />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
