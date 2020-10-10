import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex">
    <Link to="/">About</Link>
    <Link to="/dashboard">DashBoard</Link>
  </nav>
)

export default Navbar;