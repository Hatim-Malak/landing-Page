import React from "react";
import Navbar from "../components/Navbar.jsx";
import Spline from "@splinetool/react-spline";

const HomePage = () => {
  return (
    <div className="z-20 absolute top-0 flex flex-col justify-center items-center left-0 font-bold w-full h-screen">
      <div className="w-full flex justify-center items-center">
        <Navbar />
      </div>
      <div className="flex w-full h-[calc(100vh-90px)]">
        <div className="w-[50%] flex flex-col justify-center items-center">
          <div className="flex gap-5 flex-col justify-center items-start">
            <h1 className="text-5xl text-white font-bold">Hi, Welcome to</h1>
            <h1 className=" text-7xl font-bold text-purple-500">
              Echelon Dev Society
            </h1>
            <p className="text-4xl text-white font-semibold">
              Driven by curiosity, powered by code
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-center items-start">
          <Spline scene="https://prod.spline.design/mpyCYatHMjWLmBmL/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
