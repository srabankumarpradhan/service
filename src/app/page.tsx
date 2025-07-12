'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import ContactNow from "@/sections/ContactNow";
import BasicUnderstanding from "@/sections/BasicUnderstanding";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      {/* 🔹 Hero Section */}
      <section id="hero" className="pt-20 min-h-screen">
        <Hero />
      </section>

      {/* 🔹 Services Section */}
      <section id="services" className="min-h-screen">
        <Services />
      </section>

      {/* 🔹 About Section */}
      <section id="about" className="min-h-screen bg-white px-6 md:px-16 py-10">
        <About />
      </section>

      {/* 🔹 Contact Section — hidden on small screens */}
      <section
        id="contact"
        className="hidden md:block min-h-screen bg-gray-50 px-6 md:px-16 py-10"
      >
        <ContactNow />
      </section>

      {/* 🔹 Basic Understanding Section */}
      <section id="basic" className="min-h-screen bg-white px-6 md:px-16 py-10">
        <BasicUnderstanding />
      </section>

      <Footer />
    </main>
  );
}
