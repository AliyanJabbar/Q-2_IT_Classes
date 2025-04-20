import React from "react";

const Card1 = () => {
  return (
    <div>
      <h1 className="text-center my-[50px] text-4xl font-extrabold text-[rgb(255,40,40)] underline decoration-stone-950 bg-amber-400 h-16 w-[500px] block mx-auto pt-3 border-2 border-black border-dashed rounded-2xl hover:scale-110 transition-all duration-300 cursor-pointer shadow-xl">
        Welcome Grid
      </h1>
      {/*  div 1  */}
      <div className="grid grid-cols-[100px,1fr,100px] my-[100px]">
        <div className="bg-blue-500 ">Logo</div>
        <div className="bg-blue-600">Navbar Item</div>
        <div className="bg-blue-700">Search Bar</div>
      </div>
      {/* div 2 */}
      <div className="grid grid-rows-[auto,1fr,1fr,auto] h-screen grid-cols-[300px,1fr]">
        <div className="bg-blue-500 col-span-2 h-20">Header</div>{" "}
        {/* col span means ke kitne columns ki jaga lega */}
        <div className="bg-blue-600">Side Bar</div>
        <div className="bg-blue-700">Gmails</div>
        <div className="bg-blue-800 col-span-2 h-20">footer</div>
      </div>
    </div>
  );
};

export default Card1;
