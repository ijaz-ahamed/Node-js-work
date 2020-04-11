const prompt = require('prompt-sync')();

const string1 = prompt('Enter Text 1 :');
const string2 = prompt('Enter Text 2 :');
const string3 = prompt('Enter Text 3 :');

var array= [string1,string2,string3]

var x =string1.length
var y=string2.length
var z=string3.length


if (x>y){
    if (x>z){
        console.log(string1)
    }

else if  (z>y){
    if (z>x){
        console.log(string3)
    }   
}
else if  (y>x){
    if (y>z){
        console.log(string2)
    }   
}
}
