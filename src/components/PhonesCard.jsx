import React from "react";
import { Link } from "react-router";

const PhoneCard = ({ phone }) => {
  const { id, name, details, image, model, price, rating, title } = phone;

  return (
    <div className="bg-white rounded-xl  shadow transition p-4 flex flex-col">
      {/* Product Image */}
      <div className="w-full h-56 flex justify-center items-center bg-gray-100 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-40 h-40 object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="mt-2 space-y-2 flex-grow">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-lg text-gray-500 font-medium">{name}</p>
        <p className="text-sm text-gray-600 ">{details}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between ">
        <p className="text-xl font-bold text-blue-600">
          <span className="text-lg font-extrabold"> ৳</span> {price}
        </p>
        <div className="flex items-center space-x-1">
          <span className="text-yellow-400 text-lg">★</span>
          <p className="text-gray-700 font-medium">{rating}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-3 flex justify-between items-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition">
          Add to cart
        </button>
        <Link
          to={`/product-details/${id}`}
          className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 px-4 py-2 rounded-lg font-medium transition"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default PhoneCard;
