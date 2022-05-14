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
    <div className="formUI2 scene_element scene_element--fadeinright">
      <Header
        className="headline2"
        headLine="Let's set up a home for all your work"
        subLine="You can always create another workspace later."
      />
      <div className="sub-content2">
        <Input label="Workspace Name" type="text" placeholder="Eden" />
        <Input label="WorkspaceURL" type="file" subtitle="(optional)" />
        <Button width="410px" onClick={props.formSubmitHandler}>
          Create Workspace
        </Button>
      </div>
      {/* {nextPage === 1 && <div className="sub-content">kjhbgfc</div>} */}
    </div>
  );
};

export default Form;
