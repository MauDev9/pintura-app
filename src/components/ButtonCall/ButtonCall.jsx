import React from "react";
import "./ButtonCall.css";

const ButtonCall = ({ phoneNumber = "tel:+1-240-471-5025", onClick, children = "CALL NOW" }) => {
  const handleClick = (e) => {
    // If a custom onClick handler is provided, call it first
    if (onClick) {
      onClick(e);
    }
    // The phone link will handle the rest
  };

  return (
    <a 
      href={phoneNumber} 
      className="btn-call"
      onClick={handleClick}
      aria-label="Call us now"
    >
      {children}
    </a>
  );
};

export default ButtonCall;

