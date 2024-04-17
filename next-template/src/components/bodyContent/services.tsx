import { CardService } from "../cardService/card-service";
import { servicesMock } from "@/mock/services.mock";
import { getIcon } from "@/utils/utils";
import ConsultaButton from "../consulta-whatsapp";

export default function Services() {
  const services = servicesMock;
  return (
    <>
      <div className="py-[60px] px-[15px] text-center">
        <div className="mb-[50px] md:mb-0">
          <h3 className="text-black_10 font-bold tracking-[.02em] text-2xl">
            Planes
          </h3>
          <div className="divider !mt-[20px]"></div>
          <div className="flex flex-wrap mt-[30px] justify-center">
            <div className="w-full flex flex-wrap gap-[50px] md:gap-0 justify-center xl:max-w-[1206px]">
              {services.map((x, index) => (
                <div
                  key={index}
                  className="md:px-[15px] w-full md:max-w-[363px] mb-[50px] lg:max-w-[453px] xl:max-w-[301px]"
                >
                  <CardService title={x.type} price={x.price}>
                    {x.content.map((c, _index) => (
                      <div
                        key={_index}
                        className={`flex gap-[20px] ${
                          _index == 0 ? "" : "mt-[23px]"
                        }`}
                      >
                        {getIcon(20, "#0796c6", c.icon)}
                        <span className="text-black_10 text-[15px] leading-[1.6] font-light tracking-[0.02em] lg:text-base xl:text-start">
                          {c.description}
                        </span>
                      </div>
                    ))}
                  </CardService>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container-consultation py-[60px] py-[100px]">
        <div className="px-[12px] flex justify-center">
          <div
            className="w-full text-center md:flex max-w-[736px] md:gap-[40px] md:px-[12px] 
                          lg:max-w-[966px] xl:max-w-[1206px] xl:justify-between"
          >
            <div className="md:text-start">
              <h3 className="text-2xl font-bold tracking-[.02em] md:text-[28px] xl:text-[34px]">
                ¿Estás en busca de consultoría especializada?
              </h3>
              <p className="mt-[20px] text-[18px] leading-[1.6] font-light md:text-[19px]">
                En Studio, nos especializamos en una amplia gama de servicios de
                outsourcing en desarrollo de software web, aplicaciones moviles,
                bases de datos y más, adaptados para satisfacer las necesidades
                específicas de tu empresa. ¡Contáctanos a través de WhatsApp y
                descubre cómo podemos ayudarte a alcanzar tus objetivos
                tecnológicos!
              </p>
            </div>
            <div className="px-[8px] md:flex items-center">
              {/* <button
                className="rounded-[35px] uppercase py-[9px] px-[30px] w-full 
          transition-all duration-[.25s] ease-linear border-2 cursor-pointer text-[18px] font-medium 
          tracking-[0.12em] hover:bg-blue_10 hover:border-transparent mt-[30px] max-w-[291px] h-[50px] md:h-[60px] 
           md:!px-[25px] md:py-[14px] md:w-[281px]"
              >
                Consulta gratuita
              </button> */}
              <ConsultaButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
