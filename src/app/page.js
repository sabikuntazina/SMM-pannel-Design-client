import Advantages from "@/components/Advantages";
import CtaSection from "@/components/CtaSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import GrowthStrategy from "@/components/GrowthStrategy";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import WorkingProcess from "@/components/WorkingProcess";
import Image from "next/image";

export default function Home() {
  return (
 <div>
  <Navbar></Navbar>
  <Hero></Hero>
  <WorkingProcess></WorkingProcess>
  <ServicesSection></ServicesSection>
  <GrowthStrategy></GrowthStrategy>
  <Advantages></Advantages>
  <FAQ></FAQ>
  <CtaSection></CtaSection>
  <Footer></Footer>
 </div>
  );
}
