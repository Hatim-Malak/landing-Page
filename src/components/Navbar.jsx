import React, { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Loader, Github, Linkedin } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = ({ sendData }) => {
  const [open, setopen] = useState(false);
  const [Input, setInput] = useState("dark");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInput(newValue);
    sendData(newValue);
  };
  useEffect(() => {}, [open]);
  return (
    <>
      <div className="fixed border backdrop-blur-md border-white border-opacity-30 lg:w-[70%] bg-gray-400/15 w-[90%] top-5 rounded-full lg:flex lg:block hidden  px-7 justify-between items-center z-10">
        <div className="text-4xl text-gray-400 font-bold">
          Echelon Dev Society
        </div>
        <div className="opacity-50 text-gray-400 text-2xl font-semibold flex gap-3 items-center ">
          <Link
            to="Home"
            className="p-3 cursor-pointer hover:text-white"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            to="About"
            className="p-3 cursor-pointer hover:text-white"
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            to="Projects"
            className="p-3 cursor-pointer hover:text-white"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <Link
            to="Team"
            className="p-3 cursor-pointer hover:text-white"
            smooth={true}
            duration={500}
          >
            Team
          </Link>
        </div>
        <div>
          <select name="theme" id="theme" className="text-gray-400 bg-gray-600/15 p-1" onChange={handleChange} value={Input}>
            <option value="dark">Dark</option>
            <option value="Light">Light</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between w-full z-[99]  px-3 fixed top-5 lg:hidden block  items-center">
        <div className=" bg-gray-400/15 px-3 py-2 rounded-full border backdrop-blur-md text-3xl font-bold opacity-50 text-gray-400 border-white border-opacity-30">
          echelon dev society
        </div>
        {!open ? (
          <button
            className="p-4 rounded-full backdrop-blur-md bg-gray-400/15 border border-white border-opacity-30 flex jsutify-center items-center"
            onClick={() => setopen(true)}
          >
            <Menu className="text-gray-400 hover:text-white" />
          </button>
        ) : (
          <button
            className="p-4 rounded-full bg-gray-400/15 border border-white border-opacity-30 flex jsutify-center items-center"
            onClick={() => setopen(false)}
          >
            <X className="text-gray-400 hover:text-white" />
          </button>
        )}
      </div>
      <div className="relative flex items-center justify-center">
        {open && (
          <div className="fixed top-24 rounded-2xl w-[90%] bg-gray-800 transition-all z-50   text-gray-400 text-2xl font-semibold flex flex-col justify-center items-center ">
            <Link
              to="Home"
              className="p-3 cursor-pointer hover:text-white"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
            <Link
              to="About"
              className="p-3 cursor-pointer hover:text-white"
              smooth={true}
              duration={500}
            >
              About
            </Link>
            <Link
              to="Projects"
              className="p-3 cursor-pointer hover:text-white"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
            <Link
              to="Team"
              className="p-3 cursor-pointer hover:text-white"
              smooth={true}
              duration={500}
            >
              Team
            </Link>
            <div className="p-3 cursor-pointer hover:text-white">
              <select
                name="theme"
                id="theme"
                onChange={handleChange}
                className="text-gray-400 bg-gray-600/15 p-1"
                value={Input}
              >
                <option value="dark">Dark</option>
                <option value="Light">Light</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
