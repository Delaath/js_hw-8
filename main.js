let myArray = ['яблуко', 'банан', 'вишня', 'слива'];

let result = '';
for (let i = 0; i < myArray.length; i++) {
  result += myArray[i];
  if (i < myArray.length - 1) {
    result += ',';
  }
}
console.log(result);

let myArray2 = ['яблуко', 'банан', 'вишня', 'слива'];

let result2 = myArray2.join(',');
console.log(result2);

const cards = [
    'card-1',
    'card-2',
    'card-3',
    'card-4',
    'card-5',
]
cards.splice(2, 1);
console.log(cards);

cards.splice(2, 0, 'card-6');
console.log(cards);

cards[1] = 'new-card';
console.log(cards); 