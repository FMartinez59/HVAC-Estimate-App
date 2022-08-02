import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>
              Hello. I am Fernando Martinez Jr. It is wonderful to see you here.
              Please take your time and look around
            </p>
          </div>
          <div>
            <p>
              I have been working as a Lift Truck Operator for the past year and
              looking to change my career. I cannot say with 100% confidence
              where I see myself in five years or what my big career goal is.
              The world is changing rapidly, and I don’t have enough
              professional experience to be certain about such things. However,
              I know that I can provide a fresh take and an extraordinary
              approach to every project. I am always open to challenges and
              constructive feedback in order to improve my work and mindset on
              how I face day-to-day tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
