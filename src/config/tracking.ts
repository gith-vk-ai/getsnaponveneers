/**
 * Analytics providers. Leave an ID empty to disable that provider.
 *
 * Traffic comes from native ad networks (NewsBreak, Revcontent). Their pixels
 * are added as tags inside Google Tag Manager, triggered by the dataLayer
 * events this site pushes (e.g. `OutboundAffiliateClick` as the on-site
 * conversion). Affiliate sales themselves are reported back to the networks
 * by server-to-server postback from the affiliate network, not by this site.
 *
 * Use EITHER `gtmId` (and configure GA4 inside GTM) OR `ga4Id` directly —
 * enabling both with the same GA4 property double-counts events.
 */
export const tracking = {
  ga4Id: "",
  gtmId: "",

  /**
   * When true, no tracking script loads until the visitor accepts the cookie
   * banner. The banner is only shown when at least one provider is enabled.
   * Off for US traffic; turn on if targeting the EU/UK.
   */
  requireConsent: false,

  /** Skip all tracking for browsers sending Global Privacy Control (required in California). */
  honorGlobalPrivacyControl: true,

  /** URL / campaign parameters captured on landing and attached to events. */
  attributionParams: [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    // Generic campaign / click ids — map the network's macros onto these in the ad URL.
    "campaign_id",
    "ad_id",
    "click_id",
    "placement",
    // Revcontent macros: ?boost_id={boost_id}&widget_id={widget_id}&content_id={content_id}&rc_uuid={uuid}
    "boost_id",
    "widget_id",
    "content_id",
    "rc_uuid",
  ],
} as const;

export function hasAnyTracking(): boolean {
  return Boolean(tracking.ga4Id || tracking.gtmId);
}
