import { artworks } from './artworks.js';

// Resolve a filename in public/artwork/ to a usable src (works under any base path).
export function imgSrc(name) {
  return `${import.meta.env.BASE_URL}artwork/${name}`;
}

// Look up a painting by its id (used by the calendars).
const byId = Object.fromEntries(artworks.map((a) => [a.id, a]));
export function getArtwork(id) {
  return byId[id];
}

// The category filter buttons, derived automatically from the artworks list.
export function getCategories() {
  const seen = [];
  for (const a of artworks) {
    if (a.category && !seen.includes(a.category)) seen.push(a.category);
  }
  return seen;
}
