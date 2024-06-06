"use client"
import React from "react";
import { RxShare2 } from "react-icons/rx";

const Backpacks = () => {
  return (
    <div className="m-4">
      <div className="flex justify-between items-center px-4">
        <h2 className="text-xl font-extralight text-gray-400 ">E-commerce • Products</h2>
        <div className="flex items-center">
          <span className="text-base font-extralight">20 products</span>
          <RxShare2 className="ml-2 h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default Backpacks;
