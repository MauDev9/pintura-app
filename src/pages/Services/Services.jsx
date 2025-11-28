import { Link } from "react-router-dom";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import ButtonCall from "../../components/ButtonCall/ButtonCall";
import ButtonEstimated from "../../components/ButtonEstimated/ButtonEstimated";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Services.css";

export default function Services() {
  const serviceAreas = [
    "Chicago", "Aurora", "Naperville", "Joliet", "Rockford", 
    "Elgin", "Peoria", "Saint Charles", "Waukegan", "Cicero"
  ];

  return (
    <div className="services-page">
      <ServiceCard />
      
      {/* Service Areas Section */}
      <section className="services-info-section">
        <div className="services-info-container">
          <div className="service-areas">
            <div className="service-areas-header">
              <div className="service-areas-icon">
                <FaMapMarkerAlt />
              </div>
              <h2 className="info-title">Areas We Serve</h2>
              <p className="info-subtitle">
                Proudly serving cities throughout Illinois. We bring our professional painting services to communities across the state, ensuring quality craftsmanship wherever we work.
              </p>
            </div>
            <div className="cities-grid">
              {serviceAreas.map((city, index) => (
                <div key={index} className="city-tag">
                  <FaMapMarkerAlt className="city-icon" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
            <p className="service-areas-footer">
              Don't see your city? <Link to="/contact" className="contact-link">Contact us</Link> - we may still be able to serve your area!
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="services-cta">
        <div className="services-cta-container">
          <div className="services-cta-buttons">
            <ButtonCall />
            <ButtonEstimated />
          </div>
        </div>
      </section>
    </div>
  );
}
