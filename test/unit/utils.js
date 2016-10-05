const assert = require('assert');
import * as utils from '../../src/common/utils';

describe('utils', () => {
  const { UP, RIGHT, DOWN, LEFT } = utils.DIRS;

  describe('.edge', () => {
    it('detects', () => {
      const size = [3, 3];
      assert(utils.edge(size, 0) == 9);
      assert(utils.edge(size, 1) == 1);
      assert(utils.edge(size, 2) == 3);
      assert(utils.edge(size, 3) == 8);
      assert(utils.edge(size, 4) == 0);
      assert(utils.edge(size, 5) == 2);
      assert(utils.edge(size, 6) == 12);
      assert(utils.edge(size, 7) == 4);
      assert(utils.edge(size, 8) == 6);
    });
  });

  describe('.index', () => {
    it('returns', () => {
      const size = [3, 3];
      assert(utils.index(size, 2, UP)           == undefined);
      assert(utils.index(size, 2, UP | RIGHT)   == undefined);
      assert(utils.index(size, 2, RIGHT)        == undefined);
      assert(utils.index(size, 2, RIGHT | DOWN) == undefined);
      assert(utils.index(size, 2, DOWN)         == 5);
      assert(utils.index(size, 2, DOWN | LEFT)  == 4);
      assert(utils.index(size, 2, LEFT)         == 1);
      assert(utils.index(size, 2, LEFT | UP)   == undefined);
    });
  });

  describe('.get', () => {
    it('gets', () => {
      const data = [
        1, 1, 0,
        0, 0, 1,
        0, 1, 0,
      ];
      const size = [3, 3];
      let get = utils.get(data, size, 2);
      assert(get(UP)           == 0);
      assert(get(UP | RIGHT)   == 0);
      assert(get(RIGHT)        == 0);
      assert(get(RIGHT | DOWN) == 0);
      assert(get(DOWN)         == 1);
      assert(get(DOWN | LEFT)  == 0);
      assert(get(LEFT)         == 1);
      assert(get(LEFT | UP)    == 0);

      get = utils.get(data, size, 1);
      assert(get(UP)           == 0);
      assert(get(UP | RIGHT)   == 0);
      assert(get(RIGHT)        == 0);
      assert(get(RIGHT | DOWN) == 1);
      assert(get(DOWN)         == 0);
      assert(get(DOWN | LEFT)  == 0);
      assert(get(LEFT)         == 1);
      assert(get(LEFT | UP)    == 0);

      get = utils.get(data, size, 4);
      assert(get(UP)           == 1);
      assert(get(UP | RIGHT)   == 0);
      assert(get(RIGHT)        == 1);
      assert(get(RIGHT | DOWN) == 0);
      assert(get(DOWN)         == 1);
      assert(get(DOWN | LEFT)  == 0);
      assert(get(LEFT)         == 0);
      assert(get(LEFT | UP)    == 1);
    });
  });

  describe('.single', () => {
    it('returns next states', () => {
      const data = [
        1, 1, 0,
        0, 0, 1,
        0, 1, 0,
      ];
      const size = [3, 3];
      assert(utils.single(data, size, 0) == 0);
      assert(utils.single(data, size, 1) == 1);
      assert(utils.single(data, size, 2) == 0);
      assert(utils.single(data, size, 3) == 1);
      assert(utils.single(data, size, 4) == 0);
      assert(utils.single(data, size, 5) == 1);
      assert(utils.single(data, size, 6) == 0);
      assert(utils.single(data, size, 7) == 0);
      assert(utils.single(data, size, 8) == 0);
    });
  });

  describe('.transit', () => {
    it('returns 0', () => {
      const t0 = [
        1, 1, 0,
        0, 0, 1,
        0, 1, 0,
      ];

      const t1 = [
        0, 1, 0,
        1, 0, 1,
        0, 0, 0,
      ];

      const t2 = [
        0, 1, 0,
        0, 1, 0,
        0, 0, 0,
      ];

      const t3 = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0,
      ];

      const size = [3, 3];
      assert.deepStrictEqual(utils.transit(t0, size), t1);
      assert.deepStrictEqual(utils.transit(t1, size), t2);
      assert.deepStrictEqual(utils.transit(t2, size), t3);
    });
  });
});
