import React from "react";
import './AdoptNavbar.scss'

export const AdoptNavbar = () => {
  return (
    <div class="navbar">
      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class="nav-title">SoftwareM4</div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <a href="/" target="_blank">
            Home{" "}
          </a>
          <a href="/" target="_blank">
            About
          </a>
          <a href="/" target="_blank">
            Services
          </a>
          <a href="/" target="_blank">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};
