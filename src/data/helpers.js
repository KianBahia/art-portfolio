import { artworks } from './artworks.js';
import { imageSizes } from './imageSizes.js';

// Intrinsic [width, height] for an image (used to reserve space before load).
export function getSize(image) {
  return imageSizes[image];
}

// Resolve a filename in public/artwork/ to a usable src (works under any base path).
export function imgSrc(name) {
  return `${import.meta.env.BASE_URL}artwork/${name}`;
}

// Look up a painting by its id (used by the calendars).
const byId = Object.fromEntries(artworks.map((a) => [a.id, a]));
export function getArtwork(id) {
  return byId[id];
}

// A painting's categories as an array. `category` may be a single string
// ("Landscape") or a list (["Impressionist", "Landscape"]) — both work.
export function catsOf(artwork) {
  const c = artwork.category;
  if (!c) return [];
  return Array.isArray(c) ? c.filter(Boolean) : [c];
}

// The category filter buttons, derived automatically from the artworks list
// (first-appearance order, de-duplicated across single and multiple values).
export function getCategories() {
  const seen = [];
  for (const a of artworks) {
    for (const c of catsOf(a)) {
      if (!seen.includes(c)) seen.push(c);
    }
  }
  return seen;
}
