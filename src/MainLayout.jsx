import React, {Component} from 'react';
import LeftComponent from './LeftComponent.jsx';
import userList from './data.js';

export default class MainLayout extends Component {
    render() {
        return (
            <div className="app">
                <h1>Main Layout</h1>
                <header className="primary-header"></header>
                <LeftComponent data={userList.data} />
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
