import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <h3>Alan Resto</h3>
      </div>
      <nav>
        <Link to="/food">Food</Link>
        <Link to="/">Transaksi</Link>
      </nav>
    </header>
  );
};

export default Navbar;
