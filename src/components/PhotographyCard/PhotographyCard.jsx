import { motion } from "framer-motion";
import React from "react";
import "./PhotographyCard.css";
import { useNavigate } from "react-router-dom";

const PhotographyCard = () => {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.98, transition: { duration: 0.1 } },
  };

  return (
    <div className="card-container" id="about">
      <motion.div
        className="card"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="card-title">
          OUR STORY : CAPTURING MAGIC
        </motion.h1>

        <motion.p variants={itemVariants} className="card-text">
          We are Witlens, your storytellers through the lens. Our journey began
          with a love for capturing life's extraordinary moments, and it quickly
          evolved into a dedicated passion. Today, we are a team of skilled
          photographers committed to preserving the beauty and emotion of your
          most precious events. We blend seamlessly into your occasions,
          ensuring that every smile, every tear, and every laugh is forever
          etched in time.
        </motion.p>

        <motion.div variants={itemVariants} className="signature">
          — Witlens
        </motion.div>

        <motion.button
          className="book-button"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          onClick={() => navigate("/form")}
        >
          Book Now
        </motion.button>

        <motion.div
          className="featured-image-container"
          variants={itemVariants}
        >
          <img
            src="https://i.pinimg.com/736x/ad/0b/5c/ad0b5c036b80883268052e24dd9e57ec.jpg"
            alt="Traditional bride in red saree"
            className="featured-image"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PhotographyCard;
