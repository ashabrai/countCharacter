'use strict';

const countCharacter = require('../src/solution');

describe('solution.js', () => {
  test('Sucessfully counts all characters', () => {
    const testMap = countCharacter('banana');
    expect(testMap.get('b')).toEqual(1);
    expect(testMap.get('a')).toEqual(3);
    expect(testMap.get('n')).toEqual(2);
    expect(testMap.get('a')).toEqual(3);
    expect(testMap.get('n')).toEqual(2);
    expect(testMap.get('a')).toEqual(3);
  });
  test('test to see if space in cat hat is counted', () => {
    const testMap = countCharacter('cat hat');
    expect(testMap.get('c')).toEqual(1);
    expect(testMap.get('a')).toEqual(2);
    expect(testMap.get('t')).toEqual(2);
    expect(testMap.get(' ')).toEqual(1);
    expect(testMap.get('h')).toEqual(1);
    expect(testMap.get('a')).toEqual(2);
    expect(testMap.get('t')).toEqual(2);
  });
  test('test to see if character are counted', () => {
    const testMap = countCharacter('@#$');
    expect(testMap.get('@')).toEqual(1);
    expect(testMap.get('#')).toEqual(1);
    expect(testMap.get('$')).toEqual(1);
  });
});
