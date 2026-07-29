"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 1, delay: visible ? 1.4 : 0 }}
      style={{
        position: "absolute",
        bottom: "36px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        pointerEvents: "none",
      }}
    >
      {/* 1px line — overflow hidden clips the dot */}
      <div
        style={{
          width: "1px",
          height: "48px",
          overflow: "hidden",
          position: "relative",
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.35))",
        }}
      >
        {/* Dot: same height as container, slides -100% → 200% */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, transparent, #c084fc, #4c8dff, transparent)",
          }}
          animate={{ y: [-48, 96] }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
      </div>

      <span
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "9px",
          letterSpacing: "0.22em",
          color: "rgba(255,255,255,0.7)",
          textTransform: "uppercase",
        }}
      >
        SCROLL
      </span>
    </motion.div>
  );
}
