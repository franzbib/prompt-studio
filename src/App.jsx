import { useState } from "react";
import { NAV_ITEMS } from "./config/navigation.js";
import { useFavorites, useSettings, useVocab } from "./hooks/index.js";
import { AppHeader } from "./components/layout/AppHeader.jsx";
import { MobileNav } from "./components/layout/MobileNav.jsx";
import { Dashboard } from "./sections/Dashboard.jsx";
import { PromptLibrary } from "./sections/PromptLibrary.jsx";
import { SwissArmyTools } from "./sections/SwissArmyTools.jsx";
import { SocraticTutor } from "./sections/SocraticTutor.jsx";
import { DailyChallenge } from "./sections/DailyChallenge.jsx";
import { HowToPrompt } from "./sections/HowToPrompt.jsx";
import { Favorites } from "./sections/Favorites.jsx";
import { Settings } from "./sections/Settings.jsx";

function renderSection(section, { favorites, settings, vocab, onNavigate }) {
  if (section === "home") {
    return <Dashboard onNavigate={onNavigate} favorites={favorites} settings={settings} />;
  }

  if (section === "library") {
    return <PromptLibrary favorites={favorites} settings={settings} />;
  }

  if (section === "tools") {
    return <SwissArmyTools vocab={vocab} settings={settings} />;
  }

  if (section === "socratic") {
    return <SocraticTutor favorites={favorites} settings={settings} />;
  }

  if (section === "challenge") {
    return <DailyChallenge favorites={favorites} settings={settings} />;
  }

  if (section === "howto") {
    return <HowToPrompt settings={settings} />;
  }

  if (section === "favorites") {
    return <Favorites favorites={favorites} settings={settings} />;
  }

  return <Settings settings={settings} />;
}

export default function App() {
  const [section, setSection] = useState("home");
  const favorites = useFavorites();
  const settings = useSettings();
  const vocab = useVocab();

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <AppHeader
        items={NAV_ITEMS}
        currentSection={section}
        onNavigate={setSection}
        favoriteCount={favorites.favs.length}
        showChineseLabels={settings.s.showChineseLabels}
      />

      <main className="max-w-7xl mx-auto px-4 py-6 pb-24 lg:pb-6">
        {renderSection(section, {
          favorites,
          settings,
          vocab,
          onNavigate: setSection,
        })}
      </main>

      <MobileNav
        items={NAV_ITEMS}
        currentSection={section}
        onNavigate={setSection}
        showChineseLabels={settings.s.showChineseLabels}
      />
    </div>
  );
}
