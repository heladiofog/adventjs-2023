const findFirstRepeated = require('./findFirstRepeated');
// Initialize arrays for testing
// beforeAll(() => {
  const giftIds = [2, 1, 3, 5, 3, 2];
  const giftIds2 = [1, 2, 3, 4];
  const giftIds3 = [5, 1, 5, 1];
  const giftIds4 = [5, 1, 8, 7, 4, 8, 5, 1];
  const giftIds5 = [];
  // console.log('Before all...');
// });

describe('Find the first repeated number or return -1.', () => {
  test('It should return 3', () => {
    const result = findFirstRepeated(giftIds);
    expect(result).toBe(3);
  });

  test('It should return -1', () => {
    const result = findFirstRepeated(giftIds2);
    expect(result).toBe(-1);
  });

  test('It should return 5', () => {
    const result = findFirstRepeated(giftIds3);
    expect(result).toBe(5);
  });
  
  test('It should return 8', () => {
    const result = findFirstRepeated(giftIds4);
    expect(result).toBe(8);
  });
  
  test('It should return -1 when the array is empty.', () => {
    const result = findFirstRepeated(giftIds4);
    expect(result).toBe(8);
  });
});
