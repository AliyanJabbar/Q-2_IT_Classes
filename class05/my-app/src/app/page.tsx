import Image from "next/image";
import img from "/Users/Aliyan_Jabbar/Desktop/Aliyan Jabbar/Aliyan's Camera Roll/picrures/Personal Pics/Circle Profile Pic.png"

export default function Home() {
  return (
    <>
    <h1>Home Page with image </h1>
    <h1>"search localhost:3000/user"</h1>
    <Image
    src={img}
    alt="Nature image"/>
    </>
  );
}
