"use client"
import React from "react";
import { TbSearch } from "react-icons/tb";
import { FiBookmark, FiUser } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <h1
        className="text-3xl font-extralight text-gray-400"
        style={{ letterSpacing: "0.3em" }}
      >
        TANN TRIM
      </h1>
      <div className="flex space-x-4">
        <TbSearch className="h-6 w-6 cursor-pointer text-gray-400 hover:text-white" />
        <FiUser className="h-6 w-6 cursor-pointer text-gray-400 hover:text-white " />
        <FiBookmark className="h-6 w-6 cursor-pointer text-gray-400 hover:text-white hidden md:inline-block" />
        <BiShoppingBag className="h-6 w-6 cursor-pointer text-gray-400 hover:text-white" />
      </div>
    </header>
  );
};

export default Header;
