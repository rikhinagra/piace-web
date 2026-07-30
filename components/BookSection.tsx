"use client";

const checklist = [
  "Hippocratic-level records privacy assured",
  "99.8% precision validation logs provided",
  "Dedicated implementation lead mapped in 2 hours",
];

export default function BookSection() {
  return (
    <section
      id="book"
      style={{ padding: "clamp(70px, 9vw, 120px) 0 clamp(70px, 8vw, 100px)", background: "#050508", position: "relative", overflow: "visible" }}
    >
      <div className="wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
            gap: "clamp(36px, 5vw, 80px)",
            alignItems: "start",
          }}
        >
          {/* ── Left ── */}
          <div>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 600,
                fontSize: "clamp(12px, 1.25vw, 18px)",
                letterSpacing: "6px",
                textTransform: "uppercase",
                color: "#a484e0",
                marginBottom: "18px",
              }}
            >
              Smoother Practice
            </span>

            <h2
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(26px, 3.33vw, 48px)",
                color: "#f4f4f5",
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
                margin: "0 0 clamp(16px, 2vw, 24px)",
              }}
            >
              Picture a workday{" "}
              <em className="serif-em" style={{ color: "#eae0fd" }}>without</em>
              <br />
              the bottlenecks.
            </h2>

            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 2.22vw, 32px)",
                color: "#9eaebb",
                lineHeight: 1.38,
                margin: "0 0 clamp(24px, 3vw, 36px)",
              }}
            >
              Watch PiAce process your sample medical bills and records live.
              See exactly how our system generates custom chronologies.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {checklist.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(13px, 1.39vw, 20px)",
                    lineHeight: 1.6,
                    color: "#9eaebb",
                  }}
                >
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "rgba(16,185,129,0.12)",
                      border: "1px solid rgba(16,185,129,0.28)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      viewBox="0 0 10 10"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ width: "11px", height: "11px" }}
                    >
                      <path d="M1.5 5l3 3 4-5" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: Form card ── */}
          <div
            style={{
              background: "#0d0d14",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "20px",
              padding: "clamp(24px, 3vw, 36px)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(16px, 1.25vw, 18px)",
                color: "#f4f4f5",
                margin: "0 0 clamp(20px, 2.5vw, 28px)",
              }}
            >
              Let&apos;s get in touch!
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("We'll be in touch soon!");
              }}
            >
              {[
                { id: "name", label: "Name", type: "text", placeholder: "John Doe" },
                { id: "email", label: "Email", type: "email", placeholder: "john@firm.com" },
                { id: "firm", label: "Firm Name", type: "text", placeholder: "Doe & Associates Partners" },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id} style={{ marginBottom: "16px" }}>
                  <label
                    htmlFor={id}
                    style={{
                      display: "block",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 500,
                      fontSize: "13px",
                      color: "#9eaebb",
                      marginBottom: "7px",
                    }}
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    required
                    style={{
                      width: "100%",
                      background: "#060608",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "10px",
                      padding: "12px 14px",
                      color: "#f4f4f5",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "14px",
                      outline: "none",
                      boxSizing: "border-box",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "rgba(123,95,224,0.8)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(123,95,224,0.18)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>
              ))}

              <div style={{ marginBottom: "22px" }}>
                <label
                  htmlFor="volume"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    fontSize: "13px",
                    color: "#9eaebb",
                    marginBottom: "7px",
                  }}
                >
                  Monthly Case Volume
                </label>
                <select
                  id="volume"
                  defaultValue="50 - 100 cases"
                  style={{
                    width: "100%",
                    background: "#060608",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    padding: "12px 14px",
                    color: "#f4f4f5",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "14px",
                    outline: "none",
                    appearance: "none",
                    cursor: "pointer",
                    boxSizing: "border-box",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%239eaebb' strokeWidth='1.5' fill='none' strokeLinecap='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 14px center",
                    paddingRight: "36px",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "rgba(123,95,224,0.8)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(123,95,224,0.18)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <option>Under 25 cases</option>
                  <option>25 - 50 cases</option>
                  <option>50 - 100 cases</option>
                  <option>100 - 250 cases</option>
                  <option>250+ cases</option>
                </select>
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "#7b5fe0",
                  color: "#fff",
                  fontFamily: "var(--font-jakarta), sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(14px, 1.2vw, 16px)",
                  padding: "15px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.22s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#8e72e8")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#7b5fe0")}
              >
                Book Your Walkthrough
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Glow bleed — visually inside this section, extends below */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-15%",
          width: "130%",
          height: "200px",
          pointerEvents: "none",
          background: [
            "radial-gradient(38% 80% at 32% 100%, rgba(255,150,66,0.75) 0%, transparent 66%)",
            "radial-gradient(32% 72% at 50% 100%, rgba(232,238,255,0.6) 0%, transparent 66%)",
            "radial-gradient(38% 80% at 70% 100%, rgba(90,150,255,0.75) 0%, transparent 66%)",
          ].join(", "),
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />
    </section>
  );
}
