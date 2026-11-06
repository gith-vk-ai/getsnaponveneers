import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with GetSnapOnVeneers.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <InfoPage title="Contact">
      <p>Questions, feedback, or a privacy request? We&apos;d love to hear from you.</p>
      <p>
        Email:{" "}
        <a href={`mailto:${site.contactEmail}`} className="font-semibold">
          {site.contactEmail}
        </a>
      </p>
      <p>
        Please note that GetSnapOnVeneers does not make or sell veneers, and we can&apos;t give
        dental advice about your situation. For questions about an order, fit, shipping, or
        billing with an external provider, please contact that provider directly. For questions
        about your teeth or oral health, please see a licensed dentist.
      </p>
    </InfoPage>
  );
}
