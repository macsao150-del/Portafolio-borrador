import React, { useState } from "react";

const CardCertificacion = ({ image, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="card cursor-pointer"
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
            className="flex items-center justify-center rounded-2xl p-4 shadow-2xl max-w-4xl w-[90%] max-h-[90%] text-white relative animate-[fadeInScale_0.4s_ease-out_forwards]"
          >
            <img
              src={image}
              alt={title}
              className="rounded-xl max-h-[85vh] w-auto object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CardCertificacion;
