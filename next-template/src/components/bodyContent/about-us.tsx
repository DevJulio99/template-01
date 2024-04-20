import { getIcon } from "@/utils/utils";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

export default function AboutUs() {
  const aboutServices = [
    {
      id: 1,
      title: "Sistemas Web a Medida",
      description: `Diseñamos y desarrollamos sistemas web personalizados que se adaptan a las necesidades específicas de su negocio, brindando una experiencia de usuario excepcional y funcionalidades que impulsan sus objetivos.`,
      icon: "search",
    },
    {
      id: 2,
      title: "Aplicaciones Móviles Innovadoras",
      description: `Implementamos aplicaciones móviles de alta calidad para iOS y Android que le permiten interactuar de manera efectiva con sus clientes, fortalecer el compromiso y aumentar su competitividad.`,
      icon: "lineUser",
    },
    {
      id: 3,
      title: "Sitios Web Dinámicos y Adaptables",
      description: `Diseñamos y desarrollamos sitios web profesionales y responsivos que son visualmente atractivos, fáciles de navegar, optimizados para motores de búsqueda y generan conversiones.`,
      icon: "lineUser",
    },
    {
      id: 4,
      title: "Mantenimiento de Sistemas Confiable",
      description: `Brindamos servicios de mantenimiento continuo para garantizar el óptimo funcionamiento, la seguridad y el rendimiento de nuestros sistemas desarrollados, previniendo problemas y asegurando su tranquilidad.`,
      icon: "lineUser",
    },
    {
      id: 5,
      title: "Diseño Gráfico Impactante",
      description: `Creamos diseños visuales impactantes y cohesivos que reflejan la identidad de marca de una empresa y transmiten su mensaje de manera efectiva.`,
      icon: "lineUser",
    },
    {
      id: 6,
      title: "Servicios Help Desk de Calidad",
      description: `Ofrecemos soporte técnico especializado y atención al cliente de primer nivel para resolver problemas de manera rápida y efectiva, brindando a sus usuarios una experiencia positiva y satisfactoria.`,
      icon: "lineUser",
    },
    {
      id: 7,
      title: "Consultoría TI Especializada",
      description: `Le brindamos asesoría experta en tecnologías de la información para optimizar su infraestructura y procesos de TI, garantizando un funcionamiento fluido, seguro y eficiente de sus sistemas empresariales.`,
      icon: "mailOutline",
    },
    {
      id: 8,
      title: "Estrategia Digital para el Éxito",
      description: `Diseñamos estrategias digitales personalizadas que le ayudan a adaptarse y prosperar en el entorno digital actual, maximizando su potencial de crecimiento, eficiencia y rentabilidad.`,
      icon: "star",
    },
  ];
  return (
    <>
      <div className="py-[60px] px-[15px] text-center flex flex-wrap justify-center xl:py-[100px]">
        <div className="flex flex-wrap justify-center xl:w-[1206px] xl:justify-between">
          <div className="mb-[50px] max-w-[454px] md:text-start lg:max-w-[614px] xl:max-w-[502px]">
            <h3 className="text-black_10 font-bold tracking-[.02em] text-2xl md:text-[28px] xl:text-[34px]">
              Bienvenido a Studio
            </h3>
            <div className="divider !mt-[20px]"></div>
            <p className="font-light mt-2.5 text-black_10 tracking-[.02em] text-[19px] leading-[1.5] lg:text-justify">
              Ofrecemos una amplia gama de servicios de outsourcing TI en áreas
              como desarrollo web, aplicaciones móviles, base de datos,
              consultoría de software, diseño gráfico y marketing digital.
            </p>
            <p className="mt-[20px] tracking-[.02em] text-[15px] font-light text-gray_10 lg:text-base lg:text-justify">
              Nuestra organización se distingue por contar con profesionales
              experimentados y versátiles en diversas tecnologías, desde React,
              Angular, Vue, base de datos y lenguajes de programación como C# y
              Java, entre otros. Además, nos mantenemos actualizados con las
              últimas tendencias y tecnologías del mercado, garantizando que su
              empresa tenga acceso a las herramientas más avanzadas para
              alcanzar sus objetivos tecnológicos y comerciales.
            </p>
            <button
              className="mt-[25px] rounded-[35px] uppercase py-[9px] px-[30px] w-full 
          transition-all duration-[.25s] ease-linear bg-white text-black_10 border-2 border-white_10 
          cursor-pointer text-[15px] font-medium tracking-[0.12em] hover:bg-blue_10 max-w-[210px] hover:text-white lg:h-[56px] lg:max-w-[232px]"
            >
              Comenzar ahora
            </button>
          </div>
          <div className="w-full md:px-[15px] xl:w-[603px]">
            <Image
              src={"/ipad.png"}
              fill
              alt="img-ipad"
              className="!relative"
            />
          </div>
        </div>
      </div>
      <div className="py-[60px] px-[15px] bg-gray_5 flex justify-center xl:py-[100px]">
        <div className="w-full flex flex-wrap justify-between xl:justify-start max-w-[726px] md:px-[15px] lg:max-w-[966px] xl:max-w-[1206px] xl:px-0">
          {aboutServices.map((x, index) => (
            <article
              key={index}
              className="mb-[50px] px-[15px] md:max-w-[333px] lg:max-w-[453px] xl:max-w-[301px]"
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
