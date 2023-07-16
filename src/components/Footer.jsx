import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-main  fixed-bottom  text-center text-white">      
      <div
        className="text-center p-3"
        style={{"backgroundColor": "rgba(0, 0, 0, 0.2)"}}
      >
        Sanjeev Thakur © 2023 All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
