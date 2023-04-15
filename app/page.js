import Image from "next/image";
import { Poppins } from "next/font/google";
import Hero from "@/components/Hero";
import Landing from "@/components/Landing";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})
export default function Home() {
  return <main className={`${poppins.className}`}>
    {/* <Hero/> */}
    <Landing/>
  </main>;
}
