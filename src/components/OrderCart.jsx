import React, { useState } from "react";
import { X } from "lucide-react";

import { toast } from "react-toastify";

const OrderCart = ({ item, handleRemove }) => {
  const { image, name, price, id } = item || {};
  const [paid, setPaid] = useState(false);

  // Pay button toggle
  const handlePay = () => {
    setPaid(true);
    toast.success(" payment successfully");
  };

  return (
    <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm transition-all duration-200 mb-5 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Left Side: Product Info */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 object-cover rounded-xl border border-gray-200"
        />
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
            <button
              onClick={() => handleRemove(id)}
              className="text-red-500 hover:text-red-600 p-2 rounded-full transition-all"
              title="Remove from cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-blue-600 font-semibold">৳ {price}</p>
        </div>
      </div>

      {/* Right Side: Pay Button */}
      <button
        onClick={handlePay}
        disabled={paid}
        className={`${
          paid
            ? "bg-green-500 cursor-not-allowed"
            : "bg-yellow-400 hover:bg-yellow-300"
        } text-white font-medium rounded-md px-6 py-2 transition-all`}
      >
        {paid ? "Paid" : "Pay"}
      </button>
    </div>
  );
};

export default OrderCart;
