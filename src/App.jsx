import React from "react";
import DotGrid from "./components/DotGrid.jsx"
import Navbar from "./components/Navbar.jsx";
import Spline from "@splinetool/react-spline";
import { Element } from "react-scroll";
const App = () => {
  return (
    <div className="h-screen w-full relative bg-black">
      <DotGrid
        dotSize={3}
        gap={25}
        baseColor="#808080"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={200}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
      <div className="z-20 absolute top-0 flex flex-col justify-center items-center left-0 font-bold w-full h-screen">
      <div className="w-full flex justify-center items-center">
        <Navbar />
      </div>
      <Element className="flex w-full h-[calc(100vh-90px)]">
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
      </Element>
    </div>
    </div>
  );
};

export default App;
