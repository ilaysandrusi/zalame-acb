import { useEffect, useId, useLayoutEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { venue, MEDIA } from "../data/venue";
import { useLang } from "../i18n/index.jsx";
import { scheduleRouteScroll } from "../lib/scroll.js";

export function Header() {
  const { t, lang, setLang } = useLang();
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const onEvents = pathname.endsWith("/events");
  const onInfo = !onEvents && hash === "#info";
  const onAbout = !onEvents && hash === "#story";
  const onHome = !onEvents && !onInfo && !onAbout;

  const go = (to) => (event) => {
    event.preventDefault();
    setMenuOpen(false);
    navigate(to);
    scheduleRouteScroll(to.hash || "");
  };

  useLayoutEffect(() => {
    if (!menuOpen) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const allowInDrawer = (event) => event.target.closest?.(".nav-drawer");
    const preventBackgroundScroll = (event) => {
      if (!allowInDrawer(event)) event.preventDefault();
    };

    window.addEventListener("keydown", onKey);
    document.addEventListener("wheel", preventBackgroundScroll, { passive: false });
    document.addEventListener("touchmove", preventBackgroundScroll, { passive: false });

    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("wheel", preventBackgroundScroll);
      document.removeEventListener("touchmove", preventBackgroundScroll);
    };
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const closeOnDesk = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", closeOnDesk);
    return () => mq.removeEventListener("change", closeOnDesk);
  }, []);

  return (
    <>
      <div className="header-slot" aria-hidden="true" />
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
            to="/#story"
            className={() => (onAbout ? "active" : undefined)}
            onClick={go({ pathname: "/", hash: "story" })}
          >
            {t.nav.about}
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
            {t.nav.privateEvents}
          </NavLink>
        </nav>
        <div className="header-tools">
          <button
            className="menu-btn"
            type="button"
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.menu}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} weight="light" aria-hidden="true" /> : <List size={22} weight="light" aria-hidden="true" />}
          </button>
          <button className="lang-btn" type="button" onClick={() => setLang(lang === "he" ? "en" : "he")} aria-label={t.langSwitchLabel}>
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
      {menuOpen ? (
        <div className="nav-drawer" id={menuId}>
          <nav className="nav-drawer-nav" aria-label={t.nav.aria}>
            <NavLink to="/" end className={() => (onHome ? "active" : undefined)} onClick={go({ pathname: "/", hash: "" })}>
              {t.nav.home}
            </NavLink>
            <NavLink
              to="/#story"
              className={() => (onAbout ? "active" : undefined)}
              onClick={go({ pathname: "/", hash: "story" })}
            >
              {t.nav.about}
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
              {t.nav.privateEvents}
            </NavLink>
          </nav>
          <div className="lang-switch" role="group" aria-label={t.nav.langGroup}>
            <button type="button" aria-pressed={lang === "he"} onClick={() => setLang("he")}>
              He
            </button>
            <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>
              En
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
