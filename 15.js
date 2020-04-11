const prompt = require('prompt-sync')();

const num1 = prompt('Enter Number 1 :');
const num2 = prompt('Enter Number 2 :');
const num3 = prompt('Enter Number 3 :');




var array1 = [num1, num2, num3];
var array2 = [0, 0, 0];

var x=0
var y=0

while (x<4){


array2[y]=array1[x]
if(
    array1.some(v => array2.includes(v))){

console.log("Array 1: ",array1)
console.log("Array 2: ",array2)


}



x=x+1
y=y+1
    


}