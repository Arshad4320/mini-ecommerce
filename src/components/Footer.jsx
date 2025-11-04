import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-10 p-10">
      <div className="max-w-11/12 mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & Description */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-blue-500">ShopSmart</h1>
          <p className="text-gray-400">
            ShopSmart brings you the best products from top brands — fashion,
            gadgets, and more, all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-blue-500 transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-blue-500 transition">
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="hover:text-blue-500 transition"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-blue-500 transition">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ShopSmart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
