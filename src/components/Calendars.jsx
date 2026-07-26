import { useMemo, useState } from 'react';
import { calendars } from '../data/calendars.js';
import { getArtwork, imgSrc } from '../data/helpers.js';
import Lightbox from './Lightbox.jsx';

// Turn each month into a full item, whether it references an artwork by id
// or carries its own inline image/title.
function resolveMonths(cal) {
  return cal.months.map((m) => {
    const base = m.artworkId ? getArtwork(m.artworkId) : null;
    return {
      ...(base || {}),
      ...m,
      title: m.title || base?.title || m.month,
      image: m.image || base?.image,
      month: m.month,
    };
  });
}

export default function Calendars() {
  const years = useMemo(
    () => calendars.map((c) => ({ ...c, items: resolveMonths(c) })),
    []
  );
  // which lightbox is open: { year, index } or null
  const [open, setOpen] = useState(null);

  return (
    <section className="calendars">
      <header className="section-head">
        <h1 className="section-head__title">Calendars</h1>
      </header>

      {years.map((cal) => (
        <div className="calyear" key={cal.year}>
          <div className="calyear__head">
            <h2 className="calyear__year">{cal.year}</h2>
            {cal.subtitle && (
              <span className="calyear__sub">{cal.subtitle}</span>
            )}
          </div>
          <div className="calgrid">
            {cal.items.map((m, i) => (
              <figure
                className="calcell"
                key={m.month}
                onClick={() => setOpen({ year: cal.year, index: i })}
              >
                <div className="calcell__frame">
                  {m.image ? (
                    <img
                      className="calcell__img"
                      src={imgSrc(m.image)}
                      alt={m.title}
                      loading="lazy"
                    />
                  ) : (
                    <div className="calcell__empty" />
                  )}
                </div>
                <figcaption className="calcell__month">{m.month}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      ))}

      {open && (
        <Lightbox
          items={years.find((y) => y.year === open.year).items}
          index={open.index}
          onClose={() => setOpen(null)}
          onNavigate={(i) => setOpen({ ...open, index: i })}
        />
      )}
    </section>
  );
}
