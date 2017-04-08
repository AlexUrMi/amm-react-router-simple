import React, { Component } from 'react';
import './App.css';
import MainLayout from './MainLayout.jsx';
import SearchLayout from './SearchLayout.jsx';
import UserList from './UserList.jsx';
import WidgetList from './WidgetList.jsx';
import Home from './Home.jsx';
import { Router, Route, IndexRoute, browserHistory, history } from 'react-router'


class App extends Component {
  render() {
    return (
      <div className="App">
          <Router history={browserHistory}>
            <Route component={MainLayout} path="/">
              <IndexRoute component={Home}></IndexRoute>
              <Route component={SearchLayout}>
                <Route path="users" component={UserList} />
                <Route path="widgets" component={WidgetList} />
              </Route>
            </Route>
          </Router>
      </div>
    );
  }
}

export default App;
