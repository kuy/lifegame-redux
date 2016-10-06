import Rx from 'rxjs';
import { createLogic } from 'redux-logic';
import { TIME_PLAY, TIME_PAUSE, timeTick } from 'common/actions';

const timer = createLogic({
  type: TIME_PLAY,
  cancelType: TIME_PAUSE,
  process(deps, dispatch) {
    const ob$ = Rx.Observable.interval(1000)
      .map(() => timeTick());
    dispatch(ob$);
  }
});

export default [
  timer
];
