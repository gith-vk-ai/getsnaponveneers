import Link from "next/link";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <rect width="32" height="32" rx="9" fill="#13233a" />
      <path
        d="M10.6 7.5c1.9 0 3.2 1 5.4 1s3.5-1 5.4-1c2.5 0 4.1 2.1 4.1 5 0 2.7-1 4.3-1.7 6.7-.6 2.2-.9 5.3-2.9 5.3-1.8 0-1.9-4.4-4.9-4.4s-3.1 4.4-4.9 4.4c-2 0-2.3-3.1-2.9-5.3-.7-2.4-1.7-4-1.7-6.7 0-2.9 1.6-5 4.1-5z"
        fill="#fff"
      />
      <path d="M23.5 4.5v3m-1.5-1.5h3" stroke="#e8b04a" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 rounded-lg" aria-label="GetSnapOnVeneers home">
      <LogoMark className="h-8 w-8" />
      <span className="text-lg font-extrabold tracking-tight text-navy">
        GetSnapOn<span className="text-teal">Veneers</span>
      </span>
    </Link>
  );
}
