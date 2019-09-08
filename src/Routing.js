import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home.js'
import Skill from './components/Skill/Skill.js'
import Hobby from './components/Hobby/Hobby.js'

class Routing extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/skill" component={Skill} />
        <Route path="/hobby" component={Hobby} />
      </Switch>
    );
  }
}

export default Routing;
