import React, { useState } from 'react';
import Login from './Components/Forms/Login';
import Signup from './Components/Forms/Signup';
import Home from './Components/Home/Home';
import MainHeader from './Components/MainHeader/MainHeader';
import ErrorModal from './Components/UI/Modal/ErrorModal';

export default function App() {
  const [formContent, setFormContent] = useState('LoginForm');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState();

  const loginHandler = (email, password) => {
    const userData = JSON.parse(localStorage.getItem('usersList'));
    const isUserAvailable = userData.some(
      (i) => i.email == email && i.password == password
    );
    setIsLoggedIn(isUserAvailable);
    if (isUserAvailable)
      loggedUserData(userData, email, password, isUserAvailable);
    else setError(['Error', 'Invalid Email and Password!']);

    console.log('User data not available');
  };

  const ErrorHandler = () => {
    setError(null);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  //localStorage.removeItem('usersList');
  const loggedUserData = (userData, email, password, isUserAvailable) => {
    if (isUserAvailable)
      console.log(
        userData.find((i) => i.email == email && i.password == password)
      );
  };

  const formSwitch = () => {
    if (formContent === 'LoginForm') setFormContent('SignupForm');
    if (formContent === 'SignupForm') setFormContent('LoginForm');
  };

  return (
    <div className="App">
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={ErrorHandler}
        />
      )}
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      {formContent !== 'SignupForm' && !isLoggedIn && (
        <Login
          onSwitchForm={formSwitch}
          onLogin={loginHandler}
          setError={error}
        />
      )}
      {formContent !== 'SignupForm' && isLoggedIn && (
        <Home onLogout={logoutHandler} />
      )}
      {formContent !== 'LoginForm' && <Signup onSwitchForm={formSwitch} />}
    </div>
  );
}
