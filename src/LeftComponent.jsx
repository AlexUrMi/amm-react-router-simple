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
            <div className="textLeft">
              <h3>Left Panel</h3>
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
