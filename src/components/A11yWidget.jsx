import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Wheelchair } from "@phosphor-icons/react";
import { useLang } from "../i18n/index.jsx";
import { a11yDefault, applyA11y, readA11y, saveA11y } from "../lib/a11y.js";

export function A11yWidget() {
  const { t } = useLang();
  const copy = t.a11y;
  const panelId = useId();
  const titleId = useId();
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(a11yDefault);

  useLayoutEffect(() => {
    const next = readA11y();
    setState(next);
    applyA11y(next);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus({ preventScroll: true });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function patch(partial) {
    const next = { ...state, ...partial };
    setState(next);
    saveA11y(next);
  }

  function reset() {
    setState(a11yDefault);
    saveA11y(a11yDefault);
  }

  return (
    <div className="a11y-widget">
      <button
        ref={buttonRef}
        className="a11y-fab"
        type="button"
        aria-label={copy.open}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <Wheelchair size={26} weight="regular" aria-hidden="true" />
      </button>
      {open ? (
        <div className="a11y-panel" id={panelId} role="dialog" aria-modal="false" aria-labelledby={titleId}>
          <h2 id={titleId}>{copy.title}</h2>
          <div className="a11y-row">
            <span>{copy.text}</span>
            <div className="a11y-stepper">
              <button type="button" onClick={() => patch({ text: Math.max(-1, state.text - 1) })}>
                {copy.textDown}
              </button>
              <button type="button" onClick={() => patch({ text: Math.min(2, state.text + 1) })}>
                {copy.textUp}
              </button>
            </div>
          </div>
          <button type="button" className={state.contrast ? "is-on" : undefined} aria-pressed={state.contrast} onClick={() => patch({ contrast: !state.contrast })}>
            {copy.contrast}
          </button>
          <button type="button" className={state.links ? "is-on" : undefined} aria-pressed={state.links} onClick={() => patch({ links: !state.links })}>
            {copy.links}
          </button>
          <button type="button" className={state.motion ? "is-on" : undefined} aria-pressed={state.motion} onClick={() => patch({ motion: !state.motion })}>
            {copy.motion}
          </button>
          <button type="button" className={state.readable ? "is-on" : undefined} aria-pressed={state.readable} onClick={() => patch({ readable: !state.readable })}>
            {copy.readable}
          </button>
          <button type="button" className="a11y-reset" onClick={reset}>
            {copy.reset}
          </button>
          <Link className="a11y-statement" to="/accessibility" onClick={() => setOpen(false)}>
            {copy.statement}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
