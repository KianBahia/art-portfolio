import { useMemo, useState } from 'react';
import { artworks } from '../data/artworks.js';
import { getCategories, catsOf, imgSrc, getSize } from '../data/helpers.js';
import Lightbox from './Lightbox.jsx';

export default function Gallery() {
  const categories = useMemo(() => getCategories(), []);
  const [filter, setFilter] = useState('All');
  const [openIndex, setOpenIndex] = useState(null);

  const shown = useMemo(
    () =>
      filter === 'All'
        ? artworks
        : artworks.filter((a) => catsOf(a).includes(filter)),
    [filter]
  );

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

      <div className="grid">
        {shown.map((art, i) => {
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
