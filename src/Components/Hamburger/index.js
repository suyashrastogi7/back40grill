import React, { useState } from "react";

import "./index.css";

const Hamburger = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="absolute">
      <ul id="menu" className={`t-mar ${show ? "active" : ""}`}>
        <li>
          <a href="www">testing</a>
          <ul>
            <li>
              <a href="www">testing</a>
            </li>
            <li>
              <a href="www">testing</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="mobile-menu-section">
        <input type="checkbox" id="btnControl" />
        <label
          className="btn"
          for="btnControl"
          id="toggle"
          onClick={() => setShow((prev) => !prev)}
        >
          <div className="hamburger hamburger-container">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Hamburger;
