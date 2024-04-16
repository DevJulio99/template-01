"use client";
import { getIcon } from "@/utils/utils";

export default function ContactUs() {

  return (
    <>
      <div className="py-[60px] px-[15px] flex justify-center xl:py-[100px]">
        <div className="w-full max-w-[726px] md:px-[15px] lg:max-w-[966px] lg:flex gap-[31px] xl:max-w-[1206px] xl:gap-[102px]">
          <div className="mb-[50px] lg:w-[614px] xl:w-[673px]">
            <h3 className="text-black_10 font-bold tracking-[.02em] text-2xl xl:text-[34px]">
              Contáctanos
            </h3>
            <div className="divider !mt-[30px]"></div>
            <p className="text-gray_10 mt-2.5 text-[18px] font-light leading-[1.6] xl:text-[19px]">
              Puedes contactarnos de la manera que te resulte más conveniente. Estamos disponibles las 24 horas del día, los 7 días de la semana, a través de nuestros números telefónicos, redes sociales y correo electrónico. También puedes utilizar el formulario de contacto rápido que aparece a continuación.
            </p>
            <form className="mt-5 md:flex flex-wrap justify-between">
              <div className="mb-5 w-full md:max-w-[333px] lg:max-w-[292px] xl:max-w-[321px]">
                <span className="pl-[21px] mb-[3px] text-[12px] text-xs leading-6 font-light tracking-[.02em] text-gray_10">
                  Nombres
                </span>
                <div className="rounded-[35px] bg-gray_5 py-[18px] px-[25px]">
                  <input
                    className="w-full bg-transparent text-black_10"
                    type="text"
                  />
                </div>
              </div>

              <div className="mb-5 w-full md:max-w-[333px] lg:max-w-[292px] xl:max-w-[321px]">
                <span className="pl-[21px] mb-[3px] text-[12px] text-xs leading-6 font-light tracking-[.02em] text-gray_10">
                  Apellidos
                </span>
                <div className="rounded-[35px] bg-gray_5 py-[18px] px-[25px]">
                  <input
                    className="w-full bg-transparent text-black_10"
                    type="text"
                  />
                </div>
              </div>

              <div className="mb-5 w-full md:max-w-[333px] lg:max-w-[292px] xl:max-w-[321px]">
                <span className="pl-[21px] mb-[3px] text-[12px] text-xs leading-6 font-light tracking-[.02em] text-gray_10">
                  Correo electrónico
                </span>
                <div className="rounded-[35px] bg-gray_5 py-[18px] px-[25px]">
                  <input
                    className="w-full bg-transparent text-black_10"
                    type="text"
                  />
                </div>
              </div>

              <div className="mb-5 w-full md:max-w-[333px] lg:max-w-[292px] xl:max-w-[321px]">
                <span className="pl-[21px] mb-[3px] text-[12px] text-xs leading-6 font-light tracking-[.02em] text-gray_10">
                  Celular
                </span>
                <div className="rounded-[35px] bg-gray_5 py-[18px] px-[25px]">
                  <input
                    className="w-full bg-transparent text-black_10"
                    type="text"
                  />
                </div>
              </div>

              <div className="mb-5 w-full">
                <span className="pl-[21px] mb-[3px] text-[12px] text-xs leading-6 font-light tracking-[.02em] text-gray_10">
                  Mensaje
                </span>
                <div className="rounded-[35px] bg-gray_5 py-[18px] px-[25px]">
                  <textarea className="w-full bg-transparent text-black_10 !h-[107px]" />
                </div>
              </div>
            </form>
            <button
              className="my-[20px] rounded-[35px] uppercase py-[9px] px-[23px] w-full 
          transition-all duration-[.25s] ease-linear btn-gradient text-white border-2 border-transparent 
          cursor-pointer text-[15px] font-medium tracking-[0.12em] max-w-[210px] text-sm h-[46px] md:h-[56px]"
            >
              Enviar mensaje
            </button>
          </div>

          <div className="flex flex-wrap justify-between lg:flex-1">
            <div className="w-full mb-[30px] max-w-[333px]">
              <h6 className="text-black_10 font-bold tracking-[.02em] text-[17px] leading-[1.5] md:text-[19px]">
                Dirección
              </h6>
              <hr className="mt-[13px]" />
              <div className="mt-[15px] flex">
                <span className="px-[6px] bg-linear">
                  {getIcon(20, "#0796c6", "location")}
                </span>
                <span className="text-gray_10 px-[6px] text-[15px] leading-[1.6] font-light">
                  Residencial Golf de Santa Clara, Mz 2i Lt 17 - Ate, Lima
                </span>
              </div>
            </div>
            <div className="w-full mb-[30px] max-w-[333px]">
              <h6 className="text-black_10 font-bold tracking-[.02em] text-[17px] leading-[1.5] md:text-[19px]">
                Teléfonos
              </h6>
              <hr className="mt-[13px]" />
              <div className="mt-[15px] flex">
                <span className="px-[6px] bg-linear">
                  {getIcon(20, "#0796c6", "phone")}
                </span>
                <span className="text-gray_10 px-[6px] text-[15px] leading-[1.6] font-light">
                  987205587
                </span>
              </div>
            </div>
            <div className="w-full mb-[30px] max-w-[333px] md:mb-0">
              <h6 className="text-black_10 font-bold tracking-[.02em] text-[17px] leading-[1.5] md:text-[19px]">
                E-mail
              </h6>
              <hr className="mt-[13px]" />
              <div className="mt-[15px] flex">
                <span className="px-[6px] bg-linear">
                  {getIcon(20, "#0796c6", "mailOpenFont")}
                </span>
                <span className="text-gray_10 px-[6px] text-[15px] leading-[1.6] font-light">
                  mail@gmail.com
                </span>
              </div>
            </div>
            <div className="w-full mb-[30px] max-w-[333px] md:mb-0">
              <h6 className="text-black_10 font-bold tracking-[.02em] text-[17px] leading-[1.5] md:text-[19px]">
                Horario de atención
              </h6>
              <hr className="mt-[13px]" />
              <div className="mt-[15px] flex">
                <span className="px-[6px] bg-linear">
                  {getIcon(20, "#0796c6", "calendarClock")}
                </span>
                <span className="text-gray_10 px-[6px] text-[15px] leading-[1.6] font-light">
                  Lunes a Sábado: 9:00 am – 6:00 pm
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <iframe src="https://www.google.com/maps/d/embed?mid=1-VlXsvMWMr8EotfMcIwYKt-1SrI&ll=-12.031106727415615%2C-76.88630290942494&z=19" width="100%" height="500px"></iframe>
    </>
  );
}
