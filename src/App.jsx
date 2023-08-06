import React from "react";
import SideHero from "./components/SideHero";
import MainHero from "./components/MainHero";
import Social from "./components/Social";
import Navigation from "./components/Navigation";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
});

function App() {
  return (
    <>
      <Social />
      <SideHero />
      <Navigation />
      <MainHero />
    </>
  );
}

export default App;
