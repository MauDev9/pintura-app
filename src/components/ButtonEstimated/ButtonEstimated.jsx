import React from "react";
import { useNavigate } from "react-router-dom";
import "./ButtonEstimated.css";

const ButtonEstimated = ({ onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // If a custom onClick handler is provided, call it first
    if (onClick) {
      onClick();
    }
    // Navigate to contact page
    navigate("/contact");
  };

  return (
    <button className="btn-estimated" onClick={handleClick}>
      GET ESTIMATE
    </button>
  );
};

export default ButtonEstimated;
