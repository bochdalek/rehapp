export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      aria-hidden="true"
    >
      <rect width="512" height="512" rx="108" className="fill-primary" />
      {/* Bone */}
      <g transform="translate(256,256)">
        {/* Shaft */}
        <rect
          x="-16"
          y="-100"
          width="32"
          height="200"
          rx="10"
          fill="white"
          opacity="0.9"
        />
        {/* Proximal bumps */}
        <circle cx="-18" cy="-108" r="22" fill="white" opacity="0.9" />
        <circle cx="18" cy="-108" r="22" fill="white" opacity="0.9" />
        {/* Distal bumps */}
        <circle cx="-18" cy="108" r="22" fill="white" opacity="0.9" />
        <circle cx="18" cy="108" r="22" fill="white" opacity="0.9" />
      </g>
      {/* Recovery arrow */}
      <g transform="translate(261,256)">
        <path
          d="M 70,-80 A 110,110 0 0,1 80,80"
          fill="none"
          className="stroke-accent"
          strokeWidth="16"
          strokeLinecap="round"
        />
        <polygon
          points="80,80 62,60 96,64"
          className="fill-accent"
        />
        {/* Progress dots */}
        <circle cx="72" cy="-50" r="5" className="fill-accent" opacity="0.5" />
        <circle cx="82" cy="-15" r="5" className="fill-accent" opacity="0.6" />
        <circle cx="84" cy="20" r="5" className="fill-accent" opacity="0.75" />
        <circle cx="84" cy="55" r="5" className="fill-accent" opacity="0.9" />
      </g>
    </svg>
  );
}
