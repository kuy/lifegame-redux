import { createLogic } from 'redux-logic';
import { TIME_PLAY, TIME_PAUSE, timeTick } from 'common/actions';

const timer = createLogic({
  type: TIME_PLAY,
  cancelType: TIME_PAUSE,
  process({ cancelled$ }, dispatch) {
    const timer = setInterval(() => {
      dispatch(timeTick(), { allowMore: true });
    }, 1000);

    cancelled$.subscribe(() => {
      clearInterval(timer);
      dispatch();
    });
  }
});

export default [
  timer
];
