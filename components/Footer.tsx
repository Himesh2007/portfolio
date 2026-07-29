import Link from 'next/link';
import { socials } from '@/data/socials';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">Alex Carter</p>
          <p className="mt-2 text-sm text-slate-400">© 2026 All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <Link href="#home" className="transition hover:text-blue-400">Home</Link>
          <Link href="#about" className="transition hover:text-blue-400">About</Link>
          <Link href="#projects" className="transition hover:text-blue-400">Projects</Link>
          <Link href="#contact" className="transition hover:text-blue-400">Contact</Link>
        </div>
        <div className="flex gap-3">
          {socials.map((social) => (
            <Link key={social.label} href={social.href} target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 p-2 text-sm text-slate-300 transition hover:border-blue-500 hover:text-blue-400">
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
