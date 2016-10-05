import React, { Component, PropTypes } from 'react';

function toDOM(state) {
  const size = { width: '16', height: '16' };
  if (state === 1) {
    return <td style={{ backgroundColor: 'black' }} {...size}></td>;
  } else {
    return <td style={{ backgroundColor: 'white' }} {...size}></td>;
  }
}

export default class Cell extends Component {
  static get propTypes() {
    return {
      state: PropTypes.number.isRequired,
    };
  }

  render() {
    const { state } = this.props;
    return toDOM(state);
  }
}
