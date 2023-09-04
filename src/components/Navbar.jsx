import React, { useState } from "react";
import Logo from "../assets/ARES.png";
import { FaBars, FaLinkedinIn, FaGithubSquare } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const HandleNav = () => setNav(!Nav);

  return (
    <div className="fixed w-full h-[80px] bg-[#0a192f] flex justify-between items-center px-4 text-gray-100">
      <div>
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "120px",
            height: "80px",
            objectFit: "contain",
            cursor: "pointer",
          }}
        />
      </div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>works</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={HandleNav} className="md:hidden z-10 cursor-pointer">
        {!Nav ? <FaBars /> : <RxCross2 />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !Nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-4 text-2xl hover:bg-white hover:rounded-full hover:px-14  hover:text-black   ">
          Home
        </li>
        <li className="py-4 text-2xl hover:bg-white hover:rounded-full hover:px-14  hover:text-black  ">
          About
        </li>
        <li className="py-4 text-2xl hover:bg-white hover:rounded-full hover:px-14  hover:text-black">
          Skills
        </li>
        <li className="py-4 text-2xl hover:bg-white hover:rounded-full hover:px-14  hover:text-black">
          works
        </li>
        <li className="py-4 text-2xl hover:bg-white hover:rounded-full hover:px-14  hover:text-black">
          Contact
        </li>
      </ul>

      {/* social Icons */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul className="">
          <li className="w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-5px] duration-300 bg-blue-600">
            <a
              href="/"
              target="blank"
              className="flex justify-between items-center w-full text-gray-100"
            >
              LinkedIn <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-5px] duration-300 bg-[#333333]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-100"
            >
              GitHub <FaGithubSquare size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-5px] duration-300 bg-[#6fc3b0]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-100"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-5px] duration-300 bg-[#565f69]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-100"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
