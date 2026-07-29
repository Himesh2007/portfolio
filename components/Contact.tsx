import { SectionHeading } from '@/components/SectionHeading';

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let&apos;s build something meaningful"
        description="I&apos;m always interested in new opportunities, collaborations, and ambitious ideas."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-soft">
          <h3 className="text-2xl font-semibold text-white">Get in touch</h3>
          <ul className="mt-6 space-y-4 text-slate-400">
            <li><span className="font-medium text-slate-200">Email:</span> hello@example.com</li>
            <li><span className="font-medium text-slate-200">GitHub:</span> github.com/alex</li>
            <li><span className="font-medium text-slate-200">LinkedIn:</span> linkedin.com/in/alex</li>
            <li><span className="font-medium text-slate-200">Location:</span> London, UK</li>
          </ul>
        </div>

        <form className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-soft">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm text-slate-300">
              <span className="mb-2 block">Name</span>
              <input className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-blue-500" placeholder="Your name" />
            </label>
            <label className="text-sm text-slate-300">
              <span className="mb-2 block">Email</span>
              <input type="email" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-blue-500" placeholder="you@example.com" />
            </label>
          </div>
          <label className="mt-5 block text-sm text-slate-300">
            <span className="mb-2 block">Message</span>
            <textarea rows={6} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-blue-500" placeholder="Tell me about your project..." />
          </label>
          <button className="mt-6 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
