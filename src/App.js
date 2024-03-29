import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import ScrollToTop from "./components/ScrollToTop";

import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </ScrollToTop>
  );
};

export default App;