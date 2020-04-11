import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DWT from './DynamsoftSDK';
import FileSearchApp from './FileSearchApp';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Router>
          <Switch>
            <Route exact path='/' component={DWT} />
            <Route path='/scan' component={DWT} />
            <Route path='/search' component={FileSearchApp} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
