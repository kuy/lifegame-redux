import { combineReducers } from 'redux';
import {
  TIME_TICK, TIME_PLAY, TIME_PAUSE
} from 'common/actions';
import { transit } from 'common/utils';

const initial = {
  app: {
    tick: 0,
    time: false,
  },
  life: {
    size: [4, 4],
    data: [
      0, 0, 0, 0,
      0, 1, 0, 0,
      0, 1, 1, 0,
      0, 1, 0, 0,
    ],
  }
};

const handlers = {
  app: {
    [TIME_TICK]: (state, action) => {
      return { ...state, tick: state.tick + 1 };
    },
    [TIME_PLAY]: (state, action) => {
      return { ...state, time: true };
    },
    [TIME_PAUSE]: (state, action) => {
      return { ...state, time: false };
    },
  },
  life: {
    [TIME_TICK]: (state, action) => {
      return { ...state, data: transit(state.data, state.size) };
    },
  }
};

function app(state = initial.app, action) {
  const handler = handlers.app[action.type];
  if (!handler) { return state; }
  return handler(state, action);
}

function life(state = initial.life, action) {
  const handler = handlers.life[action.type];
  if (!handler) { return state; }
  return handler(state, action);
}

export default combineReducers(
  { app, life }
);
