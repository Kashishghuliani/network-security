
import React from "react";
import Navbar from "../components/Navbar.jsx";
import Services from "../components/Services.jsx";
import Footer from "../components/Footer.jsx";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Services />
      </main>
      <Footer />
    </>
  );
}
