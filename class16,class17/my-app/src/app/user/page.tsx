"use client";
import { counter } from "@/components/store";
import { useAtom } from "jotai";
import React from "react";

const User = () => {
  const [count, setCount] = useAtom(counter);
  return (
    <div>
      <h1 className="p-5 text-2xl font-bold">User Page</h1>
      <h1 className="p-5 text-2xl font-bold">Cart {count}</h1>
    </div>
  );
};

export default User;
