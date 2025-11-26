import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import ContactForm from "../../components/ContactForm/ContactForm";
import ButtonEstimated from "../../components/ButtonEstimated/ButtonEstimated";
import services from "../../data/servicesStock";
import "./Home.css";

export default function Home() {
  // Show only first 3 services as preview
  const previewServices = services.slice(0, 3);

  const handleFormSubmit = async (formData) => {
    // Handle form submission here
    // You can integrate with your backend API
    console.log("Home form submitted:", formData);
    
    // Example: Send to API
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    // return response.json();
  };

  return (
    <div className="home-page">
      <Hero />
      
      {/* Services Preview Section */}
      <section className="services-preview">
        <div className="services-preview-container">
          <div className="services-preview-header">
            <h2>Our Services</h2>
            <p>
              From interior touch-ups to complete exterior transformations, we provide comprehensive painting solutions for every need.
            </p>
          </div>

          <div className="services-preview-grid">
            {previewServices.map(service => (
              <div key={service.id} className="service-preview-card">
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <ul>
                    {service.features.slice(0, 2).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <Link to="/services" className="services-view-all-btn">
            View All Services →
          </Link>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="home-contact-section">
        <div className="home-contact-container">
          <div className="contact-section-wrapper">
            <article className="why-choose-us">
              <h2>Why Choose Us?</h2>
              <div className="why-choose-content">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h3>Professional Excellence</h3>
                    <p>
                      Our team consists of highly trained and experienced professionals who bring years of expertise to every project. We're committed to delivering exceptional results that exceed your expectations.
                    </p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h3>Premium Quality Materials</h3>
                    <p>
                      We use only the finest paints and materials from trusted brands. Our commitment to quality ensures your paint job will look beautiful and last for years to come.
                    </p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h3>Attention to Detail</h3>
                    <p>
                      Every surface is meticulously prepared, and every stroke is carefully applied. We take pride in our craftsmanship and never cut corners, ensuring a flawless finish every time.
                    </p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h3>Reliable & Trustworthy</h3>
                    <p>
                      We understand that your home or business is important to you. That's why we show up on time, communicate clearly, and complete projects as promised. Your satisfaction is our priority.
                    </p>
                  </div>
                </div>
              </div>
              <div className="article-cta">
                <ButtonEstimated />
              </div>
            </article>
            
            <div className="contact-form-wrapper">
              <ContactForm 
                title="Request a Free Quote"
                subtitle="Get started on your painting project today. Fill out the form below and we'll provide you with a free estimate."
                onSubmit={handleFormSubmit}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
