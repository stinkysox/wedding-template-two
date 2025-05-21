import React, { useState } from "react";
import "./ElegantForm.css";
import Navbar from "../Navbar/Navbar";

const ElegantForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    phone: "",
    date: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, eventType, phone, date, location } = formData;

    const message = `Hello, I would like to book a session.%0A
*Name:* ${name}%0A
*Email:* ${email}%0A
*Phone:* ${phone}%0A
*Event Type:* ${eventType}%0A
*Event Date:* ${date}%0A
*Location:* ${location}`;

    const phoneNumber = "917032066078";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.location.href = whatsappURL;
  };

  return (
    <>
      <Navbar />
      <div className="elegant-page-wrapper">
        <div className="elegant-form-wrapper">
          <div className="elegant-form-container">
            <div className="form-header">
              <h2>Book Your Special Event</h2>
              <p>
                Fill in the details below, and we'll make your dream come true
              </p>
            </div>

            <form className="elegant-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="eventType">Event Type</label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select event type
                  </option>
                  <option value="Wedding">Wedding</option>
                  <option value="Engagement">Engagement</option>
                  <option value="PreWedding">Pre-Wedding</option>
                  <option value="BabyShower">Baby Shower</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="date">Event Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="location">Event Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter the event location"
                  required
                />
              </div>

              <button type="submit" className="book-now-btn">
                BOOK NOW
              </button>
            </form>

            <div className="form-footer">
              <p>We'll respond to your inquiry within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElegantForm;
