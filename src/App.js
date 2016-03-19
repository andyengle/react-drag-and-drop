import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';

export default class App extends Component {
  render() {
    return (
      <Board knightPosition={[1,1]} />,
    );
  }
}
