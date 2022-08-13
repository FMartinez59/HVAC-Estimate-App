import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
 
  

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
      
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="login" smooth={true} duration={500}>
            Login
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
      </ul>
    </div>


  );
};

export default Navbar;
