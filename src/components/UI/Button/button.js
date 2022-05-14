import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <div>
      <button
        style={{ width: props.width }}
        type={props.type}
        className={props.className ? props.className : "button"}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
