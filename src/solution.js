'use strict';

module.exports = function countCharacter(string) {
  const countMap = new Map();

  for (let i = 0; i < string.length; i++) {
    if (countMap.get(string[i])) {
      countMap.set(string[i], countMap.get(string[i]) + 1);
    } else {
      countMap.set(string[i], 1);
    }
  } return countMap;
};
