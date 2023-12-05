const manufacture = require('./manufacture');

describe('Test Challenge #2, Gifts Factory', () => {
  test('Gifts ["tren", "oso"] can be made!', () => {
    const gifts = ["tren", "oso", "pelota"];
    const materials = "tronesa";
    const result = manufacture(gifts, materials);
    expect(result).toHaveLength(2);
    expect(result).toContain("tren", "oso");
  });
  test("Only one gift (pzzle) can be made!", () => {
    const gifts = ["juego", "puzzle"];
    const materials = "jlepuz";
    const result = manufacture(gifts, materials);
    expect(result).toHaveLength(1);
    expect(result).toContain('puzzle');
  });
  test('No Gift can be made :(!', () => {
    const gifts = ["libro", "ps5"];
    const materials = "psli";
    const result = manufacture(gifts, materials);
    expect(result).toHaveLength(0); // is empty array?
  });
});
