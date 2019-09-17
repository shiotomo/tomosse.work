import React, { Component }  from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Hobby.css';

class Hobby extends Component {
  render() {
    return (
      <div className="render">
        <h2>Hobby</h2>
        <Car />
        <MotorCycle />
      </div>
    );
  }
}

class Car extends Component {
  render() {
    return (
      <div className="hobby">
        <Card>
          <CardHeader
            title="Car"
          />
          <CardContent>
            <Typography>
              SUBARU: IMPREZA 1.5i Limited (2004)
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

class MotorCycle extends Component {
  render() {
    return (
      <div className="hobby">
        <Card>
          <CardHeader
            title="Motor Cycle"
          />
          <CardContent>
            <Typography>
              KAWASAKI: BALIUS Ⅰ(1991)
            </Typography>
            <Typography>
              HONDA: APE50 [80cc] (2002)
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Hobby;
