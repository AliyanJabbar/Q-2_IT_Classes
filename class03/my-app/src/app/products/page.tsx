import Link from "next/link";

export default function Products() {
  return (
    <div>
      <h1>Products list</h1>
      <ol>
        <li><Link href="/products/product1">product1</Link></li>
        <li><Link href="/products/product2">product2</Link></li>
      </ol>
    </div>
  );
}
