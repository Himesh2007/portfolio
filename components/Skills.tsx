import { skills } from '@/data/skills';
import { SectionHeading } from '@/components/SectionHeading';
import { SkillCard } from '@/components/SkillCard';

const categories = ['Frontend', 'Backend', 'Databases', 'Tools'] as const;

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Skills"
        title="A practical toolkit for modern products"
        description="I work across the full stack and enjoy building with reliable, developer-friendly tools."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <div key={category} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-soft">
            <h3 className="text-xl font-semibold text-white">{category}</h3>
            <div className="mt-5 grid gap-3">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <SkillCard key={skill.name} name={skill.name} category={category} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
