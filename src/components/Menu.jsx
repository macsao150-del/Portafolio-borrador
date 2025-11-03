import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function MobileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleOptionClick = () => setIsOpen(false);

  return (
    <div className="relative">
        <button onClick={toggleMenu}
            className="flex flex-col gap-2 w-8 focus:outline-none">
            <div
                className={`rounded-2xl h-[3px] w-1/2 bg-white duration-500 origin-right 
                ${isOpen ? "rotate-225 -translate-x-3 -translate-y-1px" : ""}`}>
            </div>
            <div
                className={`rounded-2xl h-[3px] w-full bg-white duration-500 
                ${isOpen ? "-rotate-45" : ""}`}>
            </div>
            <div
                className={`rounded-2xl h-[3px] w-1/2 bg-white duration-500 place-self-end origin-left 
                ${isOpen ? "rotate-225 translate-x-3 translate-y-px" : ""}`}>
            </div>
        </button>

        {isOpen && (
  <ul className="absolute flex-col text-[1.2rem] font-[Bungee_Hairline,sans-serif] font-bold top-10 text-white right-0 mt-2 w-45 bg-[#687f9be4] border-[#687f9b6d] border-9 rounded-md shadow-lg">
    <li>
      <a href="#seccion-principal">
        <button
          onClick={handleOptionClick}
          className="block w-full text-right px-4 py-2 hover:bg-gray-100"
        >
          {t("home")}
        </button>
      </a>
    </li>
    <li className="border-t border-gray-200">
      <a href="#seccion-sobre-mi">
        <button
          onClick={handleOptionClick}
          className="block w-full text-right px-4 py-2 hover:bg-gray-100"
        >
          {t("about")}
        </button>
      </a>
    </li>
    <li className="border-t border-gray-200">
      <a href="#seccion-proyectos">
        <button
          onClick={handleOptionClick}
          className="block w-full text-right px-4 py-2 hover:bg-gray-100"
        >
          {t("portfolio")}
        </button>
      </a>
    </li>
    <li className="border-t border-gray-200">
      <a href='#footer'>
        <button
          onClick={handleOptionClick}
          className="block w-full text-right px-4 py-2 hover:bg-gray-100"
        >
          {t("contact_me")}
        </button>
      </a>
    </li>
  </ul>
)}

    </div>
  );
}
