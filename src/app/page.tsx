import Navbar from "../components/navbar";
import Hero from "../components/hero";
import SkillsAndTools from "@/components/skillandtools";
import Portfolio from "@/components/portfolio";
import AboutMe from "@/components/about";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black dark:bg-background">
      <div className="space-y-7">
        <Navbar />
        <Hero />
        <SkillsAndTools />
        <Portfolio />
        <AboutMe />
      </div>
      
      {/* Contact Me Button */}
      <div className="flex justify-center mt-10 mb-5">
        <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg transition duration-300 hover:bg-blue-700">
          Contact Me
        </a>
      </div>
    </div>
  );
}
