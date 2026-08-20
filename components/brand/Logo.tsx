import { cn } from "@/lib/utils";

/**
 * Valtaris mark: an abstract "V" built from two converging data paths
 * meeting at a single validated node — human + AI converging on signal.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn("h-7 w-7", className)}
      aria-hidden
    >
      <path
        d="M5 6 L16 24 L27 6"
        stroke="url(#vg)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="5" cy="6" r="2.4" fill="#5EE0C1" />
      <circle cx="27" cy="6" r="2.4" fill="#7C9CFF" />
      <circle cx="16" cy="24" r="2.8" fill="#F4F6FA" />
      <defs>
        <linearGradient id="vg" x1="5" y1="6" x2="27" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5EE0C1" />
          <stop offset="1" stopColor="#7C9CFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="text-[17px] font-semibold tracking-tight text-ink">
        Valtaris
      </span>
    </span>
  );
}
