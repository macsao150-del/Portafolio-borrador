import React, { useState } from "react";
import { useTranslation } from "react-i18next";


const Card = ({ image, title, description, website, github }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div
        className="card cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={() => setOpen(true)}
      >
        <div className="card-image">
          <img src={image} alt={title} className="rounded-md w-full h-auto" />
        </div>
        <p className="card-title text-center mt-2">{title}</p>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#1531468f] rounded-2xl w-[90%] max-w-2xl shadow-2xl text-white relative animate-[fadeInScale_0.4s_ease-out_forwards] p-6 lg:p-8 flex flex-col items-center"
          >

            <img
              src={image}
              alt={title}
              className="rounded-xl w-full max-h-[300px] object-contain mb-5 border border-gray-700"
            />

            <h2 className="text-2xl font-bold mb-3 text-cyan-400 text-center">{title}</h2>
            <p className="text-gray-300 mb-6 text-center leading-relaxed">{description}</p>

            <div className="flex flex-wrap lg:gap-10 gap-5 justify-center">
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-2 bg-linear-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {t("seeWebsite")}
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-2 bg-linear-to-r from-gray-600 to-gray-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
