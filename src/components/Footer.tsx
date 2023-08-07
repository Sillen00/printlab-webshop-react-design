import { useState } from "react";
import "./Footer.css";

function Footer() {
  const [placeholder, setPlaceholder] = useState("Your Email Address");

  const handleInputChange = () => {
    setPlaceholder(" ");
  };

  // const inputStyle = {
  //   letterSpacing: "0.4em", // Adjust this value to increase/decrease spacing
  // };

  return (
    <>
      <section className="footer-section">
        <div className="footer-container">
          <h2>Join Our Newsletter</h2>
          <div className="footer-subscribe-section">
            <input
              type="text"
              placeholder={placeholder}
              onChange={handleInputChange}
              onFocus={() => setPlaceholder(" ")}
              onBlur={() => setPlaceholder("Original Placeholder")}
              // style={inputStyle}
            />
            <button>SUBSCRIBE</button>
          </div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </section>
      <section>
        <p>&copy; 2023 All Rights Reserved.</p>
        <div>
          <p>Help & Info</p>
          <p>Terms & Privacy</p>
        </div>
      </section>
    </>
  );
}

export default Footer;
