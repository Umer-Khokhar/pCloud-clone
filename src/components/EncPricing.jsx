import React, { useState } from "react";
import "./EncPricing.css";

function EncPricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const toggleBilling = (isAnnual) => {
    setIsAnnual(isAnnual);
    setIsClicked(!isClicked);
  };

  return (
    <div className="enc-prices">
      <div className="billing-toggle">
        <button
          className={isClicked ? "active" : "not-active"}
          onClick={() => toggleBilling(true)}
        >
          Annual
        </button>
        <button
          className={isClicked ? "not-active" : "active"}
          onClick={() => toggleBilling(false)}
        >
          Lifetime
        </button>
      </div>
      <div className="info">
        <h2>pCloud Encryption</h2>
        <h3 className="billing">{isAnnual ? "Annual" : "Lifetime"}</h3>
        <p className="price">
          {isAnnual ? (
            <>
            <span className="old-price">
            <span className="prices">59.88</span>
            <span className="usd">USD</span>
            <span className="line"></span>
            </span>
            <span className="slash">/</span>
            <span className="new-price">
            <span className="prices">49.99</span>
            <span className="usd">USD</span>
            </span>
            </>
          ): (
            <>
            <span className="old-price">
            <span className="prices">299</span>
            <span className="usd">USD</span>
            <span className="line"></span>
            </span>
            <span className="slash">/</span>
            <span className="new-price">
            <span className="prices">150</span>
            <span className="usd">USD</span>
            </span>
            </>
          )}
          </p>
        <p className="duration">{isAnnual ? "Yearly Payment" : "One Time Payment"}</p>
      <div className="button-2">
        <button className="add-enc">Add Encryption</button>
        <p>Unbreakable military-grade encryption</p>
      </div>
      <ul className="benifits-enc">
        <li>Client-side encryption</li>
        <li>Zero-knowledge privacy</li>
        <li>Easiest way to encrypt/decrypt</li>
      </ul>
      </div>
    </div>
  );
}

export default EncPricing;
