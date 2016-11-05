import * as Ship from 'redux-ship';
import { PERIOD } from 'common/constants';

export const DELAY = 'DELAY';

function delay(msec) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(msec);
    }, msec);
  });
}

export async function run(effect) {
  switch (effect.type) {
  case DELAY:
    return await delay(PERIOD);
  default:
    return;
  }
}
