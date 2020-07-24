import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Config } from "./common/Config";
import AuthHandler from "./common/AuthHandler";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from '@material-ui/lab/Alert';


import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import Back from "./common/Back";

const qs = require("query-string");
const backgroundShape = require("../images/shape.svg");

const numeral = require("numeral");
numeral.defaultFormat("0,000");

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.primary["A100"],
        overflow: "hidden",
        // background: `url(${backgroundShape}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "0 400px",
        marginTop: 10,
        padding: 20,
        paddingBottom: 2
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
    stepContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    stepGrid: {
        width: "80%"
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
    },
    borderColumn: {
        borderBottom: `1px solid ${theme.palette.grey["100"]}`,
        paddingBottom: 24,
        marginBottom: 24
    },
    input: {
        display: 'none',
    },
    flexBar: {
        marginTop: 32,
        display: "flex",
        justifyContent: "center"
    }
});


class AddUser extends Component {
    state = {
        activeStep: 0,
        receivingAccount: "Home Account",
        repaimentAccount: "Saving Account",
        termsChecked: false,
        labelWidth: 0,
        alert: false,
        message : '',
        loader: false
    };

    componentDidMount() { }

    componentWillMount() {
        // this.getPayments()
    }

    getPayments = () => {
        // this.checkIsUserLoggedIn();
        let apiURI = '';

        apiURI = Config.API.BASE_URL + Config.API.GET_PAYMENTS + this.props.data;

        let authHandler = new AuthHandler();
        let isAuthenticated = authHandler.isAuthenticated();

        // this.getOrderCount(apiURI)

        this.setState({ loader: true });
        fetch(apiURI, {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isAuthenticated,
                "cache-control": "no-cache"
            }
        }).then(response => {
            response.json()
                .then(responseJson => {

                    if (response.status === 401) {
                        this.props.history.push("/login");
                    }
                    if (!responseJson.error === null) {
                        throw responseJson;
                    }
                    console.log(responseJson.data)
                    this.setState({ data: responseJson.data });
                    this.setState({ _meta: responseJson._meta });
                    this.setState({ loader: false });
                    alert('new User Added ');
                    window.location.href = '/';
                })
                .catch(Err => {
                    if (response.status === 401) {
                        this.props.history.push("/login");
                    }
                    this.setState({ displayErrors: true });
                    this.setState({ loader: false });
                })
        }
        );
    }

    createUser = () => {

        let apiURI = Config.API.BASE_URL + Config.API.CREATE_CLIENT;

        let authHandler = new AuthHandler();
        let isAuthenticated = authHandler.isAuthenticated();
        this.setState({ loader: true });

        let dob = new Date(this.state.dateOfBirth);
        let month = `0${dob.getMonth() + 1}`.slice(-2);
        let userDateOfBirth = `${dob.getFullYear()}-${month}-${dob.getDate()}`

        fetch(apiURI, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isAuthenticated,
                "cache-control": "no-cache",
            },
            body: JSON.stringify({
                email: this.state.email,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                mobileNumber: this.state.mobileNumber,
                dob: this.state.date,
                address : this.state.address,
                status: 1,
                accessLevel: 1,
            })
        }).then(response =>
            response.json()
                .then(responseJson => {

                    if (response.status === 401) {
                        this.props.history.push("/login");
                    }
                    if (responseJson.error) {
                        throw responseJson.error;
                    }
                    this.setState({ loader: false });
                    this.setState({ message: responseJson.data.message });
                    this.setState({ alert: true });
                })
                .catch(Err => {

                    if (response.status === 401) {
                        this.props.history.push("/login");
                    }
                    this.setState({ message: Err.message });
                    this.setState({ loader: false });
                    this.setState({ modal: true });
                    this.setState({ alert: true });
                })
        );
    }
    goToDashboard = event => {
        const queryString = this.props.location.search;

        this.props.history.push({
            pathname: "/",
            search: queryString
        });
    };

    generate = (element) => {
        return [0, 1, 2].map((value) =>
            React.cloneElement(element, {
                key: value,
            }),
        );
    }

    setData = (e) => {
        let key = e.target.name
        let value = e.target.value
        this.setState({ [key]: e.target.value});
        }
    render() {
        const { classes } = this.props;
        const userData = this.props.location.data;

        return (
            <React.Fragment>
                <CssBaseline />
                <div className={classes.root}>
                    <Grid container justify="center">

                        <Grid item xs={12}>
                            <Back />
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography variant="h6" component="h6">
                                        Add Coustomer
                                                </Typography>

                                    <TextField fullWidth name = "firstName" onChange={ this.setData}
                                        margin="normal" id="standard-basic" label="First Name" />
                                    <br />
                                    <TextField fullWidth name = "lastName" onChange={ this.setData}
                                        margin="normal" id="standard-basic" label="Last Name" />
                                    <br />
                                    <TextField fullWidth name = "email" onChange={ this.setData}
                                        margin="normal" id="standard-basic" label="E-mail" />
                                    <br />
                                    <TextField fullWidth name = "address" onChange={ this.setData}
                                        margin="normal" id="standard-basic" label="Address" />
                                    <br />
                                    <br />
                                    <TextField fullWidth name = "mobileno" onChange={ this.setData}
                                        margin="normal" id="standard-basic" label="Mobileno" />
                                    <br />
                                    <br />
                                    <input fullWidth name = "date" onChange={ this.setData} type='date' />

                                    <br />
                                    <br />
                                    <InputLabel id="label">Plan</InputLabel>
                                    <Select fullWidth labelId="label" id="select" value="SN - 1500X25">
                                        <MenuItem value="SN - 1500X25">SN - 1500X25 </MenuItem>
                                    </Select>
                                    <br />
                                    <br />
                                    <input
                                        accept="image/*"
                                        className={classes.input}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" color="primary" component="span">
                                            Take Photo
                                         </Button>
                                    </label>
                                    <br />
                                    <br />
                                    <input
                                        accept="image/*"
                                        className={classes.input}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" color="primary" component="span">
                                            <PhotoCamera /> Id Frond
                                         </Button>
                                    </label>
                                    <br />
                                    <br />
                                    <input
                                        accept="image/*"
                                        className={classes.input}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" color="primary" component="span">
                                            <PhotoCamera /> ID Back
                                         </Button>
                                    </label>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color='primary' onClick={this.createUser}> Add User</Button>
                                </CardActions>
                                {this.state.loader && <LinearProgress color="secondary" />}
                                {this.state.alert && <Alert severity="error">{this.state.message}</Alert>}

                            </Card>

                        </Grid>

                    </Grid>

                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(withStyles(styles)(AddUser));
