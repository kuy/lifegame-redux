import { createLogic } from 'redux-logic';
import { TIME_PLAY, TIME_PAUSE, timeTick } from 'common/actions';
import { PERIOD } from 'common/constants';

const timer = createLogic({
  type: TIME_PLAY,
  cancelType: TIME_PAUSE,
  process({ cancelled$ }, dispatch) {
    const timer = setInterval(() => {
      dispatch(timeTick(), { allowMore: true });
    }, PERIOD);

    cancelled$.subscribe(() => {
      clearInterval(timer);
      dispatch();
    });
  }
});

export default [
  timer
];
