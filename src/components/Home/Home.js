import React, { Component }  from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ProfileCat from '../../images/profile-cat.jpg'
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
        <img src={ProfileCat} alt="profile cat" width="200" height="200" className="profile-picture" />
        <br />
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
        <p className="sns-item">
          GitHub
          <br />
          <a href="https://github.com/shiotomo">
            https://github.com/shiotomo
          </a>
        </p>
        <p className="sns-item">
          Twitter
          <br />
          <a href="https://twitter.com/shiotomohack">
            https://twitter.com/shiotomohack
          </a>
        </p>
        <p className="sns-item">
          Blog
          <br />
          <a href="http://hacktomo.hatenablog.com">
            http://hacktomo.hatenablog.com
          </a>
        </p>
        <p className="sns-item">
          Wantedly
          <br />
          <a href="https://www.wantedly.com/users/75164737">
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
