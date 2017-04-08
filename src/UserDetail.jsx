import React, {Component} from 'react';
import userList from './data.js';

export default class UserDetail extends Component {
    render() {
        var id = this.props.params.id;
        var user = null;
        if (id) {
            user = userList.getUserById(id);
        }
        if (!user) {
            return (
                <div></div>
            );
        }
        return (
            <div>
                <h4>User Detail</h4>
                <div>
                    <p>Id:{user.id}</p>
                    <p>Name:{user.name}</p>
                </div>
            </div>
        );
    }
}
