import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Twitter from '@material-ui/icons/Twitter';
import GitHub from '@material-ui/icons/GitHub';
import Book from '@material-ui/icons/Book';

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
  icon: {
    fontSize: 'xxx-large',
    margin: '5%',
    marginTop: 0,
    marginBottom: 0
  },
  twitter: {
    color: '#00cccc'
  },
  blog: {
    color: '#864a2b'
  },
  github: {
    color: 'black'
  }
});

const Sns = () => {
  const classes = useStyles();

  return (
    <div className="ProfileInfo">
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            SNS
          </Typography>
          <a href="https://twitter.com/shiotomohack" className={classes.twitter}>
            <Twitter className={classes.icon} />
          </a>
          <a href="https://blog.tomosse.work" className={classes.blog}>
            <Book className={classes.icon} />
          </a>
          <a href="https://github.com/shiotomo" className={classes.github}>
            <GitHub className={classes.icon} />
          </a>
        </CardContent>
      </Card>
    </div>
  );
}

export default Sns;
