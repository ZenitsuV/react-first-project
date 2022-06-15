import React from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

import classes from 'Login.module.css';

const Login = (props) => {
  const formContentHandler = () => {
    props.onSwitchForm();
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={classes['form-control']}>
          <label>E Mail</label>
          <input type="text" />
        </div>
        <div className={classes['form-control']}>
          <label>Password</label>
          <input type="password" />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
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
