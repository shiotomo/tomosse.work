import React, { Component }  from 'react';
import Technology from '../Technology/Technology.js';
import Project from '../Project/Project.js';
import './Skill.css';

class Skill extends Component {
  render() {
    return (
      <div className="skill">
        <Project />
        <Technology />
      </div>
    );
  }
}

export default Skill;
