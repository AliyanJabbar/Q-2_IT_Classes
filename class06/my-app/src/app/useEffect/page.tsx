"use client";

import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
const Effect = () => {
  const [name, setName] = useState("Aliyan Jabbar");
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  useEffect(() => {
    const fetchedData = async () => {
      let url = "https://fakerapi.it/api/v2/persons?_quantity=1&_gender=female&_birthday_start=2005-01-01"; //for dynamic API https://fakerapi.it/
      const fetchedData = await fetch(url);
      const res = await fetchedData.json();
      // console.log(res)
      setName(res.data[0].firstname+" "+res.data[0].lastname)
    };
    fetchedData();
  },[count]);

  return (
    <div className="text-center my-[15%]">
      <div className="text-indigo-500 underline mb-10"><Link href="/">Go Back To Home Page</Link></div>
      <h1 className="text-3xl">Use Effect</h1>
      <h2 className="text-2xl mt-2">{count}</h2>
      <button
        className="border-2 mx-5 border-blue-600 rounded-lg p-1"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="border-2 mx-5 border-blue-600 rounded-lg p-1"
        onClick={decrement}
      >
        Decrement
      </button>
      <p className="mt-5 mb-1">click <strong>increment</strong> or <strong>decrement</strong> to fetch name from API</p>
      <h2 className="text-2xl">My name is <strong><i>{name}</i></strong></h2>
    </div>
  );
};

export default Effect;
