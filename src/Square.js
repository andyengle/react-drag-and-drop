import React, { Component, PropTypes } from 'react';

export default class Square extends Component {
  render() {
    const { black } = this.props;
    const fill = black ? '#777' : 'white';
    const stroke = black ? 'white' : '#777';

    return (
      <div style={{
        backgroundColor: fill,
        color: stroke,
        width: '100px',
        height: '100px'
      }}>
        {this.props.children}
      </div>
    );
  }
}

Square.propTypes = {
  black: PropTypes.bool
};