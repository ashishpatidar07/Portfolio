import React, { useRef } from "react";
import "./Contact.css";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_uhkhh2l", "template_4xitq1a", form.current, {
        publicKey: "AsJJVNIinR5R6f7Yt",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert('email sent !')
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div id="contact">
      <h1 className="contactPageTittle">Contact me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities.
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your Name" name="your name" />
        <input type="email" className="email" placeholder="Your Email" name="your_email" />
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button className="submitBtn" type="submit" value="send">
          Submit
        </button>
        <div className="links">
          <img src={FacebookIcon} alt="facebook" className="" />
          <img src={TwitterIcon} alt="twitter" className="" />
          <img src={YouTubeIcon} alt="Youtube" className="" />
          <img src={InstagramIcon} alt="instagram" className="" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
