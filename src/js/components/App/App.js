// @flow

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Home from '../Home/Home';
import Route404 from '../Route404/Route404';
import './App.scss';

class App extends Component<{}> {
  render() {
    return (
      <ErrorBoundary>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={Route404} />
        </Switch>
      </ErrorBoundary>
    );
  }
}

export default App;
