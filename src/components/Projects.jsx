import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen w-full flex flex-col items-center gap-20 p-10 md:p-16 xl:px-32"
    >
      <h1 className="text-center text-5xl font-light">Projects</h1>

      {/* project card grid (responsive) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 ">
        {/* project cards */}

        <div className="relative text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-fuchsia-500 rounded-lg hover:bg-fuchsia-50 group">
          <h1 className="text-3xl font-semibold transition-all group-hover:text-gray-600">
            Quiz-API
          </h1>
          <p className="text-md text-gray-600">
            A Quiz API that provides random multiple-choice questions in JSON
            format. Each response includes a question, four answer options, and
            the correct answer. Built with a lightweight backend for fast and
            efficient data retrieval. Ideal for quiz apps, educational tools,
            and trivia games.
          </p>
          <a
            href="https://github.com/Suketu7879/Quiz-API"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-auto text-blue-500 hover:underline absolute bottom-3 left-3"
          >
            Source Code
          </a>
        </div>

        <div className="relative text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-fuchsia-500 rounded-lg hover:bg-fuchsia-50 group">
          <h1 className="text-3xl font-semibold transition-all group-hover:text-gray-600">
            Weather App
          </h1>
          <p className="text-sm text-gray-600">
            The Weather Forecast App is a responsive web application that
            provides real-time weather updates for any city worldwide. Built
            with ReactJS, Tailwind CSS, and RapidAPI, it displays temperature,
            humidity, wind speed, UV index, and detailed forecasts. Users can
            check sunrise, sunset, and precipitation chances with an intuitive
            UI. The app is hosted on Vercel and available here.
          </p>
          <a
            href="https://github.com/Suketu7879/weather-forecast"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-auto text-blue-500 hover:underline absolute bottom-3 left-3"
          >
            Source Code
          </a>
        </div>

        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-fuchsia-500 rounded-lg hover:bg-fuchsia-50 group">
          <h1 className="text-3xl font-semibold transition-all group-hover:text-gray-600">
            Bhagavad Gītā API
          </h1>
          <p className="text-sm text-gray-600">
            The Bhagavad Gītā is a dynamic platform built with HTML, CSS,
            JavaScript, Bootstrap, Node.js, Express, and MongoDB. It allows
            users to explore Gita verses, word meanings,and transliteration,
            with a smooth and interactive interface. The app supports
            personalized verse tracking. Designed for accessibility.
          </p>
        </div>

        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-fuchsia-500 rounded-lg hover:bg-fuchsia-50 group">
          <h1 className="text-3xl font-semibold transition-all group-hover:text-gray-600">
            Task-Manager
          </h1>
          <p className="text-sm text-gray-600">
            A secure and responsive task manager built with React, Node.js,
            Express, MongoDB, and JWT, allowing users to authenticate, manage
            tasks, and enhance productivity.
          </p>
        </div>

        {/* <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-fuchsia-500 rounded-lg hover:bg-fuchsia-200 group">
          <h1 className="text-3xl font-semibold transition-all group-hover:text-gray-900">
            Project Name
          </h1>
          <p className="text-sm text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            ducimus voluptatum eligendi accusamus adipisci minus incidunt
            tempora repellat quod vero dolor magnam blanditiis! Qui libero enim
            quaerat dolores quod architecto!
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
