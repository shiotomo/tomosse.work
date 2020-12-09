import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme: Theme) => {
  createStyles({
  });
});

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (evnet: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="Header">
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange}>
          <Tab
            label="Profile"
            component={Link}
            to="/" />
          <Tab
            label="Project"
            component={Link}
            to="/project" />
          <Tab
            label="Hobby"
            component={Link}
            to="/hobby" />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default Header;
