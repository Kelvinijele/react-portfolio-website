import React from "react";
import "./header.css";
import CTA from "./CTA";
import header_picture from "../../assets/header-picture2.png";
import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Emmanuel Kalu</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="ademir">
          <img src={header_picture} alt="emmanuel kalu" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down 
          <div>>>>></div>
        </a>
      </div>
    </header>
  );
};

export default header;
