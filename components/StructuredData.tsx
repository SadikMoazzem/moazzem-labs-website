type JsonLd = Record<string, unknown>;

type Props = {
  data: JsonLd | JsonLd[];
};

export default function StructuredData({ data }: Props) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
