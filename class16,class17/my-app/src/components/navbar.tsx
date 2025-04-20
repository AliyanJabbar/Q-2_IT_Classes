"use client";
import Link from "next/link";
import React from "react";
import { cart, counter } from "./store";
import { useAtom } from "jotai";

const Navbar = () => {
  const [count, setCount] = useAtom(counter);
  const [Cart, setCart] = useAtom(cart);
  return (
    <div>
      <ul className="flex p-10 justify-around text-2xl font-bold">
        <li className=" hover:underline">
          <Link href={"/"}>Home</Link>
        </li>
        <li className=" hover:underline">
          <Link href={"/user"}>User</Link>
        </li>
        <li className=" hover:underline">
          <Link href={"/cart"}>Cart {Cart.length}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
