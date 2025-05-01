'use client'

import Image from "next/image";
import Hero from "./components/hero";
import About from "./components/about";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
    </main>
  );
}
