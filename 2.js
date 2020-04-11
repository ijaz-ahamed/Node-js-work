
function AvgFinder(number_1,number_2,number_3){


var avg = (Number(number_1)+Number(number_2)+Number(number_3))/3 

console.log(avg)}


const prompt = require('prompt-sync')();

const num1 = prompt('Enter Num 1 :');
const num2 = prompt('Enter Num 2 :');
const num3 = prompt('Enter Num 3 :');


AvgFinder(num1,num2,num3)