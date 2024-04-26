"use client";
import Carousel from "react-elastic-carousel";
import { getIcon } from "@/utils/utils";
import { useEffect, useState } from 'react';

export default function OurTeam() {
  const [numberShow, setNumberShow] = useState(1);
  const [active, setActive] = useState(0);
  const team = [
    {
      name: "Julio Limachi",
      position: "Founder, CEO",
      img: "/images/julio_limachi.jpg",
    },
    {
      name: "Carlos Dávila",
      position: "Backend Developer",
      img: "/images/carlos_davila.jpg",
    },
    {
      name: "Marlon Orihuela",
      position: "Developer & Help Desk",
      img: "/images/marlon_orihuela.jpg",
    },
    {
      name: "Brenda Lopez",
      position: "Senior Designer",
      img: "/images/team-02.jpg",
    },
    {
      name: "Joe Myers",
      position: "Office Manager",
      img: "/images/team-01.jpg",
    },
    {
      name: "Ronald Chen",
      position: "President, Owner",
      img: "/images/team-05.jpg",
    }
  ];

  useEffect(() => {
    itemsShow();
    window.addEventListener("resize", () => {
      itemsShow();
    });
  }, []);

  const itemsShow = () => {
    let show = 1;
     if(window.innerWidth >= 768){
      show = 2
     }
     if(window.innerWidth >= 1200){
      show = 3
     }
     setNumberShow(show);
  }

  return (
    <>
      <div id="equipo" className="py-[60px] flex justify-center xl:py-[100px]">
        <div className="w-full text-center xl:max-w-[1206px]">
          <h3 className="text-black_10 font-bold tracking-[.02em] text-2xl md:text-[28px] xl:text-[34px]">
            Nuestro equipo
          </h3>
          <div className="divider !mt-[30px] mb-[40px]"></div>
          <Carousel
            itemsToShow={numberShow}
            pagination={numberShow == 2 || numberShow == 1}
            enableAutoPlay={true}
            showArrows={numberShow == 3}
            initialFirstItem={active}
            onChange={(v) => {
              // console.log('value', v);
              v.index === 3 && setActive(0);
            }}
          >
            {team.map((x, index) => (
              <div key={index} className="w-full flex flex-wrap justify-center">
                <div className="w-full flex justify-center">
                  <img
                    className="rounded-full w-[270px] h-[270px]"
                    src={x.img}
                    alt={`team${index + 1}`}
                  />
                </div>
                <div className="mt-[22px]">
                  <h5 className="text-blue_10 font-normal text-[19px]">
                    {x.name}
                  </h5>
                  <p className="text-gray_10 text-[18px] font-light">
                    {x.position}
                  </p>
                  <div className="mt-[15px] flex justify-center">
                    <span className="px-[6px]">
                      {getIcon(20, "#c2c2c3", "facebook")}
                    </span>
                    <span className="px-[6px]">
                      {getIcon(20, "#c2c2c3", "twitter")}
                    </span>
                    <span className="px-[6px]">
                      {getIcon(20, "#c2c2c3", "instagram")}
                    </span>
                    <span className="px-[6px]">
                      {getIcon(20, "#c2c2c3", "gmail")}
                    </span>
                    <span className="px-[6px]">
                      {getIcon(20, "#c2c2c3", "linkedin")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* <button className="bg-green_10" onClick={() => setActive(0)}>click</button> */}

      <div className="team-notice flex justify-center">
        <div className="w-full px-[12px] md:max-w-[696px] lg:max-w-[936px]">
          <p className="text-center">
            <span className="ticket-notice"> Hot!</span>
            <strong className="mr-[5px] text-[18px] md:text-[19px]">
              Codesti
            </strong>
            <span className="font-light text-[18px] md:text-[19px]">
              es tu elección en el mundo del desarrollo y servicios de
              outsourcing de TI.
            </span>
            <strong className="text-[18px] md:text-[19px]">
              ¡Contáctanos ahora!
            </strong>
          </p>
        </div>
      </div>
    </>
  );
}
