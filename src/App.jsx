import React, { useEffect, useState } from "react";
import DotGrid from "./components/DotGrid.jsx";
import Navbar from "./components/Navbar.jsx";
import Spline from "@splinetool/react-spline";
import { Element } from "react-scroll";
import CardSwap, { Card } from "./components/CardSwap.jsx";
import Footer from "./components/Footer.jsx"

const App = () => {
  const [theme, settheme] = useState("dark")
  const handletheme = (data) =>{
    settheme(data)
  }
  useEffect(() => {
    
  }, [theme])
  
  const projects = [
    {
      id: 1,
      name: "E-Commerce Web App",
      description:
        "A full-stack e-commerce application with user authentication, product management, and shopping cart functionality.",
      image: "/images/ecommerce.png",
      github: "https://github.com/yourusername/ecommerce-app",
      liveDemo: "https://ecommerce-app.vercel.app",
    },
    {
      id: 2,
      name: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my skills, projects, and contact information.",
      image: "/images/portfolio.png",
      github: "https://github.com/yourusername/portfolio",
      liveDemo: "https://hatimmalak.vercel.app",
    },
    {
      id: 3,
      name: "Weather Forecast App",
      description:
        "A simple weather application that provides real-time weather updates and forecasts using an open API.",
      image: "/images/weather.png",
      github: "https://github.com/yourusername/weather-app",
      liveDemo: "https://weatherapp-demo.netlify.app",
    },
    {
      id: 4,
      name: "Chat Application",
      description:
        "A real-time chat application allowing users to send and receive messages instantly with WebSocket technology.",
      image: "/images/chatapp.png",
      github: "https://github.com/yourusername/chat-app",
      liveDemo: "https://chatapp-demo.vercel.app",
    },
    {
      id: 5,
      name: "To-Do List App",
      description:
        "A minimalistic to-do list web app where users can add, edit, and delete tasks with data persistence.",
      image: "/images/todo.png",
      github: "https://github.com/yourusername/todo-app",
      liveDemo: "https://todoapp-demo.vercel.app",
    },
  ];

  return (
    <div className={`relative w-full overflow-hidden ${theme === "dark"?"bg-black":"bg-white"}`}>
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <DotGrid
          dotSize={3}
          gap={25}
          baseColor={theme === "dark"?"#808080":"#000000"}
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
          <Navbar sendData = {handletheme} />
        </div>
        <Element className="flex lg:flex-row flex-col-reverse p-5 w-full h-screen pt-24" name="Home">
          <div className="lg:w-[50%] lg:h-full w-full h-1/2 flex flex-col justify-center items-center">
            <div className="flex gap-5 flex-col justify-center items-start">
              <h1 className={`text-5xl ${theme !== "dark"?"text-black":"text-white"} font-bold`}>Hi, Welcome to</h1>
              <h1 className="text-7xl font-bold text-purple-500">
                Echelon Dev Society
              </h1>
              <p className={`text-4xl ${theme !== "dark"?"text-black":"text-white"} font-semibold`}>
                Driven by curiosity, powered by code
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 lg:h-full w-full h-1/2 flex justify-center items-start">
            <Spline scene="https://prod.spline.design/mpyCYatHMjWLmBmL/scene.splinecode" />
          </div>
        </Element>

        <Element
          className="w-full text-center h-screen pt-24 flex justify-center items-center flex-col gap-3"
          name="About"
        >
          <h1 className="text-5xl text-purple-500 font-bold">About</h1>
           <div className={`border ${theme !== "dark"?"border-black":"border-white"} w-[150px] mb-20`}></div>
          <p className="bg-gray-800 p-5 lg:w-[60%] w-[95%] lg:h-[77%] h-[77%] rounded-lg overflow-auto text-white text-2xl flex justify-center items-center leading-relaxed">
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
        <Element
          className="w-full text-center min-h-screen pt-20 flex justify-center items-center flex-col gap-3"
          name="Projects"
        >
          <h1 className="text-5xl text-purple-500 font-bold">Projects</h1>
          <div className={`border ${theme !== "dark"?"border-black":"border-white"} w-[150px]`}></div>
          <div className="flex flex-col lg:flex-row justify-center gap-10 items-center w-full h-[75%] ">
            {projects.map((pro)=>(
              <div className="flex flex-col bg-gray-600/30 h-[500px] w-[300px] ">
                <div className="w-full h-[40%]">
                  <img src={pro.image} alt="image" />
                </div>
                <div className="flex flex-col justify-between items-start gap-5 w-full h-[60%] p-2">
                  <h1 className="text-purple-500 text-3xl font-bold text-start">{pro.name}</h1>
                  <p className={`${theme !== "dark"?"text-black":"text-white"} text-xl font-bold w-full h-[30%] text-start`}>{pro.description}</p>
                  <div className="flex justify-center w-full items-center gap-5 pt-10">
                    <a href={pro.github} className={`${theme !== "dark"?"text-black":"text-white"} bg-purple-500 text-2xl font-semibold p-2 rounded-lg`}>Github</a>
                    <a href={pro.liveDemo} className={`${theme !== "dark"?"text-black":"text-white"} bg-purple-500 text-2xl font-semibold p-2 rounded-lg`}>Live Demo</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Element>
        <Element
          className="w-full text-center h-screen pt-12 flex justify-center items-center flex-col gap-3"
          name="Team"
        >
          <h1 className="text-5xl text-purple-500 font-bold">Team</h1>
          <div className={`border ${theme !== "dark"?"border-black":"border-white"} w-[150px] mb-24`}></div>
          <div className="relative h-[50%] w-full flex  items-center ">
            <div className="w-[50%] flex justify-center items-center ">
              <div className="flex flex-col gap-6">
              <h1 className="text-6xl text-purple-500 font-bold text-start ">Team Members:</h1>
              <h1 className={`text-5xl ${theme !== "dark"?"text-black":"text-white"} font-bold`}>Meet the Minds Behind the Vision</h1>
              </div>
            </div>
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={2000}
              pauseOnHover={true}
              className="w-[50%]"
            >
              <Card className="text-white w-full h-full">
                <h3 className="h-[20%] w-full pt-5 text-xl font-bold">Technical Head</h3>
                <div className="h-[80%] w-full">
                  <img src="srk.webp" alt="srk" className="h-full w-full object-cover" />
                </div>
              </Card>
              <Card className="text-white w-full h-full">
                <h3 className="h-[20%] w-full pt-5 text-xl font-bold">Management Head</h3>
                <div className="h-[80%] w-full">
                  <img src="salman.webp" alt="srk" className="h-full w-full object-cover" />
                </div>
              </Card>
              <Card className="text-white w-full h-full">
                <h3 className="h-[20%] w-full pt-5 text-xl font-bold">Event Head</h3>
                <div className="h-[80%] w-full">
                  <img src="amir.webp" alt="srk" className="h-full w-full object-cover" />
                </div>
              </Card>
              <Card className="text-white w-full h-full">
                <h3 className="h-[20%] w-full pt-5 text-xl font-bold">Core Team</h3>
                <div className="h-[80%] w-full">
                  <img src="rithik.webp" alt="srk" className="h-full w-full object-cover" />
                </div>
              </Card>
            </CardSwap>
          </div>
        </Element>
        <Element className="w-full">
          <Footer/>
        </Element>
      </div>
    </div>
  );
};

export default App;
