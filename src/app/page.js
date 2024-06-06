"use client";
import React from "react";
import VarietyIcons from "./components/VarietyIcons";
import Backpacks from "./components/Backpacks";
import Fetchcard from "./components/Fetchcard";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const Page = () => {
  return (
    <div className="bg-[#000000] min-h-screen text-white custom-scrollbar">
     <Header/>
     <Navbar/>
      <main>
        <VarietyIcons />
        <Backpacks />
        <Fetchcard />
      </main>
    </div>
  );
};

export default Page;