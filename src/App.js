import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Create from "./Pages/Create";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </AnimatePresence>
  );
}
export default App;
