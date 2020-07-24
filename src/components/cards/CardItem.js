import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ButtonBar from '../buttons/ButtonBar';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const styles = theme => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderBottom: '1px sold',
    marginBottom: '2px'
  },
  avatar: {
    margin: 10,
    backgroundColor: theme.palette.grey['200'],
    color: theme.palette.text.primary,
  },
  avatarContainer: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginBottom: theme.spacing(4)
    }
  },
  itemContainer: {
    display: 'flex',
    alignItems: '',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: ''
    }
  },
  baseline: {
    alignSelf: 'baseline',
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      alignItems: '',
      width: '100%',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: 0
    }
  },
  inline: {
    display: 'inline-block',
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  inlineRight: {
    width: '30%',
    textAlign: 'center',
    marginLeft: 50,
    alignSelf: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: 0,
      textAlign: 'center'
    }
  },
  backButton: {
    marginRight: theme.spacing(2)
  }
})

class CardItem extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
       
          {
            this.props.data.map((dataItem, index) => {
              return (
                <>
                  <Paper className={classes.paper}>
                  <div className={classes.itemContainer}>
                    <div className={classes.avatarContainer}>
                      <Avatar className={classes.avatar}>
                        <AccountCircle />
                      </Avatar>
                    </div>
                    <div className={classes.baseline}>
                      <div className={classes.inline}>
                        <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                          {dataItem.first_name} {dataItem.lastName}
                        </Typography>
                        <Typography variant="p" gutterBottom>
                          SN-500X25
                        </Typography>
                      </div>
                    </div>
                    <div className={classes.inlineRight}>
                      <Button
                        variant="contained"
                        color=""
                        className={classes.secondary}
                          to={{ pathname: "/user-details", data: dataItem }}
                          component={Link}
                          data={dataItem}
                      >
                        view more
                    </Button>
                     
                      {/* <ButtonBar /> */}
                    </div>
                  </div>
                  </Paper>
                </>
              )
            })
          }

        
      </div>
    )
  }
}

export default withStyles(styles)(CardItem);
