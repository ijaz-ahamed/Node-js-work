


function PasswordChecker(p1) {

    var x=0
    y=0

    

    if(p1.length>=8){
        
        if (p1.match("^[A-Za-z0-9]+$")){
            
            while(x==p1.length){
              if  (Number.isInteger(alert(p1.charAt(x)))){
                    y=y+1
                    if(y==2)
                    {
                        console.log("Password is valid:",p1)
                    }
                    else{
                        console.log("wrong password")
                    }
              }
              
              x=x+1
            }
            
        }
        else {
            console.log("wrong password")
        }
    }
    else {
        console.log("wrong password")
    }
  }


  const prompt = require('prompt-sync')();

const value1 = prompt('Enter Password:');



PasswordChecker(value1)