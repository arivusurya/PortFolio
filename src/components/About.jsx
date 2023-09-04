import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-200">
      <div className=" flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="font-bold text-4xl border-b-4 inline border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 ">
          <div className="sm:text-right text-4xl font-bold">
            <p className="">
              Hi I'm Ares , It's good to find you.Please take a look around
            </p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize creating software for
              client ranging from individual and small-business all the way to
              large corpration.what would you do if you had a software exprest
              at your finger tips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
