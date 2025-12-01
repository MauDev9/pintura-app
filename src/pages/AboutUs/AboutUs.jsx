import React from "react";
import { FaAward, FaUsers, FaClock, FaStar } from "react-icons/fa";
import ButtonCall from "../../components/ButtonCall/ButtonCall";
import ButtonEstimated from "../../components/ButtonEstimated/ButtonEstimated";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">About RenovaPro Painting LLC</h1>
            <p className="about-hero-subtitle">
              Your trusted partner for professional painting services. We bring quality, expertise, and dedication to every project.
            </p>
          </div>
          <div className="about-hero-image">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=800&fit=crop"
              alt="Professional painting team"
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story">
        <div className="about-container">
          <div className="about-story-wrapper">
            <div className="about-story-image">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
                alt="Our work"
                className="story-img"
              />
            </div>
            <div className="about-story-content">
              <h2 className="section-title">Our Story</h2>
              <p className="section-text">
                RenovaPro Painting LLC was founded with a simple mission: to provide exceptional painting services that transform spaces and exceed expectations. With years of experience in the industry, we've built a reputation for quality craftsmanship, attention to detail, and customer satisfaction.
              </p>
              <p className="section-text">
                Our team of skilled professionals brings passion and expertise to every project, whether it's a small interior touch-up or a complete exterior transformation. We believe that a fresh coat of paint can breathe new life into any space, and we're committed to making that transformation seamless and stress-free for our clients.
              </p>
              <p className="section-text">
                From residential homes to commercial properties, we've completed hundreds of projects, each one a testament to our dedication to excellence and our commitment to delivering results that last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="about-values">
        <div className="about-container">
          <div className="values-header">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FaAward />
              </div>
              <h3 className="value-title">Quality First</h3>
              <p className="value-text">
                We never compromise on quality. Every project receives our full attention and expertise, ensuring results that stand the test of time.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaUsers />
              </div>
              <h3 className="value-title">Customer Focus</h3>
              <p className="value-text">
                Your satisfaction is our priority. We listen to your needs, communicate clearly, and work closely with you throughout the entire process.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaClock />
              </div>
              <h3 className="value-title">Reliability</h3>
              <p className="value-text">
                When we say we'll be there, we're there. Punctuality, professionalism, and keeping our promises are at the heart of our service.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaStar />
              </div>
              <h3 className="value-title">Excellence</h3>
              <p className="value-text">
                We strive for perfection in every detail. From surface preparation to the final coat, excellence is our standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Image */}
      <section className="about-why-choose">
        <div className="about-container">
          <div className="why-choose-wrapper">
            <div className="why-choose-content">
              <h2 className="section-title">Why Choose RenovaPro Painting LLC?</h2>
              <div className="why-choose-list">
                <div className="why-item">
                  <div className="why-icon">✓</div>
                  <div className="why-text">
                    <h3>Experienced Professionals</h3>
                    <p>Our team brings years of combined experience to every project, ensuring expert craftsmanship and attention to detail.</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-icon">✓</div>
                  <div className="why-text">
                    <h3>Premium Materials</h3>
                    <p>We use only the highest quality paints and materials from trusted brands, ensuring durability and beautiful finishes.</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-icon">✓</div>
                  <div className="why-text">
                    <h3>Fully Insured</h3>
                    <p>We're fully licensed and insured, giving you peace of mind throughout your project.</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-icon">✓</div>
                  <div className="why-text">
                    <h3>Competitive Pricing</h3>
                    <p>We offer fair, transparent pricing with no hidden fees. Get quality work at competitive rates.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-choose-image">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop"
                alt="House painting project"
                className="why-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="about-cta">
        <div className="about-container">
          <div className="about-cta-content">
            <h2 className="cta-title">Ready to Transform Your Space?</h2>
            <p className="cta-subtitle">
              Let's discuss your project and bring your vision to life. Contact us today for a free consultation and estimate.
            </p>
            <div className="about-cta-buttons">
              <ButtonCall />
              <ButtonEstimated />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
