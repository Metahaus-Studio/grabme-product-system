type WireframePhoneProps = {
  title: string;
  children: React.ReactNode;
};

export function WireframePhone({ title, children }: WireframePhoneProps) {
  return (
    <div className="w-[280px] rounded-[2.5rem] border border-white/15 bg-[#0B0F0D] p-4 shadow-2xl">
      <div className="mx-auto mb-4 h-5 w-24 rounded-full bg-black" />
      <div className="min-h-[540px] rounded-[2rem] bg-[#101410] p-5">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#7AC943]">
          {title}
        </p>
        {children}
      </div>
    </div>
  );
}