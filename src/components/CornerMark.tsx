// SVNR brand symbol — two interlocking solid L-blocks, clean negative-space
// center (no dot). Pure currentColor so it inverts on light/dark like Vercel's
// triangle. This is the single brand mark used everywhere small (nav, footer,
// favicon, avatars). The hero gets the cursor-lit version via <PrismHero/>.
export const SVNR_MARK_PATH =
  "M38 8 H92 V62 H62 V38 H38 Z M62 92 H8 V38 H38 V62 H62 Z";

export default function CornerMark({
  size = 28,
  className = "",
  title = "SVNR",
}: {
  size?: number;
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={title}
      style={{ display: "block" }}
    >
      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d={SVNR_MARK_PATH} />
    </svg>
  );
}
