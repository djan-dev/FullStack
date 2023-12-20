import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <header>
      <nav>
        <div class="nav--icon">
          <img
            src="./images/logo-react.png"
            alt="logo react"
            width="40px"
          ></img>
        </div>

        <div class="nav--logo_text">ReactFacts</div>
        <div class="nav--title">React Course - Project 1</div>
      </nav>
    </header>
  );
}
