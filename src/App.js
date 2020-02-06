import React, { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [name, setName] = useState("1");
  const [email, setEmail] = useState("2");
  const [password, setPassword] = useState("3");
  const [passwordConfirm, setPasswordConfirm] = useState("4");
  const [step, setStep] = useState(1);

  const handleName = event => {
    setName(event.target.value);
  };
  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handlePassword = event => {
    setPassword(event.target.value);
  };
  const handlePasswordConfirm = event => {
    setPasswordConfirm(event.target.value);
  };

  const handleStep = event => {
    setStep(event);
  };

  return (
    <div className="container d-flex flex-direction-column">
      <div>
        <h1> Create account</h1>
        <Form
          valueName={name}
          valueEmail={email}
          valuePassword={password}
          valuePasswordConfirm={passwordConfirm}
          handleName={handleName}
          handleEmail={handleEmail}
          handlePassword={handlePassword}
          handlePasswordConfirm={handlePasswordConfirm}
          handleStep={handleStep}
          step={step}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
