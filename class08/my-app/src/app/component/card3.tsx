const Card3 = () => {
  return (
    <div className="border-4 rounded-md border-gray-950 p-10 w-fit mx-auto text-center my-20">
      <h1 className="text-4xl font-bold text-black">Grid Template Columns</h1>
      <div className="gap-3 mt-10 grid grid-cols-1 w-[900px] text-center mx-auto md:grid-cols-2 lg:grid-cols-3">
        <span className="bg-blue-500 p-5 rounded-xl font-bold">1</span>
        <span className="bg-blue-500 p-5 rounded-xl font-bold">2</span>
        <span className="bg-blue-500 p-5 rounded-xl font-bold">3</span>
        <span className="bg-blue-500 p-5 rounded-xl font-bold">4</span>
        <span className="bg-blue-500 p-5 rounded-xl font-bold">5</span>
        <span className="bg-blue-500 p-5 rounded-xl font-bold">6</span>
        <span className="bg-blue-500 p-5 rounded-xl font-bold">7</span>
      </div>
    </div>
  );
};

export default Card3;
