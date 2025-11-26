import ContactForm from "../../components/ContactForm/ContactForm";
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
        <div className="contact-form-wrapper">
          <ContactForm 
            title="Contact Us"
            subtitle="Have a question or ready to start your painting project? We'd love to hear from you!"
            onSubmit={handleFormSubmit}
          />
        </div>
      </div>
    </div>
  );
}
