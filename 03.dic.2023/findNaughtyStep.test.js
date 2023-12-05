const findNaughtyStep = require("./findNaughtyStep");

describe('Test Challenge #3, The Naughty Elf', () => {
  test('One additional step was added.', () => {
    const original = "abcd";
    const modified = "abcde";
    const received = findNaughtyStep(original, modified); // 'e
    expect(received).toBe("e");
  });
  
  test("One original step was removed.", () => {
    const original = "stepfor";
    const modified = "stepor";
    const received = findNaughtyStep(original, modified); // 'f'
    expect(received).toBe("f");
  });

  test('No alteration was made :)!', () => {
    const original = "abcde";
    const modified = "abcde";
    const received = findNaughtyStep(original, modified);
    expect(received).toBe(""); // ''
  });
});
