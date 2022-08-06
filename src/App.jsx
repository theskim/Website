import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Skills, Projects, Experiences, Achievements, Navbar } from "./components/imports";

function App() {
  return (     
    <Router>
      <Navbar />
      <Routes>
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/experiences" element={<Experiences/>} />
        <Route path="/achievements" element={<Achievements/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;