import React from "react";
import photo from "../assets/photo.jpg";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

const Home = () => {
  return (
    <div
      id="home"
      className="flex min-h-screen w-full items-center justify-center"
    >
      <div className="flex flex-col lg:flex-row md:gap-36 items-center justify-center gap-14 p-5 text-center md:text-9xl">
        <img
          src={photo}
          alt="photo"
          className="w-[250px] sm:w-[300px] mt-20 md:mt-0 rounded-full"
        />
        <div className="space-y-4 sm:space-y-5">
          <h1 className="bg-gradient-to-r from-fuchsia-400 to-fuchsia-600 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl">
            Suketu Rola
          </h1>
          <h3 className="bg-gradient-to-r from-fuchsia-400 to-fuchsia-600 bg-clip-text text-xl font-semibold text-transparent md:text-2xl lg:text-3xl">
            Full Stack Developer
          </h3>
          <p className="max-w-[500px] text-lg text-gray-400 text-start">
            I am a full stack developer with a knack for crafting robust and
            scalable web applications. With hands-on experience, I have honed my
            skills in front-end technologies like React ,HTML ,CSS and JS, as
            well as backend technologies like Node.js,Exprss.js, MySQL, MongoDB
            and Postman. My goal is to leverage my expertise to create
            innovative solutions that drive business growth and deliver
            exceptional user experiences.
          </p>

          {/* social media logos */}
          <div className="flex justify-center gap-3 px-auto">
            <a href="https://github.com/Suketu7879" target="_blank">
              <BiLogoGithub className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-fuchsia-600 p-2 teaxt white transition-all duration-200 hover:scale-110 hover:border-fuchsia-600 hover:bg-white hover:text-fuchsia-600 md:h-12 md:w-12" />
            </a>
            <a
              href="https://www.linkedin.com/in/suketu-rola-b3686a297/"
              target="_blank"
            >
              <BiLogoLinkedin className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-fuchsia-600 p-2 teaxt white transition-all duration-200 hover:scale-110 hover:border-fuchsia-600 hover:bg-white hover:text-fuchsia-600 md:h-12 md:w-12" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
