import { useEffect } from "react";
import { useHashRoute } from "./hooks";
import { GlobalDefs, NoiseOverlay } from "./components/ornaments";
import { BackToTop, WhatsAppBubble } from "./components/ui";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";

const TITLES: Record<string, string> = {
  home: "Shahi Mahal — Luxury Banquet Hall · Gulberg III, Lahore",
  about: "Our Story — Shahi Mahal · A Legacy of Celebration",
  services: "Halls, Packages & Dastarkhwan — Shahi Mahal Lahore",
  contact: "Book Your Date — Shahi Mahal Lahore",
};

export default function App() {
  const route = useHashRoute();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    document.title = TITLES[route] ?? TITLES.home;
  }, [route]);

  const Page =
    route === "about" ? About : route === "services" ? Services : route === "contact" ? Contact : Home;

  return (
    <div className="min-h-screen bg-maroon-ink text-marble">
      <GlobalDefs />
      <NoiseOverlay />
      <Header route={route} />
      <main key={route} className="page-enter">
        <Page />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppBubble />
    </div>
  );
}
