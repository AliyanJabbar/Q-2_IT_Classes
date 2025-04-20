"use client";

import { useState } from "react";
import Link from "next/link";

const State = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(16);
  const [name, setName] = useState("Aliyan");
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="text-center my-[10%]">
      <div className="text-indigo-500 underline mb-10">
        <Link href="/">Go Back To Home Page</Link>
      </div>
      <h1>Example 1</h1>
      <h1>{count}</h1>
      <button
        className="border-2 border-blue-600 rounded-lg p-1"
        onClick={increment}
      >
        Increment Count
      </button>
      <br />
      <br />
      <button
        className="border-2 border-blue-600 rounded-lg p-1"
        onClick={decrement}
      >
        Decrement Count
      </button>
      <hr className="my-3" />
      <h1>Example 2</h1>
      <h1>
        {" "}
        My name is {name} and I am {age} years old
      </h1>
      <button
        className="border-2 border-blue-600 rounded-lg p-1"
        onClick={() => {
          name == "Aliyan" ? setName("Jabbar") : setName("Aliyan");
          //   console.log("Button Pressed")
        }}
      >
        Change name
      </button>
      <br />
      <br />
      <button
        className="border-2 border-blue-600 rounded-lg p-1"
        onClick={() => {
          age == 16 ? setAge(12) : setAge(16);
        }}
      >
        Change age
      </button>
    </div>
  );
};

export default State;
