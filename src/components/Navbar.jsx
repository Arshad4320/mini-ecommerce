import React, { useState } from "react";
import { NavLink } from "react-router";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className="text-lg text-gray-700 hover:text-blue-600 transition"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="text-lg text-gray-700 hover:text-blue-600 transition"
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        className="text-lg text-gray-700 hover:text-blue-600 transition"
      >
        Products
      </NavLink>
      <NavLink
        to="/cart"
        className="text-lg text-gray-700 hover:text-blue-600 transition"
      >
        Cart
      </NavLink>
      <NavLink
        to="/login"
        className="text-lg text-gray-700 hover:text-blue-600 transition"
      >
        Login
      </NavLink>
    </>
  );

  return (
    <nav className="bg-gray-100 p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">ShopSmart</h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">{navLinks}</div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden absolute top-20 left-0 w-full bg-white flex flex-col items-center space-y-4 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-5 invisible"
        }`}
      >
        {navLinks}
      </div>
    </nav>
  );
};

export default Navbar;
