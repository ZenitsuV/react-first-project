import React from 'react';
import UserDataContext from '.../Store/userData-context';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <UserDataContext.consumer>
      {(ctx) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </UserDataContext.consumer>
  );
};

export default Navigation;
