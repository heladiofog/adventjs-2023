// 'use strict';
function manufacture(gifts, materials) {
  const madeGifts = [];
  gifts.forEach(gift => {
    let isThereEnoughMaterials = true;
    for (let i = 0; i < gift.length; i++) {
      if (materials.indexOf(gift[i]) === -1) {
        isThereEnoughMaterials = false;
        break;
      };
    }
    if (isThereEnoughMaterials) {
      madeGifts.push(gift);
    }
  });
  // Code here
  return madeGifts;
}

/*
In Santa's workshop, the elves have a gift list they wish to make and a limited set of materials.

Gifts are strings of text and materials are characters. Your task is to write a function that, given a list of gifts and the available materials, returns a list of the gifts that can be made.

A gift can be made if we have all the necessary materials to make it.

const gifts = ['tren', 'oso', 'pelota'];
const materials = 'tronesa';
manufacture(gifts, materials); // ["tren", "oso"]


const gifts = ['juego', 'puzzle'];
const materials = 'jlepuz';
manufacture(gifts, materials); // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'
console.log(manufacture(gifts, materials)); // []

manufacture(gifts, materials) // []
*/

module.exports = manufacture;
