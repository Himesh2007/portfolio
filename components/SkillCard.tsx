interface SkillCardProps {
  name: string;
  category: string;
}

export function SkillCard({ name, category }: SkillCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-soft transition hover:-translate-y-1 hover:border-blue-500/60">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">{category}</p>
      <h3 className="mt-3 text-lg font-semibold text-white">{name}</h3>
    </div>
  );
}
