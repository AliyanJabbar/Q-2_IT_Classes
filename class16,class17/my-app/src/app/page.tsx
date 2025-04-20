"use client";
import { cart, counter } from "@/components/store";
import { useAtom } from "jotai";
// import { useState } from "react";

const data = [
  {
    id: 1,
    name: "first ",
  },
  {
    id: 2,
    name: "second ",
  },
  {
    id: 3,
    name: "third ",
  },
  {
    id: 4,
    name: "fourth ",
  },
];
export default function Home() {
  //class 17

  // const [count, setCount] = useState(0);
  const [count, setCount] = useAtom(counter);
  const add = () => setCount(count + 1);
  const sub = () => setCount(count > 0 ? count - 1 : count);

  const [Cart, setCart] = useAtom(cart);
  function addToCart(Product: any) {
    Cart.includes;
    return setCart([...Cart, Product]);
  }
  return (
    <div>
      <h1 className="p-5 text-2xl font-bold">Home Page</h1>
      {/* <h1 className="p-5 text-2xl font-bold">Cart {count}</h1>
      <button
        className="p-5 text-2xl font-bold  hover:underline "
        onClick={sub}
      >
        SUB Button
      </button>
      <button
        className="p-5 text-2xl font-bold  hover:underline "
        onClick={add}
      >
        ADD Button
      </button> */}

      <h1 className="p-5 text-2xl font-bold">Cart </h1>
      {data.map((product) => {
        return (
          <button
            key={product.id}
            className="p-5 text-2xl font-bold  hover:underline "
            onClick={() => addToCart(product)}
          >
            Add {product.name}
          </button>
        );
      })}
    </div>
  );
}
