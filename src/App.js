import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';

class App extends Component {

  render() {
    return (
      <>
        <Login />
        <hr></hr>
        <Signup />
      </>
    );
  }
}

export default App;
