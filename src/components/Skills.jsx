import React from "react";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  const languagesData = {
  
  "Frontend": ["React", "HTML", "CSS", "TailwinSd"],
  [`Backend/ ${t("others")}`]: ["Java", "Kotlin", "Android Studio", "Visual Studio"]
};
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-start w-full min-h-[40vh] text-gray-300 pt-10 pb-30"
    >

      <div className="grid font-[Bungee_Hairline,sans-serif] grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-[90%] max-w-7xl">
        {Object.keys(languagesData).map((category) => (
          <div
            key={category}
            className=" rounded-2xl p-6 flex flex-col gap-4  transition-all duration-300"
          >
            <h3 className="text-2xl text-[#ffffff] text-center font-semibold">{category}</h3>
            <div className="flex flex-wrap gap-3 mt-2">
              {languagesData[category].map((lang) => (
                <span
                  key={lang}
                  className="px-4 py-2 rounded-xl bg-[#2a71bd] text-white font-semibold text-sm shadow-md"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
