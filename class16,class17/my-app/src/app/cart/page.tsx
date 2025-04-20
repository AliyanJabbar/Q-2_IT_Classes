"use client";
import { cart } from "@/components/store";
import { useAtom } from "jotai";
import React from "react";

const Cart = () => {
  const [Cart, setCart] = useAtom(cart);
  return (
    <div>
      <h1 className="p-5 text-2xl font-bold">Cart Page</h1>
      <ul>
        {Cart.map((item: { id: number; name: string }) => (
          <li>Cart has{" "}{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
