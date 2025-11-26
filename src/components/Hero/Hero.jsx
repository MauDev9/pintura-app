import React from "react";
import "./Hero.css";
import houseImg from "../../assets/house-hero.jpg"; 
import ButtonEstimated from "../ButtonEstimated/ButtonEstimated";
import ButtonCall from "../ButtonCall/ButtonCall";
import ClientCountCard from "../ClientCountCard/ClientCountCard";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Transform Your <br />
              Home With <br />
              Professional Painting
            </h1>

            <p className="hero-sub">
              Serving Aurora Illinois with top-quality painting solutions.
            </p>

            {/* BUTTONS */}
            <div className="hero-buttons">
              <ButtonEstimated />
              <ButtonCall />
            </div>
          </div>

          {/* BENEFITS & STATS ROW */}
          <div className="hero-info-row">
            {/* BENEFITS */}
            <ul className="hero-list">
              <li>+3 Years Experience</li>
              <li>100% Satisfaction Guarantee</li>
              <li>100% Professionals</li>
            </ul>

            {/* CLIENT COUNT CARD */}
            <div className="hero-stats">
              <ClientCountCard count={300} label="Happy Clients" icon="👥" />
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image-wrapper">
          <img src={houseImg} alt="Beautiful painted house exterior" className="hero-image" />
        </div>
      </div>
    </section>
  );
}
