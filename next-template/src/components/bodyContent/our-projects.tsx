"use client";
if (typeof window !== undefined) {
   (window as any).$ = (window as any).jQuery = require("jquery");
}
import { testimonialsMock } from "@/mock/testimonials.mock";
import { getIcon } from "@/utils/utils";
import OwlCarousel from 'react-owl-carousel';
import { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function OurProjects() {
  const [numberShow, setNumberShow] = useState(1);
  const projects = [
    {
      description:
        "Desarrollamos aplicaciones web utilizando tecnologías como React, Angular, Vue, Next y Nuxt",
      img: "/images/gallery-01-project.jpg",
    },
    {
      description:
        "Maximizamos la eficiencia en el desarrollo web con C#, Java y con un diseño gráfico innovador",
      img: "/images/gallery-02-project.jpg",
    },
    {
      description:
        "Optimizamos la gestión de la información con bases de datos y sistemas web a medida",
      img: "/images/gallery-03-project.jpg",
    },
    {
      description:
        "Realzamos tu marca con páginas web y diseños gráficos llamativos",
      img: "/images/gallery-04-project.jpg",
    },
    {
      description:
        "Implementamos soluciones TI y aplicaciones con calidad y rendimiento sobresalientes",
      img: "/images/gallery-05-project.jpg",
    },
    {
      description:
        "Incrementamos la eficiencia con el uso de herramientas de Help Desk y optimización de bases de datos",
      img: "/images/gallery-06-project.jpg",
    },
  ];

  const testimonials = testimonialsMock;

  const news = [
    {
      date: "April 13, 2021 at 12:15 pm",
      title: "Google Rethinking Payday Loans & Doorway Pages?",
      img: "/images/home-1.jpg",
    },
    {
      date: "April 13, 2021 at 12:15 pm",
      title: "Benefits of Using Modern Promotion Technologies",
      img: "/images/home-2.jpg",
    },
    {
      date: "April 13, 2021 at 12:15 pm",
      title: "How Google Search Works in 2021",
      img: "/images/home-3.jpg",
    },
  ];

  const itemsShow = () => {
    let show = 1;
     if(window.innerWidth >= 768){
      show = 2
     }
     if(window.innerWidth >= 1200){
      show = 3
     }
     setNumberShow(show);
  }

  useEffect(() => {
    itemsShow();
    window.addEventListener("resize", () => {
      itemsShow();
    });
  }, []);
  return (
    <>
      <div id="proyectos" className="py-[60px] px-[15px] text-center flex justify-center xl:py-[100px]">
        <div className="w-full max-w-[726px] lg:max-w-[966px] xl:max-w-[1206px]">
          <div className="mb-[50px] md:mb-0">
            <h3 className="text-black_10 font-bold tracking-[.02em] text-2xl">
              Nuestra experiencia en proyectos
            </h3>
            <div className="divider !mt-[30px]"></div>
            <div className="w-full flex justify-center mt-[30px]">
              <div className="flex flex-wrap justify-between px-[15px]">
                {projects.map((x, index) => (
                  <div
                    key={index}
                    className="mb-[50px] md:max-w-[333px] lg:max-w-[292px] xl:max-w-[372px]"
                  >
                    <img
                      className="md:h-[380px]"
                      src={x.img}
                      alt={`project-img-${index + 1}`}
                    />
                    <span className="block text-green_10 mb-2.5 mt-[15px] md:text-start xl:text-xl">
                      {x.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className="mt-[18px] rounded-[35px] uppercase py-[9px] px-[23px] w-full 
          transition-all duration-[.25s] ease-linear btn-gradient text-white border-2 border-transparent 
          cursor-pointer text-[15px] font-medium tracking-[0.12em] max-w-[245px] md:max-w-[261px]  text-sm md:mt-0 h-[56px]"
          >
            Únete a nosotros como Cliente
          </button>
        </div>
      </div>

      <div className="py-[60px] px-[15px] text-center container-testimonials flex justify-center">
        <div className="w-full xl:max-w-[1206px]">
          <h3 className="text-white font-bold tracking-[.02em] text-2xl md:text-[28px] xl:text-[34px]">
            Testimonios
          </h3>
          <div className="divider !mt-[20px]"></div>
            <OwlCarousel className='owl-theme' loop margin={10}  responsive={
              {
                0:{
                  items:1,
                  nav: false
               },
               1024: {
                items: 2
               },
               1200: {
                items: 3
               }
              }
            }>
            {testimonials.map((x, index) => (
              <div key={index} className="lg:mr-[30px] text-white">
                <div className="mt-[40px] text-justify">
                  {getIcon(40, "#1cd8c9", "quoteLeft")}
                  <p className="mt-[25px] text-[18px] font-light md:text-[20px]">
                    {x.description}
                  </p>
                </div>
                <div className="flex mt-5">
                  <img className="!w-[80px] !w-[80px] rounded-full" src={x.img} alt="user" />
                  <div className="ml-5 text-start">
                    <p className="text-blue_5 font-normal text-[15px] md:text-[20px]">
                      {x.name}
                    </p>
                    <p className="font-normal text-gray_15 text-[15px]">
                      {x.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </OwlCarousel>
        </div>
      </div>

      <div className="py-[60px] px-[15px] text-center xl:py-[100px]">
        <h3 className="text-black_10 font-bold tracking-[.02em] text-2xl md:text-[28px] xl:text-[34px]">
          Latest News
        </h3>
        <div className="divider !mt-[20px]"></div>
        <div className="w-full flex justify-center">
          <div
            className="mt-[30px] flex flex-wrap gap-[50px] max-w-[726px] lg:max-w-[966px] xl:max-w-[1206px]
                          px-[15px] md:gap-0 justify-between md:gap-y-[50px] xl:gap-x-[30px]"
          >
            {news.map((x, index) => (
              <div
                key={index}
                className="w-full md:max-w-[333px] lg:max-w-[453px] xl:max-w-[371px]"
              >
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    className="w-full"
                    src={x.img}
                    alt={`img-home-${index + 1}`}
                  />
                  <div className="bg-transparent_black absolute top-0 w-full h-full flex items-center justify-center transition-all duration-[550ms] lg:opacity-0 hover:opacity-100">
                    <button
                      className="mt-[18px] rounded-[35px] uppercase py-[9px] px-[23px] w-full 
            transition-all duration-[.25s] ease-linear btn-gradient text-white border-2 border-transparent 
            cursor-pointer text-[15px] font-medium tracking-[0.12em] max-w-[151px] text-sm"
                    >
                      book now
                    </button>
                  </div>
                </div>
                <div className="mt-[25px]">
                  <div className="flex">
                    {getIcon(24, "#0796c6", "calendarDay")}
                    <span className="text-gray_10 px-[6px] text-[15px] font-light leading-[1.6]">
                      {x.date}
                    </span>
                  </div>
                  <h5 className="text-start mt-[12px] text-green_10 text-[19px] font-normal tracking-[.02em]">
                    {x.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="mt-[20px] rounded-[35px] uppercase py-[9px] px-[23px] w-full 
          transition-all duration-[.25s] ease-linear btn-gradient text-white border-2 border-transparent 
          cursor-pointer text-[15px] font-medium tracking-[0.12em] max-w-[257px] text-sm h-[46px] md:mt-[35px] md:h-[56px]
          md:max-w-[273px]"
        >
          view all blog posts
        </button>
      </div>

      <div className="py-[60px] px-[15px] text-center container-newsletter flex justify-center xl:py-[100px]">
        <div className="w-full max-w-[726px] md:px-[15px] md:flex justify-between lg:max-w-[966px] lg:items-center xl:max-w-[1206px]">
          <div className="md:w-[272px] md:text-start lg:w-[291px]">
            <h3 className="text-white font-bold tracking-[.02em] text-2xl md:text-[28px] xl:text-[34px]">
              Boletín informativo
            </h3>
            <div className="divider !mt-[20px]"></div>
            <p className="text-white tracking-[0.02em] text-[15px] font-light mb-[30px]">
              Manténgase al tanto de nuestras últimas noticias, actualizaciones
              y publicaciones. Ingresa tu correo electrónico y suscríbete a
              nuestro boletín informativo.
            </p>
          </div>

          <div
            className="mt-[10px] md:w-[333px] lg:flex relative items-center lg:m-0 lg:h-fit
                         lg:w-[372px] xl:w-[472px]"
          >
            <div className="w-full bg-gray_5 py-[12px] pl-[25px] pr-[18px] rounded-[35px] lg:pr-[168px]">
              <input
                className="bg-transparent w-full focus:outline-0 text-black_10"
                type="text"
                placeholder="Ingrese su email"
              />
            </div>
            <button
              className="mt-[15px] rounded-[35px] uppercase py-[9px] px-[23px] w-full 
          transition-all duration-[.25s] ease-linear btn-gradient text-white border-2 border-transparent 
          cursor-pointer text-[15px] font-medium tracking-[0.12em] max-w-[150px] text-sm h-[50px] md:max-w-[164px]
          lg:absolute lg:top-0 lg:right-0 lg:m-0"
            >
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
