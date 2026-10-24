/** @type {import('next').NextConfig} */
const nextConfig = {
  // Screenshots are already compressed and served straight from /public, so no
  // image optimiser is needed. This also keeps a static export possible:
  // add `output: 'export'` here and `npm run build` emits a plain /out folder
  // you can drop on any host (Hostinger, cPanel) without Node.
  images: { unoptimized: true },
};

export default nextConfig;
