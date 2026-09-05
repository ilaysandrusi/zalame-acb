import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { homeSectionsMedia, MEDIA, venue } from "../data/venue";
import { formatHoursRange, getOpenStatus, todaySpec } from "../lib/hours";
import { NewsletterSignup } from "../components/NewsletterSignup.jsx";
import { useLang } from "../i18n/index.jsx";

function StatusChip() {
  const { t, lang } = useLang();
  const [status, setStatus] = useState(() => getOpenStatus(venue.hours));

  useEffect(() => {
    const id = setInterval(() => setStatus(getOpenStatus(venue.hours)), 60000);
    return () => clearInterval(id);
  }, []);

  const spec = todaySpec(venue.hours, status.isOpen ? status.sessionDay : status.day);
  const tonight = lang === "en" ? "Tonight" : "הלילה";

  return (
    <span className={`chip ${status.isOpen ? "open" : "closed"}`} role="status">
      <span className="dot" aria-hidden="true" />
      {status.isOpen ? t.hero.open : t.hero.closed}
      {spec ? (
        <>
          <span aria-hidden="true"> · </span>
          {tonight}{" "}
          <span className="hours-range" dir={lang === "he" ? "rtl" : "ltr"}>
            {formatHoursRange(spec.open, spec.close, lang)}
          </span>
        </>
      ) : null}
    </span>
  );
}

export function Home() {
  const { t, lang } = useLang();

  return (
    <main id="content">
      <section className="hero hero-entrance" aria-labelledby="hero-title">
        <div className="hero-media media-grain">
          <img
            src={MEDIA.homeHero}
            alt={t.hero.imageAlt}
            width="2048"
            height="1365"
            fetchPriority="high"
          />
        </div>
        <div className="hero-entrance-scrim" aria-hidden="true" />
        <div className="hero-entrance-copy">
          <img
            className="hero-entrance-logo"
            src={MEDIA.homeLogo}
            alt={lang === "he" ? venue.nameHe : venue.nameEn}
            width="360"
            height="320"
          />
          <div className="hero-meta">
            <span className="chip">{lang === "he" ? venue.addressHe : venue.addressEn}</span>
            <StatusChip />
          </div>
          <h1 id="hero-title">{t.hero.h1}</h1>
          <p className="hero-lead">{t.hero.lead}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={venue.links.reserve} target="_blank" rel="noopener noreferrer">
              {t.hero.cta}
            </a>
            <Link className="btn btn-ghost" to="/events">
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="chapter story-wrap" id="story">
        <div className="chapter-inner story">
          <div>
            <p className="story-year">{venue.founded}</p>
            <h2>{t.story.title}</h2>
            <p>{t.story.body}</p>
            <blockquote className="quote-block">
              {t.story.quote}
              <cite>{t.story.quoteBy}</cite>
            </blockquote>
          </div>
          <div className="frame story-photo">
            <img
              src={homeSectionsMedia.story.src}
              alt={lang === "he" ? homeSectionsMedia.story.altHe : homeSectionsMedia.story.altEn}
              width="1600"
              height="1066"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="chapter" id="drinks">
        <div className="chapter-inner drinks">
          <h2>{t.drinks.title}</h2>
          <p className="lede">{t.drinks.lead}</p>
          <ol className="drink-list">
            {venue.drinks.map((drink) => (
              <li key={drink.nameHe}>
                <span className="drink-name">{lang === "he" ? drink.nameHe : drink.nameEn}</span>
                <span className="drink-note">{lang === "he" ? drink.noteHe : drink.noteEn}</span>
              </li>
            ))}
          </ol>
          <p className="source plates-note">{t.drinks.plates}</p>
          <div className="plates">
            {venue.plates.map((plate) => (
              <span key={plate.nameHe}>{lang === "he" ? plate.nameHe : plate.nameEn}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="chapter david" id="david">
        <div className="frame david-photo">
          <img
            src={homeSectionsMedia.david.src}
            alt={lang === "he" ? homeSectionsMedia.david.altHe : homeSectionsMedia.david.altEn}
            width="1920"
            height="1280"
            loading="lazy"
          />
        </div>
        <div className="david-copy chapter-inner david-inner">
          <p className="source">{t.david.kicker}</p>
          <h2>{t.david.title}</h2>
          {t.david.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <blockquote className="quote-block">
            {t.david.quote}
            <cite>{lang === "he" ? venue.awards[0].personHe : venue.awards[0].personEn}</cite>
          </blockquote>
          <p className="source award-note">
            {lang === "he" ? venue.awards[0].he : venue.awards[0].en}
          </p>
        </div>
      </section>

      <section className="chapter" id="paths">
        <div className="chapter-inner paths">
          <h2>{t.paths.title}</h2>
          <div className="paths-grid">
            <article className="path-card path-card-here frame">
              <img className="path-img path-img-here" src={homeSectionsMedia.pathsHere.src} alt={lang === "he" ? homeSectionsMedia.pathsHere.altHe : homeSectionsMedia.pathsHere.altEn} width="1600" height="1066" loading="lazy" />
              <div className="veil" />
              <div className="copy">
                <h3>{t.paths.here.title}</h3>
                <p>{t.paths.here.body}</p>
                <a className="btn btn-primary path-cta" href={venue.links.reserve} target="_blank" rel="noopener noreferrer">
                  {t.paths.here.cta}
                </a>
              </div>
            </article>
            <article className="path-card path-card-there frame">
              <img className="path-img path-img-there" src={homeSectionsMedia.pathsThere.src} alt={lang === "he" ? homeSectionsMedia.pathsThere.altHe : homeSectionsMedia.pathsThere.altEn} width="1600" height="1066" loading="lazy" />
              <div className="veil" />
              <div className="copy">
                <h3>{t.paths.there.title}</h3>
                <p>{t.paths.there.body}</p>
                <Link className="btn btn-ghost path-cta" to="/events">
                  {t.paths.there.cta}
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className="chapter events-tease"
        id="events-home"
        style={{ "--events-tease-image": `url(${MEDIA.eventsTease})` }}
      >
        <div className="chapter-inner">
          <h2>{t.eventsTease.title}</h2>
          <p className="lede">{t.eventsTease.body}</p>
          <Link className="btn btn-primary" to="/events">
            {t.eventsTease.cta}
          </Link>
        </div>
      </section>

      <NewsletterSignup />
    </main>
  );
}
