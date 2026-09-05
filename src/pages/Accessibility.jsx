import { venue } from "../data/venue";
import { useLang } from "../i18n/index.jsx";

export function Accessibility() {
  const { t, lang } = useLang();
  const copy = t.a11yPage;
  const phone = venue.phones.table.display;

  return (
    <main id="content" className="a11y-page">
      <article className="chapter-inner a11y-page-inner">
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
        <h2>{copy.siteTitle}</h2>
        <p>{copy.siteBody}</p>
        <h2>{copy.widgetTitle}</h2>
        <p>{copy.widgetBody}</p>
        <h2>{copy.limitsTitle}</h2>
        <p>{copy.limitsBody}</p>
        <h2>{copy.venueTitle}</h2>
        <p>{lang === "he" ? venue.accessibility.noteHe : venue.accessibility.noteEn}</p>
        <h2>{copy.contactTitle}</h2>
        <p>
          {copy.contactLead}{" "}
          <a href={`tel:${venue.phones.table.e164}`}>{phone}</a>
          {" · "}
          <a href={`mailto:${venue.emailEvents}`}>{venue.emailEvents}</a>
        </p>
        <p className="source">{copy.updated}</p>
      </article>
    </main>
  );
}
