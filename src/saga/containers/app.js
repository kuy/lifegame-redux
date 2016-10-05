import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from '../components/board';
import { timeTick } from '../actions';

class App extends Component {
  handleTick() {
    this.props.dispatch(timeTick());
  }

  render() {
    const { app, life } = this.props;
    return <div>
      <Board {...life} />
      <button onClick={this.handleTick.bind(this)}>Tick</button>
    </div>;
  }
}

function select({ app, life }) {
  return { app, life };
}

export default connect(select)(App);
