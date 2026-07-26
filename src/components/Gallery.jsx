import { useEffect, useMemo, useState } from 'react';
import { artworks } from '../data/artworks.js';
import { getCategories, catsOf, imgSrc, getSize } from '../data/helpers.js';
import Lightbox from './Lightbox.jsx';

// Number of masonry columns, responsive (mirrors the CSS breakpoints).
function useColumnCount() {
  const get = () => {
    if (typeof window === 'undefined') return 3;
    const w = window.innerWidth;
    if (w <= 560) return 1;
    if (w <= 900) return 2;
    return 3;
  };
  const [n, setN] = useState(get);
  useEffect(() => {
    const onResize = () => setN(get());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return n;
}

export default function Gallery() {
  const categories = useMemo(() => getCategories(), []);
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  // Sort once: by year (newest first; undated always last), then title A–Z.
  const sorted = useMemo(
    () =>
      [...artworks].sort((a, b) => {
        const hasA = a.year != null;
        const hasB = b.year != null;
        if (hasA && hasB && a.year !== b.year) return b.year - a.year;
        if (hasA !== hasB) return hasA ? -1 : 1; // undated sinks to the bottom
        return (a.title || '').localeCompare(b.title || '');
      }),
    []
  );

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sorted.filter((a) => {
      if (filter !== 'All' && !catsOf(a).includes(filter)) return false;
      if (q && !(a.title || '').toLowerCase().includes(q)) return false;
      return true;
    });
  }, [sorted, filter, query]);

  // Masonry: fill the top row left-to-right, then drop each subsequent painting
  // into whichever column is currently shortest, so the columns stay balanced.
  // Height is estimated from each image's aspect ratio (+ a little for the gap).
  const cols = useColumnCount();
  const columns = useMemo(() => {
    const buckets = Array.from({ length: cols }, () => []);
    const heights = new Array(cols).fill(0);
    shown.forEach((art, i) => {
      let c = 0;
      for (let k = 1; k < cols; k++) if (heights[k] < heights[c]) c = k;
      buckets[c].push({ art, i });
      const size = getSize(art.image);
      const ratio = size ? size[1] / size[0] : 1; // height / width
      heights[c] += ratio + 0.06; // + gap allowance
    });
    return buckets;
  }, [shown, cols]);

  return (
    <section className="gallery">
      <div className="filters">
        <button
          className={`filters__btn ${filter === 'All' ? 'is-active' : ''}`}
          onClick={() => setFilter('All')}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c}
            className={`filters__btn ${filter === c ? 'is-active' : ''}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="searchbar">
        <input
          className="searchbar__input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title…"
          aria-label="Search paintings by title"
        />
      </div>

      {shown.length === 0 && (
        <p className="gallery__empty">No paintings match your search.</p>
      )}

      <div className="grid">
        {columns.map((col, ci) => (
          <div className="grid__col" key={ci}>
            {col.map(({ art, i }) => {
              const size = getSize(art.image);
              return (
                <figure
                  key={art.id}
                  className="tile"
                  onClick={() => setOpenIndex(i)}
                >
                  <img
                    className="tile__img"
                    src={imgSrc(art.image)}
                    alt={art.title}
                    loading="lazy"
                    width={size?.[0]}
                    height={size?.[1]}
                  />
                  <figcaption className="tile__cap">
                    <span className="tile__title">{art.title}</span>
                    <span className="tile__year">{art.year}</span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          items={shown}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
}
