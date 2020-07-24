import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import CardItem from "./cards/CardItem";
import Topbar from "./Topbar";
import SectionHeader from "./typo/SectionHeader";
import  AuthHandler  from "./common/AuthHandler";
import { Config } from "./common/Config";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

// const backgroundShape = require("../images/shape.svg");

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["a2a2a2"],
    overflow: "hidden",
    // background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    // marginTop: 20,
    padding: 5,
    // paddingBottom: 200
  },
  grid: {
    width: 1000
  },
  fab:{
    float: 'right',
    marginTop:'30%'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});

class Users extends Component {
  state= {
    data:[
      {
        "id": 1,
        "first_name": "Pranav",
        "last_name": "M",
        "mobile_number": "8281856736",
        "access_level": 1,
        "date_of_birth": "1991-02-01",
        "created_at": null,
        "email": "pranav@test.com",
        "address": [
          {
            "id": 5951,
            "address_line_1": "test address line 1 ",
            "address_line_2": "address line 2",
            "first_name": "first _name ",
            "last_name": "last name ",
            "city": "kochi",
            "state": "kerala ",
            "country": "india",
            "user_id": 1,
            "zip": "690537",
            "created_at": null,
            "updated_at": null,
            "is_deleted": 0,
            "is_default": 0
          },
          {
            "id": 5955,
            "address_line_1": "test address line 1 ",
            "address_line_2": "address line 2",
            "first_name": "first _name ",
            "last_name": "last name ",
            "city": "kochi",
            "state": "kerala ",
            "country": "india",
            "user_id": 1,
            "zip": "690537",
            "created_at": null,
            "updated_at": null,
            "is_deleted": 0,
            "is_default": 0
          }
        ],
        "referred_by": "test user",
        "profile_picture": null,
        "subscriptions": [
          {
            "id": 13756,
            "user_id": 1,
            "plan_id": null,
            "original_order_id": null,
            "agent_id": null,
            "total_amount": "0.00",
            "standing_amount": null,
            "currency": "USD",
            "status": 1,
            "next_payment_date": null,
            "billing_address_id": null,
            "created_at": "2020-07-22T11:30:16.000Z",
            "updated_at": "2020-07-22T11:30:16.000Z",
            "gift_redeem": 0,
            "redeem_amount": "0.00",
            "direct_discount_amount": null,
            "total_instalments": null,
            "instalments_paid": null,
            "next_billing_date": null,
            "nickname": null,
            "quantity": 1,
            "unsubscribed_at": null,
            "payment_method": "stripe",
            "frequency": 30,
            "unsubscribe_primary_reason": null,
            "unsubscribe_secondary_reason": null,
            "is_reactivated": 0
          },
          {
            "id": 13757,
            "user_id": 1,
            "plan_id": null,
            "original_order_id": null,
            "agent_id": null,
            "total_amount": "0.00",
            "standing_amount": null,
            "currency": "USD",
            "status": 1,
            "next_payment_date": null,
            "billing_address_id": null,
            "created_at": "2020-07-22T11:30:18.000Z",
            "updated_at": "2020-07-22T11:30:18.000Z",
            "gift_redeem": 0,
            "redeem_amount": "0.00",
            "direct_discount_amount": null,
            "total_instalments": null,
            "instalments_paid": null,
            "next_billing_date": null,
            "nickname": null,
            "quantity": 1,
            "unsubscribed_at": null,
            "payment_method": "stripe",
            "frequency": 30,
            "unsubscribe_primary_reason": null,
            "unsubscribe_secondary_reason": null,
            "is_reactivated": 0
          },
          {
            "id": 13758,
            "user_id": 1,
            "plan_id": null,
            "original_order_id": null,
            "agent_id": null,
            "total_amount": "0.00",
            "standing_amount": null,
            "currency": "USD",
            "status": 1,
            "next_payment_date": null,
            "billing_address_id": null,
            "created_at": "2020-07-22T11:30:19.000Z",
            "updated_at": "2020-07-22T11:30:19.000Z",
            "gift_redeem": 0,
            "redeem_amount": "0.00",
            "direct_discount_amount": null,
            "total_instalments": null,
            "instalments_paid": null,
            "next_billing_date": null,
            "nickname": null,
            "quantity": 1,
            "unsubscribed_at": null,
            "payment_method": "stripe",
            "frequency": 30,
            "unsubscribe_primary_reason": null,
            "unsubscribe_secondary_reason": null,
            "is_reactivated": 0
          },
          {
            "id": 13759,
            "user_id": 1,
            "plan_id": null,
            "original_order_id": null,
            "agent_id": null,
            "total_amount": "0.00",
            "standing_amount": null,
            "currency": "USD",
            "status": 1,
            "next_payment_date": null,
            "billing_address_id": null,
            "created_at": "2020-07-22T11:30:23.000Z",
            "updated_at": "2020-07-22T11:30:23.000Z",
            "gift_redeem": 0,
            "redeem_amount": "0.00",
            "direct_discount_amount": null,
            "total_instalments": null,
            "instalments_paid": null,
            "next_billing_date": null,
            "nickname": null,
            "quantity": 1,
            "unsubscribed_at": null,
            "payment_method": "stripe",
            "frequency": 30,
            "unsubscribe_primary_reason": null,
            "unsubscribe_secondary_reason": null,
            "is_reactivated": 0
          },
          {
            "id": 13760,
            "user_id": 1,
            "plan_id": null,
            "original_order_id": null,
            "agent_id": null,
            "total_amount": "0.00",
            "standing_amount": null,
            "currency": "USD",
            "status": 1,
            "next_payment_date": null,
            "billing_address_id": null,
            "created_at": "2020-07-22T11:32:03.000Z",
            "updated_at": "2020-07-22T11:32:03.000Z",
            "gift_redeem": 0,
            "redeem_amount": "0.00",
            "direct_discount_amount": null,
            "total_instalments": null,
            "instalments_paid": null,
            "next_billing_date": null,
            "nickname": null,
            "quantity": 1,
            "unsubscribed_at": null,
            "payment_method": "stripe",
            "frequency": 30,
            "unsubscribe_primary_reason": null,
            "unsubscribe_secondary_reason": null,
            "is_reactivated": 0
          },
          {
            "id": 13761,
            "user_id": 1,
            "plan_id": null,
            "original_order_id": null,
            "agent_id": null,
            "total_amount": "0.00",
            "standing_amount": null,
            "currency": "USD",
            "status": 1,
            "next_payment_date": null,
            "billing_address_id": null,
            "created_at": "2020-07-22T11:32:35.000Z",
            "updated_at": "2020-07-22T11:32:35.000Z",
            "gift_redeem": 0,
            "redeem_amount": "0.00",
            "direct_discount_amount": null,
            "total_instalments": null,
            "instalments_paid": null,
            "next_billing_date": null,
            "nickname": null,
            "quantity": 1,
            "unsubscribed_at": null,
            "payment_method": "stripe",
            "frequency": 30,
            "unsubscribe_primary_reason": null,
            "unsubscribe_secondary_reason": null,
            "is_reactivated": 0
          },
          {
            "id": 13762,
            "user_id": 1,
            "plan_id": null,
            "original_order_id": null,
            "agent_id": null,
            "total_amount": "0.00",
            "standing_amount": null,
            "currency": "USD",
            "status": 1,
            "next_payment_date": null,
            "billing_address_id": null,
            "created_at": "2020-07-22T11:33:16.000Z",
            "updated_at": "2020-07-22T11:33:16.000Z",
            "gift_redeem": 0,
            "redeem_amount": "0.00",
            "direct_discount_amount": null,
            "total_instalments": null,
            "instalments_paid": null,
            "next_billing_date": null,
            "nickname": null,
            "quantity": 1,
            "unsubscribed_at": null,
            "payment_method": "stripe",
            "frequency": 30,
            "unsubscribe_primary_reason": null,
            "unsubscribe_secondary_reason": null,
            "is_reactivated": 0
          },
          {
            "id": 13763,
            "user_id": 1,
            "plan_id": null,
            "original_order_id": null,
            "agent_id": null,
            "total_amount": "0.00",
            "standing_amount": null,
            "currency": "USD",
            "status": 1,
            "next_payment_date": null,
            "billing_address_id": null,
            "created_at": "2020-07-22T11:33:42.000Z",
            "updated_at": "2020-07-22T11:33:42.000Z",
            "gift_redeem": 0,
            "redeem_amount": "0.00",
            "direct_discount_amount": null,
            "total_instalments": null,
            "instalments_paid": null,
            "next_billing_date": null,
            "nickname": null,
            "quantity": 1,
            "unsubscribed_at": null,
            "payment_method": "stripe",
            "frequency": 30,
            "unsubscribe_primary_reason": null,
            "unsubscribe_secondary_reason": null,
            "is_reactivated": 0
          },
          {
            "id": 13764,
            "user_id": 1,
            "plan_id": null,
            "original_order_id": null,
            "agent_id": null,
            "total_amount": "1500.00",
            "standing_amount": null,
            "currency": "USD",
            "status": 1,
            "next_payment_date": null,
            "billing_address_id": null,
            "created_at": "2020-07-22T11:34:19.000Z",
            "updated_at": "2020-07-22T11:34:19.000Z",
            "gift_redeem": 0,
            "redeem_amount": "0.00",
            "direct_discount_amount": null,
            "total_instalments": null,
            "instalments_paid": null,
            "next_billing_date": null,
            "nickname": null,
            "quantity": 1,
            "unsubscribed_at": null,
            "payment_method": "stripe",
            "frequency": 30,
            "unsubscribe_primary_reason": null,
            "unsubscribe_secondary_reason": null,
            "is_reactivated": 0
          },
          {
            "id": 13765,
            "user_id": 1,
            "plan_id": null,
            "original_order_id": null,
            "agent_id": null,
            "total_amount": "1500.00",
            "standing_amount": null,
            "currency": "USD",
            "status": 1,
            "next_payment_date": null,
            "billing_address_id": null,
            "created_at": "2020-07-22T11:35:37.000Z",
            "updated_at": "2020-07-22T11:35:37.000Z",
            "gift_redeem": 0,
            "redeem_amount": "0.00",
            "direct_discount_amount": null,
            "total_instalments": null,
            "instalments_paid": null,
            "next_billing_date": null,
            "nickname": null,
            "quantity": 1,
            "unsubscribed_at": null,
            "payment_method": "stripe",
            "frequency": 30,
            "unsubscribe_primary_reason": null,
            "unsubscribe_secondary_reason": null,
            "is_reactivated": 0
          },
          {
            "id": 13766,
            "user_id": 1,
            "plan_id": null,
            "original_order_id": null,
            "agent_id": null,
            "total_amount": "1500.00",
            "standing_amount": null,
            "currency": "USD",
            "status": 1,
            "next_payment_date": null,
            "billing_address_id": null,
            "created_at": "2020-07-22T11:35:41.000Z",
            "updated_at": "2020-07-22T11:35:41.000Z",
            "gift_redeem": 0,
            "redeem_amount": "0.00",
            "direct_discount_amount": null,
            "total_instalments": null,
            "instalments_paid": null,
            "next_billing_date": null,
            "nickname": null,
            "quantity": 1,
            "unsubscribed_at": null,
            "payment_method": "stripe",
            "frequency": 30,
            "unsubscribe_primary_reason": null,
            "unsubscribe_secondary_reason": null,
            "is_reactivated": 0
          },
          {
            "id": 13768,
            "user_id": 1,
            "plan_id": null,
            "original_order_id": null,
            "agent_id": null,
            "total_amount": "1500.00",
            "standing_amount": null,
            "currency": "USD",
            "status": 1,
            "next_payment_date": null,
            "billing_address_id": null,
            "created_at": "2020-07-22T11:38:17.000Z",
            "updated_at": "2020-07-22T11:38:17.000Z",
            "gift_redeem": 0,
            "redeem_amount": "0.00",
            "direct_discount_amount": null,
            "total_instalments": null,
            "instalments_paid": null,
            "next_billing_date": null,
            "nickname": null,
            "quantity": 1,
            "unsubscribed_at": null,
            "payment_method": "stripe",
            "frequency": 30,
            "unsubscribe_primary_reason": null,
            "unsubscribe_secondary_reason": null,
            "is_reactivated": 0
          }
        ]
      },
      {
        "id": 2,
        "first_name": "test",
        "last_name": "user",
        "mobile_number": "1232123212",
        "access_level": 1,
        "date_of_birth": null,
        "created_at": null,
        "email": "test",
        "address": [
          {
            "id": 5954,
            "address_line_1": "test address line 1 ",
            "address_line_2": "address line 2",
            "first_name": "first _name ",
            "last_name": "last name ",
            "city": "kochi",
            "state": "kerala ",
            "country": "india",
            "user_id": 2,
            "zip": "690537",
            "created_at": null,
            "updated_at": null,
            "is_deleted": 0,
            "is_default": 0
          }
        ],
        "referred_by": "test user",
        "profile_picture": null,
        "subscriptions": [
          {
            "id": 13750,
            "user_id": 2,
            "plan_id": 1,
            "original_order_id": null,
            "agent_id": 1,
            "total_amount": "15000.00",
            "standing_amount": "8770.00",
            "currency": "USD",
            "status": 1,
            "next_payment_date": "2020-10-20T00:00:00.000Z",
            "billing_address_id": null,
            "created_at": "2020-07-21T14:57:50.000Z",
            "updated_at": "2020-07-23T13:20:51.000Z",
            "gift_redeem": 0,
            "redeem_amount": "0.00",
            "direct_discount_amount": null,
            "total_instalments": 12,
            "instalments_paid": 0,
            "next_billing_date": null,
            "nickname": null,
            "quantity": 1,
            "unsubscribed_at": null,
            "payment_method": "stripe",
            "frequency": null,
            "unsubscribe_primary_reason": "30",
            "unsubscribe_secondary_reason": null,
            "is_reactivated": 0
          },
          {
            "id": 13751,
            "user_id": 2,
            "plan_id": 1,
            "original_order_id": null,
            "agent_id": 1,
            "total_amount": "15000.00",
            "standing_amount": "14985.00",
            "currency": "USD",
            "status": 1,
            "next_payment_date": "2020-10-20T00:00:00.000Z",
            "billing_address_id": null,
            "created_at": "2020-07-21T14:57:50.000Z",
            "updated_at": "2020-07-21T21:35:10.000Z",
            "gift_redeem": 0,
            "redeem_amount": "0.00",
            "direct_discount_amount": null,
            "total_instalments": 12,
            "instalments_paid": 0,
            "next_billing_date": null,
            "nickname": null,
            "quantity": 1,
            "unsubscribed_at": null,
            "payment_method": "stripe",
            "frequency": null,
            "unsubscribe_primary_reason": "60",
            "unsubscribe_secondary_reason": null,
            "is_reactivated": 0
          }
        ]
      },
      {
        "id": 4135,
        "first_name": "test1",
        "last_name": "test1",
        "mobile_number": null,
        "access_level": 1,
        "date_of_birth": "1221-12-02",
        "created_at": "2020-07-13T10:21:03.000Z",
        "email": "test3@test.com",
        "address": [],
        "referred_by": "test user",
        "profile_picture": null,
        "subscriptions": []
      },
      {
        "id": 4137,
        "first_name": "testuser",
        "last_name": "testuser",
        "mobile_number": "22222222",
        "access_level": 1,
        "date_of_birth": "1996-02-01",
        "created_at": "2020-07-23T13:22:38.000Z",
        "email": "testuser@test.com",
        "address": [],
        "referred_by": "test user",
        "profile_picture": null,
        "subscriptions": []
      }
    
    ],
 
  }
  // getUsers(param) {
  //   // this.checkIsUserLoggedIn();
  //   let apiURI = '';
  //   if (param) {
  //     apiURI = Config.API.BASE_URL + Config.API.GET_ALL_CLIENTS + `?page=${param.page}&per_page=${param.perPage}`;
  //   }
  //   else {
  //     apiURI = Config.API.BASE_URL + Config.API.GET_ALL_CLIENTS;
  //   }
  //   let authHandler = new AuthHandler();
  //   let isAuthenticated = authHandler.isAuthenticated();

