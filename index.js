// Code your solutions in this file
/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);
*/

// for (let age = 30; age <40; age++) {
//   console.log(`I'm ${age} years old. Happy Birthday to me!`);
// }

const arrayOne = [];
function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    arrayOne.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger;
  }
  return arrayOne;
}
//countDown
function countDown () {
let countDown = 10;
    while (countDown >= 0) {
        console.log (countDown--);
    }
    return countDown;
}