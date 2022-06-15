import React, { useState } from "react";
import Login from "./Components/Forms/Login";
import Signup from "./Components/Forms/Signup";
export default function App() {
  const [formContent, setFormContent] = useState("LoginForm");
  const formSwitch = () => {
    if (formContent === "LoginForm") setFormContent("SignupForm");
    if (formContent === "SignupForm") setFormContent("LoginForm");
  };
  return (
    <div className="App">
      {formContent !== "SignupForm" && <Login onSwitchForm={formSwitch} />}
      {formContent !== "LoginForm" && <Signup onSwitchForm={formSwitch} />}
    </div>
  );
}
