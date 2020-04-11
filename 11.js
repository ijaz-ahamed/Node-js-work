const prompt = require('prompt-sync')();

const num1 = prompt('Enter Number 1 :');
const num2 = prompt('Enter Number 2 :');
const num3 = prompt('Enter Number 3 :');


var numbers = [num1, num2, num3];

var x=numbers[0]
var y=numbers[2]


if (x==y){
    console.log("Equal Numbers")
}
else{
    console.log("Not Equal Numbers")
}