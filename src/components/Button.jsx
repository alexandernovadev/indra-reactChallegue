import React from "react";
import style from "../styles/components/button.module.css";

export const Button = ({ onClick, text, color }) => {
  return (
    <button 
    onClick={()=> onClick(color)}
    className={style.button} style={{ background: color }}>
      {text}
    </button>
  );
};
