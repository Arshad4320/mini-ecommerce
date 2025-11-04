import React, { useEffect, useState } from "react";
import PhoneCard from "./PhonesCard";

const BestSellProducts = () => {
  const [phone, setPhone] = useState([]);
  console.log(phone);
  useEffect(() => {
    fetch("/mobile.json")
      .then((res) => res.json())
      .then((data) => {
        const item = data.filter((item) => item.bestsell === true);
        setPhone(item);
      });
  }, []);

  return (
    <div className="max-w-11/12 mx-auto">
      <h2 className="text-4xl lg:text-5xl font-bold py-20 text-center text-blue-600">
        Best Sell phones
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {phone.map((phone) => (
          <PhoneCard phone={phone} key={phone.id} />
        ))}
      </div>
    </div>
  );
};

export default BestSellProducts;
