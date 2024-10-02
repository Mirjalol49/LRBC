import React from "react";
import "./Button.css";
const Button = (link) => {
  return (
    <a className="button-comp" href={link} role="button">
      Bog'lanish
    </a>
  );
};

export default Button;
