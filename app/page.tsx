'use client'

import Image from "next/image";
import Hero from "./components/hero";
import About from "./components/about";
import Navbar from "./components/navbar";
import Features from "./components/features";
import Story from "./components/story";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Story/>
    </main>
  );
}
