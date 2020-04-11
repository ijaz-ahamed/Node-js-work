const prompt = require('prompt-sync')();

const num1 = prompt('Enter Number 1 :');
const num2 = prompt('Enter Number 2 :');
const num3 = prompt('Enter Number 3 :');


if (Number(num1)>=20 && (Number(num1)<Number(num2) || Number(num1) < Number(num3) )){
console.log("number is greater than or equal to 20 and less than one of the others.")
}
else if (Number(num2)>=20 && (Number(num2)<Number(num1) || Number(num2) < Number(num3) )){
    console.log("number is greater than or equal to 20 and less than one of the others.")
    }

else if (Number(num3)>=20 && (Number(num3)<Number(num2) || Number(num3) < Number(num1) )){
    console.log("number is greater than or equal to 20 and less than one of the others.")
    }
    else {
        console.log("requirement didnt get satisfied")
    }