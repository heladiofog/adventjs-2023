/*function decode(message) {
  let decodedMessage = "";
  // a stack for the openning "(" position
  const invertedStartStack = [];

  for(let i = 0; i < message.length; i++) {
    const currentChar = message[i];
    if (currentChar === '(') {
      // record open parentheses position
      invertedStartStack.push(i);
    } else if (currentChar === ')') {
      // revert substring and append to decodedMessage
      let substringStart = invertedStartStack.pop();
      // get the substring from message to be reversed
      let invertedSubstring = decodedMessage.substring(substringStart + 1, i);
      // recreate decodedMessage
      decodedMessage = 
        decodedMessage.substring(0, substringStart + 1) + reverseString(invertedSubstring);
    }
    decodedMessage += currentChar; // just append the character
  }
  // clean "(" and ")" before return the decoded string
  // console.log(decodedMessage);
  return decodedMessage.replaceAll(')', '').replaceAll('(', '');;
}
// receives a string
function reverseString(invertedString) {
  let revertedString = "";
  for (let index = invertedString.length - 1; index >= 0; index--) {
    revertedString += invertedString[index];
  }
  // console.log(invertedString, revertedString);
  return revertedString;
}*/

/* All in one function version */

function decode(message) {
  let decodedMessage = "";
  // a stack for the openning "(" position
  const invertedStartStack = [];
  
  for(let i = 0; i < message.length; i++) {
    const currentChar = message[i];
    
    if (currentChar === '(') {
      // record open parentheses position
      invertedStartStack.push(i);
    } else if (currentChar === ')') {
      // revert substring and append to decodedMessage
      let substringStart = invertedStartStack.pop();
      // get the substring from message to be reversed
      let invertedSubstring = decodedMessage.substring(substringStart + 1, i);
      let reversedSubstring = invertedSubstring.split("").reverse().join("");
      // recreate decodedMessage
      decodedMessage = 
        decodedMessage.substring(0, substringStart + 1) +
        // invertedSubstring.split("").reverse().join("")
        reversedSubstring;
    }
    decodedMessage += currentChar;
  }
  
  return decodedMessage.replaceAll(')', '').replaceAll('(', '');;
}



/*
In 🎅 Santa's workshop, some Christmas messages have been written in a peculiar way: the words within the brackets must be read backwards.

Santa needs these messages to be correctly formatted. Your task is to write a function that takes a string and reverses the characters within each pair of parentheses, removing the parentheses as well.

However, bear in mind that there may be nested parentheses, so you should reverse the characters in the correct order.

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Example usage created by haf: right result!
const inputString = 'sa(u(cla)atn)s (olleh) (d(rl)ow) Tezca!';
const resultString = decode(inputString);
console.log(resultString);

// Step by step:
// 1. Reverse the nested -> sa(ualcatn)s
// 2. Reverse the remaining one -> santaclaus
Notes:

The input strings will always be well formed with parentheses that match correctly, you do not need to validate them.
There should not be any parentheses left in the final message.
The maximum nesting level is 2.
*/

module.exports = decode;