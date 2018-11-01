import React from 'react';
import PropTypes from 'prop-types';

import {
  AppBar, Toolbar, Typography, Grid, MenuList, MenuItem,
  ListItemText, ListItemIcon,
} from '@material-ui/core';

import { FormatAlignJustify as AboutIcon, Home as DashIcon } from '@material-ui/icons';

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
          <Grid container justify="center">
            <AppBar position="relative">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  Material desing UI
                </Typography>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid container>
            <Grid item xs={ 2 }>
              <MenuList>
                <MenuItem onClick={ () => this.handleNavigation('/') }>
                  <ListItemIcon>
                    <DashIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </MenuItem>
                <MenuItem onClick={ () => this.handleNavigation('/about') }>
                  <ListItemIcon>
                    <AboutIcon />
                  </ListItemIcon>
                  <ListItemText primary="About" />
                </MenuItem>
              </MenuList>
            </Grid>
            <Grid item xs={ 10 }>
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
