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

import TextField from '@material-ui/core/TextField';

import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import Back from "./common/Back";
import Moment from 'react-moment';


import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

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
        padding: 5,
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
    flexBar: {
        marginTop: 32,
        display: "flex",
        justifyContent: "center"
    }
});


class NewChitty extends Component {
    state = {
        activeStep: 0,
        receivingAccount: "Home Account",
        repaimentAccount: "Saving Account",
        termsChecked: false,
        amount: 1500,
        payment: [],
        payment_methord: 'cash',
        labelWidth: 0,
        frequency:30
    };

    componentDidMount() {
        // this.getPayments()
    }


    componentWillMount() {
        // this.getPayments()
    }



    addNewChitty = () => {
        let apiURI = '';

        // apiURI = Config.API.BASE_URL + Config.API.GET_PAYMENTS + this.props.location.data.userId +'/' + this.props.location.data.subscriptionId;
        apiURI = Config.API.BASE_URL + Config.API.NEW_CHITTY;

        let userId = this.props.location.data
        let frequency = this.state.frequency
        let amount = this.state.amount

        let authHandler = new AuthHandler();
        let isAuthenticated = authHandler.isAuthenticated();

        let params = {
            userId: userId,
            frequency: frequency,
            amount_authorized: amount
        }
        this.setState({ loader: true });
        fetch(apiURI, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + isAuthenticated,
                "cache-control": "no-cache"
            },
            body: JSON.stringify(params),
        }).then(response => {
            response.json()
                .then(responseJson => {

                    if (response.status === 401) {
                        this.props.history.push("/login");
                    }
                    if (!responseJson.error === null) {
                        throw responseJson;
                    }
                    this.setState({ payment: responseJson.data.payments });
                    alert('Chitty Successfully Added ');
                    window.location.href = '/';
                    this.setState({ loader: false });
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

    onChange = (evt) => {
        this.setState({ amount: evt.target.value })
    }

    handleChange = (event) => {
        this.setState({ payment_methord: event.target.value })

    };

    render() {
        const { classes } = this.props;
        const userData = this.props.location.data;


        const currencies = [
            {
                label: 'SN-1500',
                value: 'SN-1500',
            }
        ];

        const frequency = [
            {
                label: 'Weekly',
                value: '7',
            },
            {
                label: ' Monthly',
                value: '30',
            },
            {
                label: 'Quarterly',
                value: '90',
            },
            {
                label: 'Half Yearly',
                value: '180',
            },
            {
                label: 'Yearly',
                value: '360',
            }
        ];

        return (
            <React.Fragment>
                <CssBaseline />
                <div className={classes.root}>
                    <Grid container justify="center">
                        <Grid
                            spacing={1}
                            alignItems="center"
                            justify="center"
                            container
                            className={classes.grid}
                        >
                            <Grid item xs={12}>
                                <Back />
                                <div >
                                    <div >
                                        <Card className={classes.root}>
                                            <CardContent>

                                                <InputLabel htmlFor="input-with-icon-adornment">Add New Chitty</InputLabel>

                                                <br />
                                                

                                                <TextField value={this.state.amount} onChange={this.onChange} id="standard-basic" label="Initial Amount" />
                                                <br />

                                                <br />
                                                <TextField
                                                    id="standard-select-currency"
                                                    select
                                                    label=""
                                                    value={this.state.frequency}
                                                    onChange={this.handleChange}
                                                    helperText="Please Select Frequency"
                                                >
                                                    {frequency.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                                <br />
                                                <br />

                                                <TextField
                                                    id="standard-select-currency"
                                                    select
                                                    label=""
                                                    value={this.state.payment_methord}
                                                    onChange={this.handleChange}
                                                    helperText="Please select your payment methord"
                                                >
                                                    {currencies.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </CardContent>
                                            <CardActions>
                                                <Button onClick={this.addNewChitty} size="small" color='primary'> Add Chitty</Button>
                                            </CardActions>
                                        </Card>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(withStyles(styles)(NewChitty));
