import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { Link, useLoaderData } from "react-router";
import { getDataFromDb } from "../localStorage/localStorage";
import OrderCart from "../components/OrderCart";
import { removeIdFromDb } from "../localStorage/localStorage";
import { toast } from "react-toastify";
const Cart = () => {
  const [phoneId, setPhoneId] = useState([]);

  const data = useLoaderData();
  const getPhoneId = getDataFromDb();

  const handleRemove = (id) => {
    const removeId = phoneId.find((item) => item.id !== id);
    const updateData = phoneId.filter((item) => item.id !== id);
    setPhoneId(updateData);
    removeIdFromDb(removeId.id);
    toast.warn(`${removeId.name} removed from your order`);
  };
  useEffect(() => {
    const item = data.filter((item) => getPhoneId.includes(item.id));
    setPhoneId(item);
  }, []);
  return (
    <div>
      <Title title={"Your cart list"} />
      {phoneId?.length > 0 ? (
        phoneId.map((item) => (
          <OrderCart key={item.id} item={item} handleRemove={handleRemove} />
        ))
      ) : (
        <p className="text-4xl font-bold flex gap-2 items-center justify-center max-h-screen">
          Your cart is empty{" "}
          <Link className="text-blue-400 underline text-2xl" to="/products">
            go to product page
          </Link>
        </p>
      )}
    </div>
  );
};

export default Cart;
