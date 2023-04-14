import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer"
    style={{background: "linear-gradient(90deg, rgba(104,29,253,1) 0%, rgba(180,58,155,1) 100%)"}}>
      <h1 className="text-center">All Right Reserved &copy; Thunder-Shop</h1>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
