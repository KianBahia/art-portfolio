# Art Portfolio

A minimalist React portfolio for showing paintings, yearly calendars, and an
artist bio.

## Running it

```bash
npm install      # first time only
npm run dev      # start the local site  →  http://localhost:5173
npm run build    # produce the deployable /dist folder
```

## Adding or changing art — the only files you touch

Everything on the site is driven by three data files. You never edit React code.

### 1. A new painting → `src/data/artworks.js`

1. Put the image in **`public/artwork/`** (e.g. `sunset.jpg`).
2. Add a block to the list:

```js
{
  id: 'sunset-over-bay',      // unique, once. dashes, no spaces.
  title: 'Sunset Over the Bay',
  image: 'sunset.jpg',        // the filename you just added
  category: 'Landscape',      // new categories become filter buttons on their own
  year: 2025,
  medium: 'Oil on canvas',    // optional
  dimensions: '60 × 80 cm',   // optional
  description: 'A short note about the piece.', // optional
}
```

That's it — it shows up in the gallery, under its category filter, with a
click-to-enlarge lightbox (title + details at the bottom).

### 2. A year's calendar → `src/data/calendars.js`

List the twelve months and point each at a painting by its `id`. The image and
title are pulled in automatically, so nothing is repeated.

### 3. The About page → `src/data/artist.js`

Name, portrait image, tagline, bio paragraphs, contact email.

## Image tips

- Any format works (`.jpg`, `.png`, `.webp`, `.svg`). Landscape, portrait, and
  square all sit correctly in the gallery — the layout keeps each one's shape.
- `.webp` or reasonably sized `.jpg` (long edge ~1600px) keeps the site fast.

The `public/artwork/` folder currently holds placeholder images — replace them
with the real paintings and update the filenames in the data files.
