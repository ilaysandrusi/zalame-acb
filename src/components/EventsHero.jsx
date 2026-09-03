import { useEffect, useState } from "react";
import { MEDIA } from "../data/venue";
import { useLang } from "../i18n/index.jsx";

export function EventsHero() {
  const { t } = useLang();
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPlayVideo(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section className="events-hero" aria-labelledby="events-hero-title">
      <div className="events-hero-media media-grain" aria-hidden="true">
        {playVideo ? (
          <video autoPlay muted loop playsInline poster={MEDIA.eventsVideoPoster}>
            <source src={MEDIA.eventsVideo} type="video/mp4" />
          </video>
        ) : (
          <img src={MEDIA.eventsVideoPoster} alt="" width="1920" height="1080" />
        )}
      </div>
      <div className="events-hero-scrim" aria-hidden="true" />
      <div className="events-hero-copy">
        <img
          className="events-hero-logo"
          src={MEDIA.eventsLogo}
          alt=""
          width="320"
          height="320"
          fetchPriority="high"
        />
        <h1 id="events-hero-title" className="events-hero-tagline">
          {t.eventsPage.heroTagline}
        </h1>
        <a className="btn btn-ghost events-hero-cta" href="#events-form">
          {t.eventsPage.heroCta}
        </a>
      </div>
    </section>
  );
}
