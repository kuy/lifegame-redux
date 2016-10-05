import { eventChannel } from 'redux-saga';
import { fork, take, put, cancel, cancelled } from 'redux-saga/effects';
import { TIME_PLAY, TIME_PAUSE, timeTick } from './actions';

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
    const timer = yield fork(runTimer, 1000);
    yield take(TIME_PAUSE);
    yield cancel(timer);
  }
}

export default function* rootSaga() {
  yield fork(handleTimer);
}
