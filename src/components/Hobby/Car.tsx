import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: '1%',
    marginBottom: '1%',
    marginLeft: '5%',
    marginRight: '5%'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Car = () => {
  const classes = useStyles();

  return (
    <div className="ProfileInfo">
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Car
          </Typography>
          <Typography variant="h5" component="h2">
            TOYOTA Chaser Avante 2.5 (1997)
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            IMPREZA → CHASER
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Car;
