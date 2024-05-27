import React from "react";
import "./Footer.css"; // Custom CSS for additional styling

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-5 p-4 text-center">
      <div className="container">
        <p>© 2024 Your Company Name. All Rights Reserved.</p>
        <p>
          <a href="/privacy" className="text-white">
            Privacy Policy
          </a>{" "}
          |
          <a href="/terms" className="text-white">
            {" "}
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
