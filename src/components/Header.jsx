import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { venue, MEDIA } from "../data/venue";
import { useLang } from "../i18n/index.jsx";
import { scheduleRouteScroll } from "../lib/scroll.js";

export function Header() {
  const { t, lang, toggle } = useLang();
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();
  const onEvents = pathname.endsWith("/events");
  const onInfo = !onEvents && hash === "#info";
  const onHome = !onEvents && !onInfo;

  const go = (to) => (event) => {
    event.preventDefault();
    navigate(to);
    scheduleRouteScroll(to.hash || "");
  };

  return (
    <header className="site-header">
      <a className="skip" href="#content">
        {t.skip}
      </a>
      <NavLink
        className="brand"
        to="/"
        aria-label={lang === "he" ? venue.nameHe : venue.nameEn}
        onClick={go({ pathname: "/", hash: "" })}
      >
        <img src={MEDIA.camel} alt="" width="42" height="42" />
        <span>
          <span className="brand-name">{lang === "he" ? venue.nameHe : venue.nameEn}</span>
          <span className="brand-sub">{lang === "he" ? venue.addressHe : venue.addressEn}</span>
        </span>
      </NavLink>
      <nav className="nav-desk" aria-label={t.nav.aria}>
        <NavLink to="/" end className={() => (onHome ? "active" : undefined)} onClick={go({ pathname: "/", hash: "" })}>
          {t.nav.home}
        </NavLink>
        <NavLink
          to="/#info"
          className={() => (onInfo ? "active" : undefined)}
          onClick={go({ pathname: "/", hash: "info" })}
        >
          {t.nav.info}
        </NavLink>
        <NavLink
          to="/events"
          className={() => (onEvents ? "active" : undefined)}
          onClick={go({ pathname: "/events", hash: "" })}
        >
          {t.nav.events}
        </NavLink>
      </nav>
      <div className="header-tools">
        <NavLink className="header-info" to="/#info" onClick={go({ pathname: "/", hash: "info" })}>
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
