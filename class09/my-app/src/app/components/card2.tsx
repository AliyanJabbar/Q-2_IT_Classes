import React from "react";

const Card2 = () => {
  return (
    <div>
      <h1 className="text-center my-[50px] text-4xl font-extrabold text-[rgb(255,40,40)] underline decoration-stone-950 bg-amber-400 h-16 w-[500px] block mx-auto pt-3 border-2 border-black border-dashed rounded-2xl hover:scale-110 transition-all duration-300 cursor-pointer shadow-xl">
        Welcome Flex
      </h1>
      <div className="bg-blue-500 h-fit flex justify-evenly min-w-[500px] gap-5 flex-wrap">
        <div className="p-5 bg-red-600 h-fit text-white">Home</div>
        <div className="p-5 bg-red-600 h-fit text-white">About</div>
        <div className="p-5 bg-red-600 h-fit text-white">Contact</div>
      </div>
    </div>
  );
};

export default Card2;
