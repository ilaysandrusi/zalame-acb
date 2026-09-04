import { useState } from "react";
import { venue } from "../data/venue";
import { openWhatsApp } from "../lib/whatsapp";
import { useLang } from "../i18n/index.jsx";

export function NewsletterSignup() {
  const { t } = useLang();
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [values, setValues] = useState({ name: "", phone: "", email: "" });

  function update(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function buildText() {
    const lines = [
      t.newsletter.messageTitle,
      `${t.newsletter.name}: ${values.name}`,
      `${t.newsletter.phone}: ${values.phone}`,
    ];
    if (values.email.trim()) {
      lines.push(`${t.newsletter.email}: ${values.email}`);
    }
    return lines.join("\n");
  }

  function onSubmit(event) {
    event.preventDefault();
    if (!values.name.trim() || !values.phone.trim()) {
      setSent(false);
      setError(t.forms.needNamePhone);
      const first = !values.name.trim() ? "newsletter-name" : "newsletter-phone";
      document.getElementById(first)?.focus();
      return;
    }
    setError("");
    setBusy(true);
    const opened = openWhatsApp(venue.phones.table.e164, buildText());
    setSent(opened);
    if (!opened) setError(t.forms.popupBlocked);
    setBusy(false);
  }

  const nameInvalid = Boolean(error) && !values.name.trim();
  const phoneInvalid = Boolean(error) && !values.phone.trim();

  return (
    <section className="newsletter" id="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter-inner">
        <header className="newsletter-header">
          <h2 id="newsletter-title">{t.newsletter.title}</h2>
          <p className="newsletter-brand" aria-label={t.newsletter.brandAria}>
            <span className="newsletter-brand-prefix">{t.newsletter.brandPrefix}</span>
            <span className="newsletter-brand-name">{t.newsletter.brandName}</span>
          </p>
          <p className="newsletter-lead">{t.newsletter.lead}</p>
        </header>
        <form className="newsletter-form form" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="newsletter-name">{t.newsletter.name}</label>
            <input
              id="newsletter-name"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={update}
              required
              aria-invalid={nameInvalid}
              aria-describedby={error ? "newsletter-error" : undefined}
            />
          </div>
          <div className="field">
            <label htmlFor="newsletter-phone">{t.newsletter.phone}</label>
            <input
              id="newsletter-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={update}
              required
              aria-invalid={phoneInvalid}
              aria-describedby={error ? "newsletter-error" : undefined}
            />
          </div>
          <div className="field">
            <label htmlFor="newsletter-email">{t.newsletter.email}</label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              spellCheck={false}
              value={values.email}
              onChange={update}
            />
          </div>
          {error ? (
            <p className="form-error" id="newsletter-error" role="alert">
              {error}
            </p>
          ) : null}
          {sent && !error ? (
            <p className="form-success" role="status">
              {t.forms.sent}
            </p>
          ) : null}
          <button className="btn btn-primary" type="submit" aria-busy={busy}>
            {t.newsletter.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
