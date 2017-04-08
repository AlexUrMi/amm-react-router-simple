import React, {Component} from 'react';


export default class SearchLayout extends Component {
  render(){
    return (
  <div className="search">
    <h3>Search Layout</h3>
    <header className="search-header"></header>
    <div className="results">
      {this.props.children}
    </div>
    <div className="search-footer pagination"></div>
  </div>
);
  }
}
