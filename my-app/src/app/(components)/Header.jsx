"use client";

import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import Text from "./Text";

export default function Header() {
  
  const [show, setShow] = useState(false);

  return (
    <>
      <FaShoppingCart className="inline-block border rounded-sm text-black mr-30 w-10 h-10 p-2 bg-white" />
      <Text />
      <CgProfile onClick={() => setShow(!show)} className="inline-block cursor-pointer rounded-sm text-white w-13 h-13 p-2 hover:rounded-full hover:bg-gray-800 " />
      {show && (        
        <div className="absolute z-50 bg-gray-800 w-40 h-40 right-15 rounded-lg">
            <ul>
                <li className="border-b border-black p-2 hover:rounded-md hover:bg-gray-700 cursor-pointer transition">Sells</li>
                <li className="border-black border-b p-2 hover:shadow-md hover:bg-gray-700 cursor-pointer transition">Trade</li>
                <li className="border-black border-b p-2 hover:shadow-md hover:bg-gray-700 cursor-pointer transition">About</li>
                <li className="border-black border-b p-2 hover:rounded-md hover:bg-gray-700 cursor-pointer transition">Sign Out</li>
            </ul>
        </div>
    )}
    </>
  );
}