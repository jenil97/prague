import React from "react";

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-black">
      <Header />
      <Hero />
      <About/>
    </div>
  );
}

export default App;
