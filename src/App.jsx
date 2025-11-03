import React from 'react'
import './index.css' 
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useTranslation } from "react-i18next";

import iconoMedusa from './imagenes/medusa-icono.png'
import medusa from './imagenes/medusa-principal.png'
import perfil from './imagenes/foto-perfil.png'
import fragmentosdecristal from './imagenes/proyectos/fragmentos-de-cristal.png'
import plandeestudios from './imagenes/proyectos/plan-de-estudios.png'
import tablaperiodica from './imagenes/proyectos/tabla-periodica.png'
import certificadoHTMLEssencials from './imagenes/certificados/HTML-Essentials.jpg'
import certificadoConcienciaDigital from './imagenes/certificados/conciencia-digital.jpg'
import certificadoFundamentosRedes from './imagenes/certificados/fundamentos-redes.jpg'

import LightRays from './components/LightRays.jsx';
import ScrollFloat from './components/ScrollFloat';
import GradientText from './components/GradientText';
import Card from './components/Card.jsx';
import CardCertificacion from './components/CardCertificacion.jsx';
import Menu from './components/Menu.jsx';
import LanguageSwitcher from './components/LanguageSwitcher.jsx'
import DownloadCVButton from "./components/DownloadCVButton";
import Footer from "./components/Footer.jsx";
import Skills from "./components/Skills";


