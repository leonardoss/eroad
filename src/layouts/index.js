import React from 'react';
import PropTypes from 'prop-types';

import {
  AppBar, Toolbar, Typography, Grid
} from '@material-ui/core';

import { withRouter } from 'react-router-dom';

class Layout extends React.Component {
  handleNavigation(route) {
    const { history } = this.props;
    history.push(route);
  }

  render() {
    const { children } = this.props;
    return (
      <Grid container className="main" spacing={ 16 }>
        <Grid item xs={ 12 }>
          <Grid container>
            <AppBar position="relative">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  EROAD - JavaScript technical test
                </Typography>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid container>
            <Grid item xs={ 12 }>
              { children }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Layout.propTypes = {
  history: PropTypes.object,
  children: PropTypes.element.isRequired,
};

export default withRouter(Layout);
