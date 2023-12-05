function findNaughtyStep(original, modified) {
  let difference = "";
  // holding the position after the loop ends
  let index = 0;
  // Check always based on original length
  for (index = 0; index < original.length; index++) {
    if (original[index] !== modified[index]) {
      break;
    }
  }
  // if original is missing a step (includes original empty)
  if (original.length < modified.length) {
    difference = modified[index];
  }
  // if original has an extra step
  if (original.length > modified.length) {
    difference = original[index];
  }
  // if there's no modification
  // then difference stays (empty) ''

  return difference;
}
/*
In Santa's workshop, a mischievous elf has been playing around with the gift production line, adding or removing an unplanned step.

You have the original sequence of original manufacturing steps and the modified modified sequence that may include an extra step or be missing a step.

Your task is to write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain. If there is no difference between the sequences, return an empty string.
*/
// const original = 'abcd';
// const modified = 'abcde';
// findNaughtyStep(original, modified); // 'e'
// console.log(findNaughtyStep(original, modified)); // 'e'

// const original = 'stepfor'
// const modified = 'stepor'
// findNaughtyStep(original, modified) // 'f'
// console.log(findNaughtyStep(original, modified)); // 'f'

// const original = 'abcde'
// const modified = 'abcde'
// findNaughtyStep(original, modified) // ''
// console.log(findNaughtyStep(original, modified)); // ''

/*
Please, keep in mind:

There will always be one different step or none.
The modification can occur anywhere in the string.
The original steps could be empty
*/

module.exports = findNaughtyStep;