import React from "react";
import DotGrid from "./components/DotGrid.jsx";
import Navbar from "./components/Navbar.jsx";
import Spline from "@splinetool/react-spline";
import { Element } from "react-scroll";

const App = () => {
  return (
    <div className="relative w-full bg-black overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-full z-0">
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
      </div>

      <div className="relative z-20 flex flex-col justify-center items-center font-bold w-full">
        <div className="w-full flex relative justify-center items-center">
          <Navbar />
        </div>
        <Element className="flex w-full h-screen pt-24" name="Home">
          <div className="w-[50%] flex flex-col justify-center items-center">
            <div className="flex gap-5 flex-col justify-center items-start">
              <h1 className="text-5xl text-white font-bold">Hi, Welcome to</h1>
              <h1 className="text-7xl font-bold text-purple-500">
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

        <Element
          className="w-full text-center h-screen pt-24 flex justify-center items-center flex-col gap-10"
          name="About"
        >
          <h1 className="text-5xl text-purple-500 font-bold">About</h1>
          <p className="bg-gray-600/30  p-5 w-[60%] h-[77%] rounded-lg overflow-auto text-white text-2xl flex justify-center items-center leading-relaxed">
            Echelon Dev Society is a community of passionate innovators,
            developers, and problem solvers driven by curiosity and powered by
            technology. Our club serves as a platform where creative minds come
            together to explore, build, and share ideas that push the boundaries
            of innovation. We believe that technology is not just a tool—it’s a
            language of progress, creativity, and change. At Echelon Dev
            Society, we aim to bridge the gap between academic learning and
            real-world applications through hands-on projects, hackathons,
            technical workshops, and collaborative events. Whether it’s coding a
            web app, experimenting with AI, or developing open-source tools, we
            encourage every member to turn their ideas into impactful solutions.
            The club is built around the spirit of teamwork and exploration. We
            provide opportunities for students to improve their technical and
            soft skills by working on real-world challenges, participating in
            coding competitions, contributing to collaborative projects, and
            learning from industry experts. Our members come from diverse
            backgrounds but share a common passion — using technology to create,
            inspire, and make a difference. Through consistent learning,
            mentorship, and innovation, Echelon Dev Society aims to nurture a
            new generation of tech enthusiasts who are ready to take on the
            challenges of the digital world. Together, we build not just
            projects, but futures.
          </p>
        </Element>
      </div>
    </div>
  );
};

export default App;
