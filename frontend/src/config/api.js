// Central place for the backend URL.
// In production (e.g. Vercel/Netlify) set VITE_BACKEND_URL as an env variable.
// If it's not set, it falls back to the deployed Render backend.
export const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL || "https://meta-blog-8aqd.onrender.com";
