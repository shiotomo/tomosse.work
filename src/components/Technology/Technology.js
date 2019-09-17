import React, { Component }  from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import './Technology.css';

class Technology extends Component {
  editor() {
    return (
      <div className="skill-item">
        <label>Editor & IDE</label>
        <List>
          <ListItem button>
            <ListItemText primary="Vim" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Visual Studio Code" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Sublime Text" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Eclipse" />
          </ListItem>
        </List>
      </div>
    );
  }

  shell() {
    return (
      <div className="skill-item">
        <label>Shell</label>
        <List>
          <ListItem button>
            <ListItemText primary="Zsh" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Bash" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="fish" />
          </ListItem>
        </List>
      </div>
    );
  }

  language() {
    return (
      <div className="skill-item">
        <label>Lanugeage</label>
        <List>
          <ListItem button>
            <ListItemText primary="Ruby" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Java" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Python" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Golang" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Node.js" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="JavaScript" />
          </ListItem>
        </List>
      </div>
    );
  }

  framework() {
    return (
      <div className="skill-item">
        <label>Framework</label>
        <List>
          <ListItem button>
            <ListItemText primary="Ruby on Rails" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Spring Boot" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Sinatra" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Echo" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Flask" />
          </ListItem>
        </List>
      </div>
    );
  }

  database() {
    return (
      <div className="skill-item">
        <label>RDB</label>
        <List>
          <ListItem button>
            <ListItemText primary="MySQL" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="PostgreSQL" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Sqlite3" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="" />
          </ListItem>
        </List>
        <label>KVS</label>
        <List>
          <ListItem button>
            <ListItemText primary="Redis" />
          </ListItem>
        </List>
      </div>
    );
  }

  tool() {
    return (
      <div className="skill-item">
        <label>Another</label>
        <List>
          <ListItem button>
            <ListItemText primary="Vagrant" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Docker, DockerCompose" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="tmux" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Nginx" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="etc..." />
          </ListItem>
        </List>
      </div>
    );
  }

  skill() {
    return (
      <div className="skill-item">
        <List>
          <ListItem button>
            <ListItemText primary="Editor & IDE: Vim, Visual Studio Code, Sublime Text, Eclipse" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Shell: Zsh, Bash, fish" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="OS: macOS, Windows10, Ubuntu, CentOS" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Lanugeage: Ruby, Java, Python, Golang, Node.js, JavaScript" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Framework: Ruby on Rails, Spring Boot, Sinatra, Echo, Flask" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Database & KVS: MySQL, PostgreSQL, Sqlite3, Redis" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Another: Vagrant, Docker, DockerCompose, tmux, Nginx, etc..." />
          </ListItem>
        </List>
      </div>
    );
  }

  render() {
    return (
      <div className="render">
        <h2>My Skill</h2>
        <Grid container>
          <Grid item xs={6}>
            {this.editor()}
            {this.shell()}
            {this.language()}
          </Grid>
          <Grid item xs={6}>
            {this.framework()}
            {this.database()}
            {this.tool()}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Technology;
