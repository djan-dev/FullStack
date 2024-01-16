import React from "react";
import "./style.css";

export default function Contact(props) {
  return (
    <div className="contact-card">
      <img
        src={props.img}
        alt="imagem Mr Whiskerson"
      />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img
          src="./images/phone-icon.png"
          alt="icone fone"
        />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img
          src="./images/mail-icon.png"
          alt="icone mail"
        />
        <p>{props.email}</p>
      </div>
    </div>
  );
}
