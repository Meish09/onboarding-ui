import React, { useState } from "react";
import "./form.css";
import Header from "../UI/Header/header";
import Input from "../UI/Input/input";
import Button from "../UI/Button/button";
import userImage from "../../images/user.png";
import userImageFilled from "../../images/user-filled.png";
import groupImage from "../../images/group.png";
import groupImageFilled from "../../images/group-filled.png";

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
    <div className="formUI3 scene_element scene_element--fadeinright">
      <Header
        className="headline2"
        sublineClass="subline1"
        headLine="How are you planning to use Eden?"
        subLine="We'll streamline your setup experience accordingly."
      />
      <div className="sub-content3">
        <div className="radio-buttons-div">
          <label>
            <input
              type="radio"
              name="workspace"
              value={forMySelf}
              onChange={(e) => switchBetweenOptions(true, false)}
              className="card-input-element"
            />

            <div className="card">
              {forMySelf === false && (
                <img src={userImage} className="options-img" />
              )}
              {forMySelf === true && (
                <img src={userImageFilled} className="options-img" />
              )}
              <br />
              <p className="radio-button-label">For myself</p>
              <p className="radio-button-content">
                Write better. Think more clearly. Stay organized.
              </p>
            </div>
          </label>

          <label>
            <input
              type="radio"
              name="workspace"
              value={forMySelf}
              onChange={(e) => switchBetweenOptions(false, true)}
              className="card-input-element"
            />
            <div className="card">
              {withMyTeam === false && (
                <img src={groupImage} className="options-img" />
              )}
              {withMyTeam === true && (
                <img src={groupImageFilled} className="options-img" />
              )}
              <p className="radio-button-label">With my team</p>
              <p className="radio-button-content">
                Wikis, docs, tasks & projects, all in one place.
              </p>
            </div>
          </label>
        </div>

        <Button width="414px" className="btn" onClick={props.formSubmitHandler}>
          Create Workspace
        </Button>
      </div>
      {/* {nextPage === 1 && <div className="sub-content">kjhbgfc</div>} */}
    </div>
  );
};

export default Form;
