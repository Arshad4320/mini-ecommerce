import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Title from "../components/Title";
import PhoneCard from "../components/PhonesCard";
import { setPhoneIdIntoDb } from "../localStorage/localStorage";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  const [filteredPhone, setFilteredPhone] = useState([]);

  const data = useLoaderData();

  useEffect(() => {
    const phones = data.find((phone) => phone.id == id);
    setProduct(phones);
    if (phones) {
      const filteredData = data.filter(
        (phone) => phone.category === phones.category && phone.id !== phones.id
      );
      setFilteredPhone(filteredData);
    }
  }, [id]);

  return (
    <div className="max-w-11/12 mx-auto">
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
        {/* Image & Basic Info */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-64 h-64 object-cover "
          />

          <div className="flex-1 space-y-3">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-500 text-lg">Model: {product.model}</p>
            <p className="text-gray-600">{product.title}</p>
            <p className="text-xl font-semibold text-green-600">
              ৳{product.price}
            </p>
            <p className="text-sm text-gray-500">In Stock: {product.stock}</p>
            <p className="text-sm text-gray-500">
              Released Year: {product.releasedYear}
            </p>
            <p className="text-yellow-500 font-semibold">
              Rating: ⭐ {product.rating}/5
            </p>
          </div>
        </div>

        {/* Details Section */}
        <div className="mt-8 border-t pt-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            Product Details
          </h2>
          <p className="text-gray-600">{product.details}</p>
        </div>

        {/* Specs */}
        <div className="mt-8 border-t pt-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            Specifications
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700">
            <li>💾 RAM: {product?.specs?.ram}</li>
            <li>💽 Storage: {product?.specs?.storage}</li>
            <li>🔋 Battery: {product?.specs?.battery}</li>
            <li>📱 Display: {product?.specs?.display}</li>
            <li>📸 Camera: {product?.specs?.camera}</li>
            <li>🏷️ Category: {product.category}</li>
          </ul>
        </div>

        {/* Colors */}
        <div className="mt-8 border-t pt-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            Available Colors
          </h2>
          <div className="flex gap-4 justify-center">
            {product?.colors?.map((color, index) => (
              <span
                key={index}
                className="px-4 border border-green-400 hover:bg-white hover:text-green-600 py-2 rounded-full bg-green-100 text-gray-700 font-medium"
              >
                {color}
              </span>
            ))}
            <button
              onClick={() => setPhoneIdIntoDb(id)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add To Cart
            </button>
          </div>
        </div>

        {/* Buttons */}
        {/* <div className="mt-8 flex gap-4"></div> */}
      </div>
      <Title title={"Relevant phones"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {filteredPhone.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
