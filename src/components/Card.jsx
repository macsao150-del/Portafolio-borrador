import React, { useState } from "react";

const Card = ({ image, title, description, website, github }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
        
        <div className="card" onClick={() => setOpen(true)}>
            <div className="card-image">
                <img src={image} alt={title}/>
            </div>
            <p className="card-title">{title}</p>
        </div>

    
        {open && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setOpen(false)} 
        >
          <div
  onClick={(e) => e.stopPropagation()}
  className="bg-[#0e1117] rounded-2xl w-[90%] max-w-lg shadow-2xl text-white relative
            animate-[fadeInScale_0.4s_ease-out_forwards] min-h-[350px] lg:p-64 p-4"
>
            

            <img
              src={image}
              alt={title}
              className="rounded-xl lg:top-10 w-[90%] justify-self-center mb-4 border border-gray-700"
            />
            <h2 className="text-2xl font-bold mb-2 text-cyan-400">{title}</h2>
            <p className="text-gray-300 mb-4">{description}</p>

           <div className="flex gap-4 lg:justify-end justify-center">
  <a
    href={website}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center lg:w-[7rem] lg:h-[2rem] lg:text-[1.3rem] justify-center px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
  >
    Ver sitio
  </a>
  <a
    href={github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center lg:w-[7rem] lg:text-[1.3rem] justify-center px-6 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
  >
    Código
  </a>
</div>

          </div>
        </div>
      )}
    </>
  );
};

export default Card;
