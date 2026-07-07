export default function Navbar() {
  return (
    <header className="nav-shell">
      <nav className="nav-inner nav-center">
        <a href="#" className="nav-logo" aria-label="PIace home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/piace-logo.png" alt="PIace" />
        </a>
      </nav>
    </header>
  );
}
