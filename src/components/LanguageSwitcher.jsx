import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-center z-50">
      
      <div className="flex bottom-1.5 flex-col items-center mb-2 relative">
        {["es", "en", "fr"].map((lang, index) => (
          <button
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={`
              w-12 h-12 rounded-full flex items-center justify-center shadow-md
              transform transition-all duration-100
              mb-2
              ${isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"}
            `}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {lang === "es" && "🇪🇸"}
            {lang === "en" && "🇬🇧"}
            {lang === "fr" && "🇫🇷"}
          </button>
        ))}
      </div>

      <button
        onClick={toggleMenu}
        className="lg:hidden text-[1.7rem] w-16 h-16 rounded-full flex items-center justify-center bg-[#3064a969] hover:bg-[#4276c973] shadow-md transform hover:scale-110 transition-all duration-300"
      >
        🌐
      </button>

      <button
        onClick={toggleMenu}
        className="hidden lg:flex text-2xl w-14 h-14 bg-[#3064a969] hover:bg-[#4276c973] rounded-full items-center justify-center shadow-md transform hover:scale-110 transition-all duration-300"
      >
        🌐
      </button>
    </div>
  );
}