  //   // this.getOrderCount(apiURI)

  //   this.setState({ loader: true });
  //   fetch(apiURI, {
  //     method: "GET",
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Content-Type": "application/json",
  //       "Authorization": "Bearer " + isAuthenticated,
  //       "cache-control": "no-cache"
  //     }
  //   }).then(response => {
  //     response.json()
  //       .then(responseJson => {

  //         if (response.status === 401) {
  //           this.props.history.push("/login");
  //         }
  //         if (!responseJson.error === null) {
  //           throw responseJson;
  //         }
  //         console.log(responseJson.data)
  //         this.setState({ data: responseJson.data });
  //         this.setState({ _meta: responseJson._meta });
  //         this.setState({ loader: false });
  //       })
  //       .catch(Err => {
  //         if (response.status === 401) {
  //           // this.props.history.push("/login");
  //         }
  //         this.setState({ displayErrors: true });
  //         this.setState({ loader: false });
  //       })
  //   }
  //   );
  // }

  addNewUser = () =>{
    this.props.history.push("/add-user");
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillMount(){
    // this.getUsers()
  }

  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname;

    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar currentPath={currentPath} />
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
                <Paper component="form" className={classes.root}>
                  
                  <InputBase
                    className={classes.input}
                    placeholder="Search by email "
                    inputProps={{ 'aria-label': 'search by emmaildid' }}
                  />
                  <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                  {/* <Divider className={classes.divider} orientation="vertical" /> */}
                  <IconButton onClick={this.addNewUser} color="primary" className={classes.iconButton} aria-label="directions">
                    <AddIcon />
                  </IconButton>
                </Paper>
                <SectionHeader
                  title="Customers"
                  subtitle=""
                />
                <CardItem data={this.state.data}/>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Users);
