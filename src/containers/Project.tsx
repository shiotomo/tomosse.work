import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AboutMe from '../components/Profile/AboutMe';
import Skill from '../components/Profile/Skill';

const useStyles = makeStyles({
  root: {
    marginTop: '10%'
  }
});

const Project = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>Project</h2>
      <AboutMe/>
      <Skill />
    </div>
  );
}

export default Project;
