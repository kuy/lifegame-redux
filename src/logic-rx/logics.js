import Rx from 'rxjs';
import { createLogic } from 'redux-logic';
import { TIME_PLAY, TIME_PAUSE, timeTick } from 'common/actions';
import { PERIOD } from 'common/constants';

const timer = createLogic({
  type: TIME_PLAY,
  cancelType: TIME_PAUSE,
  process(deps, dispatch) {
    const ob$ = Rx.Observable.interval(PERIOD)
      .map(() => timeTick());
    dispatch(ob$);
  }
});

export default [
  timer
];