function App() {
  const { t } = useTranslation();
  return (
    <div>
      <header class="header">
        <a href="#seccion-principal" class="logo">
          <img src={iconoMedusa} alt="Medusa Icon" />
          <span>ASHER MARTINEZ</span>
        </a>
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
            <li className='hidden lg:flex'>
              <a href="#footer" class="header-menu-item selected">{t("contact_me")}</a>
            </li>
            <button>
              <LanguageSwitcher/>
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

      <section className="relative flex-col z-0 lg:h-[570vh] md:h-[350vh] w-full h-[600vh] bg-[linear-gradient(-30deg,rgba(92,187,255,0)_3%,rgba(39,83,141,0.539)_8%,rgba(19,27,40,0.854)_53%,rgb(21,23,28)_70%)] justify-center overflow-hidden">
        <section id='seccion-sobre-mi' className="relative flex top-10 z-0 lg:h-[300vh] md:h-[130vh] h-[260vh] justify-center ">       
        <div className='relative flex justify-center size-full '>

        <div className="relative flex flex-col z-10 size-full
              lg:w-[86%] lg:h-[86%] lg:rounded-xl max-w-[1200px] items-center">
          
          <div className="relative flex-col flex top-20 z-30 text-[0.5rem] h-auto w-[80%] lg:w-[50%] lg:top-20 lg:-left-40 rounded-xl
                text-[#d1d5db]">

            <img src={perfil} alt="Foto de Asher Martínez" 
                className="hidden md:block lg:block absolute lg:self-start lg:justify-end rounded-xl 
                  lg:w-[50%] md:w-[35%] md:right-0 h-auto lg:top-20 lg:-right-90 lg:z-40" />

            <h3 className='lg:text-6xl md:w-100 md:text-[4rem] text-5xl font-[Goldman,sans-serif] text-white lg:block relative md:leading-16 lg:leading-19 leading-12 lg:text-left z-40 mb-10'>
              {t("welcome")} Asher Martínez Alcaraz
            </h3>
            
            <img src={perfil} alt="Foto de Asher Martínez" 
                className="md:hidden lg:hidden relative self-center rounded-[7px] 
                  w-[80%] h-auto"/>

            <article className='relative flex mt-11 lg:-mt-10 lg:mb-20 text-[1.2rem] leading-8 text-justify z-40'>
              <p>{t("description")}</p>  
            </article>
            <DownloadCVButton/>
            
          </div>

          <div className="relative flex-col top-55 lg:top-70 z-30 text-[1rem] leading-7 h-auto w-[80%] lg:w-[90%] rounded-xl
                text-[#d1d5db]">
                        
            <h3 className='relative flex tracking-[0.3rem] font-[Goldman,sans-serif] text-[1.7rem] leading-9 text-left z-40'>
              {t("tools")}
            </h3>

            <hr className="relative flex top-5 border-white border" />
              
            <article className="relative top-10 ">
              <Skills></Skills>
            </article>
          </div>
          <div className="relative flex-col top-55 lg:top-70 z-30 text-[1rem] leading-7 h-auto w-[80%] lg:w-[90%] rounded-xl
                text-[#d1d5db]">
                        
            <h3 className='relative flex tracking-[0.3rem] font-[Goldman,sans-serif] text-[1.7rem] leading-9 text-left z-40'>
              {t("language")}
            </h3>

            <hr className="relative flex top-5 border-white border" />
              
            <article className="relative top-10 z-30 text-[1rem] w-full space-y-4 p-4 rounded-xl text-white">
              <div>
                <p className="font-bold font-[Bungee_Hairline,sans-serif] mb-1">{t("spanish")}</p>
                <div className="w-full bg-gray-700 h-4 rounded-full">
                  <div className="bg-[#30b0ff] h-4 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>

                <div>
                  <p className="font-bold font-[Bungee_Hairline,sans-serif] mb-1">{t("english")}</p>
                  <div className="w-full bg-gray-700 h-4 rounded-full">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                  </div>

                <div>
                  <p className="font-bold font-[Bungee_Hairline,sans-serif] mb-1">{t("italian")}</p>
                  <div className="w-full bg-gray-700 h-4 rounded-full">
                    <div className="bg-[#634bff] h-4 rounded-full" style={{ width: "20%" }}></div>
                  </div>
                </div>
            </article>
          </div>
        </div>

        </div>
        </section>

        <section id='seccion-proyectos' className="relative flex z-0 lg:h-[300vh] h-[260vh]">  
          <div className="top-100 lg:top-0 relative flex flex-col z-10 self-center size-full items-center ">    

            <h2 className='relative lg:tracking-[0.2em] tracking-widest flex left-0 lg:top-50 top-28 font-[Goldman,sans-serif] lg:leading-16 lg:text-[5rem] text-[2.5rem] text-left'>
              <GradientText>
                {t("portfolio")}
              </GradientText>  
            </h2>

            <div className="relative lg:top-100 top-50 w-full h-auto flex flex-col items-center">
              <h3 className='relative flex font-[Goldman,sans-serif] tracking-widest lg:text-[1.7rem] text-[1.3rem] z-40'>
                {t("proyects")}
              </h3>
              <hr className="relative flex top-1 w-[75%] border-white border-[0.1px] lg:border" />

              <div className="relative top-10 z-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-2 gap-3 px-6 lg:px-15">
                <Card
                  image={fragmentosdecristal}
                  title={t("fragmentos_de_cristal")}
                  description={t("fragmentos_de_cristal_des")}
                  website="https://mi-sitio.com"
                  github="https://github.com/usuario/mi-proyecto"
                />
                <Card
                  image={plandeestudios}
                  title={t("plan_de_estudios")}
                  description={t("plan_de_estudios_des")}
                  website="https://mi-sitio.com"
                  github="https://github.com/usuario/mi-proyecto"
                />
                <Card
                  image={tablaperiodica}
                  title={t("tabla_periodica")}
                  description={t("tabla_periodica_des")}
                  website="https://mi-sitio.com"
                  github="https://github.com/usuario/mi-proyecto"
                />
              </div>        
            </div>

            <div className="relative top-70 lg:top-150 w-full h-auto flex flex-col items-center">          
              <h3 className='relative flex font-[Goldman,sans-serif] tracking-widest lg:text-[1.7rem] text-[1.3rem] leading-7 z-40'>
                {t("certifications")}
              </h3>

              <hr className="relative flex top-2 w-[75%] border-white border-[0.1px] lg:border" />
              
              <article className="relative z-10 top-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 px-6 lg:px-15 ">
                <CardCertificacion
                  image={certificadoHTMLEssencials}
                  title="HTML Essentials"
                  website="https://mi-sitio.com"
                  github="https://github.com/usuario/mi-proyecto"
                />
                <CardCertificacion
                  image={certificadoConcienciaDigital}
                  title="Conciencia Digital"
                  description="Pagina fan de Steven Universe sin fines de lucro"
                  website="https://mi-sitio.com"
                  github="https://github.com/usuario/mi-proyecto"
                /> 
                <CardCertificacion
                  image={certificadoFundamentosRedes}
                  title="Fundamentos de Redes: CCNA: Introduction to Networks"
                  description="Pagina fan de Steven Universe sin fines de lucro"
                  website="https://mi-sitio.com"
                  github="https://github.com/usuario/mi-proyecto"
                /> 
              </article>
            </div> 
          </div>
        </section>
      </section>

      <footer id='footer'>
        <Footer></Footer>
      </footer>
    </div>   
  )
}

export default App
