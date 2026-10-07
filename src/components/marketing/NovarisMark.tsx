export function NovarisMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle
        cx="16"
        cy="16"
        r="14.5"
        stroke="currentColor"
        strokeOpacity="0.22"
      />

      <path
        d="M16 2.5 L27.5 24 M16 2.5 L4.5 24 M4.5 24 L27.5 24"
        stroke="url(#novaG)"
        strokeWidth="1.1"
        strokeOpacity="0.85"
      />

      <circle cx="16" cy="2.5" r="2.2" fill="url(#novaG)" />
      <circle cx="27.5" cy="24" r="1.7" fill="url(#novaG)" />
      <circle cx="4.5" cy="24" r="1.7" fill="url(#novaG)" />

      <circle
        cx="16"
        cy="16"
        r="2.6"
        fill="currentColor"
        fillOpacity="0.9"
      />

      <defs>
        <linearGradient
          id="novaG"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6aa8ff" />
          <stop offset="0.55" stopColor="#a98cff" />
          <stop offset="1" stopColor="#68e6e6" />
        </linearGradient>
      </defs>
    </svg>
  );
}