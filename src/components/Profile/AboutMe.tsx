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
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const AboutMe = () => {
  const classes = useStyles();

  return (
    <div className="AboutMe">
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            About me
          </Typography>
          <Typography variant="h5" component="h2">
            Shiota Tomoki
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Server side enginer in Kyoto
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default AboutMe;
