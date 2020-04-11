const prompt = require('prompt-sync')();

const num1 = prompt('Enter Number 1 :');
const num2 = prompt('Enter Number 2 :');
const num3 = prompt('Enter Number 3 :');


var numbers = [num1, num2, num3];

numbers[0]=num2
numbers[1]=num3
numbers[2]=num1

console.log(numbers)