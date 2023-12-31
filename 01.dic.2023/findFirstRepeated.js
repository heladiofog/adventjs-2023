/**
 * @param [array] gifts An array of numbers
 * @returns number An integer value of the first repetaded "gift"
 */
// function findFirstRepeated(gifts) {
//   const giftSet = new Set();
//   for (let i = 0; i < gifts.length; i++) {
//     if (giftSet.has(gifts[i])) return gifts[i];
//     giftSet.add(gifts[i]);
//   }
//   return -1;
// }

/* Array version */
// function findFirstRepeated(gifts) {
//   const giftInventory = [];
//   for (let i = 0; i < gifts.length; i++) {
//     let gift = gifts[i];

//     if (giftInventory.includes(gift)) {
//       return gift;
//     }
//     giftInventory.push(gift);
//   }
//   return -1;
// }

//  Array and for...of iterator
//  Winner so far...260
function findFirstRepeated(gifts) {
  const giftInventory = [];
  
  for (const gift of gifts) {
    if (giftInventory.includes(gift)) {
      return gift;
    }
    giftInventory.push(gift);
  }
  return -1;
}

/**
 * @deprecated
 * @param [array] gifts An array of numbers
 * @returns number An integer value of the first repetaded "gift"
 */

function findFirstRepeatedGift(gifts) {
  // Code here
  if (new Set(gifts).size === gifts.length) { // there's no repetition
    return -1;
  }
  
  const processedNumbers = new Set(); // because of performance on has
  let minRepeatedPosition = gifts.length; // the max possible position
  let firstRepeatedId = -1; // by default

  for (let i = 0; i < gifts.length; i++) {
    const currentGiftId = gifts[i];
    // If it has already been proccessed
    if (processedNumbers.has(currentGiftId)) {
      continue;
    }
    // check indexes, compare and update
    const repeatedPosition = gifts.indexOf(currentGiftId, i + 1);

    if (repeatedPosition !== -1 // If it's repeated
      && repeatedPosition < minRepeatedPosition) {
      // new minimum first repeated occurence
      minRepeatedPosition = repeatedPosition;
      firstRepeatedId = currentGiftId;
    }
    // record the proccessed id
    processedNumbers.add();
  }

  return firstRepeatedId;
}

// [2, 1, 3, 5, 3, 2].ind
/*
// test cases
const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Even though 2 and 3 are repeated
// 3 appears second time first

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// It is -1 since no number is repeated

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
*/
module.exports = findFirstRepeated;
