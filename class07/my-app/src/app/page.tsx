"use client";

import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  const change = () => setShow(!show);

  return (
    <div className="text-center">
      <h1 className="mt-24">TOPIC: Conditional Rendering</h1>
      <br />

      {/* {show && <h1>Hello Show</h1>} */}

      {show ? <h1>Show is true</h1> : <h1>Show is false</h1>}

      <button className="underline" onClick={change}>
        Change Show
      </button>
    </div>
  );
}
