import React from "react";
import HeroSection from "./components/HeroSection";
import Info from "./components/Info";
import LodgesSection from "./components/LodgesSection";
import MainLodges from "./components/MainLodges"; 
import Values from "./components/Values";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Info />
      <Values/>
      <MainLodges />
      <LodgesSection />
    </main>
  );
}
