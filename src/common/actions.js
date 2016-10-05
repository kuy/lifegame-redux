import { createAction } from 'redux-actions';

export const TIME_TICK = 'TIME_TICK';
export const TIME_PLAY = 'TIME_PLAY';
export const TIME_PAUSE = 'TIME_PAUSE';
export const timeTick = createAction(TIME_TICK);
export const timePlay = createAction(TIME_PLAY);
export const timePause = createAction(TIME_PAUSE);

export const BOARD_RESIZE = 'BOARD_RESIZE';
export const boardResize = createAction(BOARD_RESIZE);
