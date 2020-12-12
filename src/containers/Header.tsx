import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    textAlign: 'center'
  },
  title: {
    fontSize: 'xx-large',
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header>
        <p>
          &copy; tomosse.work shiotomo 2020
        </p>
      </header>
    </div>
  );
}

export default Header;
