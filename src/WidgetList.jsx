import React, {Component} from 'react';
export default class WidgetList extends Component {
    render() {
        return (
            <div className="textLeft">
                <h3>Widget List</h3>
                <ul className="widget-list">
                    <li>W1</li>
                    <li>W2</li>
                    <li>W3</li>
                </ul>
            </div>
        );
    }
}
