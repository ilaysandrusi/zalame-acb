import { EventsHero } from "../components/EventsHero.jsx";
import { MEDIA, venue } from "../data/venue";
import { EventsForm } from "../components/EventsForm.jsx";
import { EventsGallery } from "../components/EventsGallery.jsx";
import { useLang } from "../i18n/index.jsx";

export function Events() {
  const { t, lang } = useLang();
  const award = lang === "he" ? venue.awards[0].he : venue.awards[0].en;

  return (
    <main id="content">
      <EventsHero />

      <section className="chapter" id="events-bar">
        <div className="chapter-inner events-split">
          <div>
            <h2>{t.eventsPage.barTitle}</h2>
            <p>{t.eventsPage.lead}</p>
            <a className="btn btn-primary events-offer-cta" href="#events-form">
              {t.eventsPage.heroCta}
            </a>
          </div>
          <div className="frame events-split-photo">
            <img
              src={MEDIA.eventsBar}
              alt={t.eventsPage.barAlt}
              width="1600"
              height="1066"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="chapter" id="events-workshops">
        <div className="chapter-inner events-split events-split-flip">
          <div>
            <h2>{t.eventsPage.workshopsTitle}</h2>
            <p>{t.eventsPage.workshopsBody}</p>
            <p className="events-contacts">
              <a href={venue.links.facebookEvents} target="_blank" rel="noopener noreferrer">
                {t.eventsPage.facebookEvents}
              </a>
              {" · "}
              <a href={venue.links.instagramEvents} target="_blank" rel="noopener noreferrer">
                {t.eventsPage.instagramEvents}
              </a>
            </p>
            <a className="btn btn-ghost events-offer-cta" href="#events-form">
              {t.eventsPage.heroCta}
            </a>
          </div>
          <div className="frame events-split-photo">
            <img
              src={MEDIA.eventsWide}
              alt={t.eventsPage.workshopsAlt}
              width="1600"
              height="1066"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="chapter" id="events-form">
        <div className="chapter-inner events-contact-grid">
          <div>
            <p className="source">{t.eventsPage.davidRole}</p>
            <h2>{t.david.title}</h2>
            <p>{t.david.body[0]}</p>
            <p className="source award-note">{award}</p>
            <p className="events-contacts">
              <a href={`tel:${venue.phones.events.e164}`}>{venue.phones.events.display}</a>
              {" · "}
              <a href={`mailto:${venue.emailEvents}`}>{venue.emailEvents}</a>
            </p>
            <div className="frame events-split-photo events-david-photo">
              <img
                src={MEDIA.david}
                alt={t.eventsPage.davidAlt}
                width="1920"
                height="1280"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <h2>{t.eventsPage.formTitle}</h2>
            <p className="lede">{t.eventsPage.formLead}</p>
            <EventsForm />
          </div>
        </div>
      </section>

      <EventsGallery />
    </main>
  );
}
