import React, {Component} from 'react';


export default class Home extends Component {
  render(){
    return (
  <div className="app" >
    <h2>Home layout</h2>
    <header className="primary-header"></header>
    <aside className="primary-aside"></aside>
    <div>
      {this.props.children}
    </div>
  </div>);
  }
}
