import Image from "next/image";
import "./banner.scss";

export default function Banner() {
  return (
    <div className="div-banner relative py-[60px]">
      <div className="text-center px-[15px]">
        <h1 className="text-[34px] leading-[1.2] font-bold">Impulsamos tu presencia digital</h1>
        <p className="text-2xl tracking-[.02em] leading-[1.45] font-extralight">Potencia tu negocio con nuestra experiencia y lleva tu presencia digital al siguiente nivel</p>
        <div className="divider"></div>
        <p className="leading-[1.5] text-[19px] font-light mt-2.5">
          Permítenos elevar la imagen de tu empresa en línea, brindándote la ventaja competitiva que necesitas para destacarte en tu sector
        </p>
        <div className="flex flex-wrap gap-[30px] mt-[25px]">
          <button className="rounded-[35px] uppercase py-[9px] px-[30px] w-full 
          transition-all duration-[.25s] ease-linear bg-green_10 text-white border-2 border-transparent 
          cursor-pointer text-[15px] font-medium tracking-[0.12em] hover:bg-blue_10">
            Consulta gratuita
          </button>
          <button className="rounded-[35px] uppercase py-[9px] px-[30px] w-full 
          transition-all duration-[.25s] ease-linear border-2 cursor-pointer text-[15px] font-medium 
          tracking-[0.12em] hover:bg-blue_10 hover:border-transparent">
            Obtener más información
          </button>
        </div>
      </div>
    </div>
  );
}
