import React, { useEffect, useState } from "react";
import PhoneCard from "./PhonesCard";
import Title from "./Title";

const TrendingPhone = () => {
  const [phone, setPhone] = useState([]);

  useEffect(() => {
    fetch("/mobile.json")
      .then((res) => res.json())
      .then((data) => {
        const item = data.filter((item) => item.trending === true);
        setPhone(item);
      });
  }, []);

  return (
    <div className="max-w-11/12 mx-auto">
      <Title title={"  Trending phones"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {phone.map((phone) => (
          <PhoneCard phone={phone} key={phone.id} />
        ))}
      </div>
    </div>
  );
};

export default TrendingPhone;
