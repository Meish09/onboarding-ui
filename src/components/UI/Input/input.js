import react from "react";
import "./input.css";

const Input = (props) => {
  return (
    <div>
      <div className="input-label">
        {props.label}
        <span className="input-subtitle">{props.subtitle}</span>
      </div>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
};

export default Input;
