"use client"
import React from "react";

const Variety = ({ bagTypes }) => {
  return (
    <div className="hidden md:flex flex-col md:flex-row md:justify-center m-8">
      <div className="flex justify-center md:justify-evenly md:space-x-20 py-5 overflow-x-auto custom-scrollbar">
        {bagTypes.map((bag, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-gray-300 cursor-pointer hover:text-white"
          >
            {bag.icon}
            <p className="mt-2 text-sm font-extralight">{bag.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Variety;
