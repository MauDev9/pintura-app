import React, { useState, useEffect, useRef } from "react";
import "./ClientCountCard.css";

const ClientCountCard = ({ 
  count = 300, 
  label = "Happy Clients",
  icon = "👥",
  duration = 3000 
}) => {
  const [displayCount, setDisplayCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  // Intersection Observer to trigger animation when card comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentCard = cardRef.current;
    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, [isVisible]);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * count);
      
      setDisplayCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayCount(count);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, count, duration]);

  return (
    <div 
      ref={cardRef}
      className={`client-count-card ${isVisible ? 'visible' : ''}`}
      role="region"
      aria-label={`${count} ${label}`}
    >
      <div className="client-count-icon">{icon}</div>
      <div className="client-count-content">
        <div className="client-count-number">{displayCount.toLocaleString()}+</div>
        <div className="client-count-label">{label}</div>
      </div>
    </div>
  );
};

export default ClientCountCard;

