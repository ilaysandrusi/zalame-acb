import { venue } from "../data/venue";
import { useLang } from "../i18n/index.jsx";
import { FacebookIcon, InstagramIcon, TripAdvisorIcon } from "./SocialIcons.jsx";

const socialLinks = [
  { key: "tripadvisor", href: () => venue.links.tripadvisor, label: (t) => t.info.tripadvisor, Icon: TripAdvisorIcon },
  { key: "facebook", href: () => venue.links.facebook, label: (t) => t.info.facebook, Icon: FacebookIcon },
  { key: "instagram", href: () => venue.links.instagram, label: (t) => t.info.instagram, Icon: InstagramIcon },
];

export function Footer() {
  const { t, lang } = useLang();
  return (
    <footer className="site-footer">
      <div className="inner">
        <p className="footer-info">{lang === "he" ? venue.addressHe : venue.addressEn}</p>
        <div className="footer-social">
          {socialLinks.map(({ key, href, label, Icon }) => (
            <a
              key={key}
              href={href()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label(t)}
            >
              <Icon />
            </a>
          ))}
        </div>
        <a className="footer-reserve" href={venue.links.reserve} target="_blank" rel="noopener noreferrer">
          {t.footer.reserve}
        </a>
      </div>
    </footer>
  );
}
