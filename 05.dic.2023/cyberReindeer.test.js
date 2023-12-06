const cyberReindeer = require('./cyberReindeer');

describe('Challenge #5 🛷 Santa CyberTruck', () => {
  test('For the follow road "S..|...|.." should contain 10 elements', () => {
    const road = 'S..|...|..';
    const time = 10; // units of time
    const result = cyberReindeer(road, time);
    // Expected:
    /*
    [
      'S..|...|..', // initial state
      '.S.|...|..', // sled advances on the road
      '..S|...|..', // sled advances on the road
      '..S|...|..', // sled stops at the barrier
      '..S|...|..', // sled stops at the barrier
      '...S...*..', // barrier opens, sled advances
      '...*S..*..', // sled advances on the road
      '...*.S.*..', // sled advances on the road
      '...*..S*..', // sled advances on the road
      '...*...S..', // passes through the open barrier
    ]
    */
    expect(result).toHaveLength(10);
    expect(result).toContain('S..|...|..');
    expect(result).toContain('.S.|...|..');
    expect(result).toContain('..S|...|..');
    expect(result).toContain('..S|...|..');
    expect(result).toContain('..S|...|..');
    expect(result).toContain('...S...*..');
    expect(result).toContain('...*S..*..');
    expect(result).toContain('...*.S.*..');
    expect(result).toContain('...*..S*..');
    expect(result).toContain('...*...S..');
  });
});
