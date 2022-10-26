import React from "react";
import './global.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Skills, Projects, Experiences, NavBar, Footer } from "./components/imports";

function App() {
  return (     
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/experiences" element={<Experiences/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;