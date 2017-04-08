import React, {Component} from 'react';
import {Link} from 'react-router';

export default class LeftComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };
    }
    render() {
        return (
            <div className="app">
                <ul>
                    {this.state.data.map((it) => {
                        return (
                            <li>
                                <Link to={`/userDetail/${it.id}`}>{it.name}</Link>
                            </li>
                        );
                      })
                    }
                </ul>
            </div>
        );
    }
}
