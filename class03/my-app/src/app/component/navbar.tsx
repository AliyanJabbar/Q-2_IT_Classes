import Link from "next/link"

export function NavBar(){
return(
    <div>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    </div>
)
}