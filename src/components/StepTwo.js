import React from "react";

function StepTwo(props) {
  return (
    props.step === 2 && (
      <div>
        <div className="results">
          Name : {props.resultName}
          <br />
          Email : {props.resultEmail}
          <br />
          Password : {props.resultPassword}
          <br />
          <button
            className="btn-register"
            onClick={() => {
              props.handleStep(1);
            }}
          >
            Edit your information
          </button>
        </div>
      </div>
    )
  );
}

export default StepTwo;
