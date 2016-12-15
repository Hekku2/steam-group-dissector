import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import Group from '../Group/Group'

class App extends Component {
  render() {
    return (
      <div className="container">
          <Jumbotron>
              <h1>Steam Group Dissector</h1>
          </Jumbotron>
          <Group />
      </div>
    );
  }
}

export default App;
