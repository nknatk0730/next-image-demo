import Image from "next/image";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <div className="relative aspect-video bg-green-300">
      <Image src='/favicon.ico' alt='' className="object-contain" fill />
      <Hero />
    </div>
  );
}
