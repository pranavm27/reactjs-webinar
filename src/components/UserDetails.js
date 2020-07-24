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
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
// import Link from '@material-ui/core/Link';

import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Back from "./common/Back";
import { Link } from "react-router-dom";

const qs = require("query-string");
// const backgroundShape = require("../images/shape.svg");

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
        padding: 2,
        marginBottom: 10
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
        marginTop: 10,
        padding: 2,
        marginBottom: 10,
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


class UserDetails extends Component {
    state = {
        activeStep: 0,
        receivingAccount: "Home Account",
        repaimentAccount: "Saving Account",
        termsChecked: false,
        editMode: false,
        labelWidth: 0,
        mobile_number: this.props.location.data.mobile_number,
        email: this.props.location.data.email,

    };

    componentDidMount() {
    }

    goToDashboard = event => {
        const queryString = this.props.location.search;

        this.props.history.push({
            pathname: "/",
            search: queryString
        });
    };

    updateEditState = (val) => {
        this.setState({ editMode: val })
    }

    render() {
        const { classes } = this.props;
        const userData = this.props.location.data;
        console.log(userData)
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
                                        <Table className={classes.table} size="small" aria-label="a dense table">
                                            <TableBody>

                                                <TableRow >
                                                    <TableCell align="left">
                                                        <Typography variant="h5" component="h2">
                                                            {userData.first_name} {userData.last_name}
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {!this.state.editMode && <EditIcon onClick={() => { this.updateEditState(true) }}></EditIcon>}
                                                        {this.state.editMode && <HighlightOffIcon onClick={() => { this.updateEditState(false) }}></HighlightOffIcon>}
                                                    </TableCell>

                                                </TableRow>
                                            </TableBody></Table>
                                        <TableContainer component={Paper}>
                                            <Table className={classes.table} size="small" aria-label="a dense table">
                                                <TableBody>

                                                    <TableRow >

                                                    </TableRow>
                                                    <TableRow >
                                                        <TableCell align="left">Mobbile No</TableCell>
                                                        {!this.state.editMode && <TableCell align="right">{userData.mobile_number}</TableCell>}
                                                        {this.state.editMode && <TableCell align="right">
                                                            <TextField required value={userData.mobile_number} />

                                                        </TableCell>}
                                                    </TableRow>

                                                    <TableRow >
                                                        <TableCell align="left">Email id</TableCell>
                                                        {!this.state.editMode && <TableCell align="right">{userData.email}</TableCell>}
                                                        {this.state.editMode && <TableCell align="right">
                                                            <TextField required value={userData.email} />

                                                        </TableCell>}
                                                    </TableRow>

                                                    <TableRow >
                                                        <TableCell align="left">Referred By</TableCell>
                                                        <TableCell align="right">{userData.referred_by}</TableCell>
                                                    </TableRow>

                                                    <TableRow >
                                                        <TableCell align="left">DOB</TableCell>
                                                        <TableCell align="right">{userData.date_of_birth}</TableCell>
                                                    </TableRow>


                                                    <TableRow >
                                                        <TableCell align="left">Joined On</TableCell>
                                                        <TableCell align="right">{userData.created_at}</TableCell>
                                                    </TableRow>

                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                        {/* addresses */}
                                        <br />
                                        <TableContainer component={Paper}>
                                            <Table className={classes.table} size="small" aria-label="a dense table">
                                                <TableBody>
                                                    <TableRow >
                                                        <TableCell align="left">Address </TableCell>
                                                    </TableRow>
                                                    {userData.address.length === 0 &&
                                                        <TableRow align="left">
                                                            No Address
                                                        </TableRow>}
                                                    {userData.address.map((add) => {
                                                        console.log(add)
                                                        return (<TableRow align="left"> <TableCell align="left">
                                                            {add.address_line_1},
                                                            {add.address_line_1},
                                                            {add.city},
                                                            {add.state},
                                                            {add.country},
                                                            {add.zip}

                                                        </TableCell>
                                                        </TableRow>)
                                                    })}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                        {/* active subscriptions */}
                                        <br />
                                        <TableContainer component={Paper}>
                                            <Table className={classes.table} size="small" aria-label="a dense table">
                                                <TableBody>
                                                    <TableRow >
                                                        <TableCell align="left">Chitties</TableCell>
                                                        <TableCell align="right">

                                                            {/* <Link href="#/new-chitty/" > */}
                                                            <Button
                                                                variant="contained"
                                                                color=""
                                                                className={classes.secondary}
                                                                to={{ pathname: "/new-chitty", data: userData.id }}
                                                                component={Link}
                                                                size="small"
                                                            >
                                                                <AddCircleIcon  />
                                                            </Button>{
                                                            /* </Link> */}
                                                        </TableCell>

                                                    </TableRow>
                                                    {userData.subscriptions.length === 0 &&
                                                        <TableRow align="left">
                                                            <TableCell align="left"> No Active Chitties
                                                        <TableCell align="right">
                                                                    <Button
                                                                        variant="contained"
                                                                        color="primary"
                                                                        className={classes.secondary}
                                                                        to={{ pathname: "/payments", data: userData.id }}
                                                                        component={Link}
                                                                        size="small"
                                                                    >
                                                                        <a className="no-style" href={"/new-chitty/" + userData.id}><AddCircleIcon /></a>


                                                                    </Button>
                                                                </TableCell>


                                                            </TableCell>

                                                        </TableRow>}
                                                    {userData.subscriptions.length > 0 && userData.subscriptions.map((subs, index) => {
                                                        return (<>

                                                            <TableRow >
                                                                <TableCell align="left">{index + 1} SN-500X25 </TableCell>
                                                                <TableCell align="right">
                                                                    <Button
                                                                        variant="contained"
                                                                        color="primary"
                                                                        className={classes.secondary}
                                                                        to={{ pathname: "/payments", data: { userId: userData.id, subscriptionId: subs.id } }}
                                                                        component={Link}
                                                                        size="small"
                                                                    >
                                                                        details
                                                                    </Button>
                                                                </TableCell>

                                                            </TableRow>
                                                            <TableRow >
                                                                <TableCell align="left">Total Amount</TableCell>
                                                                <TableCell align="left">{subs.total_amount}</TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                <TableCell align="left">Standing Amount</TableCell>
                                                                <TableCell align="left">{subs.standing_amount}</TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                <TableCell align="left">Status</TableCell>
                                                                <TableCell align="left">{subs.status === 1 ? "Active " : "Not Active"}</TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                <TableCell align="left">Next Billing  Date</TableCell>
                                                                <TableCell align="left">{subs.next_payment_date}</TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                <TableCell align="left">Started On</TableCell>
                                                                <TableCell align="left">{subs.created_at}</TableCell>
                                                            </TableRow>

                                                            <br />
                                                        </>)
                                                    })}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                        {/* bottom button */}
                                        <br />
                                        {/* <Card className={classes.root}>

                                            <CardActions>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    className={classes.secondary}
                                                    to={{ pathname: "/payments", data: userData.id }}
                                                    component={Link}
                                                    size="small"
                                                >
                                                    Payments
                                                </Button>
                                            </CardActions>
                                        </Card> */}
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

export default withRouter(withStyles(styles)(UserDetails));
