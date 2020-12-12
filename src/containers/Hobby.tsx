import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Car from '../components/Hobby/Car';
import MotorCycle from '../components/Hobby/MotorCycle';

const useStyles = makeStyles({
  root: {
    marginTop: '10%'
  },
  title: {
    fontSize: 'xx-large',
  }
});

const Hobby = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Hobby</h2>
      <Car />
      <MotorCycle />
    </div>
  );
}

export default Hobby;
