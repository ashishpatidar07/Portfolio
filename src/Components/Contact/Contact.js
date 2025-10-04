import React, { useRef } from "react";
import "./Contact.css";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_30zkdjq", "template_4xitq1a", form.current, {
        publicKey: "AsJJVNIinR5R6f7Yt",
      })
      .then(
        () => {
          alert("Email sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div id="contact">
      <h1 className="contactPageTittle">Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities.
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your Name" name="from_name" />
        <input type="email" className="email" placeholder="Your Email" name="from_email" />
        <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
        <button className="submitBtn" type="submit">Submit</button>
        <div className="links">
          <img src={FacebookIcon} alt="facebook" />
          <img src={TwitterIcon} alt="twitter" />
          <img src={YouTubeIcon} alt="youtube" />
          <img src={InstagramIcon} alt="instagram" />
        </div>
      </form>
    </div>
  );
};

export default Contact;