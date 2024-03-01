import React from "react";
import { NavLink } from "react-router-dom";
import "./Platform.css";

function Platform() {
  return (
    <div className="platforms">
      <div>
        <NavLink className={(e) => e.isActive ? "win plat clicked" : "win plat"} to={"/download/windows"}>
        <img src="../logo/window.svg" alt="" />
        <h3>Windows</h3>
        </NavLink>
      </div>
      <div>
        <NavLink className={(e) => e.isActive ? "mac plat clicked" : "mac plat"} to={"/download/mac"}>
        <img src="../logo/mac.svg" alt="Window Logo" />
        <h3>MacOS</h3>
        </NavLink>
      </div>
    </div>
  );
}

export default Platform;
