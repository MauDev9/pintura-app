import React, { useState } from "react";
import "./FloatingChat.css";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("form"); // 'form' or 'call'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const phoneNumber = "tel:+1-240-471-5025";
  const displayPhone = "(240) 471-5025";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsOpen(false);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-chat-container">
      {/* Chat Window */}
      {isOpen && (
        <div className="floating-chat-window">
          <div className="floating-chat-header">
            <div className="chat-header-content">
              <h3>Contact Us</h3>
              <p>How can we help you today?</p>
            </div>
            <button 
              className="chat-close-btn"
              onClick={toggleChat}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="chat-tabs">
            <button
              className={`chat-tab ${activeTab === "form" ? "active" : ""}`}
              onClick={() => setActiveTab("form")}
            >
              📝 Send Message
            </button>
            <button
              className={`chat-tab ${activeTab === "call" ? "active" : ""}`}
              onClick={() => setActiveTab("call")}
            >
              📞 Call Us
            </button>
          </div>

          <div className="chat-content">
            {activeTab === "form" ? (
              <form className="chat-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(240) 471-5025"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button type="submit" className="chat-submit-btn">
                  Send Message
                </button>
              </form>
            ) : (
              <div className="call-section">
                <div className="call-icon">📞</div>
                <h4>Ready to talk?</h4>
                <p>Give us a call and we'll be happy to discuss your painting project!</p>
                <a href={phoneNumber} className="call-btn">
                  Call {displayPhone}
                </a>
                <p className="call-hours">Available: Mon-Fri 8AM-6PM</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        className={`floating-chat-btn ${isOpen ? "active" : ""}`}
        onClick={toggleChat}
        aria-label="Open chat"
      >
        {isOpen ? "×" : "💬"}
      </button>
    </div>
  );
};

export default FloatingChat;

