import React from "react";

type Props = {
  className?: string;
  title?: string;
};

/**
 * Minimal inline SVG mark used as the Hey‑Oko logo placeholder.
 * The SVG uses currentColor so it can be tinted via Tailwind (e.g., text-white).
 */
export default function LogoMark({ className = "h-7 w-7", title = "Hey‑Oko" }: Props) {
  return (
    <svg
      viewBox="0 0 72 72"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={title}
      role="img"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Curved left stroke rising into the top bar */}
      <path d="M16 56 C 26 40 32 28 40 24 H56" />
      {/* Right vertical stroke */}
      <path d="M56 24 V56" />
    </svg>
  );
}

