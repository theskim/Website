import React from "react";
import "./global.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Education,
  Projects,
  Experiences,
  NavBar,
  Footer,
  BackgroundAll,
} from "./components/imports";
import Modal from "./components/pages/Projects/Modal";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/project/:slug" element={<Modal />} />
        <Route
          path="/"
          element={
            <BackgroundAll>
              <Home />
              <Experiences id="experience" />
              <Education id="education" />
              <Projects id="project" />
            </BackgroundAll>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
