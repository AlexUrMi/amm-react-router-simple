import React, {Component} from 'react';
export default class UserList extends Component {
    render() {
        return (
            <div>
                <h3>User List</h3>
                <ul className="user-list">
                    <li>Dan</li>
                    <li>Ryan</li>
                    <li>Michael</li>
                </ul>
            </div>

        );
    }
}
