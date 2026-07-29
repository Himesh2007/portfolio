import { SectionHeading } from '@/components/SectionHeading';

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About"
        title="Crafting products with clarity and purpose"
        description="I care deeply about creating experiences that feel effortless, useful, and genuinely enjoyable to use."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-soft">
          <h3 className="text-2xl font-semibold text-white">Biography</h3>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            I&apos;m a developer focused on building modern, responsive web applications that balance performance with beautiful design. My work spans frontend interfaces, backend systems, and thoughtful product decisions.
          </p>
        </div>
        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-soft">
          <div>
            <h3 className="text-lg font-semibold text-white">Passion</h3>
            <p className="mt-2 text-slate-400">I love turning complex ideas into simple, maintainable solutions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Education</h3>
            <p className="mt-2 text-slate-400">B.Sc. in Computer Science with a focus on human-centered software design.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Goals</h3>
            <p className="mt-2 text-slate-400">I aim to build products that create real impact and delight users every day.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
