type BotanicalCornerProps = {
  className?: string;
  flipX?: boolean;
};

export function BotanicalCorner({ className = "", flipX = false }: BotanicalCornerProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 180"
      className={`absolute h-32 w-20 text-[var(--sage)]/70 ${className} ${flipX ? "-scale-x-100" : ""}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M60 176V20" stroke="currentColor" strokeWidth="1.7" />
      <path d="M60 60C44 58 28 44 20 28" stroke="currentColor" strokeWidth="1.6" />
      <path d="M60 94C40 96 24 84 14 68" stroke="currentColor" strokeWidth="1.6" />
      <path d="M60 130C40 128 24 114 14 98" stroke="currentColor" strokeWidth="1.6" />
      <path d="M60 56C74 54 90 42 100 26" stroke="currentColor" strokeWidth="1.6" />
      <path d="M60 90C76 90 90 78 104 62" stroke="currentColor" strokeWidth="1.6" />
      <path d="M60 126C78 128 96 116 106 102" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
