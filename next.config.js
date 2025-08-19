/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Client-side CSP: allow workers + blob: for module workers; no external origins.
          { key: "Content-Security-Policy", value:
            "default-src 'self'; " +
            "script-src 'self' 'wasm-unsafe-eval'; " +
            "worker-src 'self' blob:; " +
            "connect-src 'self'; " +
            "img-src 'self' data:; " +
            "style-src 'self' 'unsafe-inline'; " +
            "font-src 'self' data:" },
          { key: "Referrer-Policy", value: "no-referrer" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }
        ]
      }
    ];
  }
};
module.exports = nextConfig;
