"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "What is PIace?",
    a: "PIace is AI-native case management built specifically for personal injury firms. Intake, medical chronologies, demand letters, deadlines, client texting, and settlement tracking all live in one system, with AI agents working inside every stage, not bolted on as a separate tool.",
  },
  {
    q: "How is PIace different from CASEpeer or SmartAdvocate?",
    a: "Traditional PI software added AI as a writing assistant on top of an older platform. PIace was built AI-native from day one: the agents read your records, draft your demands, watch your statutes, and qualify your leads as part of the case workflow itself.",
  },
  {
    q: "What does the AI actually do on a case?",
    a: "An Intake Agent captures and scores leads 24/7. A Records Agent turns hundreds of pages of medical records into an annotated, sourced chronology and flags treatment gaps. A Demand Drafter writes first drafts across the seven PI demand types in your firm's voice. Deadline Watch tracks every statute and date, surfacing what's at risk.",
  },
  {
    q: "How does switching from my current CMS work?",
    a: "We do the migration for you. Cases, contacts, documents, and history are brought over and verified by our team, typically in days, not months, so the cutover isn't your problem.",
  },
  {
    q: "Is my case data secure?",
    a: "Yes. Your firm's data is encrypted in transit and at rest, access is role-based, and your case files are never used to train models for other firms.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <span className="pill">Faqs</span>
            <h2>
              Your Questions About PIace, <span className="serif">Answered</span>
            </h2>
            <p>Learn more about how PIace can transform your firm.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={f.q} className={`faq-item ${open === i ? "open" : ""}`}>
                <button
                  className="faq-q"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  {f.q}
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
                <div
                  className="faq-a"
                  style={{ maxHeight: open === i ? 220 : 0 }}
                >
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
