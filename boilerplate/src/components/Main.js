import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
const Main = () => {
  return (
    <div>
      <nav>
        <div>Logo</div>

        <div className="navLinks">
          <NavLink className="navLink" to="/">
            Home
          </NavLink>
          <NavLink className="navLink" to="/about">
            About
          </NavLink>
          <NavLink className="navLink" to="/contact">
            Contact
          </NavLink>
          <button className="loginBtn">Login</button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>This is the main footer</footer>
    </div>
  );
};

export default Main;
