import { eventChannel } from 'redux-saga';
import { fork, take, put, cancel, cancelled } from 'redux-saga/effects';
import { TIME_PLAY, TIME_PAUSE, timeTick } from 'common/actions';
import { PERIOD } from 'common/constants';

function createTimer(msec) {
  return eventChannel(emit => {
    let timer = setInterval(() => {
      emit(1);
    }, msec);
    return () => {
      clearInterval(timer);
    };
  });
}

function* runTimer(msec) {
  const timer = createTimer(msec);
  try {
    while (true) {
      yield take(timer);
      yield put(timeTick());
    }
  } finally {
    if (yield cancelled()) {
      timer.close();
    }
  }
}

function* handleTimer() {
  while (true) {
    yield take(TIME_PLAY);
    const timer = yield fork(runTimer, PERIOD);
    yield take(TIME_PAUSE);
    yield cancel(timer);
  }
}

export default function* rootSaga() {
  yield fork(handleTimer);
}
