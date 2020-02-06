import React, { useState } from "react";
import StepTwo from "./StepTwo";
import display from "../images/password-display.png";

function Form(props) {
  const [type, setType] = useState("password");
  const [type2, setType2] = useState("password");

  return props.step === 1 ? (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (props.valuePassword !== props.valuePasswordConfirm) {
          alert("Vos deux mots de passe ne sont pas identiques");
        } else if (
          props.valuePassword &&
          props.valuePasswordConfirm &&
          props.valueName &&
          props.valueEmail
        ) {
          props.handleStep(2);
        }
      }}
      className="form d-flex flex-direction-column"
    >
      Name :
      <input
        placeholder="Name"
        type="text"
        name="text"
        value={props.valueName}
        onChange={props.handleName}
      />
      <br />
      Email :{" "}
      <input
        placeholder="Email"
        type="email"
        name="email"
        value={props.valueEmail}
        onChange={props.handleEmail}
      />
      <br />
      Password :
      <div className="blocPassword">
        <input
          placeholder="NIErEaCtEuR2020"
          type={type2}
          name="password"
          value={props.valuePassword}
          onChange={props.handlePassword}
        />
        <img
          className="eye"
          src={display}
          onClick={() => {
            setType2("text");
          }}
        ></img>
      </div>
      <br />
      Confirm your password :
      <div className="blocPassword">
        <input
          placeholder="NIErEaCtEuR2020"
          type={type}
          name="passwordConfirm"
          value={props.valuePasswordConfirm}
          onChange={props.handlePasswordConfirm}
        />
        <img
          className="eye"
          src={display}
          onClick={() => {
            setType("text");
          }}
        ></img>
      </div>
      <br />
      <button className="btn-register" type="submit">
        Register
      </button>
    </form>
  ) : (
    <StepTwo
      resultName={props.valueName}
      resultEmail={props.valueEmail}
      resultPassword={props.valuePassword}
      handleStep={props.handleStep}
      step={props.step}
    />
  );
}

export default Form;
