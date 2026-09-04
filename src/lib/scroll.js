export function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "instant", block: "start" });
  return true;
}

export function scheduleRouteScroll(hash) {
  const run = () => {
    if (hash) {
      const id = decodeURIComponent(hash.replace(/^#/, ""));
      if (id) scrollToId(id);
      return;
    }
    scrollToTop();
  };

  run();
  const frames = [];
  frames.push(window.requestAnimationFrame(() => {
    run();
    frames.push(window.requestAnimationFrame(run));
  }));
  const t1 = window.setTimeout(run, 60);
  const t2 = window.setTimeout(run, 180);

  return () => {
    frames.forEach((id) => window.cancelAnimationFrame(id));
    window.clearTimeout(t1);
    window.clearTimeout(t2);
  };
}
