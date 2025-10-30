import React, { useState } from "react";

const CardCertificacion = ({ image, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
        {/* Tarjeta principal */}
        <div className="card" onClick={() => setOpen(true)}>
            <div className="card-image">
                <img src={image} alt={title}/>
            </div>
            <p className="card-title">{title}</p>
        </div>

      {/* 🌙 Modal (fondo oscuro) */}
        {open && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setOpen(false)} // Cierra al hacer click fuera del contenido
        >
          {/* 📦 Contenedor del modal (con animación) */}
          <div
            onClick={(e) => e.stopPropagation()} // Evita cerrar si haces clic dentro
            className=" rounded-2xl p-30 lg:w-[100%] w-[83%] h-auto max-w-lg shadow-2xl text-white relative
                        animate-[fadeInScale_0.4s_ease-out_forwards] "
          >

            {/* 🖼 Contenido */}
            <img
              src={image}
              className="lg:rounded-xl max-w-[5rem] lg:max-w-3xl lg:min-h-[250px] min-h-[45px] h-auto justify-self-center lg:border border-gray-700 transform lg:scale-110 scale-410 md:scale-125 transition-transform duration-300"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CardCertificacion;
