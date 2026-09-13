import Advantages from "@/components/Advantages";
import GrowthStrategy from "@/components/GrowthStrategy";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WorkingProcess from "@/components/WorkingProcess";
import Image from "next/image";

export default function Home() {
  return (
 <div>
  <Navbar></Navbar>
  <Hero></Hero>
  <WorkingProcess></WorkingProcess>
  <GrowthStrategy></GrowthStrategy>
  <Advantages></Advantages>
 </div>
  );
}
