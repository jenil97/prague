import React from "react";

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Team from "./components/Team";
import Clients from "./components/Clients";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Team />
      <Clients />
      <Testimonial />
    </div>
  );
}

export default App;
