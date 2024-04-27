"use client";
import { getIcon } from "@/utils/utils";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showBack, setShowBack] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const options = [
    "home",
    "sobre nosotros",
    "servicios",
    "nuestro equipo",
    "proyectos",
    "contacto",
  ];

  const smoothScrollTo = (target: any) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", () => {
      handleResize();
    });
  }, []);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  const handle = () => {
    open ? closeHandle() : openHandle();
  };

  const openHandle = () => {
    setShowBack((prev) => !prev);
    setTimeout(() => {
      setOpen((prev) => !prev);
    }, 0);
  };
  const closeHandle = () => {
    setOpen((prev) => !prev);
    setTimeout(() => {
      setShowBack((prev) => !prev);
    }, 200);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="nav"
      className="fixed z-10 w-full h-[56px] lg:h-[74px] bg-white text-black flex items-center shadow-[0_0_12px_1px_rgba(0,0,0,0.25)]"
    >
      <div className="relative w-full h-full">
        <div className="w-full flex items-center h-full justify-between">
          <div className="flex items-center">
            {!isDesktop ? (
              <span className="px-[6px] cursor-pointer" onClick={handle}>
                {getIcon(40, "#25252c", "hamburger")}
              </span>
            ) : null}
            {/* <span className="text-xl pl-[6px] font-bold flex items-center gap-5">
              <p>{getIcon(40, "#0796c6", "miniComputer")}</p>
              <p>Template</p>
            </span> */}
            <div className="text-xl pl-[6px] font-bold gap-5">
              <img className="w-[150px] h-auto" src="../../../codesti.svg" alt="codesti-logo"/>
            </div>
          </div>
          {isDesktop ? (
            <div className="h-full">
              <ul className="flex h-full">
                {options.map((x, index) => (
                  <li
                    className="relative flex items-center mx-5 lg:text-sm xl:text-base uppercase 
                tracking-[.02em] font-semibold before:content-[''] before:absolute before:h-[3px] 
                before:bg-[#50e590] before:bottom-0 before:right-[100%] before:left-0 
                before:transition-all before:duration-[250ms] before:opacity-100 transition-all 
                duration-[250ms] hover:before:right-0 hover:text-green_10 cursor-pointer"
                    key={index}
                  >
                    {x === "home" ? (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToTop();
                        }}
                      >
                        {x}
                      </a>
                    ) : x === "sobre nosotros" ? (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          smoothScrollTo("bienvenido");
                        }}
                      >
                        {x}
                      </a>
                    ) : x === "servicios" ? (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          smoothScrollTo("servicios");
                        }}
                      >
                        {x}
                      </a>
                    ) : x === "nuestro equipo" ? (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          smoothScrollTo("equipo");
                        }}
                      >
                        {x}
                      </a>
                    ) : x === "proyectos" ? (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          smoothScrollTo("proyectos");
                        }}
                      >
                        {x}
                      </a>
                    ) : x === "contacto" ? (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          smoothScrollTo("contacto");
                        }}
                      >
                        {x}
                      </a>
                    ) : (
                      <span>{x}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
        {showBack && !isDesktop ? (
          <div className="fixed w-full">
            <div
              className="w-full h-full fixed bg-transparent_black"
              onClick={handle}
            ></div>
            <div
              className={`z-10 w-[270px] bg-white h-screen py-2 shadow-[0_0_12px_1px_rgba(0,0,0,0.25)] transition-all 
                 duration-[0.35s] ${
                   open ? "translate-x-[0]" : "translate-x-[-120%]"
                 }`}
            >
              {options.map((x, index) => (
                <span
                  key={index}
                  className="block w-full py-[11px] px-4 uppercase font-semibold
                         tracking-[.02em] cursor-pointer hover:bg-green_10 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    handle();
                    if(x === 'home'){
                      scrollToTop();
                      return
                    }
                    if(x === 'sobre nosotros'){
                      smoothScrollTo('bienvenido');
                      return
                    }
                    if(x === 'nuestro equipo'){
                      smoothScrollTo('equipo');
                      return
                    }
                    smoothScrollTo(x);
                  }}
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
