import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Profile from './containers/Profile';
import Skill from './containers/Skill';
import Hobby from './containers/Hobby';
import Header from './containers/Header';

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
      <Skill />
      <Hobby />
      <Header />
    </div>
  );
}

export default App;
