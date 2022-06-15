import React, { useState, useRef } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

import classes from './Signup.module.css';

const Signup = (props) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const mobileInputRef = useRef();
  const cityInputRef = useRef();

  const [enteredName, setEnteredName] = useState();
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredPassword, setEnteredPassword] = useState();
  const [enteredMobile, setEnteredMobile] = useState();
  const [enteredCity, setEnteredCity] = useState();

  const nameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const emailHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    enteredPassword(e.target.value);
  };

  const mobileHandler = (e) => {
    enteredMobile(e.target.value);
  };

  const cityHandler = (e) => {
    setEnteredCity(e.target.value);
  };

  const formContentHandler = () => {
    props.onSwitchForm();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredMobile = mobileInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredData = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      mobile: enteredMobile,
      city: enteredCity,
    };

    //const resultData = formValidation(enteredData);

    console.log(enteredData);
  };

  return (
    <Card className={classes.signup}>
      <form onSubmit={submitHandler}>
        <div className={classes['form-control']}>
          <label>Name</label>
          <input
            type="text"
            ref={nameInputRef}
            onBlur={nameHandler}
            autoComplete="false"
          />
        </div>
        <div className={classes['form-control']}>
          <label>E Mail</label>
          <input type="text" ref={emailInputRef} onBlur={emailHandler} />
        </div>
        <div className={classes['form-control']}>
          <label>Password</label>
          <input
            type="password"
            ref={passwordInputRef}
            onBlur={passwordHandler}
          />
        </div>
        <div className={classes['form-control']}>
          <label>Mobile</label>
          <input type="number" ref={mobileInputRef} onBlur={mobileHandler} />
        </div>
        <div className={classes['form-control']}>
          <label>City</label>
          <input type="text" ref={cityInputRef} onBlur={cityHandler} />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Signup
          </Button>
        </div>
      </form>
      <div className={classes.formLink}>
        Already have an account? <span onClick={formContentHandler}>Login</span>
      </div>
    </Card>
  );
};

export default Signup;
