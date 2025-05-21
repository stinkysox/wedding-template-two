import React from "react";
import "./CardTwo.css";
import { useNavigate } from "react-router-dom";
const CardTwo = () => {
  const navigate = useNavigate();
  return (
    <div className="card-two">
      <div className="images-container">
        <div className="arch-image">
          <img
            src="https://i.pinimg.com/736x/9e/91/eb/9e91eb85f896212dccaf39f0682c985c.jpg"
            alt="Cultural wedding ceremony"
          />
        </div>
        <div className="couple-image">
          <img
            src="https://i.pinimg.com/736x/27/21/fe/2721fe86c3bdd7e64912f766b8af01d6.jpg"
            alt="Couple in traditional attire"
          />
        </div>
      </div>
      <div className="content">
        <h2 className="headline">YOUR DREAM IS OUR DESTINY</h2>
        <p className="services">
          Wedding | Engagement | Birthday | Baby Shower
        </p>
        <button className="book-now-btn" onClick={() => navigate("/form")}>
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default CardTwo;
