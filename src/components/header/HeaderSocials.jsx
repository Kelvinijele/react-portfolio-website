import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/emmanuel-kalu-17683028a/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Kelvinijele">
        <FaGithub />
      </a>
      <a href="https://www.youtube.com">
        <BsYoutube />
      </a>
    </div>
  );
};

export default HeaderSocials;
