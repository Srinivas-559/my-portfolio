import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className=" relative flex flex-col justify-center items-center overflow-clip mx-auto  bg-black-100 sm:px-10 px-5 ">
      <div className="max-w-7xl w-full" >
        <FloatingNav
          navItems={
          navItems
        }
        />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer/>
      </div>
</main>
  );
}