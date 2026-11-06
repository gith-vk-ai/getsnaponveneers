/**
 * Outbound affiliate destination — the single place to change where the
 * results-page CTA sends visitors.
 *
 * - `liveUrl`: the approved affiliate link for the snap-on veneers partner.
 *   Leave empty until the real link is available; never put a guessed or
 *   made-up tracking URL here.
 * - `previewUrl`: plain, non-affiliate destination used while `liveUrl` is
 *   empty, or whenever the site runs with NEXT_PUBLIC_AFFILIATE_MODE=preview.
 *   Partner not chosen yet — placeholder points back to the homepage.
 */
export const affiliate = {
  provider: "tbd", // informational: which network the live link belongs to
  liveUrl: "",
  previewUrl: "https://www.getsnaponveneers.com/",
  openInNewTab: true,

  /**
   * Optional sub-ID passthrough. Set `param` to the query parameter the
   * network supports for click-level tracking (check the network's docs for
   * the approved link format before enabling). `null` disables it.
   * The value is built from the visitor's captured campaign data.
   */
  subId: {
    param: null as string | null,
    fields: ["utm_source", "utm_campaign", "widget_id", "ad_id"] as const,
    separator: "_",
    maxLength: 100,
  },

  /** Extra static query parameters appended to the outbound URL. */
  staticParams: {} as Record<string, string>,
} as const;

export function isAffiliateLive(): boolean {
  if (process.env.NEXT_PUBLIC_AFFILIATE_MODE === "preview") return false;
  return affiliate.liveUrl.trim().length > 0;
}
