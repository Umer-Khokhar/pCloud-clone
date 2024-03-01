import React from "react";
import './Footer.css'

function Footer({fbLogo, xLogo, instaLogo, ytLogo}) {
  return (
    <div className="parent">
    <div className="my-footer">
      <div className="wrapp">
      <ul className="line-one">
        <li>
          <b>pCloud</b>
        </li>
        <li>Download</li>
        <li>Pricing</li>
        <li>Encryption</li>
        <li>pCloud Pass</li>
        <li>Business</li>
        <li>Family</li>
        <li>Transfer</li>
      </ul>
      <ul className="line-two">
        <li>
          <b>Features</b>
        </li>
        <li>File Management</li>
        <li>Sharing</li>
        <li>Security</li>
        <li>File Versioning</li>
        <li>Backup</li>
        <li>Digital Asset Management</li>
      </ul>
      <ul className="line-three">
        <li>
          <b>Company</b>
        </li>
        <li>About us</li>
        <li>Data Regions</li>
        <li>GDPR</li>
        <li>Press Center</li>
        <li>Testimonials</li>
        <li>The pCloud Blog</li>
      </ul>
      <ul className="line-four">
        <li>
          <b>Help Center</b>
        </li>
        <li>F.A.Q.</li>
        <li>Privacy Options</li>
        <li>Contact Us</li>
        <li>Release Notes</li>
      </ul>
      <ul className="line-four">
        <li>
          <b>Community</b>
        </li>
        <li>Affiliate Program</li>
        <li>pCloud Resellers</li>
        <li>For Developers</li>
      </ul>
      <ul className="line-five">
        <div className="one">
        <li>
          <b>Follow Us</b>
        </li>
        </div>
        <div className="two">
        <li><img src={fbLogo} alt="" /></li>
        <li><img src={instaLogo} alt="" /></li>
        <li><img src={xLogo} alt="" /></li>
        <li><img src={ytLogo} alt="" /></li>
        </div>
      </ul>
      </div>
      <div className="footer-line">
        <p>© 2024 pCloud International AG</p>
        <p>Terms and Conditions. Privacy Policy. Intellectual Property Policy</p>
        <p>Language:English</p>
      </div>
    </div>
    </div>
  );
}

export default Footer;
