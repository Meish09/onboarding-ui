import "./App.css";
import logo from "./images/logo1.jpg";
import Form from "./components/Form/form";
import Form2 from "./components/Form/form2";
import Form3 from "./components/Form/form3";
import Form4 from "./components/Form/form4";
import React, { useState } from "react";

const Rule = ({ color }) => (
  <hr
    style={{
      position: "absolute",
      "margin-left": "38px",
      "margin-top": "18px",
      width: "80px",
      height: "1.5px",
      border: "none",
      background: color,
    }}
  />
);

const App = () => {
  const [nextForm, setNextForm] = useState(0);
  const formSubmitHandler = (event) => {
    console.log("nextFormsd: " + nextForm);

    if (nextForm == 3) {
      for (var i = 0; i < nextForm.length; i++) {
        setNextForm(nextForm - 1);
        window.location.reload();
      }
      event.preventDefault(true);
      // location.reload(true);
    } else setNextForm(nextForm + 1);
  };

  return (
    <div className="custom-font">
      {/* header */}
      <div className="logo">
        <img src={logo} className="logo-img" alt="logo" />
        <p className="logo-header">Eden</p>
      </div>

      {/* main content */}
      <div className="main-content">
        <div className="stepper-join">
          <div className="stepper ">
            <button className="steps">1</button>
            <Rule
              color={
                nextForm > 0
                  ? "#664de6"
                  : "linear-gradient(90deg, #664de6 50%, #dfdfdf 50%)"
              }
            />
          </div>
          <div className="stepper">
            <button className={nextForm >= 1 ? "steps" : "steps-before"}>
              2
            </button>
            <Rule
              color={
                nextForm == 1
                  ? "linear-gradient(90deg, #664de6 50%, #dfdfdf 50%)"
                  : nextForm > 1
                  ? "#664de6"
                  : "#dfdfdf"
              }
            />
          </div>
          <div className="stepper">
            <button className={nextForm >= 2 ? "steps" : "steps-before"}>
              3
            </button>
            <Rule
              color={
                nextForm == 2
                  ? "linear-gradient(90deg, #664de6 50%, #dfdfdf 50%)"
                  : nextForm > 2
                  ? "#664de6"
                  : "#dfdfdf"
              }
            />
          </div>
          <div className="stepper">
            <button className={nextForm >= 3 ? "steps" : "steps-before"}>
              4
            </button>
          </div>
        </div>

        {nextForm == 0 && <Form formSubmitHandler={formSubmitHandler} />}
        {nextForm == 1 && <Form2 formSubmitHandler={formSubmitHandler} />}
        {nextForm == 2 && <Form3 formSubmitHandler={formSubmitHandler} />}

        {nextForm == 3 && <Form4 formSubmitHandler={formSubmitHandler} />}
      </div>
    </div>
  );
};

export default App;
