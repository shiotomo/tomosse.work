import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
  },
  card: {
    marginTop: '1%',
    marginBottom: '1%',
    height: '150px'
  },
  title: {
    fontSize: 14,
  },
  chip: {
    margin: '0.5%'
  }
});

const Skill = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Shell
          </Typography>
          <Chip color="primary" className={classes.chip}label="Zsh" />
          <Chip color="default" className={classes.chip}label="Bash" />
          <Chip color="default" className={classes.chip}label="fish" />
        </CardContent>
      </Card>
    </div>
  );
}

export default Skill;
