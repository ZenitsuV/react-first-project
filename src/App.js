import React, { useState } from 'react';
import Login from './Components/Forms/Login';
import Signup from './Components/Forms/Signup';
export default function App() {
  const [formContent, setFormContent] = useState('LoginForm');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    setIsLoggedIn(true);
  };

  console.log(JSON.parse(localStorage.getItem('usersList')));

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  const formSwitch = () => {
    if (formContent === 'LoginForm') setFormContent('SignupForm');
    if (formContent === 'SignupForm') setFormContent('LoginForm');
  };

  return (
    <div className="App">
      {formContent !== 'SignupForm' && (
        <Login onSwitchForm={formSwitch} onLogin={loginHandler} />
      )}
      {formContent !== 'LoginForm' && <Signup onSwitchForm={formSwitch} />}
    </div>
  );
}
