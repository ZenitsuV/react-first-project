import React from 'react';
import ReactDOM from 'react-dom';

import classes from './ErrorModal.module.css';
import Card from '../Card/Card';
import Button from '../Button/Button';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const Modal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    // Fragment is just a wrapper by react
    <React.Fragment>
      <Backdrop onConfirm={props.onConfirm} />
      <Modal
        onClick={props.onConfirm}
        title={props.title}
        message={props.message}
        onConfirm={props.onConfirm}
      />
    </React.Fragment>
  );
};

export default ErrorModal;
