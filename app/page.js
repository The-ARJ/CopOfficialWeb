import { Poppins } from "next/font/google";
import About from "@/components/Landing/About";
import Navbar from "@/components/Landing/Navbar";
import Hero from "@/components/Landing/Hero";
import Services from "@/components/Landing/Services";
import Footer from "@/components/Landing/Footer";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})
export default function Home() {
  return <main className={`${poppins.className}`}>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Footer />
  </main>;
}
