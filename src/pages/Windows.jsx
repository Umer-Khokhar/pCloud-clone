import React from "react";
import Buttons from "../components/Buttons";
import Dowith from "../components/Dowith";
import firstPcIMG from "/download/first-pc.png";
import secondPcIMG from "/download/second-pc.png";
import Download from "./Download";
import "./Windows.css";

function Windows({ mainIMG }) {
  return (
    <div className="window-wrap">
      <Download />
      <section className="windows-section">
        <div className="win-hero">
          <h1>pCloud for Windows</h1>
          <p className="hero-p">
            Extend the available space on your PC with up to 10 TB. Use your
            files in the cloud as if they are saved locally, but without taking
            hard disk space
          </p>
          <Buttons heading={""} paragraph={"Windows 7 or later"}/>
        </div>
        <div className="images-window">
          <div className="main-img">
            <img src={mainIMG} alt="my Main Image!" />
            <Dowith img1={firstPcIMG} img2={secondPcIMG} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Windows;
