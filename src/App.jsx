
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import PlatformsPage from "./pages/PlatformsPage.jsx";
import MethodologyPage from "./pages/MethodologyPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/platforms" element={<PlatformsPage />} />
        <Route path="/methodology" element={<MethodologyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
