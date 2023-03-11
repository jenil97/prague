import React, { useState, useEffect } from "react";

// import header data
import Logo from "../assets/Header/logo-white.png";
import { navData } from "../data";

// import components
import Socials from "./Socials";

// import icons
import { TiThMenuOutline } from "react-icons/ti";
const { items } = navData;

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "h-[90px] lg:h-[90px] shadow-lg" : "h-[100px] lg:h-[100px]"
      }  bg-black fixed left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div className="flex justify-between items-center h-full pl-[10px] pr-[60px]">
        {/* logo */}
        <a href="/">
          <img
            className="md:w-[140px] md:h-[42px] w-[130px] h-[42px]"
            src={Logo}
            alt=""
          />
        </a>
        {/* nav - initially is hidden - show on desktop*/}
        <div className="hidden xl:flex text-gray-300 uppercase font-oswald text-lg">
          <ul className="flex gap-x-[50px]">
            {items.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    className="hover:text-white transition duration-300"
                    href={item.href}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* nav menu btn - is showing by default - hidden on desktop mode */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="xl:hidden absolute right-[5%] p-2 rounded-md cursor-pointer"
        >
          <TiThMenuOutline className="text-3xl text-white" />
        </div>
        {/* nav mobile - is showing by default - hidden on desktop mode */}
        <div
          className={`${navMobile ? "max-h-full" : "max-h-0 overflow-hidden"} ${
            isActive
              ? "top-[90px] lg:top-[110px]"
              : "top-[100px] lg:top-[100px]"
          } fixed left-0 -z-10 w-full h-full bg-black text-white transition-all duration-300`}
        >
          <nav className="w-full h-full flex flex-col justify-evenly overflow-hidden">
            <ul className="flex flex-col justify-center items-center gap-y-7 py-6">
              {items.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className="text-2xl font-oswald uppercase"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div>
              <Socials />
            </div>
          </nav>
        </div>
        {/* social icons - initially hidden - is showing on desktop mode */}
        <div className="hidden xl:flex text-white">
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
