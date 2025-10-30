import React from "react";
import axios from "axios";
import Btn from "../elements/Btn";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return <nav className="w-[90vw] grid grid-cols-12 m-auto bg-black">
    <div className="text-green-800 font-extrabold col-span-2 text-2xl p-1">Logo</div>
    <div className=" col-span-9">
      <ul className="flex justify-evenly items-center list-none ">
        <li>Home</li> 
      </ul>
    </div>
    <Btn children={"login"}/>
  </nav>
};

export default Navbar;
