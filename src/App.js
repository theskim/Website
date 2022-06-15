import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Importing individual pages
import Home from "./components/pages/Home/Home";
import Skills from "./components/pages/Skills/Skills";
import Experiences from "./components/pages/Experiences/Experiences";
import Projects from "./components/pages/Projects/Projects";
import Achievements from "./components/pages/Achievements/Achievements";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (     
    <Router>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/experiences" element={<Experiences/>} />
          <Route path="/achievements" element={<Achievements/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;