import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import LeftComponent from './LeftComponent.jsx';
import userList from './data.js';

export default class MainLayout extends Component {
    render() {
        return (
            <div className="app">
                <h1>Main Layout</h1>
                <header className="primary-header"></header>
                <Grid>
                  <Row>
                    <Col md={5}>
                      <LeftComponent data={userList.data} />
                    </Col>
                    <Col md={7}>
                      <div>
                          {this.props.children}
                      </div>
                    </Col>
                  </Row>
                </Grid>


            </div>
        );
    }
}
