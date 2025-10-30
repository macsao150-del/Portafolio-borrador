import React from 'react'
import './index.css' 
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useTranslation } from "react-i18next";

import medusa from './imagenes/medusa-principal.png'
import fragmentosdecristal from './imagenes/portafolio/fragmentos-de-cristal.png'
import plandeestudios from './imagenes/portafolio/plan-de-estudios.png'
import tablaperiodica from './imagenes/portafolio/tabla-periodica.png'


import LightRays from './components/LightRays.jsx';
import ScrollFloat from './components/ScrollFloat';
import GradientText from './components/GradientText';
import Card from './components/Card.jsx';
import CardCertificacion from './components/CardCertificacion.jsx';
import Toggle from './components/Toggle.jsx';
import Menu from './components/Menu.jsx';


function App() {
  const { t } = useTranslation();
  return (
    <div>
      <header class="header">
        <div class="logo">
          <img src="/src/imagenes/medusa-icono.png" alt="Medusa Icon" />
          <h1>ASHER MARTINEZ</h1>
        </div>
        <nav class="header-menu ">
          <ul>
            <li className='hidden lg:flex'>
              <a href="#seccion-principal" class="header-menu-item selected">{t("home")}</a>
            </li>
            <li className='hidden lg:flex'>
              <a href="#seccion-sobre-mi" class="header-menu-item selected">{t("about")}</a>
            </li>
            <li className='hidden lg:flex'>
              <a href="#seccion-proyectos" class="header-menu-item selected">{t("portfolio")}</a>
            </li>
            <button className='hidden lg:block'>
              <Toggle/>
            </button>
            <button className='lg:hidden'>
            <Menu/>
            </button>         
          </ul>
        </nav>  
      </header>

      <section id='seccion-principal' className="relative flex z-0 h-screen overflow-hidden items-center justify-center lg:max-h-none lg:h-screen">
        <div className="absolute z-0 h-screen lg:size-full">
          <LightRays />    
        </div>

        <div className ="relative z-20 flex flex-col rounded-xl lg:self-start items-center justify-center w-[80%] h-auto top-18 p-0 min-h-72 bg-none shadow-none 
                            lg:flex-row lg:items-center lg:h-60 lg:top-50 lg:min-h-0">

          <div className="flex flex-col z-30 items-center lg:pt-28 lg:m-0 gap-9">

            <h1 className="text-[#7ed4ff] font-[Goldman,sans-serif] font-bold text-[3.2rem] text-center leading-14
                lg:font-normal drop-shadow-[0_0_6px_#093d8a] lg:text-[4rem] lg:leading-none">
              <GradientText>
                ASHER MARTINEZ
              </GradientText>
            </h1>

            <h2 className="text-[#d9ecfb] font-bold text-[1.5rem] leading-9 mb-28 pt-3s
                text-center lg:text-[1.7rem] 
                font-[Bungee_Hairline,sans-serif]">{t("phrase")}
            </h2>
            
            <figure className="flex justify-center w-full">
              <img src={medusa} alt="Medusa flotante" className="lg:hidden medusa w-[75%] left-3 -top-32" />
            </figure>
          </div>
          <figure> 
            <img src={medusa} alt="Medusa flotante" className="medusa hidden left-10 -top-5 w-92 lg:block" />
          </figure>
        </div>        
      </section>

      <section className="relative flex-col z-0 lg:h-[550vh] h-[540vh] bg-[linear-gradient(-30deg,rgba(92,187,255,0)_3%,rgba(39,83,141,0.539)_8%,rgba(19,27,40,0.854)_53%,rgb(21,23,28)_70%)] justify-center overflow-hidden">
        <section id='seccion-sobre-mi' className="relative flex z-0 lg:h-[300vh] h-[230vh] justify-center overflow-hidden">       
        <div className='relative flex justify-center size-full '>

        <div className="relative flex flex-col z-10 self-center size-full
              lg:w-[86%] lg:h-[86%] lg:rounded-xl max-w-[1200px] items-center overflow-hidden">
          
          <div className="relative flex-col flex top-20 z-30 text-[0.5rem] h-auto w-[80%] lg:w-[50%] lg:top-20 lg:-left-40 rounded-xl
                text-[#d1d5db]">

            <img src="src/imagenes/foto-perfil.png" alt="Foto de Asher Martínez" 
                className="hidden md:block lg:block absolute lg:self-start lg:justify-end rounded-xl 
                  lg:w-[50%] md:w-[35%] md:right-0 h-auto lg:top-20 lg:-right-90 lg:z-40" />

            <h3 className='hidden lg:block relative lg:leading-16 leading-5 text-left z-40'>
              <ScrollFloat textClassName=" font-[Goldman,sans-serif] text-white"
                > {t("welcome")}
              </ScrollFloat>
              </h3>
              <h3 className='hidden lg:block relative block lg:leading-16 leading-5 text-left z-40'>
              <ScrollFloat textClassName="font-[Goldman,sans-serif] text-white"
                >Asher Martínez
              </ScrollFloat>
            </h3>

            <h3 className='lg:hidden relative block text-left z-40'>
              <ScrollFloat textClassName=" font-[Goldman,sans-serif] text-white"
                >{t("welcome_2")}
              </ScrollFloat>
              </h3>
              <h3 className='lg:hidden relative block -top-4 text-left z-40'>
              <ScrollFloat textClassName="font-[Goldman,sans-serif] text-white"
                >Soy Asher
              </ScrollFloat>
            </h3>
            <h3 className='lg:hidden relative block -top-8 text-left z-40'>
              <ScrollFloat textClassName="font-[Goldman,sans-serif] text-white"
                >Martínez
              </ScrollFloat>
            </h3>
            <img src="src/imagenes/foto-perfil.png" alt="Foto de Asher Martínez" 
                className="md:hidden lg:hidden relative self-center rounded-[7px] 
                  w-[80%] h-auto"/>
            

            <article className='relative block md:top-20 m-auto text-[1.2rem] top-10 leading-8 text-justify z-40'>
              <p>{t("description")}</p>  
            </article>
            
          </div>

          <div className="relative flex-col top-55 lg:top-70 z-30 text-[1rem] leading-7 h-auto w-[80%] lg:w-[90%] rounded-xl
                text-[#d1d5db]">
                        
            <h3 className='relative flex tracking-[0.3rem] font-[Goldman,sans-serif] text-[1.7rem] leading-9 text-left z-40'>
              {t("tools")}
            </h3>

            <hr className="relative flex top-5 border-white border-1" />
              
            <article className="relative top-10 z-30 text-[1rem] h-68 w-full rounded-xl
                      text-[#d1d5db]  ">
            </article>
          </div>
          <div className="relative flex-col top-55 lg:top-70 z-30 text-[1rem] leading-7 h-auto w-[80%] lg:w-[90%] rounded-xl
                text-[#d1d5db]">
                        
            <h3 className='relative flex tracking-[0.3rem] font-[Goldman,sans-serif] text-[1.7rem] leading-9 text-left z-40'>
              {t("language")}
            </h3>

            <hr className="relative flex top-5 border-white border-1" />
              
            <article className="relative top-10 z-30 text-[1rem] w-full space-y-4 p-4 rounded-xl text-white">
              <div>
                <p className="font-bold font-[Bungee_Hairline,sans-serif] mb-1">Español (Nativo)</p>
                <div className="w-full bg-gray-700 h-4 rounded-full">
                  <div className="bg-[#30b0ff] h-4 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>

                <div>
                  <p className="font-bold font-[Bungee_Hairline,sans-serif] mb-1">Inglés (A2-B1)</p>
                  <div className="w-full bg-gray-700 h-4 rounded-full">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                  </div>

                <div>
                  <p className="font-bold font-[Bungee_Hairline,sans-serif] mb-1">Italiano (A1)</p>
                  <div className="w-full bg-gray-700 h-4 rounded-full">
                    <div className="bg-[#634bff] h-4 rounded-full" style={{ width: "20%" }}></div>
                  </div>
                </div>
            </article>
          </div>
        </div>

        </div>
        </section>

        <section id='seccion-proyectos' className="relative flex z-0 lg:h-[300vh] h-[290vh] overflow-hidden">  
          <div className="top-0 relative flex flex-col z-10 self-center size-full items-center overflow-hidden">    

            <h2 className='relative lg:tracking-[0.2em] relative tracking-[0.1em] flex left-0 lg:top-50 top-38 font-[Goldman,sans-serif] lg:leading-16 lg:text-[5rem] text-[2.8rem] text-left'>
              <GradientText>
                {t("portfolio")}
              </GradientText>  
            </h2>

            <div className="relative lg:top-100 top-70 w-full h-auto flex flex-col items-center">
              <h3 className='relative flex lg:left-28 left-9 font-[Bungee_Hairline,sans-serif] self-start font-bold lg:text-[1.7rem] text-[1.5rem] leading-7 z-40'>
                {t("proyects")}
              </h3>
              <hr className="relative flex top-5 w-[82%] border-white border-[0.1px] lg:border" />

              <div className="relative top-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-2 gap-3 px-6 lg:px-15">
                <Card
                  image={fragmentosdecristal}
                  title="Fragmentos de cristal"
                  description="Pagina fan de Steven Universe sin fines de lucro"
                  website="https://mi-sitio.com"
                  github="https://github.com/usuario/mi-proyecto"
                />
                <Card
                  image={plandeestudios}
                  title="Plan de estudios"
                  description="Una aplicación moderna creada con React y TailwindCSS que muestra información dinámica desde una API."
                  website="https://mi-sitio.com"
                  github="https://github.com/usuario/mi-proyecto"
                />
                <Card
                  image={tablaperiodica}
                  title="Tabla periodica"
                  description="Una aplicación moderna creada con React y TailwindCSS que muestra información dinámica desde una API."
                  website="https://mi-sitio.com"
                  github="https://github.com/usuario/mi-proyecto"
                />
              </div>        
            </div>

            <div className="relative top-100 lg:top-150 w-full h-auto flex flex-col items-center">          
              <h3 className='relative flex lg:left-28 left-9 font-[Bungee_Hairline,sans-serif] self-start font-bold lg:text-[1.7rem] text-[1.5rem] leading-7 z-40'>
                {t("certifications")}
              </h3>

              <hr className="relative flex top-5 w-[82%] border-white border-[0.1px] lg:border" />
              
              <article className="relative top-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 px-6 lg:px-15 ">
                <CardCertificacion
                  image={fragmentosdecristal}
                  title="Fragmentos de cristal"
                  description="Pagina fan de Steven Universe sin fines de lucro"
                  website="https://mi-sitio.com"
                  github="https://github.com/usuario/mi-proyecto"
                />
                <CardCertificacion
                  image={fragmentosdecristal}
                  title="Fragmentos de cristal"
                  description="Pagina fan de Steven Universe sin fines de lucro"
                  website="https://mi-sitio.com"
                  github="https://github.com/usuario/mi-proyecto"
                /> 
                <CardCertificacion
                  image={fragmentosdecristal}
                  title="Fragmentos de cristal"
                  description="Pagina fan de Steven Universe sin fines de lucro"
                  website="https://mi-sitio.com"
                  github="https://github.com/usuario/mi-proyecto"
                /> 
              </article>
            </div> 
          </div>
        </section>
      </section>

      <footer className="relative z-10
        flex items-center justify-center w-full  lg:h-[60vh] bg-gradient-to-b from-[#1e2128] to-[#111318] text-gray-300 overflow-hidden">
        <div className='w-[90%] pt-10 h-[80%] flex flex-col justify-start '>

        <div className="absolute inset-0 opacity-20 "></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <h2 className="text-2xl font-[Goldman,sans-serif] text-white tracking-wide">
              Asher <span className="text-[#65e8ff]">Martínez</span>
            </h2>
            <p className="text-gray-400 text-sm">
              {t("phrase_footer")} ⋅˚₊‧ଳ‧₊˚⋅
            </p>

            <p className="text-gray-400 text-base mt-2">
              {t("contact_footer")}
            </p>

            <div className="flex gap-5 mt-5 md:mt-0 text-xl text-gray-400">
              <a href="#" className="hover:text-[#65d3ff]"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="hover:text-[#65d3ff]"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#" className="hover:text-[#65d3ff]"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" className="hover:text-[#65d3ff]"><i className="fa-solid fa-envelope"></i></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-5">General</h3>
            <ul className="lg:leading-6 leading-8 text-gray-400 text-sm">
              <li><a href="#seccion-principal" className="hover:text-blue-400">{t("home")}</a></li>
              <li><a href="#seccion-sobre-mi" className="hover:text-blue-400">{t("about")}</a></li>
              <li><a href="#seccion-proyectos" className="hover:text-blue-400">{t("portfolio_footer")}</a></li>
            </ul>
          </div>
        </div>


  <div className="relative z-10 border-t border-gray-700 lg:top-10 mt-12 pt-6 flex flex-col pb-10 md:flex-row justify-center items-center max-w-7xl mx-auto px-6">
    
    <p className="text-sm text-gray-500 text-center md:text-center">
      © {new Date().getFullYear()} {t("footer")}
    </p>
    
  </div>
  </div>
      </footer>
    </div>   
  )
}

export default App
