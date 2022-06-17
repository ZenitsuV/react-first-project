import React, { useState, useEffect } from 'react';
import Login from './Components/Forms/Login';
import Signup from './Components/Forms/Signup';
import Home from './Components/Home/Home';
import MainHeader from './Components/MainHeader/MainHeader';
import ErrorModal from './Components/UI/Modal/ErrorModal';
import UserDataContext from './Components/Store/userData-context';

export default function App() {
  const [formContent, setFormContent] = useState('LoginForm');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState();
  const [sendUserData, setSendUserData] = useState();

  useEffect(() => {
    const userLoginStatus = localStorage.getItem('isLoggedIn');
    const loggedUserInformation = JSON.parse(
      localStorage.getItem('loggedUserData')
    );
    if (userLoginStatus === '1') {
      setIsLoggedIn(true);
      setSendUserData(loggedUserInformation);
    }
  }, []);

  const loginHandler = (email, password) => {
    const userData = JSON.parse(localStorage.getItem('usersList'));
    const isUserAvailable = userData.some(
      (i) => i.email == email && i.password == password
    );
    setIsLoggedIn(isUserAvailable);
    localStorage.setItem('isLoggedIn', '1');
    if (isUserAvailable)
      loggedUserData(userData, email, password, isUserAvailable);
    else setError(['Error', 'Invalid Email and Password!']);
  };

  const ErrorHandler = () => {
    setError(null);
  };

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn', '0');
    localStorage.removeItem('loggedUserData');
    setIsLoggedIn(false);
  };

  //localStorage.removeItem('usersList');
  const loggedUserData = (userData, email, password, isUserAvailable) => {
    if (isUserAvailable)
      setSendUserData(
        userData.find((i) => i.email == email && i.password == password)
      );
    localStorage.setItem(
      'loggedUserData',
      JSON.stringify(
        userData.find((i) => i.email == email && i.password == password)
      )
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
      <UserDataContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          onLogout: logoutHandler,
          userData: sendUserData,
        }}
      >
        <MainHeader />
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
      </UserDataContext.Provider>
      {formContent !== 'LoginForm' && <Signup onSwitchForm={formSwitch} />}
    </div>
  );
}
