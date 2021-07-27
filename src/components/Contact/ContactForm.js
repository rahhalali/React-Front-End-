import React, { useState, useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";


const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const clear = () => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    clear();
  };
  return (
    <div className="drop">
      <div data-aos="zoom-out-up" className="container">
        <h2 data-aos="fade-up-right" className="drop-title">
          <span>Contact </span>Us
        </h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form-input">
            <input
              data-aos="fade-up-right"
              type="text"
              id="name"
              placeholder="Enter your name"
              required
            />
            <input
              data-aos="fade-up-right"
              type="email"
              id="email"
              placeholder="Enter your email!!"
              required
            />
          </div>
          <textarea
            data-aos="flip-up"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your message"
            required
          />
          <button data-aos="fade-down-right" type="submit" className="bt1">
            {status}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
