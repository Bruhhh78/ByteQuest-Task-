"use client"
import React from 'react';
import Variety from './Variety';
import { BsFillLuggageFill } from "react-icons/bs";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { IoBagSharp } from "react-icons/io5";
import { GiDuffelBag } from "react-icons/gi";
import { PiLaptopLight } from "react-icons/pi";
import { TfiBag } from "react-icons/tfi";
import { GiShoulderBag } from "react-icons/gi";
import { SlHandbag } from "react-icons/sl";

const bagTypes=[
  { icon: <BsFillLuggageFill className="h-20 w-20" />, name: "All Bags" },
  { icon: <PiShoppingBagOpenThin className="h-20 w-20" />, name: "Vanity Pouch" },
  { icon: <IoBagSharp className="h-20 w-20" />, name: "Tote Bags" },
  { icon: <GiDuffelBag className="h-20 w-20" />, name: "Duffle Bags" },
  { icon: <PiLaptopLight className="h-20 w-20" />, name: "Laptop Sleeve" },
  { icon: <TfiBag className="h-20 w-20" />, name: "Office Bags" },
  { icon: <GiShoulderBag className="h-20 w-20" />, name: "Sling Bags" },
  { icon: <SlHandbag className="h-20 w-20" />, name: "Handbags" }
];

const VarietyIcons = () => {
  return (
    <Variety bagTypes={bagTypes}/>
  )
}

export default VarietyIcons;
