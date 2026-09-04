import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { MobileDock } from "./components/MobileDock.jsx";
import { Home } from "./pages/Home.jsx";
import { Events } from "./pages/Events.jsx";
import { LanguageProvider } from "./i18n/index.jsx";

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" });
}

function RouteScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.replace(/^#/, ""));
      const run = () => scrollToId(id);
      const frame = window.requestAnimationFrame(run);
      const timer = window.setTimeout(run, 80);
      return () => {
        window.cancelAnimationFrame(frame);
        window.clearTimeout(timer);
      };
    }

    scrollToTop();
    const frame = window.requestAnimationFrame(scrollToTop);
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

function AppShell() {
  return (
    <>
      <RouteScroll />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
      <MobileDock />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "") || "/"}>
        <AppShell />
      </BrowserRouter>
    </LanguageProvider>
  );
}
