import React from 'react';
import medusa from "../imagenes/medusa-icono.png"

const Button = ({
  text = "El",
  icon, 
  size = "md",
  color = "blue",
  tooltipColor = "white",
  tooltipTextColor = "black",
  onClick,
  className = ""
}) => {

  const sizeClasses = {
    sm: "w-16 h-15 px-2 py-2 text-xs",
    md: "w-20 h-15 px-4 py-4 text-sm",
    lg: "w-20 h-15 px-6 py-6 text-base"
  };
  
  const jellyfishIcon = (
  <img
    src={medusa}
    alt="medusa icono"
    className='w-full h-full object-contain hover:scale-125 duration-160 hover:stroke-blue-500'
    
  />
);


  return (
    <div className={`group relative inline-block ${className}`}>
      <button onClick={onClick} className={`${sizeClasses[size]} text-${color}-500`}>
        {icon || jellyfishIcon}
      </button>

      <span
        className={`absolute top-1/2 left-[140%] -translate-y-1/2 
                    z-20 origin-left scale-0 rounded-lg 
                    border border-gray-300 bg-${tooltipColor} text-${tooltipTextColor} font-bold 
                    shadow-md transition-all duration-300 ease-in-out 
                    group-hover:scale-110 px-3 py-2`}>
        {text}
      </span>
    </div>
  );
};

export default Button;
