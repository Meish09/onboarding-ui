import React, { useState } from "react";
import "./form.css";
import Header from "../UI/Header/header";
import Input from "../UI/Input/input";
import Button from "../UI/Button/button";
import successImage from "../../images/check.png";

const Form = (props) => {
  const [nextPage, setNextPage] = useState(0);
  const createWorkspace = () => {
    console.log("hwd");
    setNextPage(nextPage + 1);
    console.log(nextPage);
  };

  const [forMySelf, setForMySelf] = useState(false);
  const [withMyTeam, setWithMyTeam] = useState(false);

  const switchBetweenOptions = (value1, value2) => {
    console.log(value1, value2);
    if (value1 == true) {
      setForMySelf(true);
      setWithMyTeam(false);
      console.log(setForMySelf, "hbj");
    } else if (value2 == true) {
      setForMySelf(false);
      setWithMyTeam(true);
    }
  };
  return (
    <div className="formUI4 scene_element scene_element--fadeinright">
      {/* <img src={successImage} className="success-img" /> */}
      <div className="success-circle">
        <span className="success"></span>
      </div>
      <Header
        className="headline2"
        sublineClass="subline2"
        headLine="Congratulations, Eren!"
        subLine="You have completed onboarding, you can start using the Eden!"
      />

      <Button
        width="414px"
        className="btn2"
        onClick={() => window.location.reload(false)}
      >
        Launch Eden
      </Button>

      {/* {nextPage === 1 && <div className="sub-content">kjhbgfc</div>} */}
    </div>
  );
};

export default Form;
