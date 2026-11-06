import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

function QuizCta({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Link
        href="/quiz/"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-teal px-7 py-4 text-lg font-bold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-teal-dark active:translate-y-0 sm:w-auto"
      >
        See If They&apos;re Right for Me
        <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 transition group-hover:translate-x-0.5">
          <path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
      <p className="mt-3 text-center text-sm text-muted sm:text-left">
        Free 60-second quiz • No signup required • 18+ only
      </p>
    </div>
  );
}

const options = [
  { label: "Whitening strips", note: "Changes color only", tone: "muted" },
  { label: "Porcelain veneers", note: "Permanent, priced per tooth", tone: "muted" },
  { label: "Snap-on veneers", note: "Removable, no drilling", tone: "pick" },
] as const;

function OptionsIllustration() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-sm animate-rise [animation-delay:150ms]">
      <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-teal-soft via-white to-[#fbf0d9] sm:-inset-6 sm:rounded-[2.5rem]" />
      <div className="rounded-3xl border border-line bg-surface p-5 shadow-lift">
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
          <span className="h-2 w-2 rounded-full bg-teal" /> Your smile options
        </div>
        <ul className="space-y-3">
          {options.map((o) => {
            const pick = o.tone === "pick";
            return (
              <li
                key={o.label}
                className={[
                  "flex items-center gap-3 rounded-2xl px-4 py-3",
                  pick ? "border-2 border-teal bg-teal-soft" : "bg-canvas",
                ].join(" ")}
              >
                <span
                  className={[
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                    pick ? "bg-teal text-white" : "border-2 border-line text-muted",
                  ].join(" ")}
                >
                  {pick ? "✓" : "–"}
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold text-navy">{o.label}</span>
                  <span className="text-sm text-muted">{o.note}</span>
                </span>
              </li>
            );
          })}
        </ul>
        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-dashed border-line px-4 py-3">
          <span className="text-2xl">📸</span>
          <p className="text-sm text-muted">“I always smile with my mouth closed in pictures.”</p>
        </div>
      </div>
    </div>
  );
}

const familiar = [
  {
    icon: "📷",
    title: "The closed-mouth smile",
    body: "You've perfected a smile that doesn't show your teeth — and you use it in every photo.",
  },
  {
    icon: "💸",
    title: "The quote that ended the conversation",
    body: "You looked into cosmetic dental work once, saw the price, and quietly closed the tab.",
  },
  {
    icon: "🦷",
    title: "The whitening that wasn't enough",
    body: "Strips and gels helped a little, but they can't fix chips, gaps, or uneven teeth.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="mx-auto grid w-full max-w-5xl items-center gap-12 px-4 pb-14 pt-6 sm:px-6 md:grid-cols-[1.15fr_1fr] md:pb-20 md:pt-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">
              Removable snap-on veneers, explained
            </p>
            <h1 className="mt-3 text-balance text-[2.1rem] font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl">
              Hiding Your Smile in Photos?
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
              Maybe it&apos;s stains, a chipped tooth, or a gap you&apos;ve noticed for years. And
              the usual fix — porcelain veneers — can mean drilling, many appointments, and a bill
              in the thousands.
            </p>
            <p className="mt-5 border-l-4 border-sun pl-4 text-lg font-semibold leading-snug text-navy">
              Snap-on veneers clip over your own teeth and come out whenever you want. No drills,
              no needles, nothing permanent.
            </p>
            <QuizCta className="mt-8" />
          </div>
          <OptionsIllustration />
        </section>

        <section className="border-y border-line bg-surface">
          <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">Sound familiar?</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {familiar.map((f) => (
                <div key={f.title} className="rounded-2xl border border-line bg-canvas p-5">
                  <div className="text-2xl" aria-hidden="true">{f.icon}</div>
                  <h3 className="mt-3 font-bold text-navy">{f.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{f.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 max-w-2xl space-y-4 text-lg leading-relaxed text-ink">
              <p>
                Plenty of people who don&apos;t love their smile never do anything about it — not
                because they don&apos;t care, but because the options look expensive, slow, or
                permanent.
              </p>
              <p>
                Custom snap-on veneers are made from an impression you take at home and are worn
                over your natural teeth. They&apos;re a cosmetic product, not dental treatment, and
                they aren&apos;t right for everyone.
              </p>
              <p className="font-semibold text-navy">
                Take our short quiz to see whether they could be a fit for the smile you want.
              </p>
            </div>
            <QuizCta className="mt-8" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
