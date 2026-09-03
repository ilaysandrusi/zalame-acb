import { CalendarBlank, ChatCircleText, Compass } from "@phosphor-icons/react";
import { venue } from "../data/venue";
import { useLang } from "../i18n/index.jsx";

export function MobileDock() {
  const { t } = useLang();

  return (
    <nav className="dock" aria-label={t.dock.aria}>
      <a href={venue.links.reserve} rel="noreferrer">
        <CalendarBlank size={22} weight="light" aria-hidden="true" />
        {t.dock.table}
      </a>
      <a href={venue.links.waze} rel="noreferrer">
        <Compass size={22} weight="light" aria-hidden="true" />
        {t.dock.nav}
      </a>
      <a href={venue.links.whatsappTable} rel="noreferrer">
        <ChatCircleText size={22} weight="light" aria-hidden="true" />
        {t.dock.whatsapp}
      </a>
    </nav>
  );
}
