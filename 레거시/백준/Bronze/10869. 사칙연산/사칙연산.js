const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const first = parseInt(input[0]);
const second = parseInt(input[1]);

console.log(first + second);
console.log(first - second);
console.log(first * second);
console.log(Math.floor(first / second));
console.log(first % second);