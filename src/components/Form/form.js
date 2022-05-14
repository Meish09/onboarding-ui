import React, { useState } from "react";
import "./form.css";
import Header from "../UI/Header/header";
import Input from "../UI/Input/input";
import Button from "../UI/Button/button";

const Form = (props) => {
  const [nextPage, setNextPage] = useState(0);
  const createWorkspace = () => {
    console.log("hwd");
    setNextPage(nextPage + 1);
    console.log(nextPage);
  };

  return (
    <div className="formUI scene_element scene_element--fadeinright">
      <Header
        headLine="Welcome! First things first ..."
        subLine="You can always change them later"
      />
      <div className="sub-content">
        <Input label="Full Name" type="text" placeholder="Steve Jobs" />
        <Input label="Display Name" type="text" placeholder="Steve" />
        <Button width="450px" onClick={props.formSubmitHandler}>
          Create Workspace
        </Button>
      </div>
      {/* {nextPage === 1 && <div className="sub-content">kjhbgfc</div>} */}
    </div>
  );
};

export default Form;
