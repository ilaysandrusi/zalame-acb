import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { MobileDock } from "./components/MobileDock.jsx";
import { Home } from "./pages/Home.jsx";
import { Events } from "./pages/Events.jsx";
import { LanguageProvider } from "./i18n/index.jsx";

function AppShell() {
  return (
    <>
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
