import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

import classes from './Login.module.css';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const formContentHandler = () => {
    props.onSwitchForm();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);

    setEnteredEmail('');
    setEnteredPassword('');
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes['form-control']} ${
            emailIsValid === false && classes['invalid']
          }`}
        >
          <label>{props.setError}</label>
          <label>E Mail</label>
          <input
            type="text"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes['form-control']} ${
            passwordIsValid === false && classes['invalid']
          }`}
        >
          <label>Password</label>
          <input
            type="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
      <div className={classes.formLink}>
        Don't have an account? <span onClick={formContentHandler}>Sign up</span>
      </div>
    </Card>
  );
};
export default Login;
