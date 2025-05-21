import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Madhuri",
      location: "Chennai",
      text: "From start to finish, our experience with Witlens was fantastic. They captured our Baby Shower perfectly, and we're grateful for the beautiful memories.",
    },
    {
      id: 2,
      name: "Prashanth",
      location: "Chennai",
      text: "Witlens truly captured the essence of our special day. Every photograph was a work of art, and the attention to detail was astounding. We will cherish these memories forever!",
    },
    {
      id: 3,
      name: "Ananya",
      location: "Bangalore",
      text: "We couldn't be happier with the memories Witlens created for our wedding. Their team was professional, creative, and captured every emotion perfectly.",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2 className="testimonials-title">LOVE FROM CLIENTS</h2>

      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">{testimonial.text}</p>
            <h3 className="client-name">
              {testimonial.name}, {testimonial.location}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
