import React from "react";
import "./style.css";

export default function Hero() {
  return (
    <section className="hero">
      <img
        src="./images/photo-grid.png"
        alt="imagem grid"
        className="hero-grid"
      />
      <div className="hero-texto">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by
          <br /> one-of-a-kind hosts-all without leving
          <br /> home.
        </p>
      </div>
    </section>
  );
}
