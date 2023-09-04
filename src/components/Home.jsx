import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f] text-white" name="home">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold">Ares Clint</h1>
        <h2 className="text-3xl  sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a full-stack developer specializing in building (and occasionally
          designing ) exceptional digital experiences. Currently, I'm focused on
          building responsive web applications
        </p>
        <div>
          <button className=" group text-white border-2 flex px-6 py-3 my-2 items-center hover:bg-pink-600 hover:border-pink-600">
            view Work
            <span className="group-hover:rotate-180 duration-500 ">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
