import { EventsHero } from "../components/EventsHero.jsx";
import { MEDIA, venue } from "../data/venue";
import { EventsForm } from "../components/EventsForm.jsx";
import { EventsGallery } from "../components/EventsGallery.jsx";
import { useLang } from "../i18n/index.jsx";

export function Events() {
  const { t } = useLang();

  return (
    <main id="content">
      <EventsHero />

      <EventsGallery />

      <section className="chapter" id="events-david">
        <div className="chapter-inner events-split">
          <div>
            <p className="source">{t.eventsPage.davidRole}</p>
            <h2>{t.david.title}</h2>
            <p>{t.david.body[0]}</p>
            <p className="events-contacts">
              <a href={`tel:${venue.phones.events.e164}`}>{venue.phones.events.display}</a>
              {" · "}
              <a href={`mailto:${venue.emailEvents}`}>{venue.emailEvents}</a>
            </p>
          </div>
          <div className="frame events-split-photo">
            <img
              src={MEDIA.david}
              alt="דוד קלינצ'ב, הרוקח הראשי של זאלמה ACB"
              width="1920"
              height="1280"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="chapter" id="events-workshops">
        <div className="chapter-inner events-prose">
          <h2>{t.eventsPage.workshopsTitle}</h2>
          <p>{t.eventsPage.workshopsBody}</p>
          <p className="events-contacts">
            <a href={venue.links.facebookEvents} rel="noreferrer">
              {t.eventsPage.facebookEvents}
            </a>
            {" · "}
            <a href={venue.links.instagramEvents} rel="noreferrer">
              {t.eventsPage.instagramEvents}
            </a>
          </p>
        </div>
      </section>

      <section className="chapter" id="events-form">
        <div className="chapter-inner">
          <h2>{t.eventsPage.formTitle}</h2>
          <p className="lede">{t.eventsPage.formLead}</p>
          <EventsForm />
        </div>
      </section>

      <section className="chapter">
        <div className="chapter-inner">
          <div className="frame events-photo">
            <img
              src={MEDIA.interiorB}
              alt="שירות קוקטיילים של זאלמה באירוע"
              width="1600"
              height="1066"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
