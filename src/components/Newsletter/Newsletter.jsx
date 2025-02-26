import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Get New Product Details On Your Email</h1>
      <p>Subscribe to our newsletter</p>
      <div>
        <input type="email" placeholder="Enter your Email Id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
