// The Moazzem Labs mark: a lowercase m whose two openings are pointed arches.
// Source files and usage rules: public/brand/ and docs/brand/LOGO.md.
export const MARK_PATH =
  "M4 96V6H66Q96 6 96 36V96H80V54Q80 38 69 28Q58 38 58 54V96H42V54Q42 38 31 28Q20 38 20 54V96Z";

export function Mark({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
    >
      <path fill="currentColor" d={MARK_PATH} />
    </svg>
  );
}

export function Lockup({
  markSize = 24,
  className = "",
  markClassName,
}: {
  markSize?: number;
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center font-brand font-bold tracking-[-0.03em] ${className}`}>
      <Mark size={markSize} className={markClassName} />
      <span style={{ marginLeft: Math.round(markSize * 0.4) }}>Moazzem Labs</span>
    </span>
  );
}
