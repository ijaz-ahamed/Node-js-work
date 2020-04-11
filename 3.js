

function Area(side_1,side_2,side_3){


var area = 1/2*Number(side_1)*Number(side_2)

console.log(area)
}

const prompt = require('prompt-sync')();

const num1 = prompt('Enter side 1 :');
const num2 = prompt('Enter side 2 :');
const num3 = prompt('Enter side 3 :');

Area(num1,num2,num3)