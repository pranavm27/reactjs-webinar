import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from '@material-ui/core/TextField';
import Cookies from 'universal-cookie';

import {Config} from "./common/Config";
import {axiox} from "./common/Axios";


const backgroundShape = require("../images/shape.svg");

const logo = require("../images/logo.svg");

const numeral = require("numeral");
numeral.defaultFormat("0");

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary["A100"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    marginTop: 10,
    padding: 20,
    paddingBottom: 500
  },
  grid: {
    margin: `0 ${theme.spacing(2)}px`
  },
  smallContainer: {
    width: "60%"
  },
  bigContainer: {
    width: "80%"
  },
  logo: {
    marginBottom: 24,
    display: "flex",
    justifyContent: "center"
  },
  stepContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stepGrid: {
    width: "80%"
  },
  buttonBar: {
    marginTop: 32,
    display: "flex",
    justifyContent: "center"
  },
  button: {
    backgroundColor: theme.palette.primary["A100"]
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1)
  },
  stepper: {
    backgroundColor: "transparent"
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  topInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 42
  },
  formControl: {
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
});

const getSteps = () => {
  return ["User", "Signin", "Permission"];
};

class Signup extends Component {
  state = {
    activeStep: 0,
    receivingAccount: "",
    termsChecked: false,
    loading: true,
    labelWidth: 0
  };

  handleLogin = (event) => {
    console.log ('in login ')
    let username = this.refs.username.value
    let password = this.refs.password.value
    console.log(username)
    console.log(password)
    //TODO :: validate input before sending.
    let data = JSON.stringify({ username: username, password: password });

    let apiEndPoint = Config.API.BASE_URL + Config.API.LOGIN_ENDPOINT

    fetch(apiEndPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'cache-control': 'no-cache'
      },
      body: data,
    })
      .then((response) => response.json()
        .then((responseJson) => {
          if (responseJson.token === undefined) { throw response }
          else {
            const cookies = new Cookies();
            cookies.set('authToken', responseJson.token, { path: '/' });
            this.redirectToDashboard();
          }
        })
        .catch((Err) => {
          console.log(' login failed ');
          this.setState({ displayErrors: true })
        })
      );

    event.preventDefault();
  }

  redirectToDashboard() {
    this.props.history.push("/");
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep, loading } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          {/* <Back /> */}
          <Grid container justify="center">
            <Grid
              spacing={10}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <Grid item xs={12}>
                <div className={classes.logo}>
                  <img width={100} height={100} src={logo} alt="" />
                </div>
                <form onSubmit={this.handleLogin} className={classes.root} noValidate autoComplete="off">
                  <input id="username" ref="username" label="username" placeholder='username'/>
                  <br /><br />
                  <input id="password" ref="password" type="password" label="password" placeholder = 'password'/>
                  <br /><br />
                  <Button  type='submit' variant="outlined"  color="primary">Login</Button>
                  <small id="emailHelp" className="form-text text-muted text-right"><a href="/reset-password">Forgot your password?</a></small>

                </form>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Signup));
