import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center my-[17%]">
    <h1>jis bhi component me event ya phir hook use ho ga woh client side component hoga</h1>
    <br />
      <h1 className="text-3xl">Topics:</h1>
      <ol>
        <li>Route Group</li>
        <li>Not Found Page</li>
        <li className="text-indigo-500 underline"><Link href="/useState">Use State Hook</Link></li>
        <li className="text-indigo-500 underline"><Link href="/useEffect">Use Effect Hook</Link></li>
      </ol>
    </div>
  );
}
