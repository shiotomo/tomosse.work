import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Profile from './containers/Profile';
import Project from './containers/Project';
import Hobby from './containers/Hobby';

import './App.css';

const useStyles = makeStyles({
  app: {
    background: 'linear-gradient(#aaffff, #ffffff)',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center'
  }
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Profile />
      <Project />
      <Hobby />
    </div>
  );
}

export default App;
