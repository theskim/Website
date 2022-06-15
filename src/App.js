import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing individual pages
import Home from "./components/pages/Home/Home";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (     
    <Router>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route exact path="/" component={Home} />
          {/* <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;