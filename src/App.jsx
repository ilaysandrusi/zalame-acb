import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { MobileDock } from "./components/MobileDock.jsx";
import { A11yWidget } from "./components/A11yWidget.jsx";
import { Home } from "./pages/Home.jsx";
import { Events } from "./pages/Events.jsx";
import { Accessibility } from "./pages/Accessibility.jsx";
import { LanguageProvider } from "./i18n/index.jsx";
import { scheduleRouteScroll } from "./lib/scroll.js";

function RouteScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => scheduleRouteScroll(hash), [pathname, hash]);

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
        <Route path="/accessibility" element={<Accessibility />} />
      </Routes>
      <Footer />
      <MobileDock />
      <A11yWidget />
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
