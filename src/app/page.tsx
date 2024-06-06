import Link from "next/link";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main className="flex justify-center text-center flex-col min-h-screen">
      <Hero />
    </main>
  );
}
