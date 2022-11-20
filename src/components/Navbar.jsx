import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../utils/logo.png";
import ModeToggle from "./ModeToggle";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex p-4 px-6 sticky top-0 justify-between items-center backdrop-blur-xl z-10">
      <NavLink to="/" className="flex items-center">
        <img src={logo} alt="logo" className="h-8" />
      </NavLink>
      <SearchBar />
      <ModeToggle />
    </div>
  );
};

export default Navbar;
