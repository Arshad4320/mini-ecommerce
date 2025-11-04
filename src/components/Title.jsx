import React from "react";

const Title = ({ title }) => {
  return (
    <h2 className="text-3xl lg:text-4xl font-bold uppercase py-14 text-center text-blue-600">
      {title}
    </h2>
  );
};

export default Title;
