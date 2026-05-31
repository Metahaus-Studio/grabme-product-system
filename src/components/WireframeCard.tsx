type WireframeCardProps = {
  title: string;
  text?: string;
};

export function WireframeCard({ title, text }: WireframeCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="font-bold text-white">{title}</p>
      {text && <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>}
    </div>
  );
}