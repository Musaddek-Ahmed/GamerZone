import Image from "next/image";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero/>
    </main>
  );
}
