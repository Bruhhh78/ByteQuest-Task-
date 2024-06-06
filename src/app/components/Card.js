import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";

const Card = ({ title, price, image }) => {
  return (
    <div className="w-64 mx-auto bg-black rounded-lg shadow-md cursor-pointer overflow-hidden border m-2">
      <div className="relative h-48">
        <img className="w-full h-full object-cover" src={image} alt={title} />
        <FaRegBookmark className="absolute top-4 right-4 h-6 w-6 text-white" />
      </div>
      <div className="p-4">
        <h2 className="text-sm mb-2 text-gray-300">{title}</h2>
        <div className="flex items-center mb-1">
          <span className="text-sm font-semibold text-white">${price}</span>
          <span className="text-xs text-gray-500 line-through ml-2">$100</span>
          <span className="ml-2 text-xs font-medium text-green-600">(50% Off)</span>
          <TbShoppingBagPlus className="h-6 w-6 ml-2 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Card;
