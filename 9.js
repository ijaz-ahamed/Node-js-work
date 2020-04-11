const prompt = require('prompt-sync')();

const num1 = prompt('Enter Number 1 :');
const num2 = prompt('Enter Number 2 :');
const num3 = prompt('Enter Number 3 :');


var numbers = [num1, num2, num3];

var sum = Number(num1)+Number(num2)+Number(num3)

console.log(sum)