import React, { Component } from 'react';
import './cssreset.css';
import './App.css';
import './parallaxtesting/parallax.css';
import Mainroutes from './routing/Mainroutes';
import Homeroutes from './routing/Homeroutes';
import Userroutes from './routing/Userroutes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
  render() {
    const muiTheme = getMuiTheme({
    });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Userroutes/>
        <Homeroutes/>
        <Mainroutes/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;


