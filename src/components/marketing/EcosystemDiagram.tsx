"use client";

import { motion } from "motion/react";

const nodes = [
  {
    name: "MotoDeskOS",
    role: "Powersports Operations",
    angle: -90,
    color: "var(--primary)",
  },
  {
    name: "WorkTraceOS",
    role: "Field Operations",
    angle: 30,
    color: "var(--cyan)",
  },
  {
    name: "PropCoreOS",
    role: "Property Operations",
    angle: 150,
    color: "var(--violet)",
  },
];

const futureAngles = [-30, 90, 210];

export function EcosystemDiagram() {
  const R = 165;

  const pos = (angle: number, r = R) => ({
    x: 250 + r * Math.cos((angle * Math.PI) / 180),
    y: 220 + r * Math.sin((angle * Math.PI) / 180),
  });

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <svg
        viewBox="0 0 500 440"
        className="w-full"
        role="img"
        aria-label="The Novaris OS ecosystem diagram"
      >
        <defs>
          <radialGradient id="core" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#8fb8ff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#8fb8ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle
          cx="250"
          cy="220"
          r="165"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.1"
        />

        <circle
          cx="250"
          cy="220"
          r="110"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.06"
        />

        <circle
          cx="250"
          cy="220"
          r="120"
          fill="url(#core)"
        />

        {futureAngles.map((a) => {
          const p = pos(a);

          return (
            <g key={a}>
              <line
                x1="250"
                y1="220"
                x2={p.x}
                y2={p.y}
                stroke="currentColor"
                strokeOpacity="0.08"
                strokeDasharray="3 6"
              />

              <circle
                cx={p.x}
                cy={p.y}
                r="5"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.22"
                strokeDasharray="2 3"
              />
            </g>
          );
        })}

        {nodes.map((n, i) => {
          const p = pos(n.angle);

          return (
            <g key={n.name}>
              <motion.line
                x1="250"
                y1="220"
                x2={p.x}
                y2={p.y}
                stroke={n.color}
                strokeOpacity="0.45"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.2 + i * 0.15,
                }}
              />

              <motion.circle
                r="3.5"
                fill={n.color}
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: [0, 1, 1, 0],
                  cx: [250, p.x],
                  cy: [220, p.y],
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 2.2,
                  delay: 1 + i * 0.4,
                  repeat: Infinity,
                  repeatDelay: 1.6,
                }}
              />

              <motion.circle
                cx={p.x}
                cy={p.y}
                r="9"
                fill={n.color}
                fillOpacity="0.18"
                stroke={n.color}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.9 + i * 0.15,
                }}
                style={{
                  transformOrigin: `${p.x}px ${p.y}px`,
                }}
              />

              <text
                x={p.x}
                y={p.y + (n.angle === -90 ? -26 : 30)}
                textAnchor="middle"
                className="fill-foreground font-display text-[13px] font-semibold"
              >
                {n.name}
              </text>

              <text
                x={p.x}
                y={p.y + (n.angle === -90 ? -12 : 44)}
                textAnchor="middle"
                className="fill-muted-foreground text-[10px] tracking-widest uppercase"
              >
                {n.role}
              </text>
            </g>
          );
        })}

        <circle
          cx="250"
          cy="220"
          r="46"
          fill="var(--surface-raised)"
          stroke="currentColor"
          strokeOpacity="0.25"
        />

        <text
          x="250"
          y="217"
          textAnchor="middle"
          className="fill-foreground font-display text-[15px] font-semibold tracking-[0.14em]"
        >
          NOVARIS
        </text>

        <text
          x="250"
          y="234"
          textAnchor="middle"
          className="fill-muted-foreground text-[9px] tracking-[0.2em] uppercase"
        >
          Platform Core
        </text>
      </svg>

      <p className="eyebrow mt-2 text-center">
        The Novaris OS Ecosystem
      </p>
    </div>
  );
}