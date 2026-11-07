// Logo NetherGear : marque géométrique monochrome (carré arrondi + « N »)
// avec un point d'accent — codes visuels tech minimalistes, 2 couleurs max.
// `inverted` : version pour fonds sombres (carré blanc, « N » encre).
export function LogoMark({
  size = 30,
  inverted = false,
}: {
  size?: number;
  inverted?: boolean;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="9" fill={inverted ? "#ffffff" : "currentColor"} />
      <path
        d="M10 23 V9 L22 23 V9"
        fill="none"
        stroke={inverted ? "#0f766e" : "#ffffff"}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="25.5" cy="8" r="2.1" fill={inverted ? "#0d9488" : "#5eead4"} />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="font-display text-[1.05rem] font-bold tracking-tight">
        NetherGear
      </span>
    </span>
  );
}
