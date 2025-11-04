import React, { useEffect, useState } from "react";
import PhoneCard from "./PhonesCard";

const TrendingPhone = () => {
  const [phone, setPhone] = useState([]);
  console.log(phone);
  useEffect(() => {
    fetch("/mobile.json")
      .then((res) => res.json())
      .then((data) => {
        const item = data.filter((item) => item.trending === true);
        setPhone(item);
      });
  }, []);

  return (
    <>
      <h2 className="text-4xl font-semibold py-10 text-center text-blue-600">
        Trending phones
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-11/12 mx-auto">
        {phone.map((phone) => (
          <PhoneCard phone={phone} key={phone.id} />
        ))}
      </div>
    </>
  );
};

export default TrendingPhone;
