import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import OurWork from "./OurWork";
import Teams from "./Teams";
import ContactUs from "./components/ContactUs";
const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  return (
    <div className="dark:bg-black">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero/>
      <TrustedBy/>
      <Services/>
      <OurWork/>
      <Teams/>
      <ContactUs/>
    </div>
  );
};
export default App;
