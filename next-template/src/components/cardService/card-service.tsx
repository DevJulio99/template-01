import './card-service.scss';
import { ReactNode } from "react";

export const CardService: React.FC<{ title: string, price: string, children?: ReactNode }> = ({ title, price, children }) => {
  return (
    <div className="w-full card-service rounded-[9px] overflow-hidden">
       <div className="px-2.5 py-[15px] text-white bg-green_10 text-[21px] leading-[1.35] font-bold">{title}</div>
       <div className="text-black_10 font-medium mt-[30px] text-[28px] tracking-[.02em]">
        <sup>$</sup>
        {price}
       </div>
       <button className="mt-[18px] rounded-[35px] uppercase py-[9px] px-[23px] w-full 
          transition-all duration-[.25s] ease-linear btn-gradient text-white border-2 border-transparent 
          cursor-pointer text-[15px] font-medium tracking-[0.12em] w-full max-w-[154px] text-sm">
            Solicitar
        </button>
        <div className="py-10 px-[27px]">
            {children}
        </div>
    </div>
  );
}
