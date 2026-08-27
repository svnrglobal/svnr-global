import CornerMark from "./CornerMark";

type Variant = "mark" | "lockup" | "tile";

/**
 * SVNR logo.
 *  - "mark"   : solid-block symbol alone (the face) — default, currentColor.
 *  - "lockup" : symbol + "SVNR" Geist wordmark (Vercel-style brand lockup).
 *  - "tile"   : original black SVNR square tile (legacy /svnr-logo.svg).
 */
export default function Logo({
  className = "",
  variant = "mark",
  size = 28,
}: {
  className?: string;
  variant?: Variant;
  size?: number;
}) {
  if (variant === "tile") {
    return (
      <img
        src="/svnr-logo.svg"
        alt="SVNR Global"
        className={className}
        style={{ display: "block" }}
      />
    );
  }

  if (variant === "lockup") {
    return (
      <span
        className={`inline-flex items-center ${className}`}
        style={{ gap: size * 0.42, color: "currentColor" }}
      >
        <CornerMark size={size} />
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: size * 0.86,
            letterSpacing: "0.12em",
            lineHeight: 1,
          }}
        >
          SVNR
        </span>
      </span>
    );
  }

  return <CornerMark size={size} className={className} title="SVNR Global" />;
}
