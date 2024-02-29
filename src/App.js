import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Create from "./Pages/Create";
import LightModeToggle from "./Components/LightModeToggle.jsx";
import { useState } from "react";

function App() {
  const location = useLocation();
  const [lightMode, setLightMode] = useState("dark");

  return (
    <div>
      <LightModeToggle lightMode={lightMode} setLightMode={setLightMode} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home lightMode={lightMode} />} />
          <Route path="/about" element={<About lightMode={lightMode} />} />
          <Route path="/work" element={<Work lightMode={lightMode} />} />
          <Route path="/create" element={<Create lightMode={lightMode} />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
export default App;
