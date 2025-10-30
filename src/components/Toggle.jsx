import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Toggle = () => {
  const { i18n } = useTranslation();
  const [isOn, setIsOn] = useState(i18n.language === "en");

  const handleToggle = () => {
    const newLang = isOn ? "es" : "en";
    i18n.changeLanguage(newLang);
    setIsOn(!isOn);
  };

  return (
    <label className="switch">
        <input
  type="checkbox"
  checked={isOn}
  onChange={handleToggle}
/>
  <div className="slider">
    <span>ES</span>
    <span>EN</span>
  </div>
</label>
  );
};

export default Toggle;
