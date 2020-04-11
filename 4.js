const prompt = require('prompt-sync')();
  

    const year = prompt(`Input the Year : `);
    const y2 = Number(year)

    if (y2%4==0){
        if (y2%100==0){
            if (y2%400==0){  
        console.log("Leap Year")
           }
           else {
            console.log("Not a leap year")
           }
        }
        else {
        console.log("Leap Year")
        }
    }
    else{
        console.log("Not a leap year")
    }

    