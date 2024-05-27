import React from "react";
import "./Footer.css"; // Custom CSS for additional styling

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-5 p-4 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Follow us:</h5>
            <p>
              <a
                href="https://www.facebook.com/nandjashoda/"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>{" "}
              <br />
              <a
                href="https://www.instagram.com/nandjashoda_jewels/"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Instagram
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h5>Review us:</h5>
            <p>
              <a
                href="https://www.google.com/maps/place/Nand+Jashoda+art+of+jewellery/@22.5521166,72.9375718,17z/data=!3m1!4b1!4m6!3m5!1s0x395e4fca1be0ada9:0xf91eadadd61b8fda!8m2!3d22.5521117!4d72.9401467!16s%2Fg%2F11r2rm0ljp?entry=ttu"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us:</h5>
            <p>
              <a href="tel:+919825317930" className="text-white">
                (+91) 982 531 7930
              </a>
              <br />
              <a href="tel:+17828822616" className="text-white">
                (+1) 782 882 2616
              </a>
            </p>
          </div>
          <div>
            <h5>Write to Us:</h5>
            <p>
              Email: <br />
              <a href="mailto:pc@dal.ca" className="text-white">
                pc@dal.ca
              </a>
            </p>
          </div>
        </div>
        <p>© 2024 Nand Jashoda Jewelery. All Rights Reserved.</p>
        {/* <p>
          <a href="/privacy" className="text-white">
            Privacy Policy
          </a>{" "}
          |
          <a href="/terms" className="text-white">
            {" "}
            Terms of Service
          </a>
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
