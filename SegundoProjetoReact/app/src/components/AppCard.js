import React from "react";
import "./styles.css";
import Footer from "./Footer";
import Header from "./Header";
import ContentOne from "./ContentOne";
import ContentTwo from "./ContentTwo";

export default function AppCard() {
  return (
    <div className="fundo">
      <Header />
      <div className="fundo-main">
        <ContentOne />
        <ContentTwo />
      </div>
      <Footer />
    </div>
  );
}
