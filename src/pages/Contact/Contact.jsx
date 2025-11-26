import ContactForm from "../../components/ContactForm/ContactForm";
import { 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaMapMarkerAlt,
  FaTiktok,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const handleFormSubmit = async (formData) => {
    // Handle form submission here
    // You can integrate with your backend API
    console.log("Contact form submitted:", formData);
    
    // Example: Send to API
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    // return response.json();
  };

  return (
    <div className="contact-page">
      <div className="contact-page-container">
        <div className="contact-page-wrapper">
          {/* Contact Information Section */}
          <div className="contact-info-section">
            <div className="contact-info-header">
              <h2 className="contact-info-title">Get in Touch</h2>
              <p className="contact-info-subtitle">
                We're here to help! Reach out to us through any of these channels.
              </p>
            </div>

            {/* Contact Methods Group */}
            <div className="contact-info-group">
              <h3 className="contact-group-title">Contact Methods</h3>
              <div className="contact-info-items">
                {/* Phone Number */}
                <div className="contact-info-item">
                  <div className="contact-info-icon phone-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-info-content">
                    <h4 className="contact-info-label">Phone</h4>
                    <a href="tel:+1-240-471-5025" className="contact-info-value">
                      (240) 471-5025
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-info-item">
                  <div className="contact-info-icon email-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-info-content">
                    <h4 className="contact-info-label">Email</h4>
                    <a href="mailto:info@wepaintjj.com" className="contact-info-value">
                      info@wepaintjj.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Information Group */}
            <div className="contact-info-group">
              <h3 className="contact-group-title">Business Information</h3>
              <div className="contact-info-items">
                {/* Working Hours */}
                <div className="contact-info-item">
                  <div className="contact-info-icon hours-icon">
                    <FaClock />
                  </div>
                  <div className="contact-info-content">
                    <h4 className="contact-info-label">Working Hours</h4>
                    <div className="contact-info-value">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="contact-info-item">
                  <div className="contact-info-icon location-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-info-content">
                    <h4 className="contact-info-label">Service Area</h4>
                    <p className="contact-info-value">
                      Serving the Greater Area
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Group */}
            <div className="contact-info-group social-group">
              <h3 className="contact-group-title">Follow Us</h3>
              <div className="social-media-links">
                <a 
                  href="https://tiktok.com/@wepaintjj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-media-link tiktok"
                  aria-label="TikTok"
                >
                  <FaTiktok className="social-icon-svg" />
                  <span className="social-text">TikTok</span>
                </a>
                <a 
                  href="https://instagram.com/wepaintjj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-media-link instagram"
                  aria-label="Instagram"
                >
                  <FaInstagram className="social-icon-svg" />
                  <span className="social-text">Instagram</span>
                </a>
                <a 
                  href="https://wa.me/12404715025" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-media-link whatsapp"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="social-icon-svg" />
                  <span className="social-text">WhatsApp</span>
                </a>
                <a 
                  href="mailto:info@wepaintjj.com" 
                  className="social-media-link email"
                  aria-label="Email"
                >
                  <FaEnvelope className="social-icon-svg" />
                  <span className="social-text">Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form-wrapper">
            <ContactForm 
              title="Send us a Message"
              subtitle="Fill out the form below and we'll get back to you as soon as possible."
              onSubmit={handleFormSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
