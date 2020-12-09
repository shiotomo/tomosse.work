import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import BackgroundPircture from '../../images/kyoto-arashiyama.jpg';

const useStyles = makeStyles({
  backgroundPicture: {
    backgroundSize: '100%',
    backgroundImage: `url("${BackgroundPircture}")`,
    backgroundColor: '#eeeeee',
    backgroundRepeat: 'no-repeat',
    marginTop: '0%',
    height: '280px'
  },
  title: {
    marginTop: 0,
    marginBottom: 0,
    fontSize: 'xxx-large',
    fontWeight: 900
  },
  subtitle: {
    marginTop: 0,
    marginBottom: 0,
    fontSize: 'x-large',
    fontWeight: 900
  }
});

const Title = () => {
  const classes = useStyles();

  return (
    <div className="Title">
      <div className={classes.backgroundPicture}>
        <h1 className={classes.title}>
          tomosse.work
        </h1>
        <p className={classes.subtitle}>
          @shiotomo
        </p>
      </div>
    </div>
  );
}

export default Title;
