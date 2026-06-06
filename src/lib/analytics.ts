export const GA_MEASUREMENT_ID = "G-72R1E4WCZM";

type GtagArgs = unknown[];
declare global {
  interface Window {
    gtag?: (...args: GtagArgs) => void;
    dataLayer?: GtagArgs[];
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}
