import Rx from 'rxjs';
import { combineEpics } from 'redux-observable';
import { TIME_PLAY, TIME_PAUSE, timeTick } from 'common/actions';
import { PERIOD } from 'common/constants';

const timer = action$ =>
  action$.ofType(TIME_PLAY)
    .switchMap(a =>
      Rx.Observable.interval(PERIOD)
        .takeUntil(action$.ofType(TIME_PAUSE))
        .map(() => timeTick())
    );

export default combineEpics(
  timer
);
