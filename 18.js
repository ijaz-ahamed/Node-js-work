const prompt = require('prompt-sync')();

const value1 = prompt('Enter Value 1 :');
const value2 = prompt('Enter Value 2 :');
const value3 = prompt('Enter Value 3 :');




var array = [value1, value2, value3];

var x= 0





while (x==array.length){
if(value1==value2){
    if(value1!=value3){
    console.log(value3)
    }
    else if (value2==value3){
        if(value1!=value3){
            console.log(value1)
            }
    }
    else if (value3==value1){
        if(value2!=value3){
            console.log(value2)
            }
    }
}
x=x+1

}