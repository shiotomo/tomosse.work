import React, { Component }  from 'react';
import { Link } from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './MenuBar.css';

class MenuBar extends Component {
  render() {
    return (
      <div className="menubar">
        <Tabs
          value={1}
          indicattorColor="primary"
          textColor="primary"
          centered
          fixed
        >
          <Tab
            className="tab"
            label="Home"
            component={Link}
            to="/"
          />
          <Tab
            className="tab"
            label="Skill"
            component={Link}
            to="skill"
          />
          <Tab
            className="tab"
            label="Hobby"
            component={Link}
            to="hobby"
          />
        </Tabs>
      </div>
    );
  }
}

export default MenuBar;
