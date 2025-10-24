import React from 'react'
import './index.css' 
import Silk from './components/Silk.jsx';
import Button from './components/Button';
import LightRays from './components/LightRays.jsx';

function App() {
  return (
    <div>
      
      <section id='seccion-principal' className = "relative z-0 h-screen lg:h-screen overflow-hidden lg:p-0">
        <div className="absolute z-0 h-screen lg:size-full ">
          <LightRays />    
        </div>

        <article className ="relative z-20 flex flex-col rounded-xl items-start justify-start w-[86%]  h-[70%] top-20 p-6
                            lg:flex-row lg:items-center lg:h-60 lg:top-40 lg:p-0
                            shadow-[0px_2px_20px_#3a597f9a,0px_0px_2px_#171a1f1F] 
                            bg-[linear-gradient(190deg,rgba(92,187,255,0.404)_3%,rgba(51,105,176,0.769)_8%,rgb(19,27,40)_53%,rgb(21,23,28)_70%)] ">

          <img src="src/imagenes/medusa-principal.png" alt="Medusa flotante" className="z-30 self-end lg:m-0 lg:w-88 w-[60.5%] h-auto " />

          <div className="flex flex-col z-30 lg:pr-3 lg:m-0 gap-4 items-end ">

            <h1 className="text-[#8ee6ff] lg:font-normal lg:text-[350%] text-[4rem] leading-none 
                font-[Goldman,sans-serif]">
              ASHER MARTINEZ
            </h1>

            <h2 className="text-[#d9f3fb] lg:text-right lg:font-bold lg:text-[1.2rem] sm:text-[1.7rem] leading-none 
              font-[Bungee_Hairline,sans-serif]">
              PORTAFOLIO
            </h2>
          </div>
        </article>
  
        <div className="absolute z-10 flex top-20 m-0 gap-0 lg:left-28 w-[6%] h-screen">
          <span className='relative flex w-[4.5%] h-full m-0 bg-[#8ed9ff] justify-start'></span>
          <span className='relative flex w-[4.5%] h-full m-0 bg-[#8ed9ff] justify-start'></span>
          <span className='relative flex w-[4.5%] h-full m-0 bg-[#8ed9ff] justify-start'></span>
          <span className='relative flex w-[4.5%] h-full m-0 bg-[#8ed9ff] justify-start'></span>
        </div>
      </section>

      <section id='seccion-sobre-mi' className="relative flex z-0 h-[200vh] bg-[#1e2128] items-center content-center p-0">
        <div className='absolute z-0 size-full top-0 m-auto overflow-hidden content-center bg-cover bg-[#171a1f] pt-40'>
          <Silk />
        </div>
          <div className="contenedor-sobre-mi">
            <h2 className="titulo-sobre-mi">
              <span className="palabra-sobre">SOBRE</span>
              <span className="palabra-mi">MI</span>
            </h2>
            <div className='button-container'>
              <Button/>
              <Button/>
              <Button/>
              <Button/>
            </div>
            

            <article className="texto-sobre-mi">
              <img src="src/imagenes/foto-perfil.png" alt="Foto de Asher Martínez" className="foto-perfil" />
              <img src="src/imagenes/puntos-sobre-mi.png" alt='Asher en codigo morse' className='puntos-nombre'/>
              <p>
                ¡Hola! Soy Asher Martínez, un desarrollador web apasionado 
                por crear experiencias digitales únicas y atractivas.
                Me especializo en el desarrollo front-end, utilizando tecnologías
                como React, JavaScript, HTML y CSS para construir interfaces
                de usuario modernas y responsivas.
              </p>
              <p>
                Mi objetivo es combinar diseño y funcionalidad para ofrecer
                soluciones web que no solo sean visualmente impresionantes,
                sino también intuitivas y fáciles de usar. Siempre estoy
                buscando aprender nuevas tecnologías y mejorar mis habilidades
                para mantenerme al día con las últimas tendencias en desarrollo web.
              </p>
              
            </article>
          </div>
        </section>
    </div>
    
  )
}

export default App
