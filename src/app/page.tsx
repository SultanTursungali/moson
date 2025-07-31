import React from "react";
import HeroSection from "./components/HeroSection";
import Info from "./components/Info";
import LodgesSection from "./components/LodgesSection";
import MainLodges from "./components/MainLodges"; 
import Values from "./components/Values";
import Readers from "./components/Readers";
import Lodges from "./components/Lodges";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Info />
      <Readers />
      <Values/>
      {/* <MainLodges />
      <LodgesSection /> */}
      <Lodges/>
    </main>
  );
}
