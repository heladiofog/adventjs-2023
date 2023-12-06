const decode = require("./decode");

describe('Test Challenge #4, Turn the parentheses around.', () => {
  test('Test decode("hola (odnum)") should return "hola mundo"', () => {
    const received = decode("hola (odnum)"); // hola mundo
    expect(received).toBe("hola mundo");
  });
  
  test('Test decode("(olleh) (dlrow)!") should return "hello world!"', () => {
    const received = decode("(olleh) (dlrow)!"); // hello world!
    expect(received).toBe("hello world!");
  });

  test('Test decode("sa(u(cla)atn)s") should return "santaclaus"', () => {
    const received = decode("sa(u(cla)atn)s"); // santaclaus
    expect(received).toBe("santaclaus");
  });

  test('Test decode("((nta)(sa))") should return "santa"', () => {
    const received = decode("((nta)(sa))"); // santa
    expect(received).toBe("santa");
  });

  test('Test decode("sa(u(cla)atn)s (olleh) (d(rl)ow) Tezca!") should return "santaclaus hello world Tezca!"', () => {
    const received = decode("sa(u(cla)atn)s (olleh) (d(rl)ow) Tezca!"); // santaclaus hello world Tezca!
    expect(received).toBe("santaclaus hello world Tezca!");
  });
});
