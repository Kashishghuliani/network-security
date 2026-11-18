
import React from "react";
import Navbar from "../components/Navbar.jsx";
import Platform from "../components/Platforms.jsx";
import Footer from "../components/Footer.jsx";

export default function PlatformsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Platform />
      </main>
      <Footer />
    </>
  );
}
