import React from "react";
import Navbar from "../components/Navbar";
import Platform from "../components/Platform";
import Windows from "./Windows";
import Mac from "./Mac";
import logo from "/logo/logo.png";
import firstPcIMG from "/download/first-pc.png"
import secondPcIMG from "/download/second-pc.png"
import fisrtMacIMG from "/download/first-mac.png"
import secondMacIMG from "/download/second-mac.png"
import "./Download.css";


function Download() {
  return (
    <>
      <Navbar logo={logo} />
      <div className="download-page">
        <Platform/>
      </div>
    </>
  );
}

export default Download;

