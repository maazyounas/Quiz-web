import React, { useState } from "react";
import "./Contact.css";
import { GiBrain } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form Data Submitted: ", formData);
    // Clear form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contactpage">
      <div className="contactheader">
        <button onClick={() => navigate("/home")} className="contacthome">
          Home
        </button>
        <div className="contactlogo">
          <h1>
            <GiBrain />
            Buster
          </h1>
        </div>
      </div>

      <div className="contactbody">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} className="contactform">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
