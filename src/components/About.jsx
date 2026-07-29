import { artist } from '../data/artist.js';
import { imgSrc } from '../data/helpers.js';

export default function About() {
  return (
    <section className="about">
      <div className="about__portrait">
        <img src={imgSrc(artist.portrait)} alt={artist.name} />
      </div>
      <div className="about__text">
        <h1 className="about__name">{artist.name}</h1>
        {artist.tagline && <p className="about__tagline">{artist.tagline}</p>}
        {artist.bio.map((para, i) => (
          <p className="about__para" key={i}>
            {para}
          </p>
        ))}
        {artist.style && (
          <>
            <h2 className="about__subhead">Style</h2>
            <p className="about__para">{artist.style}</p>
          </>
        )}
        {artist.email && (
          <p className="about__contact">
            {artist.contactLabel && (
              <span className="about__contact-label">
                {artist.contactLabel}
              </span>
            )}
            <a className="about__email" href={`mailto:${artist.email}`}>
              {artist.email}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
