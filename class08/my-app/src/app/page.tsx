import Card from "./component/card";
import Card2 from "./component/card2";
import Card3 from "./component/card3";

export default function Home() {
  return (
    <div>
      <h1 className="text-center mt-[200px] text-4xl font-extrabold text-[#ff2828] underline decoration-stone-950 bg-amber-400 h-16 w-[500px] block mx-auto pt-3 border-2 border-black border-dashed rounded-2xl hover:scale-110 transition-all duration-300 cursor-pointer shadow-xl">
        Welcome Tailwind CSS
      </h1>
      <Card/>
      <Card2/>
      <Card3/>
    </div>
  );
}
