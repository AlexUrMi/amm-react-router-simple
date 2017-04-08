import React, {Component} from 'react';
export default class UserDetailLayout extends Component {
    render() {
        return (
            <div className="search">
                <h3>User detail Layout</h3>
                <header className="search-header"></header>
                <div className="results">
                    {this.props.children}
                </div>
                <div className="search-footer pagination"></div>
            </div>
        );
    }
}
