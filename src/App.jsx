import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Skills, Projects, Experiences, Achievements, NavBar, Footer } from "./components/imports";

function App() {
  return (     
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/experiences" element={<Experiences/>}/>
        <Route path="/achievements" element={<Achievements/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;