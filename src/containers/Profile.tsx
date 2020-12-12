import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Title from '../components/Profile/Title';
import AboutMe from '../components/Profile/AboutMe';
import Sns from '../components/Profile/Sns';

const useStyles = makeStyles({
  root: {
  },
  title: {
    fontSize: 'xx-large',
  }
});

const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title />
      <h2 className={classes.title}>Profile</h2>
      <AboutMe/>
      <Sns />
    </div>
  );
}

export default Profile;
