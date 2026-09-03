import { useState } from "react";
import { venue } from "../data/venue";
import { useLang } from "../i18n/index.jsx";

export function EventsForm() {
  const { t } = useLang();
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    type: "private",
    message: "",
  });

  function update(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function buildText() {
    const typeLabel = t.eventsPage.types[values.type];
    return [
      "Zalame Events",
      `${t.eventsPage.name}: ${values.name}`,
      `${t.eventsPage.phone}: ${values.phone}`,
      values.email ? `${t.eventsPage.email}: ${values.email}` : "",
      `${t.eventsPage.type}: ${typeLabel}`,
      values.message ? `${t.eventsPage.message}: ${values.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }

  function onSubmit(event) {
    event.preventDefault();
    if (!values.name.trim() || !values.phone.trim()) {
      setSent(false);
      setError(t.forms.needNamePhone);
      const first = !values.name.trim() ? "event-name" : "event-phone";
      document.getElementById(first)?.focus();
      return;
    }
    setError("");
    setBusy(true);
    const url = `${venue.links.whatsappEvents}?text=${encodeURIComponent(buildText())}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    setBusy(false);
  }

  function mailHref() {
    const subject = encodeURIComponent(`Zalame Events / ${values.name || ""}`);
    return `mailto:${venue.emailEvents}?subject=${subject}&body=${encodeURIComponent(buildText())}`;
  }

  const nameInvalid = Boolean(error) && !values.name.trim();
  const phoneInvalid = Boolean(error) && !values.phone.trim();

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="event-name">{t.eventsPage.name}</label>
        <input
          id="event-name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={update}
          required
          aria-invalid={nameInvalid}
          aria-describedby={error ? "event-form-error" : undefined}
        />
      </div>
      <div className="field">
        <label htmlFor="event-phone">{t.eventsPage.phone}</label>
        <input
          id="event-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={update}
          required
          aria-invalid={phoneInvalid}
          aria-describedby={error ? "event-form-error" : undefined}
        />
      </div>
      <div className="field">
        <label htmlFor="event-email">{t.eventsPage.email}</label>
        <input
          id="event-email"
          name="email"
          type="email"
          autoComplete="email"
          spellCheck={false}
          value={values.email}
          onChange={update}
        />
      </div>
      <div className="field">
        <label htmlFor="event-type">{t.eventsPage.type}</label>
        <select id="event-type" name="type" value={values.type} onChange={update}>
          <option value="private">{t.eventsPage.types.private}</option>
          <option value="workshop">{t.eventsPage.types.workshop}</option>
          <option value="corporate">{t.eventsPage.types.corporate}</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="event-message">{t.eventsPage.message}</label>
        <textarea id="event-message" name="message" rows="4" value={values.message} onChange={update} />
      </div>
      {error ? (
        <p className="form-error" id="event-form-error" role="alert">
          {error}
        </p>
      ) : null}
      {sent && !error ? (
        <p className="form-success" role="status">
          {t.forms.sent}
        </p>
      ) : null}
      <div className="form-actions">
        <button className="btn btn-primary" type="submit" aria-busy={busy}>
          {t.eventsPage.submit}
        </button>
        <a className="btn btn-ghost" href={mailHref()}>
          {t.eventsPage.mail}
        </a>
      </div>
    </form>
  );
}
