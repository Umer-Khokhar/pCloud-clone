import React from "react";
import Navbar from "../components/Navbar";
import EncPricing from "../components/EncPricing";
import Logo from "/logo/logo.png";
import "./Pricing.css";
import Footer from "../components/Footer";
import googleLogo from '/logo/google.svg'
import facebookLogo from '/logo/fb.svg'
import appleLogo from '/logo/ios.svg'

function Pricing() {
  return (
    <>
      <Navbar logo={Logo} />
      <div className="pricing">
        <div className="wrap">
          <h1>Pricing</h1>
          <EncPricing />
        </div>
        <Footer fbLogo={facebookLogo} xLogo={appleLogo} instaLogo={googleLogo}/>
      </div>
    </>
  );
}

export default Pricing;
