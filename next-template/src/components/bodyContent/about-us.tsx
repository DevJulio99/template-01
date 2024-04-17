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
      title: "Desarrollo de Aplicaciones Móviles",
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
    {
      id: 9,
      title: "Mantenimiento de Sistemas",
      description: `Proporcionamos servicios de mantenimiento continuo para asegurar el funcionamiento óptimo y la seguridad de los sistemas desarrollados.`,
      icon: "lineUser",
    },
    {
      id: 10,
      title: "Servicios de Help Desk",
      description: `Ofrecemos soporte técnico y atención al cliente especializada para resolver problemas y brindar asistencia rápida y efectiva a los usuarios.`,
      icon: "lineUser",
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
            <p className="font-light mt-2.5 text-black_10 tracking-[.02em] text-[19px] leading-[1.5]">
              Ofrecemos una amplia gama de servicios de outsourcing TI en áreas
              como desarrollo web, aplicaciones móviles, base de datos,
              consultoría de software, diseño gráfico y marketing digital.
            </p>
            <p className="mt-[20px] tracking-[.02em] text-[15px] font-light text-gray_10 lg:text-base">
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
