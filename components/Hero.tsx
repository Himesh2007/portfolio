import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { socials } from '@/data/socials';

export function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
      <div className="flex flex-col justify-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">Hello, I&apos;m</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">Alex Carter</h1>
        <p className="mt-4 text-xl font-medium text-slate-300 sm:text-2xl">Full-Stack Developer & UI Engineer</p>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
          I build thoughtful digital experiences with modern web technologies, blending elegant interfaces with reliable systems.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="#projects">View Projects</Button>
          <Button href="/resume.pdf" variant="secondary">Download Resume</Button>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 bg-slate-900/70 p-3 text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 p-3 shadow-soft">
          <Image
            src="/images/profile.svg"
            alt="Alex Carter portrait"
            width={700}
            height={900}
            className="h-full w-full rounded-[1.5rem] object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
