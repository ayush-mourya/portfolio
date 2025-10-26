import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Experience from "./components/Experience.js";
// 1. Import the new About component
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import React from 'react';

export default  function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="pt-20 px-14 md:px-36">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}