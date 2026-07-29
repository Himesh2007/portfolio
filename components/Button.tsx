import Link from 'next/link';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5';
  const styles = variant === 'primary'
    ? 'bg-blue-600 text-white shadow-soft hover:bg-blue-500'
    : 'border border-slate-700 bg-slate-900/70 text-slate-200 hover:border-blue-500 hover:text-blue-400';

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </Link>
    );
  }

  return <button className={`${base} ${styles} ${className}`}>{children}</button>;
}
