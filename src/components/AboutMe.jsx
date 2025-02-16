import React from "react";

const AboutMe = () => {
  return (
    <div
      id="about me"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-20 p-14 md:p-20 lg:p-36"
    >
      <h1 className="text-center text-5xl font-light">About Me</h1>
      <div className="flex flex-wrap gap-0 md:flex-nowrap md:gap-10">
        <div className="flex">
          <div className="relative space-y-1 border-l-1 pl-2 border-gray-300 md:pl-6 text-left">
            {/* <h3 className="text-lg font-semibold md:text-xl ">Exp 1</h3>
            <p className="font-light text-lg text-gray-600">Job Title</p> */}
            <p className="md:text-lg text-md text-gray-400">
              I am a dedicated and versatile full stack developer with a passion
              for creating efficient and user-friendly web applications. My
              journey in web development began with a deep curiosity for how
              things work, and it has evolved into a career where I continuously
              strive to learn and adapt to new challenges.I have worked with a
              variety of technologies, including HTML, CSS, JS, React, Node.js,
              MySQL, and MongoDB. I thrive in collaborative environments and
              enjoy solving complex problems to deliver high-quality solutions.
              Outside of coding, I enjoy staying active, exploring new
              technologies, and contributing to open-source projects.I am
              constantly learning and staying up-to-date with the latest
              technologies to enhance my development skills. I am passionate
              about problem-solving and enjoy collaborating on innovative
              projects that challenge me to grow.
            </p>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default AboutMe;
