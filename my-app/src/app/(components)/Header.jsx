"use client";

import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Text from "./Text";

export default function Header() {
  return (
    <>
      <FaShoppingCart className="inline-block border rounded-sm text-black mr-31 w-10 h-10 p-2 bg-white" />
      <Text />
      <CgProfile className="inline-block rounded-sm text-white w-13 h-13 p-2" />
    </>
  );
}