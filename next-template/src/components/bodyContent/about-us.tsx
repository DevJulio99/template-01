import { getIcon } from "@/utils/utils";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

export default function AboutUs() {
  const aboutServices = [
    {
      id: 1,
      title: "Desarrollo de Sistemas Web",
      description: `Creamos sistemas web a medida que proporcionan funcionalidades específicas y una experiencia de usuario excepcional, adaptados a las necesidades únicas de cada negocio.`,
      icon: "search",
    },
    {
      id: 2,
      title: "Aplicaciones Móviles",
      description: `Desarrollamos aplicaciones móviles innovadoras y de alta calidad para iOS y Android que ayudan a las empresas a conectarse y comprometerse con sus clientes de manera efectiva.`,
      icon: "lineUser",
    },
    {
      id: 3,
      title: "Consultoría TI",
      description: `Ofrecemos asesoramiento en tecnologías de la información para optimizar la infraestructura y los procesos de TI, garantizando un funcionamiento fluido y seguro de los sistemas empresariales.`,
      icon: "mailOutline",
    },
    {
      id: 4,
      title: "Estrategia y transformación digital",
      description: `Diseñamos estrategias digitales personalizadas para ayudar a las empresas a adaptarse y prosperar en el entorno digital actual, maximizando su potencial de crecimiento y eficiencia.`,
      icon: "star",
    },
    {
      id: 5,
      title: "Data Analytics",
      description: `Utilizamos análisis de datos para extraer información valiosa de grandes conjuntos de datos, proporcionando información útil para la toma de decisiones estratégicas.`,
      icon: "lineUser",
    },
    {
      id: 6,
      title: "Experiencia de usuario",
      description: `Diseñamos experiencias digitales intuitivas y atractivas que satisfacen las necesidades y expectativas de los usuarios, mejorando la interacción y la retención.`,
      icon: "lineUser",
    },
    {
      id: 7,
      title: "Diseño gráfico",
      description: `Creamos diseños visuales impactantes y cohesivos que reflejan la identidad de marca de una empresa y transmiten su mensaje de manera efectiva.`,
      icon: "lineUser",
    },
    {
      id: 8,
      title: "Páginas web",
      description: `Diseñamos y desarrollamos sitios web profesionales y responsivos que son visualmente atractivos, fáciles de navegar y optimizados para motores de búsqueda.`,
      icon: "lineUser",
    },
  ];
  return (
    <>
      <div className="py-[60px] px-[15px] text-center flex flex-wrap justify-center">
        <div className="mb-[50px] max-w-[454px] md:text-start lg:max-w-[614px]">
          <h3 className="text-black_10 font-bold tracking-[.02em] text-2xl md:text-[28px]">
            Bienvenido a SEOStudio
          </h3>
          <div className="divider !mt-[20px]"></div>
          <p className="font-light mt-2.5 text-black_10 tracking-[.02em] text-[19px] leading-[1.5]">
            Trabajamos en áreas tan diversas como consultoría de software,
            desarrollo web, aplicaciones móviles, marketing digital y diseño
            gráfico.
          </p>
          <p className="mt-[20px] tracking-[.02em] text-[15px] font-light text-gray_10 lg:text-base">
            Nuestro equipo de especialistas siempre ofrece resultados destacados
            combinando ideas creativas con nuestra vasta experiencia. Podemos
            ayudarte a construir una presencia sólida y significativa en línea,
            utilizando estrategias efectivas adaptadas a tus necesidades
            específicas.
          </p>
          <button
            className="mt-[25px] rounded-[35px] uppercase py-[9px] px-[30px] w-full 
          transition-all duration-[.25s] ease-linear bg-white text-black_10 border-2 border-white_10 
          cursor-pointer text-[15px] font-medium tracking-[0.12em] hover:bg-blue_10 max-w-[210px] hover:text-white lg:h-[56px] lg:max-w-[232px]"
          >
            Comenzar ahora
          </button>
        </div>
        <div className="w-full md:px-[15px]">
          <Image src={"/ipad.png"} fill alt="img-ipad" className="!relative" />
        </div>
      </div>
      <div className="py-[60px] px-[15px] bg-gray_5 flex justify-center">
        <div className="w-full flex flex-wrap justify-between max-w-[726px] md:px-[15px] lg:max-w-[966px]">
          {aboutServices.map((x, index) => (
            <article
              key={index}
              className="mb-[50px] px-[15px] md:max-w-[333px] lg:max-w-[453px]"
            >
              <div className="flex">
                <span className="mb-5">{getIcon(40, "#50e590", x.icon)}</span>
                <h6 className="ml-5 mb-5 mt-[8px] text-black_10 font-bold tracking-[.02em] text-[17px] md:text-[19px]">
                  {x.title}
                </h6>
              </div>
              <div className="mt-[2px] text-gray_10 font-light text-[15px] leading-[1.6] lg:text-base">
                {x.description}
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
