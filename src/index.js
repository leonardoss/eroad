import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import primaryColor from '@material-ui/core/colors/blue';
import CssBaseline from '@material-ui/core/CssBaseline';

import Routes from './routes/index';

import './styles/init.scss';

const ThemeUi = createMuiTheme({
  palette: {
    primary: primaryColor,
  },
});

const App = () => (
  <MuiThemeProvider theme={ ThemeUi }>
    <CssBaseline>
      <Router>
        <Routes />
      </Router>
    </CssBaseline>
  </MuiThemeProvider>
);


ReactDOM.render(<App />, document.getElementById('app'));
