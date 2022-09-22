import React from "react";
import style from "../styles/components/button.module.css";
import PropTypes from "prop-types";

export const Button = ({ onClick, text, color }) => {
  return (
    <button 
    onClick={()=> onClick(color)}
    className={style.button} style={{ background: color }}>
      {text}
    </button>
  );
};


Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
