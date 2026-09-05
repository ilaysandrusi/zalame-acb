import { useMemo, useState } from "react";
import { useLang } from "../i18n/index.jsx";
import { eventsGalleryMediaNormalized } from "../data/venue.js";

const PAGE_SIZE = 9;
const FILTERS = ["all", "station"];

function getIsMobile() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(max-width: 640px)").matches
  );
}

function toMobileVariant(url) {
  return url.replace(/w_\d+,h_\d+/, "w_960,h_642");
}

export function EventsGallery() {
  const { t } = useLang();
  const isMobile = useMemo(() => getIsMobile(), []);
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [announce, setAnnounce] = useState("");

  const filtered = useMemo(
    () =>
      filter === "all"
        ? eventsGalleryMediaNormalized
        : eventsGalleryMediaNormalized.filter((item) => item.kind === filter),
    [filter],
  );

  const total = filtered.length;
  const remaining = Math.max(0, total - visibleCount);
  const visibleItems = filtered.slice(0, visibleCount);

  function onFilter(next) {
    setFilter(next);
    setVisibleCount(PAGE_SIZE);
    setAnnounce("");
  }

  function onLoadMore() {
    if (remaining <= 0) return;
    const nextCount = Math.min(total, visibleCount + PAGE_SIZE);
    setVisibleCount(nextCount);
    setAnnounce(t.eventsGallery.loadedAnnouncement.replace("{n}", String(nextCount)));
  }

  return (
    <section className="events-gallery" aria-label={t.eventsGallery.title}>
      <div className="events-gallery-body">
        <div className="events-gallery-head">
          <h2 className="events-gallery-title">{t.eventsGallery.title}</h2>
          <div className="events-gallery-filters" role="group" aria-label={t.eventsGallery.filtersLabel}>
            {FILTERS.map((key) => (
              <button
                key={key}
                type="button"
                className={filter === key ? "events-filter is-active" : "events-filter"}
                aria-pressed={filter === key}
                onClick={() => onFilter(key)}
              >
                {t.eventsGallery.filters[key]}
              </button>
            ))}
          </div>
          {announce ? (
            <p className="events-gallery-live" role="status" aria-live="polite">
              {announce}
            </p>
          ) : null}
        </div>

        <div id="events-gallery-grid" className="events-gallery-grid">
          {visibleItems.map((item, idx) => (
            <div key={item.id} className="events-gallery-tile">
              <img
                src={isMobile ? toMobileVariant(item.src) : item.src}
                alt={item[`alt${t.eventsGallery.altKeySuffix}`] || item.altEn}
                loading={idx < 3 ? "eager" : "lazy"}
                decoding="async"
                style={{ objectPosition: item.focal || "center" }}
              />
            </div>
          ))}
        </div>

        {remaining > 0 ? (
          <div className="events-gallery-actions">
            <button type="button" className="btn btn-primary" onClick={onLoadMore}>
              {t.eventsGallery.loadMore}
            </button>
          </div>
        ) : (
          <p className="events-gallery-end source">{t.eventsGallery.end}</p>
        )}
      </div>
    </section>
  );
}
