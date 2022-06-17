import React, { useContext } from 'react';
import UserDataContext from '../Store/userData-context';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  const ctx = useContext(UserDataContext);
  return (
    <header className={classes['main-header']}>
      {ctx.isLoggedIn && <h1>Hello {ctx.userData.name} </h1>}
      {!ctx.isLoggedIn && <h1>A Typical Page</h1>}
      <Navigation />
    </header>
  );
};

export default MainHeader;
