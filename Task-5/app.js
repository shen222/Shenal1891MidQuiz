const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
   
    function CheckNum(input){
        if(input % 2 == 1){
            console.log("Odd Number");
        }else{
            console.log("Even number");
        }
    }

  readline.question('Please enter a number: ', input => {
    CheckNum(input);
    readline.close();
  });