import { venue } from "../data/venue";
import { formatHoursLine, getOpenStatus } from "../lib/hours";
import { useLang } from "../i18n/index.jsx";

export function VenueInfo() {
  const { t, lang } = useLang();
  const hours = formatHoursLine(venue.hours, lang);
  const today = getOpenStatus(venue.hours).day;

  return (
    <section className="chapter" id="info">
      <div className="chapter-inner">
        <h2>{t.info.title}</h2>
        <div className="info-grid info-section">
          <div className="info-stack">
            <div className="info-block">
              <h3>{t.info.address}</h3>
              <p>{lang === "he" ? venue.addressHe : venue.addressEn}</p>
            </div>
            <div className="info-block">
              <h3>{t.info.navigate}</h3>
              <p>
                <a href={venue.links.waze} target="_blank" rel="noopener noreferrer">
                  {t.info.waze}
                </a>
                {" · "}
                <a href={venue.links.maps} target="_blank" rel="noopener noreferrer">
                  {t.info.maps}
                </a>
              </p>
            </div>
            <div className="info-block">
              <h3>{t.info.phone}</h3>
              <p>
                <a href={`tel:${venue.phones.table.e164}`}>{venue.phones.table.display}</a>
              </p>
            </div>
            <div className="info-block">
              <h3>{t.info.social}</h3>
              <p>
                <a href={venue.links.facebook} target="_blank" rel="noopener noreferrer">
                  {t.info.facebook}
                </a>
                {" · "}
                <a href={venue.links.instagram} target="_blank" rel="noopener noreferrer">
                  {t.info.instagram}
                </a>
              </p>
            </div>
            <div className="info-block">
              <h3>{t.info.loyalty}</h3>
              <p>
                <a href={venue.links.loyaltyProgram} target="_blank" rel="noopener noreferrer">
                  {t.info.loyaltyCta}
                </a>
              </p>
            </div>
            <div className="info-block">
              <h3>{t.info.accessibility}</h3>
              <p>{lang === "he" ? venue.accessibility.noteHe : venue.accessibility.noteEn}</p>
            </div>
          </div>
          <div className="info-block">
            <h3>{t.info.hours}</h3>
            <p className="source">{t.info.hoursNote}</p>
            <table className="hours-table">
              <caption className="source hours-caption">{t.info.hours}</caption>
              <tbody>
                {hours.map((row) => (
                  <tr key={row.day} className={row.day === today ? "is-today" : ""}>
                    <th scope="row">{row.label}</th>
                    <td className="hours-range" dir={lang === "he" ? "rtl" : "ltr"}>
                      {row.range}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
