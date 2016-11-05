import * as Ship from 'redux-ship';
import { TIME_PLAY, timeTick } from 'common/actions';
import { selectors } from 'common/reducers';
import * as Effect from './effects';

export default function* control(action) {
  switch (action.type) {
  case TIME_PLAY: {
    while (yield* Ship.getState(selectors.time)) {
      yield* Ship.call({ type: Effect.DELAY });
      yield* Ship.commit(timeTick());
    }
    return;
  }
  default:
    return;
  }
}
