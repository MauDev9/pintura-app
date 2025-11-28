import React, { useState } from "react";
import ButtonCall from "../../components/ButtonCall/ButtonCall";
import ButtonEstimated from "../../components/ButtonEstimated/ButtonEstimated";
import "./Gallery.css";

// Gallery images data - you can replace these with actual images
const galleryImages = [
  { id: 1, category: "interior", title: "Modern Living Room", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&auto=format" },
  { id: 2, category: "exterior", title: "House Exterior", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&auto=format" },
  { id: 3, category: "interior", title: "Bedroom Makeover", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop" },
  { id: 4, category: "commercial", title: "Office Space", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" },
  { id: 5, category: "exterior", title: "Front Door", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop" },
  { id: 6, category: "interior", title: "Kitchen Renovation", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&h=600&fit=crop" },
  { id: 7, category: "commercial", title: "Retail Store", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop" },
  { id: 8, category: "exterior", title: "Garage Door", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&auto=format" },
  { id: 9, category: "interior", title: "Bathroom Design", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop&auto=format" },
  { id: 10, category: "exterior", title: "Fence Painting", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&auto=format" },
  { id: 11, category: "interior", title: "Dining Room", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop&auto=format" },
  { id: 12, category: "commercial", title: "Restaurant Interior", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&auto=format" },
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "interior", name: "Interior" },
  { id: "exterior", name: "Exterior" },
  { id: "commercial", name: "Commercial" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleImageError = (imageId) => {
    setImageErrors(prev => ({
      ...prev,
      [imageId]: true
    }));
  };

  const getPlaceholderImage = (category) => {
    // Fallback placeholder based on category
    const placeholders = {
      interior: `https://via.placeholder.com/800x600/7ca85b/ffffff?text=Interior+Painting`,
      exterior: `https://via.placeholder.com/800x600/6a9a4a/ffffff?text=Exterior+Painting`,
      commercial: `https://via.placeholder.com/800x600/5a8a3a/ffffff?text=Commercial+Painting`,
    };
    return placeholders[category] || `https://via.placeholder.com/800x600/cccccc/666666?text=Project+Image`;
  };

  return (
    <div className="gallery-page">
      <div className="gallery-container">
        {/* Gallery Header */}
        <div className="gallery-header">
          <h1 className="gallery-title">Our Gallery</h1>
          <p className="gallery-subtitle">
            Explore our portfolio of completed projects. From interior transformations to exterior makeovers, see the quality and craftsmanship we bring to every job.
          </p>
        </div>

        {/* Category Filters */}
        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map(image => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <div className="gallery-image-wrapper">
                <img
                  src={imageErrors[image.id] ? getPlaceholderImage(image.category) : image.image}
                  alt={image.title}
                  className="gallery-image"
                  loading="lazy"
                  onError={() => handleImageError(image.id)}
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3 className="gallery-item-title">{image.title}</h3>
                    <span className="gallery-item-category">
                      {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="gallery-empty">
            <p>No images found in this category.</p>
          </div>
        )}

        {/* Call to Action Buttons */}
        <div className="gallery-cta">
          <div className="gallery-cta-content">
            <h2 className="gallery-cta-title">Ready to Start Your Project?</h2>
            <p className="gallery-cta-subtitle">
              Get in touch with us today for a free estimate and consultation.
            </p>
            <div className="gallery-cta-buttons">
              <ButtonCall />
              <ButtonEstimated />
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              ×
            </button>
            <img
              src={imageErrors[selectedImage.id] ? getPlaceholderImage(selectedImage.category) : selectedImage.image}
              alt={selectedImage.title}
              className="lightbox-image"
              onError={() => handleImageError(selectedImage.id)}
            />
            <div className="lightbox-info">
              <h3 className="lightbox-title">{selectedImage.title}</h3>
              <span className="lightbox-category">
                {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
