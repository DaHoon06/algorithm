const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    isEvenOrOdd(n);
});

function isEvenOrOdd (number) {
    let message = '';
    const evenCheck = number % 2 === 0; // 짝수
    
    if (evenCheck) message = `${number} is even`;
    else message = `${number} is odd`;
    
    console.log(message);
}