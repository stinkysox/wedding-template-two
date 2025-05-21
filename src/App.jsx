import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import ElegantForm from "./components/ElegantForm/ElegantForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/form" element={<ElegantForm />} />
    </Routes>
  );
};

export default App;
