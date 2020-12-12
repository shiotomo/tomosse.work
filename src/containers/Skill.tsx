import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Language from '../components/Skill/Language';
import Editor from '../components/Skill/Editor';
import Shell from '../components/Skill/Shell';
import Os from '../components/Skill/Os';

const useStyles = makeStyles({
  root: {
    marginTop: '10%',
    marginLeft: '5%',
    marginRight: '5%'
  },
  title: {
    fontSize: 'xx-large',
  }
});

const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Skill</h2>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={3}>
         <Language />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Editor />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Shell />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Os />
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
