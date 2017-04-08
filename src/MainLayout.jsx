import React, {Component} from 'react';


export default class MainLayout extends Component {
  render(){
    return (
      <div className="app" >
        <h1>Main Layout</h1>
        <header className="primary-header"></header>
        <aside className="primary-aside"></aside>
        <div>
          {this.props.children}
        </div>
      </div>
);
  }
}
