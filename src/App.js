import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Routing from './Routing.js'
import MenuBar from './components/MenuBar/MenuBar.js'
import FooterBar from './components/FooterBar/FooterBar.js'
import './App.css';

class App extends Component {
  header() {
    return(
      <header>
        <MenuBar />
      </header>
    );
  }

  footer() {
    return(
      <footer>
        <FooterBar />
      </footer>
    );
  }

  content() {
    return(
      <div className="App">
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Routing />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
    );
  }

  render() {
    return (
      <div className="app-body">
        <BrowserRouter>
          {this.header()}
          {this.content()}
          {this.header}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
