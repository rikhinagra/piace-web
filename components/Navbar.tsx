export default function Navbar() {
  return (
    <header className="nav-shell">
      <nav
        className="nav-inner"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "clamp(20px, 4vw, 60px)",
        }}
      >
        <a href="#platform" className="nav-link" style={{ fontSize: "18px" }}>Platform</a>
        <a href="#" className="nav-logo" aria-label="PIace home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/piace-logo.png" alt="PIace" style={{ height: "34px", width: "auto", display: "block" }} />
        </a>
        <a href="#journey" className="nav-link" style={{ fontSize: "18px" }}>How it Works</a>
      </nav>
    </header>
  );
}
