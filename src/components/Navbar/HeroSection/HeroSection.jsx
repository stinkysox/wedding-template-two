import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Button animation variant
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2.4,
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#f5a623",
      color: "#fff",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="hero">
      <img
        src="https://i.pinimg.com/736x/50/36/08/50360859203a51e5de8e30e934ab856d.jpg"
        alt="Wedding Couple"
        className="hero-img"
      />
      <div className="hero-overlay">
        <div className="hero-text">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Transforming
          </motion.h2>
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: "easeOut",
            }}
          >
            Dreams
          </motion.h2>
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{
              duration: 0.8,
              delay: 1.4,
              ease: "easeOut",
            }}
          >
            Into Reality
          </motion.h2>
          <motion.button
            className="book-now-btn"
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={buttonVariants}
            onClick={() => navigate("/form")}
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
