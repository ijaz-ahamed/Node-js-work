const prompt = require('prompt-sync')();
  
  
    const num = prompt(`Guess The Number : `);
    const y2 = Number(num)
    var x = Math.random(10)

    if (y2==x){
        console.log("Good Work")
    }
    else{
        console.log("Not matched")
    }


 