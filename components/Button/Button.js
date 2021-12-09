import React from "react";

const Button = ({ text, link }) => {
  return (
    <li>
      <a href={link} target="_blank" rel="noreferrer">
        {text}
      </a>
    </li>
  );
};

export default Button;
