import type { ReactNode } from "react";

export default function GlowButton({
  href = "#book",
  children,
}: {
  href?: string;
  children: ReactNode;
}) {
  return (
    <a className="glow-btn" href={href} style={{ alignSelf: "stretch" }}>
      <span className="inner" style={{ flex: 1, justifyContent: "center" }}>{children}</span>
    </a>
  );
}
