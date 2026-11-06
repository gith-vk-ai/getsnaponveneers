// Runs before the static assets: sends every request to the canonical
// https://www.getsnaponveneers.com origin (301), then serves the static site.
const CANONICAL_HOST = "www.getsnaponveneers.com";
const REDIRECT_HOSTS = new Set(["getsnaponveneers.com"]);

const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);
    const wrongHost = REDIRECT_HOSTS.has(url.hostname);
    const insecure = url.protocol === "http:" && (wrongHost || url.hostname === CANONICAL_HOST);
    if (wrongHost || insecure) {
      url.protocol = "https:";
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};

export default worker;
