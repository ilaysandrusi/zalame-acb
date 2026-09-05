export const A11Y_STORAGE = "zalame-a11y";
export const A11Y_EVENT = "zalame-a11y";

export const a11yDefault = {
  text: 0,
  contrast: false,
  links: false,
  motion: false,
  readable: false,
};

export function readA11y() {
  try {
    const raw = localStorage.getItem(A11Y_STORAGE);
    if (!raw) return { ...a11yDefault };
    return { ...a11yDefault, ...JSON.parse(raw) };
  } catch {
    return { ...a11yDefault };
  }
}

export function applyA11y(state) {
  const html = document.documentElement;
  html.classList.toggle("a11y-sm", state.text < 0);
  html.classList.toggle("a11y-lg", state.text === 1);
  html.classList.toggle("a11y-xl", state.text >= 2);
  html.classList.toggle("a11y-contrast", state.contrast);
  html.classList.toggle("a11y-links", state.links);
  html.classList.toggle("a11y-motion", state.motion);
  html.classList.toggle("a11y-readable", state.readable);
  window.dispatchEvent(new Event(A11Y_EVENT));
}

export function saveA11y(state) {
  localStorage.setItem(A11Y_STORAGE, JSON.stringify(state));
  applyA11y(state);
}

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function motionPaused() {
  return prefersReducedMotion() || document.documentElement.classList.contains("a11y-motion");
}
