"use client";

/**
 * Abstract representation of the human-data layer:
 * structured nodes, annotation frames and data streams converging
 * into a validated signal. Deliberately subtle — no literal robots.
 */
export function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-lg select-none" aria-hidden>
      <div className="absolute inset-0 rounded-full bg-radial-accent blur-2xl" />
      <svg viewBox="0 0 400 400" className="relative h-full w-full">
        <defs>
          <linearGradient id="stream" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5EE0C1" stopOpacity="0.9" />
            <stop offset="1" stopColor="#7C9CFF" stopOpacity="0.7" />
          </linearGradient>
          <radialGradient id="core" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#5EE0C1" />
            <stop offset="1" stopColor="#22A88C" stopOpacity="0.2" />
          </radialGradient>
        </defs>

        {/* orbit rings */}
        {[150, 110, 66].map((r, i) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="1"
            strokeDasharray={i === 1 ? "3 6" : undefined}
          />
        ))}

        {/* connecting streams */}
        {[
          "M200 200 L64 96",
          "M200 200 L336 120",
          "M200 200 L92 300",
          "M200 200 L320 296",
          "M200 200 L200 44",
          "M200 200 L360 210",
        ].map((d) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="url(#stream)"
            strokeWidth="1.2"
            strokeOpacity="0.5"
            strokeDasharray="4 8"
            className="animate-dash-flow"
          />
        ))}

        {/* annotation frames */}
        <rect x="286" y="86" width="52" height="40" rx="4" fill="none" stroke="#5EE0C1" strokeOpacity="0.55" strokeWidth="1.4" />
        <rect x="44" y="76" width="44" height="44" rx="4" fill="none" stroke="#7C9CFF" strokeOpacity="0.5" strokeWidth="1.4" />
        <rect x="70" y="278" width="48" height="36" rx="4" fill="none" stroke="#5EE0C1" strokeOpacity="0.45" strokeWidth="1.4" />

        {/* satellite nodes */}
        {[
          [64, 96],
          [336, 120],
          [92, 300],
          [320, 296],
          [200, 44],
          [360, 210],
          [40, 200],
        ].map(([cx, cy], i) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="4"
            fill={i % 2 ? "#7C9CFF" : "#5EE0C1"}
            className="animate-pulse-node"
            style={{ animationDelay: `${i * 0.35}s` }}
          />
        ))}

        {/* validated core */}
        <circle cx="200" cy="200" r="34" fill="url(#core)" />
        <circle cx="200" cy="200" r="34" fill="none" stroke="#5EE0C1" strokeWidth="1.5" strokeOpacity="0.8" />
        <path
          d="M186 200 l9 9 l19 -20"
          fill="none"
          stroke="#04140F"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
