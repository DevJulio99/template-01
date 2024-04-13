import { getIcon } from "@/utils/utils";

export default function Footer() {
  return (
    <div className="py-5 bg-gray_5">
      <div className="mb-[15px] flex flex-wrap justify-center">
        <span className="px-[6px]"> {getIcon(20, "#c2c2c3", "facebook")}</span>
        <span className="px-[6px]"> {getIcon(20, "#c2c2c3", "twitter")}</span>
        <span className="px-[6px]"> {getIcon(20, "#c2c2c3", "instagram")}</span>
        <span className="px-[6px]"> {getIcon(20, "#c2c2c3", "gmail")}</span>
        <span className="px-[6px]"> {getIcon(20, "#c2c2c3", "linkedin")}</span>
      </div>
      <div className="text-center">
        <span className="text-gray_10 tracking-[0.02em] font-light text-[15px]">© 2024 All Rights Reserved</span>
      </div>
    </div>
  );
}
