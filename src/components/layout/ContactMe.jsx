import "./contactme.css";
import useAnimateOnScroll from "../../Hooks/useAnimateOnScroll";
import { useState } from "react";
import gmail from "../../assets/gmail.png";
import github from "../../assets/github.png";
import phone from "../../assets/phone.png";
import ln from "../../assets/ln.png";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const [ref, isVisible] = useAnimateOnScroll();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // 'sending', 'success', 'error'

  function handleChange(event) {
    setUserData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const serviceID = "service_71872es";
    const templateID = "template_ki6mf5e";
    const publicKey = "SXKhMpRWn4N7mx9de";

    const templateParams = {
      from_name: userData.name,
      from_email: userData.email,
      message: userData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("success");
        setUserData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.log("FAILED...", error);
        setStatus("error");
      },
    );
  }

  return (
    <section ref={ref} className="contact-container" id="/contact">
      <h3
        className={`title animate__animated ${isVisible ? "animate__zoomIn" : ""}`}>
        Let’s Build Something
      </h3>
      <p className="contact-subtitle">
        Have a project in mind or want to work together? I’m always open to new
        ideas and opportunities.
      </p>
      <div className="form-social">
        <form
          // action=""
          className={`contact-form animate__animated ${isVisible ? "animate__fadeInRight" : ""}`}
          onSubmit={handleSubmit}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            value={userData.name}
            required
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            required
            onChange={handleChange}
            name="email"
            value={userData.email}
          />
          <label htmlFor="">Message</label>
          <textarea
            name="message"
            id=""
            placeholder="Tell me about your project..."
            required
            onChange={handleChange}
            value={userData.message}></textarea>
          <button className="send-btn" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Let's talk"}
          </button>
          {status === "success" && (
            <p className="form-message success">
              Message sent successfully! 🎉
            </p>
          )}
          {status === "error" && (
            <p className="form-message error">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
        <div
          className={`social animate__animated ${isVisible ? "animate__fadeInLeft" : ""}`}>
          <h3 className="social-title">My social</h3>
          <p className="links-substitle">Find me here</p>
          <div className="links">
            <a href="tel:+213563826556">
              <img src={phone} alt="" />
            </a>
            <a href="mailto:walid.sabri.dz.31@gmail.com">
              <img src={gmail} alt="" />
            </a>
            <a href="https://github.com/walidsabri" target="_blank">
              <img src={github} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/sabri-walid-8735992a2/"
              target="_blank">
              <img src={ln} alt="" />
            </a>
          </div>
        </div>
      </div>
      <p className="copyright-txt">
        © 2026 Walid Sabri. Built with React & ⚡ by me{" "}
      </p>
    </section>
  );
}
