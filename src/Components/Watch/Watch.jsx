import React from "react";

const Watch = ({ watch }) => {
  const { name, price } = watch;
  return (
    <div className="font-bold border-4 rounded-xl my-4 border-black w-96 mx-auto p-4 text-center">
      <h1 className="">Watch : {name}</h1>
      <p>Price : {price}</p>
    </div>
  );
};

export default Watch;
