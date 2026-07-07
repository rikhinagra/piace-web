"use client";

import { useEffect, useState } from "react";

type Star = {
  left: string;
  top: string;
  size: number;
  opacity: number;
  delay: string;
  duration: string;
  glow: boolean;
  tint: string;
};

// subtle star colors — mostly white, a few warm/cool for realism
const tints = [
  "#ffffff",
  "#ffffff",
  "#ffffff",
  "#dfe8ff", // faint blue-white
  "#fff2e0", // faint warm
  "#e8e0ff", // faint violet
];

function makeLayer(
  count: number,
  minSize: number,
  maxSize: number,
  glowChance: number,
): Star[] {
  return Array.from({ length: count }, () => {
    const size = +(minSize + Math.random() * (maxSize - minSize)).toFixed(2);
    return {
      left: `${(Math.random() * 100).toFixed(3)}%`,
      top: `${(Math.random() * 100).toFixed(3)}%`,
      size,
      opacity: +(0.35 + Math.random() * 0.65).toFixed(2),
      delay: `${(Math.random() * 8).toFixed(2)}s`,
      duration: `${(3 + Math.random() * 5).toFixed(2)}s`,
      glow: Math.random() < glowChance,
      tint: tints[Math.floor(Math.random() * tints.length)],
    };
  });
}

// three depth layers: far (many, tiny, slow) → near (fewer, bigger, faster)
const LAYERS = [
  { key: "far", count: 120, min: 0.7, max: 1.5, glow: 0, spin: 200 },
  { key: "mid", count: 70, min: 1.2, max: 2.2, glow: 0.06, spin: 130 },
  { key: "near", count: 32, min: 1.9, max: 3.4, glow: 0.55, spin: 85 },
];

export default function Starfield() {
  const [layers, setLayers] = useState<Star[][]>([]);

  useEffect(() => {
    setLayers(LAYERS.map((l) => makeLayer(l.count, l.min, l.max, l.glow)));
  }, []);

  return (
    <div className="starfield" aria-hidden="true">
      {layers.map((stars, li) => (
        <div
          key={LAYERS[li].key}
          className="star-rotator"
          style={{ animationDuration: `${LAYERS[li].spin}s` }}
        >
          {stars.map((s, i) => (
            <span
              key={i}
              className={`star${s.glow ? " glow" : ""}`}
              style={{
                left: s.left,
                top: s.top,
                width: s.size,
                height: s.size,
                background: s.tint,
                "--o": s.opacity,
                animationDelay: s.delay,
                animationDuration: s.duration,
                ...(s.glow
                  ? { boxShadow: `0 0 ${s.size * 2.5}px ${s.size * 0.6}px ${s.tint}` }
                  : {}),
              } as React.CSSProperties}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
