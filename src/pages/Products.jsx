import React from "react";
import { useLoaderData } from "react-router";
import PhonesCard from "../components/PhonesCard";

const Products = () => {
  const data = useLoaderData();

  return (
    <div className="max-w-11/12 mx-auto">
      <h2 className="text-center font-medium text-4xl py-10">All Phones</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((phone) => (
          <PhonesCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default Products;
