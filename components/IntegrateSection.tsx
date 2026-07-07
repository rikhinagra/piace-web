import Reveal from "./Reveal";

function ChatMock() {
  return (
    <div className="mock-frame">
      <div className="chat-head">
        <span
          className="avatar"
          style={{ background: "linear-gradient(135deg,#c084fc,#7c3aed)" }}
        >
          MR
        </span>
        <div>
          <div className="name">Maria Reyes</div>
          <div className="handle">Client · Ramos v. Halstead</div>
        </div>
        <span className="call">
          <svg viewBox="0 0 24 24">
            <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.2 2.2z" />
          </svg>
        </span>
      </div>
      <div className="bubble them">
        Hi! My physical therapist moved my appointment to Thursday. Does that
        change anything for my case?
      </div>
      <div className="chat-time">10:40 AM</div>
      <div className="bubble us">
        Thanks for letting us know, Maria! I&apos;ve updated your treatment
        calendar.
      </div>
      <div className="bubble us">
        Keep attending every session; consistent treatment strengthens your
        claim. We&apos;ll request the updated records automatically.
      </div>
      <div className="chat-time" style={{ textAlign: "right" }}>
        11:41 AM
      </div>
      <div className="bubble them">Perfect, thank you so much!</div>
      <div className="chat-input">Type a message…</div>
    </div>
  );
}

function KanbanMock() {
  return (
    <div className="mock-frame">
      <div className="kanban">
        <div className="kb-col">
          <div className="kb-head">
            Intake <span className="count">2</span>
          </div>
          <div className="kb-card">
            <div className="t">Rear-end MVA: D. Okafor</div>
            <div className="d">
              Lead qualified &amp; scored overnight. Retainer sent for
              e-signature.
            </div>
            <span className="kb-tag blue">Intake Agent</span>
          </div>
          <div className="kb-card">
            <div className="t">Slip &amp; fall: T. Nguyen</div>
            <div className="d">Incident details captured by web intake.</div>
            <span className="kb-tag blue">Intake Agent</span>
          </div>
        </div>
        <div className="kb-col">
          <div className="kb-head">
            Treatment <span className="count">3</span>
          </div>
          <div className="kb-card">
            <div className="t">Ramos v. Halstead</div>
            <div className="d">
              212 pages of records structured into chronology. 1 treatment gap
              flagged.
            </div>
            <span className="kb-tag purple">Records Agent</span>
          </div>
          <div className="kb-card">
            <div className="t">Chen: premises liability</div>
            <div className="d">Bill-to-record mismatch surfaced for review.</div>
            <span className="kb-tag purple">Records Agent</span>
          </div>
        </div>
        <div className="kb-col">
          <div className="kb-head">
            Demand <span className="count">4</span>
          </div>
          <div className="kb-card">
            <div className="t">Whitaker: UIM demand</div>
            <div className="d">
              First draft ready in the firm&apos;s voice. Facts cited to the
              file.
            </div>
            <span className="kb-tag teal">Demand Drafter</span>
          </div>
          <div className="kb-card">
            <div className="t">Okafor: policy limits</div>
            <div className="d">Damages summary compiled from chronology.</div>
            <span className="kb-tag teal">Demand Drafter</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    n: "01",
    title: "Intake",
    text: "A lead comes in by web form, call, or text. It's captured, qualified, and scored around the clock, then opened as a case with the client's details already in place.",
    tag: "Intake Agent · qualifies & opens the file",
  },
  {
    n: "02",
    title: "Treatment & records",
    text: "As medical records and bills arrive, they're read and structured into an annotated chronology. Treatment gaps, buried injuries, and bill-to-record mismatches get flagged for review.",
    tag: "Records Agent · builds the medical chronology",
  },
  {
    n: "03",
    title: "Demand",
    text: "When the file is ready, a demand drafts itself across the seven PI demand types, pulling facts, treatment, and damages straight from the case, in your firm's voice and format.",
    tag: "Demand Drafter · writes the first draft",
  },
  {
    n: "04",
    title: "Negotiation",
    text: "Offers and counters are logged against the case. Every statute and deadline stays tracked, so nothing falls through while a matter is in motion.",
    tag: "Deadline Watch · guards every date",
  },
  {
    n: "05",
    title: "Settlement",
    text: "Disbursement, lien resolution, and the money side close out inside the same system the case was opened in. One record from first call to final check.",
    tag: "Case Spine · the full history, one place",
  },
];

export default function IntegrateSection() {
  return (
    <section id="workflow">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <span className="pill">Workflow</span>
            <h2>
              One Case, Start to <span className="serif">Settlement</span>
            </h2>
            <p>
              This is what &quot;AI-native&quot; actually means: the agents
              aren&apos;t a separate tool you switch to. They live inside the
              stage you&apos;re already in.
            </p>
          </div>
        </Reveal>

        <div className="steps">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={(i % 5) * 80}>
              <div className="step-row">
                <span className="step-num serif">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="step-tag">{s.tag}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="int-row">
          <Reveal>
            <div>
              <h3>
                Client Texting, <span className="serif">Logged</span> to the
                Case
              </h3>
              <p>
                Two-way client messaging logged to the case: no personal cell
                numbers, no lost threads, full history on every matter. Clients
                stay informed while the file stays complete.
              </p>
              <a href="#book" className="btn-blue">
                Schedule Your Demo
              </a>
            </div>
          </Reveal>
          <Reveal delay={150} className="mock-side">
            <ChatMock />
          </Reveal>
        </div>

        <div className="int-row flip">
          <Reveal className="mock-side">
            <KanbanMock />
          </Reveal>
          <Reveal delay={150}>
            <div>
              <h3>
                Every Case <span className="serif">Staged</span>, Intake to
                Settlement
              </h3>
              <p>
                Organize and manage every matter through PI-shaped stages
                (Intake, Treatment, Demand, Negotiation, Settlement) with the
                agents doing the routine work inside each stage as the case
                moves.
              </p>
              <a href="#book" className="btn-blue">
                Schedule Your Demo
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
