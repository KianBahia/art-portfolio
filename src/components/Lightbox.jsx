import { useEffect, useCallback } from 'react';
import { imgSrc } from '../data/helpers.js';

// Fullscreen viewer. `items` is the list currently on screen; `index` is which
// one is open. Close via X, backdrop click, or Esc; arrow keys step through.
export default function Lightbox({ items, index, onClose, onNavigate }) {
  const item = items[index];

  const go = useCallback(
    (dir) => {
      const next = (index + dir + items.length) % items.length;
      onNavigate(next);
    },
    [index, items.length, onNavigate]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [go, onClose]);

  if (!item) return null;

  const details = [item.year, item.medium, item.dimensions]
    .filter(Boolean)
    .join(' · ');

  return (
    <div className="lb" onClick={onClose}>
      <button className="lb__close" onClick={onClose} aria-label="Close">
        ×
      </button>
      {items.length > 1 && (
        <button
          className="lb__nav lb__nav--prev"
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
          aria-label="Previous"
        >
          ‹
        </button>
      )}
      <figure className="lb__figure">
        <div className="lb__imgwrap">
          <img
            className="lb__img"
            src={imgSrc(item.image)}
            alt={item.title}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        <figcaption
          className="lb__caption"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="lb__title">{item.title}</h2>
          {details && <p className="lb__meta">{details}</p>}
          {item.description && (
            <p className="lb__desc">{item.description}</p>
          )}
        </figcaption>
      </figure>
      {items.length > 1 && (
        <button
          className="lb__nav lb__nav--next"
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
          aria-label="Next"
        >
          ›
        </button>
      )}
    </div>
  );
}
