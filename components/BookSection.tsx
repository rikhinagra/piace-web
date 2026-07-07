"use client";

import Reveal from "./Reveal";

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function BookSection() {
  return (
    <section id="book" className="book-sec">
      <div className="wrap book-grid">
        <Reveal>
          <div>
            <span className="pill" style={{ marginBottom: 34, display: "inline-block" }}>
              Book a call
            </span>
            <h2>
              See PIace on Your Own <span className="serif">Cases</span>
            </h2>
            <p className="lede">
              A 30-minute walkthrough with the team. We&apos;ll show you the
              workflow on PI matters like yours and map what switching from
              your current system looks like.
            </p>
            <ul>
              <li>
                <Check /> Live walkthrough on real PI workflows
              </li>
              <li>
                <Check /> A migration plan from your current CMS
              </li>
              <li>
                <Check /> Straight answers on pricing and timeline
              </li>
            </ul>
          </div>
        </Reveal>

        {/* [PLACEHOLDER] Swap this card for a Calendly / Cal.com embed when ready */}
        <Reveal delay={150}>
          <form
            className="scheduler"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Connect Calendly/Cal.com here, or POST to your CRM endpoint.");
            }}
          >
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input id="name" type="text" placeholder="Jane Attorney" />
            </div>
            <div className="field">
              <label htmlFor="firm">Firm</label>
              <input id="firm" type="text" placeholder="Firm name" />
            </div>
            <div className="field">
              <label htmlFor="email">Work email</label>
              <input id="email" type="email" placeholder="jane@firm.com" />
            </div>
            <div className="field">
              <label htmlFor="cms">Current case management system</label>
              <select id="cms" defaultValue="">
                <option value="" disabled>
                  Select…
                </option>
                <option>CASEpeer</option>
                <option>SmartAdvocate</option>
                <option>Filevine</option>
                <option>Litify</option>
                <option>Clio</option>
                <option>Spreadsheets / none</option>
                <option>Other</option>
              </select>
            </div>
            <button type="submit" className="btn-blue">
              Request My Walkthrough
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
