import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

import classes from './Signup.module.css';

const Signup = (props) => {
  /* const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const mobileInputRef = useRef();
  const cityInputRef = useRef();
*/
  const [enteredName, setEnteredName] = useState('');
  const [nameIsValid, setNameIsValid] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);

  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const [enteredCPassword, setEnteredCPassword] = useState('');
  const [cpasswordIsValid, setCPasswordIsValid] = useState(false);

  const [enteredMobile, setEnteredMobile] = useState('');
  const [mobileIsValid, setMobileIsValid] = useState(false);

  const [enteredCity, setEnteredCity] = useState('');

  const nameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const emailHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const cpasswordHandler = (e) => {
    setEnteredCPassword(e.target.value);
  };

  const mobileHandler = (e) => {
    setEnteredMobile(e.target.value);
  };

  const cityHandler = (e) => {
    setEnteredCity(e.target.value);
  };

  const validateName = () => {
    setNameIsValid(enteredName.length > 3);
    
  };

  const validateEmail = () => {
    setEmailIsValid(enteredEmail.includes('@'));
   
  };

  const validatePassword = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
   
  };

  const validateCPassword = () => {
    setCPasswordIsValid(enteredPassword === enteredCPassword);
   
  };

  const validateMobile = () => {
    setMobileIsValid(enteredMobile.length > 9 && enteredMobile.length < 15);
   
  };

  const formContentHandler = () => {
    props.onSwitchForm();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    /*const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredMobile = mobileInputRef.current.value;
    const enteredCity = cityInputRef.current.value; */

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
            onChange={nameHandler}
            onBlur={validateName}
            value={enteredName}
            autoComplete="false"
          />
        </div>
        <div className={classes['form-control']}>
          <label>E Mail</label>
          <input
            type="text"
            onChange={emailHandler}
            onBlur={validateEmail}
            value={enteredEmail}
          />
        </div>
        <div className={classes['form-control']}>
          <label>Password</label>
          <input
            type="password"
            onChange={passwordHandler}
            onBlur={validatePassword}
            value={enteredPassword}
          />
        </div>
        <div className={classes['form-control']}>
          <label>Confirm Password</label>
          <input
            type="text"
            onChange={cpasswordHandler}
            onBlur={validateCPassword}
            value={enteredCPassword}
          />
        </div>
        <div className={classes['form-control']}>
          <label>Mobile</label>
          <input
            type="number"
            onChange={mobileHandler}
            onBlur={validateMobile}
            value={enteredMobile}
          />
        </div>
        <div className={classes['form-control']}>
          <label>City</label>
          <input type="text" onChange={cityHandler} value={enteredCity} />
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
