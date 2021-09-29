const word = prompt('Please enter a word');
const wordArray = word.split('');
const reverse = wordArray.reverse().join('');
alert(`${word} backwards is ${reverse}`);