import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  className?: string;
  style?: React.CSSProperties;
};

// Same frame mylocalmasjid.com uses for its app screenshots (660 x 1480 captures).
const RATIO = 1480 / 660;

export default function PhoneFrame({ src, alt, width, className, style }: Props) {
  return (
    <div
      className={className}
      style={{
        width,
        background: "#f0f0f0",
        borderRadius: width * 0.15,
        padding: Math.round(width * 0.03),
        boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
        ...style,
      }}
    >
      <div style={{ borderRadius: width * 0.125, overflow: "hidden" }}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={Math.round(width * RATIO)}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
    </div>
  );
}
