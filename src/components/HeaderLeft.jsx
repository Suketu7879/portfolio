import React from "react";
import {
  BiAnchor,
  BiCode,
  BiHome,
  BiInfoCircle,
  BiMailSend,
  BiRightArrowAlt,
} from "react-icons/bi";

const HeaderLeft = () => {
  return (
    <div className="md:w-[20%]">
      {/* navbar for medium devices */}
      <div className="min-h-screen top-0 hidden md:sticky md:flex items-center justify-center bg-fuchsia-900 text-white rounded-r-3xl">
        <ul className="flex flex-col gap-10">
          {["home", "about me", "technologies", "projects", "contact"].map(
            (item) => {
              return (
                <li
                  key={item}
                  className="flex items-center justify-start cursor-pointer font-medium transition-all duration-200 group sm:text-lg md:text-xl xl:text-3xl"
                >
                  <BiRightArrowAlt className="text-4xl -translate-x-5 opacity-0 transform transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 " />
                  <a
                    href={`#${item}`}
                    className="transition-all duration-200 hover:translate-x-3"
                  >
                    {item}
                  </a>
                </li>
              );
            }
          )}
        </ul>
      </div>
      {/* navbar for small devices */}
      <div className="fixed left-0 right-0 top-0 z-10 flex justify-evenly bg-fuchsia-600 p-5 text-white rounded-b-2xl md:hidden">
        <a href="#home" className="flex flex-col items-center justify-center">
          <BiHome className="text-2xl" />
          <span className="" text-xs>
            Home
          </span>
        </a>
        <a
          href="#about me"
          className="flex flex-col items-center justify-center"
        >
          <BiInfoCircle className="text-2xl" />
          <span className=" text-xs">About Me</span>
        </a>
        <a
          href="#technologies"
          className="flex flex-col items-center justify-center"
        >
          <BiAnchor className="text-2xl" />
          <span className=" text-xs">Technologies</span>
        </a>
        <a
          href="#projects"
          className="flex flex-col items-center justify-center"
        >
          <BiCode className="text-2xl" />
          <span className="" text-xs>
            Projects
          </span>
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center justify-center"
        >
          <BiMailSend className="text-2xl" />
          <span className="" text-xs>
            Contact
          </span>
        </a>
      </div>
    </div>
  );
};

export default HeaderLeft;
