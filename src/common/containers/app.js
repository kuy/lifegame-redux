import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from 'common/components/board';
import { timeTick, timePlay, timePause } from 'common/actions';

class App extends Component {
  handleTick() {
    this.props.dispatch(timeTick());
  }

  handlePlay() {
    this.props.dispatch(timePlay());
  }

  handlePause() {
    this.props.dispatch(timePause());
  }

  render() {
    const { app, life } = this.props;
    return <div>
      <Board {...life} />
      <button onClick={this.handleTick.bind(this)}>Tick</button>
      <button onClick={this.handlePlay.bind(this)}>Play</button>
      <button onClick={this.handlePause.bind(this)}>Pause</button>
    </div>;
  }
}

function select({ app, life }) {
  return { app, life };
}

export default connect(select)(App);
