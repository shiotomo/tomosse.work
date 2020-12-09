import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginLeft: '5%',
    marginRight: '5%'
  },
  card: {
    marginTop: '1%',
    marginBottom: '1%',
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
      <Grid container spacing={1}>
        <Grid item xs={12} sm={3}>
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
        </Grid>

        <Grid item xs={12} sm={3}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Editor & IDE
              </Typography>
              <Chip color="primary" className={classes.chip}label="Vim" />
              <Chip color="primary" className={classes.chip}label="VSCode" />
              <Chip color="primary" className={classes.chip}label="IntelliJ IDEA" />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Shell
              </Typography>
              <Chip color="primary" className={classes.chip}label="Zsh" />
              <Chip color="default" className={classes.chip}label="fish" />
              <Chip color="default" className={classes.chip}label="bash" />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                OS
              </Typography>
              <Chip color="primary" className={classes.chip}label="macOS" />
              <Chip color="primary" className={classes.chip}label="Windows10" />
              <Chip color="primary" className={classes.chip}label="Ubuntu" />
              <Chip color="default" className={classes.chip}label="Cent OS" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Skill;
