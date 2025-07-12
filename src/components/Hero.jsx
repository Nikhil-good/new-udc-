// Hero.jsx
import React from "react";
import "./Hero.css";

const Hero = ({ onPopupOpen }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent jump to #contact
    if (onPopupOpen) onPopupOpen();
  };

  return (
    
    <section className="hero-wrapper">
      
      <div className="hero-content-container">
        <marquee scrollamount="18" behavior="scroll" direction="left" className="custom-marquee">
  🚀 We are a Bitrix24 Gold Partner | ✅ 100+ CRM Clients Served | 💬 Free Consultation Available | 📞 Call Now: +91 8958847686 | 📩 info@uniquedesignconsultnt.in
</marquee>

        <div className="hero-text">
          <div className="navbar-marquee">
  
</div>
          <h1>
            One Platform,<br />
            find a <span>Many Possibilities</span>
          </h1>
          <p>Make your business perfect right now!</p>

          {/* ✅ Connect the button */}
          <a href="#contact" className="free-quote-btn" onClick={handleClick}>
            Free Quote →
          </a>

          <a href="tel:+918958847686" className="hero-support text-decoration-none">
  <div className="support-icon">📞</div>
  <div>
    <p className="support-label">ONLINE SUPPORT</p>
    <p className="support-number">+91 8958847686</p>
  </div>
</a>
</div>
        <div className="hero-image">
          <img
            src={`${import.meta.env.BASE_URL}assets/img/hero/hero-banner 2.png`}
            alt="Hero Visual"
            className="hero-main-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
