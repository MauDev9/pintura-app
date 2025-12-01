import React from "react";
import { Link } from "react-router-dom";
import { FaTiktok, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import ButtonCall from "../ButtonCall/ButtonCall";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info Section */}
          <div className="footer-section">
            <h3 className="footer-logo">RenovaPro Painting LLC</h3>
            <p className="footer-description">
              Professional painting services you can trust. From interior touch-ups to complete exterior transformations, we bring quality and excellence to every project.
            </p>
            <div className="footer-cta">
              <ButtonCall />
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="footer-section">
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              <li>
                <Link to="/services">Interior Painting</Link>
              </li>
              <li>
                <Link to="/services">Exterior Painting</Link>
              </li>
              <li>
                <Link to="/services">Commercial Painting</Link>
              </li>
              <li>
                <Link to="/services">Residential Painting</Link>
              </li>
              <li>
                <Link to="/services">Color Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="footer-section">
            <h4 className="footer-title">Get in Touch</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">
                  <FaPhone />
                </span>
                <a href="tel:+1-240-471-5025" className="contact-link">
                  (240) 471-5025
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <FaEnvelope />
                </span>
                <a href="mailto:info@wepaintjj.com" className="contact-link">
                  info@wepaintjj.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <FaMapMarkerAlt />
                </span>
                <span className="contact-text">
                  Serving the Greater Area
                </span>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="footer-social">
              <a 
                href="https://tiktok.com/@wepaintjj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
              <a 
                href="https://instagram.com/wepaintjj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="mailto:info@wepaintjj.com" 
                className="social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} RenovaPro Painting LLC. All Rights Reserved.
            </p>
            <div className="footer-legal">
              <Link to="/privacy" className="legal-link">Privacy Policy</Link>
              <span className="legal-separator">|</span>
              <Link to="/terms" className="legal-link">Terms of Service</Link>
            </div>
          </div>
          <div className="footer-developer">
            <p className="developer-credit">
              Website developed by{" "}
              <a 
                href="https://maudev.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="developer-link"
              >
                mauDev.co
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
