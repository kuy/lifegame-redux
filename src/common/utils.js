// @flow

export function createAmend(data) {
  const len = data.length;
  return i => {
    if (0 <= i && i < len) {
      return data[i];
    } else {
      return 0;
    }
  };
}

const UP    = 2 ** 0;
const RIGHT = 2 ** 1;
const DOWN  = 2 ** 2;
const LEFT  = 2 ** 3;

export const DIRS = { UP, RIGHT, DOWN, LEFT };

export function edge(size, i) {
  let ret = 0;

  const [ cols, rows ] = size;
  const row = Math.floor(i / cols);

  if (row === 0) {
    ret += UP;
  }

  if (row === rows - 1) {
    ret += DOWN;
  }

  const col = i % cols;

  if (col === 0) {
    ret += LEFT;
  }

  if (col === cols - 1) {
    ret += RIGHT;
  }

  return ret;
}

export function index(size, i, dir) {
  const dirs = edge(size, i);
  if ((dir & dirs) === 0) {
    const [ cols, rows ] = size;
    switch (dir) {
      case UP:           return i - cols;
      case UP | RIGHT:   return i - cols + 1;
      case RIGHT:        return i + 1;
      case RIGHT | DOWN: return i + cols + 1;
      case DOWN:         return i + cols;
      case DOWN | LEFT:  return i + cols - 1;
      case LEFT:         return i - 1;
      case LEFT | UP:   return i - cols - 1;
    }
  }
}

export function get(data, size, i) {
  return dir => {
    const [ cols, rows ] = size;
    const ii = index(size, i, dir);
    return typeof ii === 'undefined' ? 0 : data[ii];
  };
}

export function single(data, size, i) {
  const [ cols, rows ] = size;
  const getx = get(data, size, i);
  const x = getx(UP | LEFT) +   getx(UP) +   getx(UP | RIGHT) +
            getx(LEFT) +     /*  center  */  getx(RIGHT) +
            getx(DOWN | LEFT) + getx(DOWN) + getx(DOWN | RIGHT);
  if (data[i] === 1) {
    if (x === 2 || x === 3) {
      return 1;
    } else {
      return 0;
    }
  } else {
    if (x === 3) {
      return 1;
    } else {
      return 0;
    }
  }
}

export function transit(data, size) {
  const [ cols, rows ] = size;
  return data.map((s, i) => single(data, size, i));
}
