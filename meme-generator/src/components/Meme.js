import React, { useState } from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [memeUrl, setMemeUrl] = useState("");

  let url;
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNumber].url;
    setMemeUrl(url);
    //console.log(url);
  }

  return (
    <section className="section-entrada">
      <div className="div-entrada">
        <input className="entrada-input" type="text" />
        <input className="entrada-input" type="text" />
      </div>
      <div className="div-btn">
        <button className="meme-btn" type="button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="div-img-aleatoria">
        <img className="img-aleatoria" src={memeUrl} alt=""></img>
      </div>
    </section>
  );
}
