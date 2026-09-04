import { NavLink, useLocation } from "react-router-dom";
import { venue, MEDIA } from "../data/venue";
import { useLang } from "../i18n/index.jsx";

export function Header() {
  const { t, lang, toggle } = useLang();
  const { pathname, hash } = useLocation();
  const onEvents = pathname.endsWith("/events");
  const onBareHome = !onEvents && hash === "";

  return (
    <header className="site-header">
      <a className="skip" href="#content">
        {t.skip}
      </a>
      <NavLink className="brand" to="/" aria-label={lang === "he" ? venue.nameHe : venue.nameEn}>
        <img src={MEDIA.camel} alt="" width="42" height="42" />
        <span>
          <span className="brand-name">{lang === "he" ? venue.nameHe : venue.nameEn}</span>
          <span className="brand-sub">{lang === "he" ? venue.addressHe : venue.addressEn}</span>
        </span>
      </NavLink>
      <nav className="nav-desk" aria-label={t.nav.aria}>
        <NavLink to="/" end className={() => (onBareHome ? "active" : undefined)}>
          {t.nav.home}
        </NavLink>
        <NavLink to={{ pathname: "/", hash: "story" }} className={() => (hash === "#story" ? "active" : undefined)}>
          {t.nav.story}
        </NavLink>
        <NavLink to={{ pathname: "/", hash: "drinks" }} className={() => (hash === "#drinks" ? "active" : undefined)}>
          {t.nav.drinks}
        </NavLink>
        <NavLink to="/events">{t.nav.events}</NavLink>
        <NavLink to={{ pathname: "/", hash: "info" }} className={() => (hash === "#info" ? "active" : undefined)}>
          {t.nav.info}
        </NavLink>
      </nav>
      <div className="header-tools">
        <NavLink className="header-info" to={{ pathname: "/", hash: "info" }}>
          {t.nav.info}
        </NavLink>
        <button className="lang-btn" type="button" onClick={toggle} aria-label={t.langSwitchLabel}>
          {t.langSwitch}
        </button>
        {onEvents ? (
          <a className="btn btn-primary header-cta" href="#events-form">
            {t.eventsPage.heroCta}
          </a>
        ) : (
          <a
            className="btn btn-primary header-cta"
            href={venue.links.reserve}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.hero.cta}
          </a>
        )}
      </div>
    </header>
  );
}
