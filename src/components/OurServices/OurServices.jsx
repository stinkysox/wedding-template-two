import React, { useState } from "react";
import { motion } from "framer-motion"; // ✅ Import motion
import "./OurServices.css";

const services = [
  {
    title: "Photography",
    image:
      "https://i.pinimg.com/736x/81/bb/4c/81bb4cd3c82eb9cac3df5248d8bfbcb0.jpg",
  },
  {
    title: "Candid Photography",
    image:
      "https://i.pinimg.com/736x/86/20/f5/8620f5fa9c8d5daf805afa31da750e8b.jpg",
  },

  {
    title: "Cinematic Videography",
    image:
      "https://i.pinimg.com/736x/47/56/91/475691b7b81db2691281b542257d6a15.jpg",
  },
];

const OurServices = () => {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const toggleZoom = (index) => {
    setZoomedIndex(zoomedIndex === index ? null : index);
  };

  return (
    <div className="our-services" id="services">
      <p className="subheading">OUR SERVICES</p>
      <h2 className="main-heading">
        Where every <span>picture</span> <br /> tells a story
      </h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img
              src={service.image}
              alt={service.title}
              onClick={() => toggleZoom(index)}
              className={zoomedIndex === index ? "zoomed" : ""}
            />
            <p>{service.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
