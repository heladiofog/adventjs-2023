const decode = require("./decode");

describe('Test Challenge #4, Turn the parentheses around.', () => {
  test('One simple turn around.', () => {
    const received = decode("hola (odnum)"); // hola mundo
    expect(received).toBeE("hola mundo");
  });
  
  test("Two simple turning around in a sentence.", () => {
    const received = decode("(olleh) (dlrow)!"); // hello world!
    expect(received).toBe("hello world!");
  });

  test('No alteration was made :)!', () => {
    const received = decode("sa(u(cla)atn)s"); // santaclaus
    expect(received).toBe("santaclaus");
  });
});
