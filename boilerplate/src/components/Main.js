import React from "react";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <nav>
        <div>Logo</div>

        <div className="navLinks">
          <NavLink to="/home">
            <div className="navLink">Home</div>
          </NavLink>

          <div className="navLink">About</div>
          <div className="navLink">Contact</div>
        </div>
      </nav>
      <div className="mainBody">This is the main body</div>
      <footer>This is the main footer</footer>
    </div>
  );
};

export default Main;
