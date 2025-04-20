import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello Next.JS</h1>
      <p>This is my first web page</p>

      <Link className="ml-64" href="/checkout">Go to class 18(checkout)</Link>
    </div>
  );
}

// this pages.tsx is our end point
