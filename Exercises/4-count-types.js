'use strict';

const countTypesInArray = (N) => {
  const res = {};
  for (const i of N) {
    const tp = typeof i;
    if (tp in res) {
      res[tp] += 1;
    } else {
      res[tp] = 1;
    }
  }
  return res;
};
module.exports = { countTypesInArray };
