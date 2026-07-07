export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-min">
        <div className="foot-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/piace-logo.png" alt="PIace" />
        </div>
        <p className="foot-tag">
          AI-native case management for personal injury firms
        </p>
        <p className="foot-copy">© 2026 PIace.ai · A SACHHSOFT company</p>
      </div>
    </footer>
  );
}
