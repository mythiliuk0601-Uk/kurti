// Loads kurti photos from the Unsplash API using your key (VITE_UNSPLASH_KEY in .env).
// If no key is set or the request fails, the site uses the local images in /public/images.
const KEY = import.meta.env.VITE_UNSPLASH_KEY;
const QUERY = "indian woman kurti ethnic wear";
let pool;

export function getImagePool() {
  if (!KEY) return Promise.resolve([]);
  if (pool) return pool;

  try {
    const cached = JSON.parse(sessionStorage.getItem("ka_pool"));
    if (Array.isArray(cached) && cached.length) return (pool = Promise.resolve(cached));
  } catch {}

  pool = fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(QUERY)}&per_page=30&content_filter=high&orientation=portrait&client_id=${KEY}`
  )
    .then((r) => {
      if (!r.ok) throw new Error("Unsplash error " + r.status);
      return r.json();
    })
    .then((d) => {
      const urls = (d.results || []).filter((x) => x?.urls?.regular).map((x) => x.urls.regular + "&w=1100&q=90&fit=crop&crop=faces,top");
      if (urls.length) { try { sessionStorage.setItem("ka_pool", JSON.stringify(urls)); } catch {} } // saves your API quota
      return urls;
    })
    .catch((e) => {
      console.warn("Image API failed, using local images:", e.message);
      return [];
    });
  return pool;
}

// pick image number i from the API pool, or use the local fallback
export const hasKey = Boolean(KEY);
export const pick = (urls, i, fallback) => (urls.length ? urls[i % urls.length] : fallback);
