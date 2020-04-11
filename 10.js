const prompt = require('prompt-sync')();

const num1 = prompt('Enter Number 1 :');
const num2 = prompt('Enter Number 2 :');
const num3 = prompt('Enter Number 3 :');


var numbers = [num1, num2, num3];
    var x= 2
    var y=1
    var z=0

while (num1<100){
    if(x>0){
        x=x-1  
    } 
    else{
        x=2
    }
    if(y>0){
        y=y-1  
    } 
    else{
        y=2
    }
    if(z>0){
        z=z-1  
    } 
    else{
        z=2
    }
    
   

    

    numbers[x]=num2
    numbers[y]=num3
    numbers[z]=num1


    console.log(numbers)
}

