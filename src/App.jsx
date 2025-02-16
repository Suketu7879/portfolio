import React from "react";
import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <>
      <div className="flex min-h-screen w-full subpixel-antialiased">
        <HeaderLeft />
        <main className="flex-[3]">
          <Home />
          <AboutMe />
          <Technologies/>
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default App;
