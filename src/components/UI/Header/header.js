import react from "react";
import "./header.css";

const Header = (props) => {
  return (
    <div className="form-header">
      <div>
        <div className={props.className ? props.className : "headline"}>
          {props.headLine}
        </div>
      </div>
      <div className={props.sublineClass ? props.sublineClass : "subline"}>
        {props.subLine}
      </div>
    </div>
  );
};
export default Header;
