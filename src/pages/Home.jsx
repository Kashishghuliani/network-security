import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import Services from "../components/Services.jsx";
import Platform from "../components/Platforms.jsx";
import Methodology from "../components/Methodology.jsx";
import CTA from "../components/Cta.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Platform />
        <Methodology />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
