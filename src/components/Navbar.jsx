import React, { use, useState } from "react";
import { NavLink } from "react-router";
import Hamburger from "hamburger-react";
import { AuthContext } from "../authcontext/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { user, logOutUser } = use(AuthContext);

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        toast.success("user logout successfully");
      })
      .catch((err) => {
        toast.error(err.errorMessage);
        console.log(err.errorMessage);
      });
  };

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
        to="/product/cart"
        className="text-lg text-gray-700 hover:text-blue-600 transition"
      >
        Cart
      </NavLink>
    </>
  );

  return (
    <nav className="bg-gray-100 p-4 shadow-md sticky top-0 z-50 w-full backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">ShopSmart</h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">{navLinks}</div>

        <div className="space-x-6 hidden lg:block">
          <NavLink className="text-lg text-gray-700 hover:text-blue-600 transition">
            {user?.displayName && user?.displayName}
          </NavLink>
          {user ? (
            <NavLink
              onClick={handleLogout}
              className="text-lg text-gray-700 hover:text-blue-600 transition"
            >
              Logout
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className="text-lg text-gray-700 hover:text-blue-600 transition"
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden absolute top-20 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-5 invisible"
        }`}
      >
        {navLinks}
        <NavLink className="text-lg text-gray-700 hover:text-blue-600 transition">
          {user?.displayName && user?.displayName}
        </NavLink>
        {user ? (
          <NavLink
            onClick={handleLogout}
            className="text-lg text-gray-700 hover:text-blue-600 transition"
          >
            Logout
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            className="text-lg text-gray-700 hover:text-blue-600 transition"
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
