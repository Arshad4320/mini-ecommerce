import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const route = (
    <div className="space-x-5 ">
      <NavLink className="text-lg " to="/">
        Home
      </NavLink>
      <NavLink className="text-lg " to="/about">
        About
      </NavLink>
      <NavLink className="text-lg " to="/product">
        Products
      </NavLink>
    </div>
  );
  return (
    <div className="bg-gray-100 p-5">
      {/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}

      <div className="w-10/12 mx-auto flex justify-between">
        <p>logo</p>
        {route}
        <div className="space-x-5">
          <NavLink className="text-lg" to="/cart">
            Cart
          </NavLink>
          <NavLink className="text-lg" to="/login">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
