import React, { useState } from "react";

// localImports
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav
      id="navbar"
      className="w-full py-6 flex justify-between items-center navbar"
    >
      <img className="w-[124px] h-[32px]" src={logo} alt="logo" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((navLink, index) => (
          <li
            key={index}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-7"
            }`}
          >
            <a href={`#${navLink.id}`}>{navLink.title}</a>
          </li>
        ))}
      </ul>
      <div className={`sm:hidden flex flex-1 justify-end items-center`}>
        <img
          src={toggleMenu ? close : menu}
          alt={"nav_menu"}
          className={`w-[28px] h-[28px] object-contain cursor-pointer`}
          onClick={() => setToggleMenu((prev) => !prev)}
        />
        <div
          className={`${
            toggleMenu ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((navLink, index) => (
              <li
                key={index}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${navLink.id}`}>{navLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
