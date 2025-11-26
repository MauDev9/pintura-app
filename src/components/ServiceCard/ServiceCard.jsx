import React from "react";
import "./ServiceCard.css";
import services from "../../data/servicesStock";
import ButtonEstimated from "../ButtonEstimated/ButtonEstimated";


export default function ServiceCard() {
  return (
    <section className="services-section">
      <div className="services-section-header">
        <h2>Our Services</h2>
        <p>
          From interior touch-ups to complete exterior transformations, we provide comprehensive painting solutions for every need.
        </p>
      </div>
      
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card-wrapper">
            <div className="service-card">
              {/* Front of card - Image */}
              <div className="service-card-front">
                <div className="service-card-image-wrapper">
                  <img 
                    src={service.image || `https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80`} 
                    alt={service.title}
                    className="service-card-image"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null; // Prevent infinite loop
                      e.target.src = `https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80`;
                    }}
                  />
                  <div className="service-card-overlay">
                    <h3>{service.title}</h3>
                  </div>
                </div>
              </div>

              {/* Back of card - Content */}
              <div className="service-card-back">
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="service-card-button">
                  <ButtonEstimated/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
