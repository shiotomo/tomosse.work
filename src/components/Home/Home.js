import React, { Component }  from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import './Home.css';

class Home extends Component {
  home() {
    return (
      <div className="home">
        <h1>tomosse.work</h1>
      </div>
    );
  }

  aboutMe() {
    return (
      <div className="aboutme">
        <label>About Me</label>
        <List>
          <ListItem button>
            <ListItemText primary="Name" secondary="Tomoki Shiota" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="From" secondary="Kyoto & Kgawa"/>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="University" secondary="Kagawa University" />
          </ListItem>
        </List>
      </div>
    );
  }

  sns() {
    return (
      <div className="sns">
        <p class="sns-item">
          GitHub
          <br />
          <a href="https://github.com/shiotomo" target="_blank">
            https://github.com/shiotomo
          </a>
        </p>
        <p class="sns-item">
          Twitter
          <br />
          <a href="https://twitter.com/shiotomohack" target="_blank">
            https://twitter.com/shiotomohack
          </a>
        </p>
        <p class="sns-item">
          Blog
          <br />
          <a href="http://hacktomo.hatenablog.com" target="_blank">
            http://hacktomo.hatenablog.com
          </a>
        </p>
        <p class="sns-item">
          Wantedly
          <br />
          <a href="https://www.wantedly.com/users/75164737" target="_blank">
            https://www.wantedly.com/users/75164737
          </a>
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="render">
        {this.home()}
        {this.aboutMe()}
        {this.sns()}
      </div>
    );
  }
}

export default Home;
