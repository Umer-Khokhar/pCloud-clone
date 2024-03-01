import React from "react";
import "./hero.css";
// import heroImg from '/home/docs.png'
const Hero = ({ tourImg, heroImg, fbLogo, gLogo, appleLogo }) => {
  return (
    // Hero Section
    <section className="hero">
      {/* Left Section  */}
      <div className="left">
        {/* Info Section inside of left  */}
        <div className="info">
          <h1>Secure and simple to use cloud storage for your files</h1>
          <h3>Sign up and get up to 10 GB free storage</h3>
          {/* Tour Section inside of info of left  */}
          <div className="tour">
            <img src={tourImg} alt="Video tour Image." />
            <span>Get a pCloud video tour</span>
          </div>
        </div>
        {/* Image Section inside of left  */}
        <div className="images">
          <img src={heroImg} alt="This is my hero Image." />
        </div>
      </div>
      {/* Right Section inside of hero  */}
      <div className="right">
        {/* Sign Info inside of right  */}
        <div className="sign-info">
          {/* Info Section inside of sign info  */}
          <div className="info">
            <h2>Log in or sign up for free</h2>
            <p>Please enter your email address to continue</p>
          </div>
          {/* Email Input inside of sign info  */}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
        </div>
        {/* or use inside of right  */}
        <span className="use">or use</span>
        {/* Sign Buttons inside of right  */}
        <div className="sign-buttons">
          {/* Facebook, Google, Apple inside of sign buttons  */}
          <div className="fb">
            <img src={fbLogo} alt="" />
          </div>
          <div className="google">
            <img src={gLogo} alt="" />
          </div>
          <div className="apple">
            <img src={appleLogo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
