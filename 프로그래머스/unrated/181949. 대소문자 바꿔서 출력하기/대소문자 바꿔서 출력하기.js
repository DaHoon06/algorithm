const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    function isUpperCaseCheck(str) {
        return str === str.toUpperCase();
    }
    
    
    let result ='';
   
    for (let i = 0; i < str.length; i++) {
        const isUpperCase = isUpperCaseCheck(str[i]);
        if (isUpperCase) result += str[i].toLowerCase();
        else result += str[i].toUpperCase();
    }
    console.log(result);  
});