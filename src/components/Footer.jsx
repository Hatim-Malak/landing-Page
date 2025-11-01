import React from "react";
import { Link } from "react-scroll";
import { Github,Linkedin,Mail,Phone } from "lucide-react";
const Footer = () => {
  return (
    <div className="w-full lg:h-[20%] h-[30%] flex lg:flex-row flex-col-reverse justify-between items-center lg:p-9 p-5 bg-gray-400/15 backdrop-blur-md border-t-2 border-gray-400/30 ">
      <div className="text-white font-medium">
        <h1>&copy; echelon dev society,Built with MERN</h1>
      </div>
      <div className="flex justify-center cursor-pointer items-center text-white font-bold gap-10">
        <Link to="Home">Home</Link>
        <Link to="Projects">Projects</Link>
        <Link to="Team">Team</Link>
      </div>
      <div className="flex justify-center items-center gap-5">
        <div className="p-3 hover:bg-gray-800 rounded-full">
          <a href="https://github.com">
            <Github className="text-gray-400 size-[20px] hover:text-white"/>
          </a>
        </div>
        <div className="p-3 hover:bg-gray-800 rounded-full">
          <a href="https://www.linkedin.com/">
            <Linkedin className="text-gray-400 size-[20px] hover:text-white"/>
          </a>
        </div>
        <div className="p-3 hover:bg-gray-800 rounded-full">
          <a href="mailto:echelon@gmail.com">
            <Mail className="text-gray-400 size-[20px] hover:text-white"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
