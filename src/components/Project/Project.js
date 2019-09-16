import React, { Component }  from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './Project.css';

class Project extends Component {
  codeCandy() {
    return (
      <div className="project-card">
        <Card>
          <CardHeader
            title="CodeCandy"
          />
          <CardContent>
            <Typography>
              プログラミング教育支援システム
            </Typography>
            <Typography color="primary">
              Ruby on Rails, TypeScript, Docker
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="primary">
              <a href="https://github.com/shiotomo/codecandy" target="_blank">GitHub</a>
            </Button>
        <Button color="primary">
          <a href="https://codecandy.tomosse.work/" target="_blank">Link</a>
        </Button>
          </CardActions>
        </Card>
      </div>
    );
  };

  codeCaramel() {
    return (
      <div className="project-card">
        <Card>
          <CardHeader
            title="CodeCaramel"
          />
          <CardContent>
            <Typography>
              オンラインコンパイラサーバ
            </Typography>
            <Typography color="primary">
              Golang, Echo, Docker
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="primary">
              <a href="https://github.com/shiotomo/codecaramel" target="_blank">GitHub</a>
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }

  shoppingList() {
    return (
      <div className="project-card">
        <Card>
          <CardHeader
            title="shoppinglist"
          />
          <CardContent>
            <Typography>
              備品管理システム
            </Typography>
            <Typography color="primary">
              Spring Boot, Python3
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="primary">
              <a href="https://github.com/shiotomo/shoppinglist" target="_blank">GitHub</a>
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }

  tomosseWork() {
    return (
      <div className="project-card">
        <Card>
          <CardHeader
            title="tomosse.work"
          />
          <CardContent>
            <Typography>
              ポートフォリオ
            </Typography>
            <Typography color="primary">
              React, Material-UI
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="primary">
              <a href="https://github.com/shiotomo/tomosse.work" target="_blank">GitHub</a>
            </Button>
          </CardActions>
        </Card>
      </div>
      );
  }

  kyoIndustry() {
  return (
  <div className="project-card">
    <Card>
      <CardHeader
        title="kyo-industry"
      />
      <CardContent>
        <Typography>
          誰でも簡単形態素解析ツール
        </Typography>
        <Typography color="primary">
          Sinatra, MeCab, natto
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary">
          <a href="https://github.com/shiotomo/kyo-industry" target="_blank">GitHub</a>
        </Button>
        <Button color="primary">
          <a href="https://kyo-industry.tomosse.work/" target="_blank">Link</a>
        </Button>
      </CardActions>
    </Card>
  </div>
  );
  }

  render() {
  return (
  <div className="render">
    <h2>Projects</h2>
    <Grid container>
      <Grid item xs={4}>
        {this.codeCandy()}
      </Grid>
      <Grid item xs={4}>
        {this.shoppingList()}
      </Grid>
      <Grid item xs={4}>
        {this.codeCaramel()}
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={4}>
        {this.tomosseWork()}
      </Grid>
      <Grid item xs={4}>
        {this.kyoIndustry()}
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  </div>
  );
  }
}

export default Project
