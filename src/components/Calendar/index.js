import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import {
  Button
} from '@material-ui/core';
import { ArrowForward, ArrowBack } from '@material-ui/icons';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class Calendar extends React.Component {

  render() {
    const { classes, handleChangeYear } = this.props;
    return (
      <div>
        <div className="calendar-header">
          <Button 
            variant="contained" 
            color="primary" 
            className={classes.button}
            onClick={ () => handleChangeYear('prev') }
          >
            <ArrowBack className={classes.leftIcon}>send</ArrowBack>  PREVIOUS YEAR
          </Button>
          <Button 
            variant="contained" 
            color="secondary" 
            className={classes.button}
            onClick={ () => handleChangeYear('current') }
          >
            CURRENT YEAR
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            className={classes.button}
            onClick={ () => handleChangeYear('next') }
          >
            NEXT YEAR <ArrowForward className={classes.rightIcon}>send</ArrowForward>
          </Button>
        </div>
        <div className="calendar-body">
          <div className="calendar" id="calendar-wrapper"></div>
        </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChangeYear: PropTypes.func,
};

export default withStyles(styles)(Calendar);
