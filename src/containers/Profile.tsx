import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Title from '../components/Profile/Title';
import AboutMe from '../components/Profile/AboutMe';
import Skill from '../components/Profile/Skill';
import Sns from '../components/Profile/Sns';

const useStyles = makeStyles({
  root: {
  }
});

const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title />
      <h2>Profile</h2>
      <AboutMe/>
      <Sns />
      <h2>Skill</h2>
      <Skill />
    </div>
  );
}

export default Profile;
