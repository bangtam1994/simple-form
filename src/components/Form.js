import React from "react";
import StepTwo from "./StepTwo";

function Form(props) {
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
      <input
        placeholder="IErEaCtEuR2020"
        type="password"
        name="password"
        value={props.valuePassword}
        onChange={props.handlePassword}
      />
      <br />
      Confirm your password :
      <input
        placeholder="NIErEaCtEuR2020"
        type="password"
        name="passwordConfirm"
        value={props.valuePasswordConfirm}
        onChange={props.handlePasswordConfirm}
      />
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
