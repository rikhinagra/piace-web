"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const stages = [
  { n: "01", label: "Intake" },
  { n: "02", label: "Records" },
  { n: "03", label: "Demand" },
];

const STAGE_MS = 6000;

function IntakePane() {
  return (
    <div className="demo-pane">
      <div className="bubble them d-anim" style={{ animationDelay: "0.1s" }}>
        Hi, I was rear-ended on I-80 yesterday. My neck and back are hurting
        badly. Do I have a case?
      </div>
      <div className="d-anim" style={{ animationDelay: "0.9s" }}>
        <span className="agent-chip">
          <i /> Intake Agent · qualifying &amp; scoring lead…
        </span>
      </div>
      <div className="result-card d-anim" style={{ animationDelay: "1.9s" }}>
        <b>Case opened: Rear-end MVA · D. Okafor</b>
        <span>
          Lead score <em className="good">92</em> · Retainer sent for
          e-signature
        </span>
      </div>
    </div>
  );
}

function RecordsPane() {
  const rows = [
    { c: "#4c8dff", t: "ER visit: lumbar strain noted", d: "0.7s" },
    { c: "#e879f9", t: "MRI: L4/L5 disc herniation", d: "1.2s" },
    { c: "#ff9a3c", t: "PT sessions 1–8", d: "1.7s", flag: "gap flagged" },
  ];
  return (
    <div className="demo-pane">
      <div className="rec-head d-anim" style={{ animationDelay: "0.1s" }}>
        212 pages of records &amp; bills received
      </div>
      {rows.map((r) => (
        <div className="rec-row d-anim" key={r.t} style={{ animationDelay: r.d }}>
          <i style={{ background: r.c }} />
          {r.t}
          {r.flag && <em>{r.flag}</em>}
        </div>
      ))}
      <div className="d-anim" style={{ animationDelay: "2.4s" }}>
        <span className="agent-chip">
          <i /> Records Agent · building annotated chronology…
        </span>
      </div>
    </div>
  );
}

function DemandPane() {
  return (
    <div className="demo-pane">
      <div className="doc-card d-anim" style={{ animationDelay: "0.1s" }}>
        <b>Demand: Rear-end MVA · D. Okafor</b>
        {["92%", "78%", "85%", "56%"].map((w, i) => (
          <span
            className="doc-line"
            key={i}
            style={{ width: w, animationDelay: `${0.5 + i * 0.45}s` }}
          />
        ))}
        <div className="doc-chips">
          <em className="d-anim" style={{ animationDelay: "2.2s" }}>
            Firm voice ✓
          </em>
          <em className="d-anim" style={{ animationDelay: "2.5s" }}>
            Facts sourced ✓
          </em>
        </div>
      </div>
      <div className="result-card d-anim" style={{ animationDelay: "3s" }}>
        <b>First draft ready</b>
        <span>
          Waiting on <em className="good">attorney review</em> · nothing sent
          without you
        </span>
      </div>
    </div>
  );
}

export default function DemoSection() {
  const [stage, setStage] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(
      () => setStage((s) => (s + 1) % stages.length),
      STAGE_MS,
    );
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [startTimer]);

  // manual jump: switch stage and restart the countdown from that stage
  const goTo = (i: number) => {
    setStage(i);
    startTimer();
  };

  return (
    <section id="demo">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <span className="pill">See it work</span>
            <h2>
              A Real Case, <span className="serif">Moving</span> Through PIace.
            </h2>
            <p>
              Watch a matter go from first call to drafted demand, with the
              agents doing the work in line, not in a separate window.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="demo-app">
            <div className="demo-bar">
              <span className="demo-dot" style={{ background: "#ff5f57" }} />
              <span className="demo-dot" style={{ background: "#febc2e" }} />
              <span className="demo-dot" style={{ background: "#28c840" }} />
              <span className="demo-title">PIace · Okafor v. Halstead</span>
              <span className="demo-live">
                <i /> LIVE DEMO
              </span>
            </div>
            <div className="demo-body">
              <div className="demo-steps">
                {stages.map((s, i) => (
                  <button
                    key={s.n}
                    className={`demo-step ${i === stage ? "active" : ""}`}
                    onClick={() => goTo(i)}
                  >
                    <span className="n serif">{s.n}</span>
                    <span className="l">
                      {s.label}
                      {i === stage && (
                        <span className="prog">
                          <i key={stage} style={{ animationDuration: `${STAGE_MS}ms` }} />
                        </span>
                      )}
                    </span>
                  </button>
                ))}
              </div>
              <div key={stage} className="demo-stage">
                {stage === 0 && <IntakePane />}
                {stage === 1 && <RecordsPane />}
                {stage === 2 && <DemandPane />}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
