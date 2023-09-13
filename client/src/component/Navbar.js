import React from 'react';
import '../css/navbar.css'; // Import your CSS file for NavBar styling

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">InnoVita</a>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
