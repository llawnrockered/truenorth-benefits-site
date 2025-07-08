
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";

function App() {
  return (
    <Router>
      <header className="header">
        <nav className="nav">
          <div className="logo-nav">
            <img src="/logo192.png" alt="Logo" className="logo" />
            <Link to="/" className="brand">TrueNorth</Link>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} TrueNorth Benefits Group. All rights reserved.</p>
        <p>info@truenorth-benefits.com</p>
      </footer>
    </Router>
  );
}

export default App;
