import Image from "next/image";
import "./banner.scss";

export default function Banner() {
  return (
    <div className="div-banner relative py-[60px] flex justify-center lg:py-[120px] xl:py-[130px]">
      <div className="text-center px-[15px] md:max-w-[604px] lg:max-w-[774px] xl:max-w-[594px]">
        <h1 className="text-white text-[34px] leading-[1.2] font-bold md:text-[42px] md:leading-[1.45] xl:text-[60px]">
          CODESTI
        </h1>
        <p className="text-white text-2xl tracking-[.02em] leading-[1.45] font-extralight md:text-[28px] xl:text-[34px]">
          Potenciamos tu negocio con soluciones en TI de alta calidad y al alcance de todos
        </p>
        <div className="divider md:!mt-[30px]"></div>
        <p className="text-white leading-[1.5] text-[19px] font-light mt-2.5">
          Nos enfocamos en brindar servicios de tecnología de la información,
          permitiéndote centrarte en hacer crecer tu negocio
        </p>
        <div className="flex flex-wrap gap-[30px] mt-[25px] justify-center">
          <button
            className="rounded-[35px] uppercase py-[9px] px-[30px] w-full 
          transition-all duration-[.25s] ease-linear bg-green_10 text-white border-2 border-transparent 
          cursor-pointer text-[15px] font-medium tracking-[0.12em] hover:bg-blue_10 md:w-[261px] lg:w-[273px]"
          >
            Consulta gratuita
          </button>
          <button
            className="rounded-[35px] uppercase py-[9px] px-[30px] w-full 
          transition-all duration-[.25s] ease-linear border-2 cursor-pointer text-white text-[15px] font-medium 
          tracking-[0.12em] hover:bg-blue_10 hover:border-transparent md:w-[210px] lg:w-[230px]"
          >
            Obtener más información
          </button>
        </div>
      </div>
    </div>
  );
}
