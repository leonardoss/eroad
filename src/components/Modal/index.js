import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography, Divider, Button, Modal
} from '@material-ui/core';
import {
  red, indigo, teal, deepOrange
} from '@material-ui/core/colors';


const styles = theme => ({
  button: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  modal: {
    position: 'absolute',
    width: theme.spacing.unit * 70,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  button: {
    margin: theme.spacing.unit,
    color: '#FFF'
  },
  buttonHoliday: {
    backgroundColor: red[600],
  },
  buttonBirthday: {
    backgroundColor: indigo[600]
  },
  buttonBusy: {
    backgroundColor: teal[600]
  },
  buttonAnniversary: {
    backgroundColor: deepOrange[600]
  },
});

class CustomModal extends Component {
  render() {
    
    const { classes } = this.props;

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.open}
        onClose={this.props.closeModal}
      >
        <div className={classes.modal}>
          <Typography variant="title" id="modal-title">
            Choose category date
          </Typography>
          <br />
          <Divider />
          <br />
          <div>
            <Button 
              variant="contained" 
              className={classNames(classes.button, classes.buttonHoliday)}
              onClick={this.props.handleChangeCategory}
              category="holiday"
            >
              Holiday
            </Button>
            <Button 
              variant="contained" 
              className={classNames(classes.button, classes.buttonBirthday)}
              onClick={this.props.handleChangeCategory}
              category="birthday"
            >
              Birthday
            </Button>
            <Button 
              variant="contained" 
              className={classNames(classes.button, classes.buttonBusy)}
              onClick={this.props.handleChangeCategory}
              category="busy"
            >
              Busy
            </Button>
            <Button 
              variant="contained" 
              className={classNames(classes.button, classes.buttonAnniversary)}
              onClick={this.props.handleChangeCategory}
              category="anniversary"
            >
              Anniversary
            </Button>
            <br /><br />
            <Divider />
            <br />
            <Button 
              variant="contained"
              onClick={this.props.handleChangeCategory}
              category="remove"
            >
              Remove category
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

CustomModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomModal);
