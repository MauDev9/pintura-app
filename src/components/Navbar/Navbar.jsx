import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import ButtonEstimated from "../ButtonEstimated/ButtonEstimated";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const prevPathnameRef = useRef(location.pathname);

  // Close mobile menu when route changes (handles browser back/forward navigation)
  // This is necessary for browser navigation (back/forward buttons)
  useEffect(() => {
    const pathnameChanged = prevPathnameRef.current !== location.pathname;
    if (pathnameChanged) {
      prevPathnameRef.current = location.pathname;
      // Using setTimeout to defer state update and avoid cascading renders
      const timeoutId = setTimeout(() => setOpen(false), 0);
      return () => clearTimeout(timeoutId);
    }
  }, [location.pathname]);

  // Helper function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">We Paint J&J</Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="navbar-nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div 
          id="navbar-nav"
          className={`collapse navbar-collapse ${open ? 'show' : ''}`}
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/') ? 'active' : ''}`} 
                to="/" 
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/services') ? 'active' : ''}`} 
                to="/services" 
                onClick={() => setOpen(false)}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`} 
                to="/about" 
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/gallery') ? 'active' : ''}`} 
                to="/gallery" 
                onClick={() => setOpen(false)}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`} 
                to="/contact" 
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item ms-lg-3">
              <ButtonEstimated />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
