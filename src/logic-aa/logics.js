import Rx from 'rxjs';
import { createLogic } from 'redux-logic';
import { TIME_PLAY, TIME_PAUSE, timeTick } from 'common/actions';

// Cancellable Promise-based periodic timer
// This function returns a function (call it 'producer') that returns a Promise object.
// The Promise object will be resolved after given duration in msec.
// If you don't call 'producer' function until the next interval, it will be ignored.
function createTimer(msec) {
  const queue = [];
  const timer = setInterval(() => {
    while (0 < queue.length) {
      const cb = queue.shift();
      cb();
    }
  }, msec);

  const producer = () => {
    return new Promise((resolve, reject) => {
      queue.push(resolve);
    });
  };

  producer.clear = () => {
    clearInterval(timer);
  };

  return producer;
}

const timer = createLogic({
  type: TIME_PLAY,
  cancelType: TIME_PAUSE,
  process({ cancelled$ }, dispatch) {
    async function runTimer(msec) {
      const timer = createTimer(msec);

      cancelled$.subscribe(() => {
        timer.clear();
        dispatch();
      });

      while (true) {
        await timer();
        dispatch(timeTick(), { allowMore: true });
      }
    }

    runTimer(1000);
  }
});

export default [
  timer
];
