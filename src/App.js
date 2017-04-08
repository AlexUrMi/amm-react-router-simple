import React, {Component} from 'react';
import './App.css';
import MainLayout from './MainLayout.jsx';
import SearchLayout from './SearchLayout.jsx';
import UserList from './UserList.jsx';
import WidgetList from './WidgetList.jsx';
import Home from './Home.jsx';
import UserDetail from './UserDetail.jsx';
import EmptyPanel from './EmptyPanel.jsx';
import UserDetailLayout from './UserDetailLayout.jsx';
import {Router, Route, IndexRoute, browserHistory, history} from 'react-router';
import userList from './data.js';

var u1 = userList.createUser("first");
userList.add(u1);
var u2 = userList.createUser("second");
userList.add(u2);
var u3 = userList.createUser("third");
userList.add(u3);

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={browserHistory}>
                    <Route component={MainLayout} path="/">
                        <IndexRoute component={Home}></IndexRoute>
                        <Route component={SearchLayout}>
                            <Route path="users" component={UserList}/>
                            <Route path="widgets" component={WidgetList}/>
                        </Route>
                        <Route path="userDetail" component={UserDetailLayout}>
                            <IndexRoute component={EmptyPanel}></IndexRoute>
                            <Route path=":id" component={UserDetail} />
                        </Route>
                    </Route>
                </Router>
            </div>
        );
    }
}

export default App;
