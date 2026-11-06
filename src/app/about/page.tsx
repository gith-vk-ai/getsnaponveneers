import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "About",
  description: "GetSnapOnVeneers is an independent website for adults curious about removable snap-on veneers.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <InfoPage title="About GetSnapOnVeneers">
      <p>
        GetSnapOnVeneers is an independent informational website for adults who aren&apos;t happy
        with how their smile looks and want to understand a simpler, removable cosmetic option.
      </p>
      <p>
        Many people put off improving their smile because traditional cosmetic dentistry can be
        expensive, time-consuming, and permanent. Snap-on veneers are one alternative worth
        understanding — along with their limits.
      </p>
      <h2>What we do</h2>
      <p>
        Our short quiz helps you reflect on what bothers you about your smile and what has held you
        back. At the end, you can choose to explore an external snap-on veneers provider and decide
        for yourself whether it fits your needs.
      </p>
      <h2>What we don&apos;t do</h2>
      <ul>
        <li>We don&apos;t give dental or medical advice. Snap-on veneers are a cosmetic product, not a treatment, and they don&apos;t fix underlying dental problems.</li>
        <li>We don&apos;t make or sell veneers ourselves.</li>
        <li>We don&apos;t guarantee results — fit, look, and comfort depend on the provider and on your teeth.</li>
        <li>Our quiz is a reflection tool, not an assessment of your oral health.</li>
      </ul>
      <p>
        If you have pain, loose teeth, gum disease, or any other dental concern, please see a
        licensed dentist before using any cosmetic dental product.
      </p>
      <h2>Who this site is for</h2>
      <p>This website is intended for adults 18 and older in the United States.</p>
      <h2>How we&apos;re funded</h2>
      <p>
        Some links on this site are affiliate links. If you make a purchase after following one, we
        may earn a commission at no additional cost to you. See our{" "}
        <Link href="/affiliate-disclosure/">Affiliate Disclosure</Link> for details.
      </p>
    </InfoPage>
  );
}
