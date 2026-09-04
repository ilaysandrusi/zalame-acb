import { CalendarBlank, ChatCircleText, Compass, EnvelopeSimple } from "@phosphor-icons/react";
import { useLocation } from "react-router-dom";
import { venue } from "../data/venue";
import { whatsappHref } from "../lib/whatsapp";
import { useLang } from "../i18n/index.jsx";

export function MobileDock() {
  const { t } = useLang();
  const { pathname } = useLocation();
  const onEvents = pathname.endsWith("/events");

  if (onEvents) {
    return (
      <nav className="dock" aria-label={t.dock.aria}>
        <a href="#events-form">
          <EnvelopeSimple size={22} weight="light" aria-hidden="true" />
          {t.dock.contact}
        </a>
        <a
          href={whatsappHref(venue.phones.events.e164)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ChatCircleText size={22} weight="light" aria-hidden="true" />
          {t.dock.whatsapp}
        </a>
        <a href={venue.links.reserve} target="_blank" rel="noopener noreferrer">
          <CalendarBlank size={22} weight="light" aria-hidden="true" />
          {t.dock.table}
        </a>
      </nav>
    );
  }

  return (
    <nav className="dock" aria-label={t.dock.aria}>
      <a href={venue.links.reserve} target="_blank" rel="noopener noreferrer">
        <CalendarBlank size={22} weight="light" aria-hidden="true" />
        {t.dock.table}
      </a>
      <a href={venue.links.waze} target="_blank" rel="noopener noreferrer">
        <Compass size={22} weight="light" aria-hidden="true" />
        {t.dock.nav}
      </a>
      <a href={venue.links.whatsappTable} target="_blank" rel="noopener noreferrer">
        <ChatCircleText size={22} weight="light" aria-hidden="true" />
        {t.dock.whatsapp}
      </a>
    </nav>
  );
}
