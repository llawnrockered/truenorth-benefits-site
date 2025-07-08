import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";

export default function App() {
  return (
    <Router>
      <header className="bg-white shadow p-4">
        <nav className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo192.png" alt="TrueNorth Logo" className="w-10 h-10" />
            <Link to="/" className="text-2xl font-bold text-blue-800">TrueNorth</Link>
          </div>
          <div className="space-x-6 text-blue-700 font-medium">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/services" className="hover:underline">Services</Link>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <footer className="bg-gray-50 text-center text-sm text-gray-600 py-6 mt-20 border-t">
        <p>&copy; {new Date().getFullYear()} TrueNorth Benefits Group. All rights reserved.</p>
        <p>info@truenorth-benefits.com</p>
      </footer>
    </Router>
  );
}
