import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  return (
    <div className="dark:bg-black">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero/>
    </div>
  );
};
export default App;
