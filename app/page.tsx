'use client'
import Image from "next/image";
import Intro from "./components/intro";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="w-screen h-full">
      <div className="relative w-full h-fit">
        <Image
          className='object-cover -z-10'
          src='/repeating-triangles.svg'
          fill
          alt=''/>
        <Navbar/>
        <Intro/>
      </div>
    </div>
  );
}
