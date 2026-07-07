import type { ReactNode } from "react";

export default function GlowButton({
  href = "#book",
  children,
}: {
  href?: string;
  children: ReactNode;
}) {
  return (
    <a className="glow-btn" href={href}>
      <span className="inner">{children}</span>
    </a>
  );
}
