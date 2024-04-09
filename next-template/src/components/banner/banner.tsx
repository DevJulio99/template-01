import Image from "next/image";
import "./banner.scss";

export default function Banner() {
  return (
    <div className="div-banner relative py-[60px]">
      <div className="text-center px-[15px]">
        <h1 className="text-[34px] leading-[1.2] font-bold">We Can Improve</h1>
        <p className="text-2xl tracking-[.02em] leading-[1.45] font-extralight">The Web Image Of Your Company</p>
        <div className="divider"></div>
        <p className="leading-[1.5] text-[19px] font-light mt-2.5">
          Every company owner wants to see his/her company in a leading position
          of the industry. We are ready to give your business such an advantage.
        </p>
        <div className="flex flex-wrap gap-[30px] mt-[25px]">
          <button className="rounded-[35px] uppercase py-[9px] px-[30px] w-full 
          transition-all duration-[.25s] ease-linear bg-green_10 text-white border-2 border-transparent 
          cursor-pointer text-[15px] font-medium tracking-[0.12em] hover:bg-blue_10">
            free consultation
          </button>
          <button className="rounded-[35px] uppercase py-[9px] px-[30px] w-full 
          transition-all duration-[.25s] ease-linear border-2 cursor-pointer text-[15px] font-medium 
          tracking-[0.12em] hover:bg-blue_10 hover:border-transparent">
            learn more
          </button>
        </div>
      </div>
    </div>
  );
}
