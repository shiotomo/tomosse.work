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
            Language
          </Typography>
          <Chip color="primary" className={classes.chip}label="Java" />
          <Chip color="primary" className={classes.chip}label="Ruby" />
          <Chip color="default" className={classes.chip}label="Kotlin" />
          <Chip color="default" className={classes.chip}label="Go" />
          <Chip color="default" className={classes.chip}label="Python3" />
          <Chip color="default" className={classes.chip}label="Node.js" />
          <Chip color="default" className={classes.chip}label="JavaScript" />
        </CardContent>
      </Card>
    </div>
  );
}

export default Skill;
