import React from "react";
import './global.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Skills, Projects, Experiences, NavBar, Footer, BackgroundAll, ContactMe } from "./components/imports";

function App() {
  return (     
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={
          <BackgroundAll>
            <Home/>
            <Skills/>
            <Experiences id='experiences'/>
            <Projects id='projects'/>
            <ContactMe/>
          </BackgroundAll>
        }/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;