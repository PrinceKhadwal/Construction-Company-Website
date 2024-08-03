import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import OurServices from "./components/OurServices"
import OurWork from "./components/OurWork"
import Testinomials from "./components/Testinomials"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"
function App() {
  
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <OurServices />
      <OurWork />
      <Testinomials />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
