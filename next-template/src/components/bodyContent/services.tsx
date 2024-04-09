import { CardService } from "../cardService/card-service";
import { servicesMock } from "@/mock/services.mock";
import { getIcon } from "@/utils/utils";

export default function Services() {
  const services = servicesMock;
  return (
    <>
      <div className="py-[60px] px-[15px] text-center">
        <div className="mb-[50px]">
          <h3 className="text-black_10 font-bold tracking-[.02em] text-2xl">
            Pricing
          </h3>
          <div className="divider !mt-[20px]"></div>
          <div className="flex flex-wrap gap-[50px] mt-[30px]">
            {services.map((x, index) => (
              <CardService key={index} title={x.type} price={x.price}>
                {x.content.map((c, _index) => (
                  <div key={_index} className={`flex gap-[20px] ${_index == 0 ? '' : 'mt-[23px]'}`}>
                    {getIcon(20, "#0796c6", c.icon)}
                    <span className="text-black_10 text-[15px] leading-[1.6] font-light tracking-[0.02em]">
                      {c.description}
                    </span>
                  </div>
                ))}
              </CardService>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
